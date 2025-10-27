import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react";
import { CartProvider, useCart } from "@/components/cart-provider";
import type { Product } from "@/data/products";
import { aromaOptions } from "@/data/site";

const baseProduct: Product = {
  id: "test-product",
  slug: "test-product",
  nombre: "Vela de prueba",
  categoria: "flores",
  descripcionCorta: "Descripción corta",
  descripcionLarga: "Descripción larga",
  medidas: { altoCm: 6, anchoCm: 5 },
  precioBase: 10,
  extras: [
    { nombre: "Base de madera", precio: 2 },
    { nombre: "Tarjeta", precio: 1 },
  ],
  personalizable: true,
  aromasDisponibles: [aromaOptions[0]!, aromaOptions[1]!],
  coloresDisponibles: ["Negro", "Blanco"],
  imagenes: ["/images/products/placeholder.jpg"],
  tags: ["top ventas"],
  estado: "activo",
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe("CartProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("adds a new item with extras and updates subtotal", async () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({
        product: baseProduct,
        quantity: 2,
        aroma: aromaOptions[0],
        color: "Negro",
        extras: baseProduct.extras?.slice(0, 1),
      });
    });

    await waitFor(() => {
      expect(result.current.items).toHaveLength(1);
    });

    const item = result.current.items[0]!;
    expect(item.quantity).toBe(2);
    expect(item.extras).toHaveLength(1);
    expect(result.current.subtotal).toBeCloseTo((10 + 2) * 2);
  });

  it("merges identical items and caps quantity at 99", async () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({ product: baseProduct, quantity: 60 });
      result.current.addItem({ product: baseProduct, quantity: 50 });
    });

    await waitFor(() => {
      expect(result.current.items[0]?.quantity).toBe(99);
    });
  });

  it("persists updates to localStorage", async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem({ product: baseProduct, quantity: 1 });
    });

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith(
        "vela-cart",
        expect.stringContaining('"test-product"'),
      );
    });

    setItemSpy.mockRestore();
  });
});

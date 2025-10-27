"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Product, ProductExtra } from "@/data/products";

export type CartItem = {
  id: string;
  productId: string;
  slug: string;
  nombre: string;
  precioBase: number;
  quantity: number;
  image: string;
  aroma?: string;
  color?: string;
  extras: ProductExtra[];
};

type AddItemInput = {
  product: Product;
  quantity: number;
  aroma?: string;
  color?: string;
  extras?: ProductExtra[];
};

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  addItem: (input: AddItemInput) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "vela-cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

const buildItemId = (
  slug: string,
  aroma?: string,
  color?: string,
  extras: ProductExtra[] = [],
) => {
  const extrasKey = extras
    .map((extra) => extra.nombre)
    .sort()
    .join("|");
  return `${slug}__${aroma ?? "base"}__${color ?? "base"}__${extrasKey}`;
};

const parseStoredItems = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (error) {
    console.error("No fue posible recuperar el carrito", error);
  }
  return [];
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(parseStoredItems());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const addItem = useCallback(({ product, quantity, aroma, color, extras }: AddItemInput) => {
    if (quantity <= 0) return;
    const selectedExtras = extras ?? [];
    const id = buildItemId(product.slug, aroma, color, selectedExtras);

    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
            : item,
        );
      }

      const image = product.imagenes?.[0] ?? "/images/products/placeholder.jpg";

      const newItem: CartItem = {
        id,
        productId: product.id,
        slug: product.slug,
        nombre: product.nombre,
        precioBase: product.precioBase,
        quantity,
        image,
        aroma,
        color,
        extras: selectedExtras,
      };

      return [...prev, newItem];
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.min(Math.max(quantity, 1), 99) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => {
      const extrasTotal = item.extras.reduce((sum, extra) => sum + extra.precio, 0);
      return acc + (item.precioBase + extrasTotal) * item.quantity;
    }, 0);
  }, [items]);

  const value: CartContextValue = {
    items,
    subtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}

import React, { type ReactNode } from "react";
import { renderHook, act, waitFor } from "@testing-library/react";
import { ThemeProvider, useTheme } from "@/components/theme-provider";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe("ThemeProvider", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    window.localStorage.clear();
  });

  it("respects stored theme preference on mount", async () => {
    window.localStorage.setItem("vela-theme", "dark");

    const { result } = renderHook(() => useTheme(), { wrapper });

    await waitFor(() => {
      expect(result.current.theme).toBe("dark");
    });

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles theme and persists the new value", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    await waitFor(() => {
      expect(result.current.theme).toBe("light");
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");
    expect(window.localStorage.getItem("vela-theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("uses prefers-color-scheme when no stored theme exists", async () => {
    const matchMediaMock = vi.fn().mockReturnValue({
      matches: true,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    window.matchMedia = matchMediaMock;

    const { result } = renderHook(() => useTheme(), { wrapper });

    await waitFor(() => {
      expect(result.current.theme).toBe("dark");
    });

    expect(matchMediaMock).toHaveBeenCalled();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});

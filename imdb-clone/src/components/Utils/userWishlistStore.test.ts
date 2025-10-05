// src/store/useWishlistStore.test.ts
import { renderHook, act } from "@testing-library/react";
import useWishlistStore from "./useWishListStore";
import { MovieType } from "../../services/types/movietypes";

// Mock movie data for testing
const mockMovie1: MovieType = {
  imdbID: "tt1375666",
  Title: "Inception",
  Year: "2010",
  Type: "movie",
  Poster: "https://example.com/inception.jpg",
};

const mockMovie2: MovieType = {
  imdbID: "tt0816692",
  Title: "Interstellar",
  Year: "2014",
  Type: "movie",
  Poster: "https://example.com/interstellar.jpg",
};

// describe: Groups related tests together
describe("useWishlistStore", () => {
  // beforeEach: Runs before EACH test to reset the store
  // This ensures each test starts with a clean, empty wishlist
  beforeEach(() => {
    const { result } = renderHook(() => useWishlistStore());
    act(() => {
      result.current.clearCart();
    });
  });

  // test: Individual test case
  test("should start with empty items", () => {
    const { result } = renderHook(() => useWishlistStore());

    expect(result.current.items).toEqual([]);
  });

  test("should add item to wishlist", () => {
    const { result } = renderHook(() => useWishlistStore());

    act(() => {
      result.current.addItem(mockMovie1);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual(mockMovie1);
  });

  test("should remove item by imdbID", () => {
    const { result } = renderHook(() => useWishlistStore());

    act(() => {
      result.current.addItem(mockMovie1);
      result.current.addItem(mockMovie2);
    });

    act(() => {
      result.current.removeItemById("tt1375666");
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual(mockMovie2);
  });

  test("should clear all items", () => {
    const { result } = renderHook(() => useWishlistStore());

    act(() => {
      result.current.addItem(mockMovie1);
      result.current.addItem(mockMovie2);
    });

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items).toEqual([]);
  });
});

import { create } from "zustand";
import { MovieType } from "../../services/types/movietypes";

interface WishListStore{
  items: MovieType[];
  addItem : (item:MovieType)=>void;
  removeItemById : (imdbID:string)=>void;
  clearCart:()=>void;
}
const useWishlistStore = create<WishListStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  clearCart: () =>
    set({
      items: [],
    }),

  removeItemById: (imdbID) =>
    set((state) => ({
      items: state.items.filter((item) => item.imdbID !== imdbID),
    })),
}));


export default useWishlistStore;
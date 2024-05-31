import { atom, selector } from 'recoil';

export const cartAtom = atom({
  key: 'cartAtom',
  default: [],
});

export const cartCountSelector = selector({
  key: 'cartCountSelector',
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    const getCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return getCartCount;
  },
});

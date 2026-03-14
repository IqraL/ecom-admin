import type { Product } from "../SharedTypes";


export const dummyProduct: Product = {
  id: "nv-tee-001",
  name: "North Vale Essential Tee",
  tag: "t-shirt",
  description: "A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.",
  coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
  position: 1,
  meta: [
    {
      stock: 120,
      size: "S",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
    {
      stock: 80,
      size: "M",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: true,
      discountedPrice: 28,
    },
    {
      stock: 65,
      size: "L",
      color: "White",
      imgs: [
        "/products/northvale-tee-white-front.jpg",
        "/products/northvale-tee-white-back.jpg",
        "/products/northvale-tee-white-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
  ],
};

export const dummyProductTwo: Product = {
  id: "nv-tee-001",
  name: "North Vale Essential Tee",
  tag: "t-shirt",
  description: "A premium cotton everyday tee designed for comfort",
  coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
  position: 1,
  meta: [
    {
      stock: 120,
      size: "S",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
    {
      stock: 80,
      size: "M",
      color: "Black",
      imgs: [
        "/products/northvale-tee-black-front.jpg",
        "/products/northvale-tee-black-back.jpg",
        "/products/northvale-tee-black-detail.jpg",
      ],
      price: 35,
      discounted: true,
      discountedPrice: 28,
    },
    {
      stock: 65,
      size: "L",
      color: "White",
      imgs: [
        "/products/northvale-tee-white-front.jpg",
        "/products/northvale-tee-white-back.jpg",
        "/products/northvale-tee-white-detail.jpg",
      ],
      price: 35,
      discounted: false,
    },
  ],
};

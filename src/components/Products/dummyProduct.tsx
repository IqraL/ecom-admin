import type { Product } from "../../SharedTypes";


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


export const dummyProducts: Product[] = [
  {
    id: "p3",
    name: "North Vale Heavy Hoodie",
    tag: "hoodie",
    description:
      "A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit. A premium cotton everyday tee designed for comfort and durability. Minimal North Vale aesthetic with a relaxed fit.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 3,
    meta: [
      {
        stock: 60,
        size: "M",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 75,
        discounted: false,
      },
      {
        stock: 45,
        size: "L",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 75,
        discounted: true,
        discountedPrice: 65,
      },
    ],
  },
  {
    id: "p4",
    name: "North Vale Essential Hoodie",
    tag: "hoodie",
    description: "Comfort hoodie with minimal design.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 4,
    meta: [
      {
        stock: 70,
        size: "M",
        color: "Grey",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 72,
        discounted: false,
      },
      {
        stock: 50,
        size: "XL",
        color: "Grey",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 72,
        discounted: true,
        discountedPrice: 60,
      },
    ],
  },
  {
    id: "p5",
    name: "North Vale Utility Jacket",
    tag: "jacket",
    description: "Urban utility jacket built for durability.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 5,
    meta: [
      {
        stock: 40,
        size: "M",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 140,
        discounted: false,
      },
      {
        stock: 35,
        size: "L",
        color: "Olive",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 140,
        discounted: true,
        discountedPrice: 120,
      },
    ],
  },
  {
    id: "p6",
    name: "North Vale Windbreaker",
    tag: "jacket",
    description: "Lightweight windbreaker for active wear.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 6,
    meta: [
      {
        stock: 55,
        size: "S",
        color: "Navy",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 110,
        discounted: false,
      },
      {
        stock: 50,
        size: "M",
        color: "Navy",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 110,
        discounted: true,
        discountedPrice: 95,
      },
    ],
  },
  {
    id: "p7",
    name: "North Vale Logo Cap",
    tag: "hat",
    description: "Classic embroidered cap.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 7,
    meta: [
      {
        stock: 200,
        size: "One Size",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 30,
        discounted: false,
      },
      {
        stock: 150,
        size: "One Size",
        color: "White",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 30,
        discounted: true,
        discountedPrice: 25,
      },
    ],
  },
  {
    id: "p8",
    name: "North Vale Minimal Cap",
    tag: "hat",
    description: "Minimal streetwear cap.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 8,
    meta: [
      {
        stock: 180,
        size: "One Size",
        color: "Grey",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 28,
        discounted: false,
      },
    ],
  },
  {
    id: "p9",
    name: "North Vale Crew Sweatshirt",
    tag: "sweatshirt",
    description: "Soft fleece sweatshirt.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 9,
    meta: [
      {
        stock: 65,
        size: "M",
        color: "Grey",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 65,
        discounted: false,
      },
      {
        stock: 50,
        size: "L",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 65,
        discounted: true,
        discountedPrice: 55,
      },
    ],
  },
  {
    id: "p10",
    name: "North Vale Premium Sweatshirt",
    tag: "sweatshirt",
    description: "Heavyweight crewneck.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 10,
    meta: [
      {
        stock: 55,
        size: "L",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 70,
        discounted: false,
      },
    ],
  },
  {
    id: "p11",
    name: "North Vale Athletic Shorts",
    tag: "shorts",
    description: "Lightweight athletic shorts.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 11,
    meta: [
      {
        stock: 95,
        size: "M",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 40,
        discounted: true,
        discountedPrice: 32,
      },
      {
        stock: 80,
        size: "L",
        color: "Black",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 40,
        discounted: false,
      },
    ],
  },
  {
    id: "p12",
    name: "North Vale Relaxed Joggers",
    tag: "pants",
    description: "Comfort joggers for everyday wear.",
    coverImg: "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
    position: 12,
    meta: [
      {
        stock: 70,
        size: "M",
        color: "Grey",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 60,
        discounted: false,
      },
      {
        stock: 50,
        size: "L",
        color: "Grey",
        imgs: [
          "https://m.media-amazon.com/images/I/51FofTl6mEL._AC_SX679_.jpg",
        ],
        price: 60,
        discounted: true,
        discountedPrice: 50,
      },
    ],
  },
];
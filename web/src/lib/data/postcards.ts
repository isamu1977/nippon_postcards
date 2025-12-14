export type Postcard = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
};

export const postcards: Postcard[] = [
  {
    id: "japanese-castles",
    title: "Japanese Castles",
    description: "Postcards featuring historic castles across Japan.",
    price: 15.0,
    category: "Castles",
    image: "/lib/assets/postcard-castle.jpg"
  },
  {
    id: "world-heritage",
    title: "Japan World Heritage Sites",
    description: "Scenes from UNESCO World Heritage sites in Japan.",
    price: 15.0,
    category: "Heritage",
    image: "/lib/assets/postcard-heritage.jpg"
  },
  {
    id: "mount-fuji",
    title: "Mount Fuji",
    description: "Iconic views of Mount Fuji in different seasons and moods.",
    price: 15.0,
    category: "Nature",
    image: "/lib/assets/postcard-fuji.jpg"
  }
];

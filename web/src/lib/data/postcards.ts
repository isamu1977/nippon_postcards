export type Postcard = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;     // public URL from /static (e.g. "/images/...")
  imageAlt?: string;
};

export const postcards: Postcard[] = [
  {
    id: "japanese-castles",
    title: "Japanese Castles",
    description: "Postcards featuring historic castles across Japan.",
    price: 15.0,
    category: "Castles",
    image: "/images/himeji-castle.png",
    imageAlt: "Himeji Castle postcard design"
  },
  {
    id: "world-heritage",
    title: "Japan World Heritage Sites",
    description: "Scenes from UNESCO World Heritage sites in Japan.",
    price: 15.0,
    category: "Heritage",
    image: "/images/itsukushima-jinja.png",
    imageAlt: "Itsukushima Shrine (floating torii) postcard design"
  },
  {
    id: "mount-fuji",
    title: "Mount Fuji",
    description: "Iconic views of Mount Fuji in different seasons and moods.",
    price: 15.0,
    category: "Nature",
    image: "/images/mount-fuji.png",
    imageAlt: "Mount Fuji postcard design"
  }
];
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: Image;
  stock: number;
  slug: string;
};

export type Image = {
  id: number;
  imageSrc: string;
  imageAlt: string;
};

export type Category = {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: Image;
};

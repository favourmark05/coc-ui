export type FeaturedImage = {
    url: string;
  };
  
export type Post = {
    author: string;
    slug: string;
    id: number;
    title: string;
    featuredImage: FeaturedImage;
    publishedAt: string;
    category: string;
  };
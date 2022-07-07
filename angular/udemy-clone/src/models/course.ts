export interface Link{
  href: string;
  title: string;
}

export interface ICourse {
  id: number;
  categoryId: string;
  img: string;
  title: string;
  courseAuthor: string;
  courseRating: number | string;
  ratingNumbers: number | string;
  coursePrice: number | string;
  currentPrice: number | string;
  tag?: string;
  tagColor?: string;
  description?: [];
  literature?: Link[];
}

export enum COURSE_CATEGORIES {
  CURRENT = 'current',
  ENROLLED = 'enrolled',
  FEATURED = 'featured',
  STUDENTS = 'students',
  TOP = 'top',
  WISHLIST = 'wishlist'
}

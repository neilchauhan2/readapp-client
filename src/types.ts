export interface Post {
  identifier: string;
  title: string;
  body?: string;
  slug: string;
  subName: string;
  user: any;
  createdAt: string;
  updatedAt: string;
  voteScore: number;
  commentCount: number;
}

export interface User {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

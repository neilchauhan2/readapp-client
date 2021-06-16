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

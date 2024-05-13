export interface CreatePostTypes {
  ownerName: string;
  phoneNumber: string;
  password: string;
  title: string;
  content: string;
  isLocked: boolean;
  institution?: string;
  email?: string;
}

export interface DetailPostTypes {
  isLocked?: boolean;
  visited?: boolean;
  id: number;
  title: string;
  content: string;
  ownerName: string;
  isAnswered: boolean;
  answer: string;
}

export interface PostsTypes {
  id: number;
  title: string;
  ownerName: string;
  createdAt: string;
  isLocked: boolean;
  answered: boolean;
  idx?: number;
}

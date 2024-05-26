export interface CreatePostTypes {
  ownerName: string;
  title: string;
  content: string;
  password?: string;
  phoneNumber?: string;
  isLocked?: boolean;
  institution?: string;
  email?: string;
  visited?: boolean;
  id?: number;
  isAnswered?: boolean;
  answer?: string;
}

export interface DetailPostTypes {
  isLocked?: boolean;
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

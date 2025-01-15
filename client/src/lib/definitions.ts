export interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  cover: string;
  published_at: string;
  tags: string;
  category: Category;
  author: Author;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  visit_count: number;
  created_at: string;
  updated_at: string;
}

export interface Author {
  id: number;
  password: string;
  last_login: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  groups: any[];
  user_permissions: any[];
}




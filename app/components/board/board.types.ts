export interface ICard {
  id: string;
  title: string;
  description: string;
  status: string;
  state: string;
  tags: string[];
  priority: string;
  created: string;
  tasks: ITask[];
  comments: IComment[];
}

export interface ITask {
  id: string;
  title: string;
}

export interface IComment {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

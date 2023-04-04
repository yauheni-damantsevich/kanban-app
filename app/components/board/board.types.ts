export interface ICard extends ITagData {
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

export interface ITagData {
  tagData: ITag[];
}

export interface ITag {
  id: number;
  title: string;
  color: string;
}

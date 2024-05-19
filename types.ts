export interface IComment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
}

export interface IUser {
  name: string;
  email: string;
  comments: IComment[];
}

export interface IAddCommentForm {
  text: string;
  author: string;
}

export function validateForm(form: IAddCommentForm): boolean {
  return form.text.trim() !== "" && form.author.trim() !== "";
}

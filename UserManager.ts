export interface User {
  name: string;
  email: string;
  comments: Comment[];
}

export class UserManager {
  private users: User[] = [];

  addUser(name: string, email: string): void {
    const newUser: User = { name, email, comments: [] };
    this.users.push(newUser);
  }

  addCommentToUser(userId: string, comment: Comment): void {
    const user = this.users.find((user) => user.email === userId);
    if (user) {
      user.comments.push(comment);
    }
  }
}

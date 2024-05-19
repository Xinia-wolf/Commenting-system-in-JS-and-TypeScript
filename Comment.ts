class Comment {
    id: string;
    text: string;
    author: string;
    timestamp: Date;
  
    constructor(id: string, text: string, author: string) {
      this.id = id;
      this.text = text;
      this.author = author;
      this.timestamp = new Date();
    }
  
    static createComment(id: string, text: string, author: string): Comment {
      return new Comment(id, text, author);
    }
  }

  export default Comment;
  
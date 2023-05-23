export class Post {
    //UserId: number | null;
    id: number;
    title: string | null;
    contentText: string | null;
    author: string | null;
    insertDate: string;
    updateDate: string;

    constructor(id: number, content: string, date: string, author: string, title: string) {
        //this.UserId = userId;
        this.id = id;
        this.contentText = content;
        this.author = author;
        this.insertDate = date;
        this.updateDate = date;
        this.title = title
    }    
}


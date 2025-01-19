export class Post {
    //UserId: number | null;
    id: number;
    title: string | null;
    content: string | null;
    redactorId: number;
    insertDate: string;
    updateDate: string;
    author: string | null;

    constructor(id: number, content: string, date: string, redactorId: number, title: string, author: string) {
        //this.UserId = userId;
        this.id = id;
        this.content = content;
        this.redactorId = redactorId;
        this.insertDate = date;
        this.updateDate = date;
        this.title = title
        this.author = author
    }    
}


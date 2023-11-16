export class Post {
    //UserId: number | null;
    id: number;
    title: string | null;
    content: string | null;
    authorId: number;
    insertDate: string;
    updateDate: string;

    constructor(id: number, content: string, date: string, authorId: number, title: string) {
        //this.UserId = userId;
        this.id = id;
        this.content = content;
        this.authorId = authorId;
        this.insertDate = date;
        this.updateDate = date;
        this.title = title
    }    
}


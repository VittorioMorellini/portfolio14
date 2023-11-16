export class Post {
    //UserId: number | null;
    id: number;
    title: string | null;
    content: string | null;
    redactorId: number;
    insertDate: string;
    updateDate: string;

    constructor(id: number, content: string, date: string, redactorId: number, title: string) {
        //this.UserId = userId;
        this.id = id;
        this.content = content;
        this.redactorId = redactorId;
        this.insertDate = date;
        this.updateDate = date;
        this.title = title
    }    
}


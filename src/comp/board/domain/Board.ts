import Comment from './Comment';

class Board {
    id : string;
    title : string;
    content : string;
    time : number;
    writerEmail : string;
    comments : Comment[];


    constructor(id: string, title: string, content: string, time: number, writerEmail: string, comments: Comment[]) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.time = time;
        this.writerEmail = writerEmail;
        this.comments = comments;
    }
}

export default Board;
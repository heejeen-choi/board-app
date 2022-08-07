class Comment {
    content: string;
    time: number;
    writeEmail: string;


    constructor(content: string, time: number, writeEmail: string) {
        this.content = content;
        this.time = time;
        this.writeEmail = writeEmail;
    }
}

export default Comment;
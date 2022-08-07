import {Board, Comment} from './domain';


const BOARD_LIST: Board[] = [
    new Board('1', 'title_1', 'content_1', 1659762117000, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('2', 'title_2', 'content_2', 1659762117000+60, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('3', 'title_3', 'content_3', 1659762117000+60*2, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('4', 'title_4', 'content_4', 1659762117000+60*3, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('5', 'title_5', 'content_5', 1659762117000+60*4, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('6', 'title_6', 'content_6', 1659762117000+60*5, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('7', 'title_7', 'content_7', 1659762117000+60*6, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('8', 'title_8', 'content_8', 1659762117000+60*7, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('9', 'title_9', 'content_9', 1659762117000+60*8, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ]),
    new Board('10', 'title_10', 'content_10', 1659762117000+60*9, 'foo@gmail.com', [
        new Comment('comment_1', 1659762117000+1000, 'bar@gmail.com'),
        new Comment('comment_2', 1659762117000+10000, 'bar@gmail.com'),
    ])
];

export default BOARD_LIST;

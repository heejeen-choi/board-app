import React, {useEffect, useState} from 'react';
import {Board} from '../domain'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Comment from "../domain/Comment";
import dayjs from "dayjs";
import {BOARD_LIST} from "~/comp";

interface Props {
    onClickBoard?: (e: React.MouseEvent, boardId: string) => void;
}

const BoardListContainer = (props: Props) => {

    const {onClickBoard} = props;

    const [boards, setBoards] = useState<Board[]>([]);

    useEffect(() => {
        //request to backend for get board
        setBoards(BOARD_LIST);
    }, []);

    const _onClickBoard = (e: React.MouseEvent, boardId: string) => {
        console.log('LOGER....', boardId)
        if (onClickBoard) {
            onClickBoard(e, boardId);
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" onClick={() => alert('table click...')}>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">title</TableCell>
                        <TableCell align="right">time</TableCell>
                        <TableCell align="right">writeEmail</TableCell>
                        <TableCell align="right">comments</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {boards.map((board) => (
                        <TableRow
                            onClick={e => _onClickBoard(e, board.id)}
                            key={board.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {board.id}
                            </TableCell>
                            <TableCell align="right">{board.title}</TableCell>
                            <TableCell align="right">{dayjs.unix(board.time/1000).format('YY/M/D HH:mm')}</TableCell>
                            <TableCell align="right">{board.writerEmail}</TableCell>
                            <TableCell align="right">{board.comments.length}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BoardListContainer;
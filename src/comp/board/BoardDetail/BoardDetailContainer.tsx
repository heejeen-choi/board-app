import React, {ReactNode, useEffect, useState} from 'react';
import {Board, BOARD_LIST} from "~/comp";
import { styled } from '@mui/material/styles';
import {Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import dayjs from "dayjs";

interface Props {
    boardId: string;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const BoardDetailContainer = (props: Props) => {

    const { boardId } = props;

    const [board, setBoard] = useState<Board>();

    useEffect(() => {
        //request to backend for get board by boardId
        const target = BOARD_LIST.find(board => board.id === boardId);
        if (target) {
            setBoard(target);
        }
    }, [boardId]);


    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Item>id</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>title</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>time</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>{board ? board.id : ''}</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>{board ? board.title: ''}</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>{board ? dayjs.unix(board.time/1000).format('YY/M/D HH:mm'): ''}</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>tme</Item>
                </Grid>
                ))}

            </Grid>
        </Box>
    )
}

export default BoardDetailContainer;
import React, { ReactNode, useEffect, useState } from 'react';
import { Board, BOARD_LIST } from '~/comp';
import { styled } from '@mui/material/styles';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const [updateIndex, setUpdateIndex] = useState<boolean[]>([]);


  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

  };

  const handleClickSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    saveTodo();
  };

  const saveTodo = () => {
    setTodos((prevState) => {
      return [...prevState, input];
    });
    setUpdateIndex((prevState) => {
      return [...prevState, false];
    });
    setInput('');
  };

  const handleClickUpdate = (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpdateIndex((prevState) => {
      return prevState.map((value, idx) => {
        if (index === idx) {
          return !value;
        }
        return value;
      });
    });
  };

  const handleClickDelete = (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodos((prevState) => {
      return prevState.filter((value, idx) => {
        return idx !== index;
      });
    });
    setUpdateIndex((prevState) => {
      return prevState.filter((value, idx) => {
        return idx !== index;
      });
    });
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveTodo();
    }
  };

  const handleChangeTodoIndex = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((prevState) => {
      return prevState.map((value, idx) => {
        if (index === idx) {
          return e.target.value;
        }
        return value;
      });
    });
  };

  return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Box sx={{ boxShadow: 1, bgcolor: 'text.secondary', height: 25 }}>id</Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ boxShadow: 1, bgcolor: 'text.secondary', height: 25 }}>title</Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ boxShadow: 1, bgcolor: 'text.secondary', height: 25 }}>time</Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ boxShadow: 1 }}>{board ? board.id : ''}</Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ boxShadow: 1 }}>{board ? board.title : ''}</Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ boxShadow: 1 }}>{board ? dayjs.unix(board.time / 1000).format('YY/M/D HH:mm') : ''}</Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ boxShadow: 1, height: 100 }}>{board ? board.content : ''}</Box>
                </Grid>
                <Grid item xs={10}>
                    <TextField onKeyDown={handleKeyDownInput} sx={{ height: 40, width: 500 }} id="standard-basic" placeholder="write comment...."
                               variant="standard" value={input} onChange={handleChangeTodo}/>
                    <Button onClick={handleClickSave} variant="contained">등록</Button>
                    {
                        todos.map((todo, index)=> (
                            <>
                            {updateIndex[index] ? <TextField value={todo} onChange={handleChangeTodoIndex(index)}></TextField> : <Typography>{todo}</Typography>}
                                <Button variant="outlined" size="small" onClick={handleClickUpdate(index)}>
                                    수정
                                </Button>
                                <IconButton aria-label="delete" color="primary" onClick={handleClickDelete(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
  );
};

export default BoardDetailContainer;
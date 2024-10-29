import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const TodoItem = ({ item, fetchTodoId }) => {
  return (
    <Card sx={{
      maxWidth: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 2
    }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {item?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          onClick={() => fetchTodoId(item?.id)}
          sx={{
            color: 'white',
            background: 'black',
            opacity: 0.75,
            '&:hover': {   
              opacity: 1,
              color: 'white',
              background: 'black',
            }
          }}
        >
          Show details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;

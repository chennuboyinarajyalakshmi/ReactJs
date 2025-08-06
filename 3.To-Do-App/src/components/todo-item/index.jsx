import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button
} from '@mui/material'

export default function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {
  console.log(todo)

  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: 'black',
            color: '#fff',
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "black",
              color: "#fff",
              opacity: "1"
            }
          }}
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  )
}

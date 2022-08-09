import React from 'react';
import 'App.css';
import TodoForm from "layout/components/todoForm/TodoForm";
import {Alert, Container, Typography} from "@mui/material";
import FrontRoutes from "routes/FrontRoutes"
import Navigation from "layout/components/navigation/Navigation";
import {useAppSelector} from "redux/store";

function App() {
    const {show, type, text} = useAppSelector(state => state.alert);

    return (
      <Container maxWidth="sm" className={"TodoApp__container"}>
          <Typography variant={"h2"} align={"center"}>ToDo App</Typography>
          {show && <Alert severity={type}>{text}</Alert>}
          <TodoForm/>
          <Navigation/>
          <FrontRoutes/>
      </Container>
  );
}

export default App;

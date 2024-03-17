import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import NewTaskPage from "./pages/new_task/NewTaskPage";
import "flatpickr/dist/themes/material_green.css";
import AddUserPage from "./pages/auth/AddUserPage";
import AllTasks from "./pages/AllTasks/AllTasks";
import AllUsers from "./pages/allUsers/AllUsers";
import Wallet from "./pages/Wallet/Wallet";
import NotificationPage from "./pages/home/NotificationPage";
import NotesPage from "./pages/home/NotesPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={ <LoginPage/>} />
      <Route path="/" element={ <HomePage/>} />
      <Route path="/newTask" element={ <NewTaskPage/>} />
      <Route path="/addUser" element={ <AddUserPage/>} />
      <Route path="/allTasks" element={ <AllTasks/>} />
      <Route path="/allUsers" element={ <AllUsers/>} />
      <Route path="/wallet" element={ <Wallet/>} />
      <Route path="/notifications" element={ <NotificationPage/>} />
      <Route path="/notes" element={ <NotesPage/>} />
    </Routes>
    </>
  );
}

export default App;

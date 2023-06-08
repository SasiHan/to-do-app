import LoginPage from "./page/LoginPage";
import * as React from "react";
import * as ReactDom from "react-dom/client";
import { createBrowserRouter,
        RouterProvider, } 
        from "react-router-dom";
import ErrorPage from "./page/error-page";
import AddTodo from "./page/AddTodo";
import loginstyle from "./page/LoginPage.css";
import AddTodoStyle from './page/AddTodo.css';
import Navbar from "./component/NavBar";
import "./component/NavBar.css";
const router = createBrowserRouter([{
    path:'/',
    element:<LoginPage className={loginstyle}/>,
    errorElement:<ErrorPage/>,
},

{
  path:"/addtodo",
  element:  <div className="AddContent" >
                <Navbar/>
                <AddTodo className={AddTodoStyle}/>
            </div>,
  errorElement:<ErrorPage/>,
},])

export default router;
// export default App;
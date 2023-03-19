import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import PageCourses from "./Components/Page-courses/Page-courses";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLesson from "./Components/Page-lesson/Page-lesson";

function App() {
    const router = createBrowserRouter([
        {
            path: "/AppForStudying/",
            element: <PageCourses/>
        },
        {
            path: "/course/:courseId",
            element: <PageLesson/>
        }
    ])
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;

import React, {FC, useEffect, useState} from "react";
import {ICourse} from "../../types/types";
import {fetchCourses, fetchToken} from "./fetch";
import PreviewCourses from "./Preview-Courses";
import style from "./Page-courses.module.scss"


const PageCourses: FC = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);

    useEffect(() => {
            fetchToken()
                .then((token)=> fetchCourses(token))
                .then(courses => {if(courses) setCourses(courses)});
        }, []
    )
    console.log(courses);
    let item = courses.map(crs => <PreviewCourses data={crs}/>)

    return (
        <main className={style.pageCourses}>
            <div className={style.welcomeBlock}>
                <p className={style.welcomeText}>
                    Hello and welcome to our website dedicated to self-improvement! We are glad to see everyone here who wants to improve their lives, become better, and reach new heights.
                </p>
                <p className={style.welcomeText}>
                    On our website, you will find a lot of useful materials that will help you become more successful and confident. We have collected here the most interesting and relevant articles, videos, and books on self-improvement, which will help you develop as a person and achieve your goals.
                </p>
                <p className={style.welcomeText}>
                    We believe that every person is capable of changing their life for the better if they work on themselves and their development. And we are ready to help you on this path, so that you can achieve all your dreams and goals. Welcome to our self-improvement website, where you will find everything you need for your personal growth!
                </p>
            </div>
            <div className={style.itemCourses}>
                {item}
            </div>
        </main>

    )
}

export default PageCourses;
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchLesson, fetchToken} from "../Page-courses/fetch";
import {ILessons} from "../../types/types";
import style from "./Page-lesson.module.scss"

const parseData = (data: ILessons) => {
    let lessons = data.lessons.map(value => value.title)
    let skills = data.meta?.skills?.map(value => value)
    let date = new Date (data.launchDate)
    console.log(data)
    console.log(date.getHours()+":"+ date.getMinutes()+" "+ date.getDate()+" "+date.getMonth()+" "+date.getFullYear())
    console.log("lessons = " +lessons)
    console.log("skills = " +skills)
}

const PageLesson = () => {
    let [lesson, setLesson] = useState<ILessons>(Object)
    let {courseId} = useParams()
    let [videoSrc, setVideoSrc] = useState<string>()

    useEffect(() => {
        fetchToken()
            .then(token => fetchLesson(token, courseId))
            .then(lesson => {
                if (lesson) {
                    setLesson(lesson)
                    setVideoSrc(lesson.lessons[0].link)
                    parseData(lesson)
                }
            })
    },[])

    return (
        <main className={style.pageLesson}>
            <h2 className={style.titleCourse}>{lesson.title}</h2>
            <h4>{lesson.description}</h4>
            <div>
                <h5>{lesson.rating}</h5>
            </div>
            <div>
                <video width="800px" height="600px" autoPlay controls>
                    <source src={videoSrc} type="application/x-mpegURL"/>
                </video>

            </div>
        </main>
    )
}

export default PageLesson
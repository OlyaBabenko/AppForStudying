import React from "react";
import {ICourse} from "../../types/types";
import style from "./Preview-Courses.module.scss"
import {useNavigate} from "react-router-dom";

type DataProps = {
    data: ICourse
}

const PreviewCourses = (props: DataProps) => {

    const navigate = useNavigate()
    const showLesson = () => {
        navigate(`/course/${props.data.id}`)
    }
    console.log("video = " + props.data.meta.courseVideoPreview)
    return (
        <div className={style.previewCourses} onClick={() => showLesson()}>
            <div className={style.leftBlock}>
                <img src={props.data.previewImageLink + '/cover.webp'} alt="image course" className={style.image}/>
                <div className={style.BlockRatingLessons}>
                    <div>
                        <h4>{props.data.rating}</h4>
                    </div>
                    <div>
                        <h4>{props.data.lessonsCount} lessons</h4>
                    </div>
                </div>
            </div>
            <div className={style.rightBlock}>
                <h3 className={style.tittle}>{props.data.title}</h3>
                <div>
                    <h4 className={style.skillsTittle}>Skills</h4>
                </div>
            </div>


        </div>
    )
}

export default PreviewCourses
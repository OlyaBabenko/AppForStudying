import React from "react";
import {ICourse} from "../../types/types";
import style from "./Preview-Courses.module.scss"

type DataProps = {
    data: ICourse
}
// type SkillProps = {
//     sk: string
// }
// const Skill = (props: SkillProps) => {
//     console.log(props.sk)
//     return (
//         <li>{props.sk}</li>
//     )
// }
const PreviewCourses = (props: DataProps) => {
//     let skill = props.data.meta.skills.map((sk) =>
//         console.log(sk);
//         <div>{sk}</div>
//     )
    // console.log(skill)

    return (
        <div className={style.previewCourses}>
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
                    <div>
                        <ul>
                            {/*{skill}*/}
                        </ul>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default PreviewCourses
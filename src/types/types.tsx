
export interface ICourseVideoPreview {
    link: string;
    previewImageLink: string;
}

// export interface ISkills {
//     [index: number]: string}


export interface ICourseMeta {
    courseVideoPreview: ICourseVideoPreview;
    skills?: string[];
}

export interface ICourse {
    containsLockedLessons: boolean;
    id: string;
    title: string;
    launchDate: string;
    lessonsCount: number;
    meta: ICourseMeta;
    previewImageLink: string;
    rating: number;
}

export interface ICoursesFetchResponse {
    courses: ICourse[]
}

export interface ILesson {
    id: string
    title: string
    duration: number
    status: string
    link: string
    previewImageLink: string
}
export interface ILessonElement {
    [index: number]: ILesson
}
export interface ILessons {
    id: string
    title: string
    launchDate: string
    description: string
    rating: number
    meta?: ICourseMeta
    lessons: ILesson[]
    containsLockedLessons: boolean
}

export interface ILessonFetchResponse {
    lesson: ILessons
}
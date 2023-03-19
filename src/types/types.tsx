export interface ICourseVideoPreview {
    link: string;
    previewImageLink: string;
}
export interface ICourseMeta {
    courseVideoPreview: ICourseVideoPreview;
    skills: string[];
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
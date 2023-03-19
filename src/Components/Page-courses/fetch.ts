import {ICoursesFetchResponse} from "../../types/types";

export const fetchToken = () => {
    const requestOptions = {
        method: 'GET',
        // redirect: 'follow'
    };
    return fetch("https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions", requestOptions)
        .then(response => response.json())
        .then(result => result.token)
        .catch(error => console.log('error', error));
}

export const fetchCourses = (token: string) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    return fetch("https://api.wisey.app/api/v1/core/preview-courses", requestOptions)
        .then(response => response.json())
        .then((value: ICoursesFetchResponse) => value.courses)
        .catch(error => console.log('error', error));
}

export const fetchLesson = (token:string, courseId?: string) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    return fetch("https://api.wisey.app/api/v1/core/preview-courses/"+courseId, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}
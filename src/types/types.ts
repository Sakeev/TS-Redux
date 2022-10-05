export interface ICourseCardProps {
    name: string;
    description: string;
    price: number;
    picture: string;
    type: string;
    id: number
}

export interface ICoursesProps {
    course: any[]
}


export enum CourseActionTypes {
    FETCH_COURSES_CREATE= 'FETCH_COURSES_CREATE',
    FETCH_COURSES_SUCCESS= 'FETCH_COURSES_SUCCESS',
    FETCH_COURSES_ERROR= 'FETCH_COURSES_ERROR',
    FETCH_COURSES_UPDATE = 'FETCH_COURSES_UPDATE',
    FETCH_COURSES_DETAILS = 'FETCH_COURSES_DETAILS'
}

interface FetchCourseAction {
    type: CourseActionTypes.FETCH_COURSES_CREATE;
    data: ICourseCardProps;
}
interface FetchCourseSuccessAction {
    type: CourseActionTypes.FETCH_COURSES_SUCCESS;
    payload: any[];
}
interface FetchCourseErrorAction {
    type: CourseActionTypes.FETCH_COURSES_ERROR;
    payload: string;
}
interface FetchCourseUpdateAction {
    type: CourseActionTypes.FETCH_COURSES_UPDATE;
    payload: number;
}
interface FetchCourseDetailsAction {
    type: CourseActionTypes.FETCH_COURSES_DETAILS;
    payload: number;
}


export type CourseAction =
    FetchCourseAction
    | FetchCourseErrorAction
    | FetchCourseSuccessAction
    | FetchCourseUpdateAction
    | FetchCourseDetailsAction

export const JSON_API = 'http://localhost:8001/courses'

export enum CrudActionTypes {
    GET_COURSE = "ADD_COURSE",
    ADD_COURSE = "ADD_COURSE",
    EDIT_COURSE = "ADD_COURSE",
    DELETE_COURSE = "ADD_COURSE",

}

export interface GetCourseAction {
    type: CrudActionTypes.GET_COURSE;
    payload: any
}


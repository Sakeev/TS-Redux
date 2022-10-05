import axios from "axios";
import { Dispatch } from "redux";
import { useActions } from "../../hooks/useAction";
import { JSON_API } from "../../types/crud";
import { CourseAction, CourseActionTypes, ICourseCardProps } from "../../types/types";

export interface User {
  course: ICourseCardProps[]
}

export const getCourses = () => {
  return async (dispatch: Dispatch<CourseAction>) => {
    try {
      // dispatch({type: CourseActionTypes.FETCH_COURSES})
      const response = await axios.get(JSON_API)
      console.log(response);
      dispatch({type: CourseActionTypes.FETCH_COURSES_SUCCESS, payload: response.data})
        
    } catch (e) {
        dispatch({
            type: CourseActionTypes.FETCH_COURSES_ERROR,
            payload: 'Произошла ошибка при загрузке'
        })
    }
}
}

export const getCoursesDetails = (id: number) => {
  return async (dispatch: Dispatch<CourseAction>) => {
    try {
      const { data } = await axios(`${JSON_API}/${id}`);
    dispatch({
      type: CourseActionTypes.FETCH_COURSES_DETAILS,
      payload: data,
    });
        
    } catch (e) {
        dispatch({
            type: CourseActionTypes.FETCH_COURSES_ERROR,
            payload: 'Произошла ошибка при загрузке'
        })
    }
}
}



export const addCourse = (course: any) => {
  return async () => {
      await axios.post(JSON_API, course)  
}
}


export const deleteCourse = (id: number) => {
  return async () => {
      await axios.delete(`${JSON_API}/${id}`)
      getCourses()
}
}

export const updateCourse = (course: any) => {
  return async () => {
    await axios.patch(`${JSON_API}/${course.id}`, course);
    getCourses();
}
}

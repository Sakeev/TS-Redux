
import { Coronavirus } from "@mui/icons-material";
import { CourseAction, CourseActionTypes, ICourseCardProps, ICoursesProps } from "../../types/types";

const INIT_STATE: ICoursesProps = {
  course: []
}

export const crudReducer = (state = INIT_STATE, action: CourseAction):ICoursesProps => {
  console.log(action);
  switch (action.type) {


    case CourseActionTypes.FETCH_COURSES_SUCCESS:
      return { ...state, course: action.payload };

      case CourseActionTypes.FETCH_COURSES_CREATE:
      return { ...state, course: [...state.course, action.data]};



    default:
      return state;
  }
};



import { Card } from '@mui/material';
import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getCourses, User } from '../redux/actions/courseAction';
import { JSON_API } from '../types/crud';
import CourseCard from './CourseCard';


const CoursesPage: FC = () =>  {

    
    const {course} = useTypedSelector(state => state.crudReducer)

    const {getCourses} = useActions()
    
    

    useEffect(() => {
        getCourses()
    }, []);
    
    return (
        <div>
              {course.map((item:any) => (
           <CourseCard item={item} key={item.id} />
         ))}
              
        </div>
    );
};

export default CoursesPage;
import React from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CoursesPage from './components/CoursesPage';
import AddCourse from './components/AddCourse';
// import { ADMIN } from '../helpers/consts';
import MainPage from './components/MainPage';


const MainRoutes = () => {
//   const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <MainPage />,
      id: 1,
    },
    {
      link: '/add',
      element: <AddCourse />,
      id: 2,
    },
    {
      link: '/about',
      element: <AboutUs />,
      id: 3,
    },
    {
      link: '/courses',
      element: <CoursesPage />,
      id: 4,
    },
    // {
    //   link: '/courses/:id',
    //   element: <CourseDetailsPage />,
    //   id: 5,
    // },
    {
      link: '/contacts',
      element: <ContactUs />,
      id: 6,
    },
    // {
    //   link: '/edit/:id',
    //   element: <EditCourse />,
    //   id: 5,
    // },
    // {
    //   link: '*',
    //   element: <NotFoundPage />,
    //   id: 8,
    // },
  ];

//   const PRIVATE_ROUTES = [
//     {
//       link: '/admin',
//       element: <AdminPage />,
//       id: 1,
//     },
//     {
//       link: '/edit/:id',
//       element: <EditCoursePage />,
//       id: 2,
//     },
//   ];

  return (
    <>
      <Routes>
      {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      {/* {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null} */}
      </Routes>
    </>
  );
};

export default MainRoutes;

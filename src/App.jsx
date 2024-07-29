import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CreateCourse from './components/courses/CreateCourse'
import AllCourses from './components/courses/AllCourses'
import CourseDetails from './components/courses/CourseDetails'
import EditCourse from './components/courses/EditCourse';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              index: true,
              element: <AllCourses />
            },
            {
              path: "create-course",
              element: <CreateCourse />
            },
            {
              path: "*",
              element: <NotFound />
            },
            {
              path: ":id",
              element: <CourseDetails />
            },
            {
              path: "edit/:id",
              element: <EditCourse />
            }
          ]
        },
        
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  )
}

export default App
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CreateCourse from './components/courses/CreateCourse'
import AllCourses from './components/courses/AllCourses'
import CourseDetails from './components/courses/CourseDetails'
import EditCourse from './components/courses/EditCourse';
import AllUsers from './components/users/AllUsers';
import SingleUser from './components/users/SingleUser'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrivateRoute from './helpers/PrivateRoute';
import PublicRouter from './helpers/PublicRouter'

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
							element:
								(
									<PrivateRoute>
										<CreateCourse />
									</PrivateRoute>
								)
						},
						{
							path: "*",
							element: <NotFound />
						},
						{
							path: ":id",
								element:
									(
										<PrivateRoute>
											<CourseDetails />
										</PrivateRoute>
									)
						},
						{
							path: "edit/:id",
								element: 
									(
										<PrivateRoute>
											<EditCourse />
										</PrivateRoute>
									)
						},
						{
							path: "users",
								element:
									(
										<PrivateRoute>
											<AllUsers />
										</PrivateRoute>
									)
						},
						{
							path: "/users/:id",
								element:
									(
										<PrivateRoute>
											<SingleUser />
										</PrivateRoute>
									)
						}
					]
				},
				{
					path: "/signup",
					element:
						(
							<PublicRouter>
								<Register />
							</PublicRouter>
						)
				},
				{
					path: "/login",
						element:
							(
								<PublicRouter>
									<Login />
								</PublicRouter>
							)
				}

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

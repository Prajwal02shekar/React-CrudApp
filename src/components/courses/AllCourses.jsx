import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../../pages/spinner/Spinner'
import Course from './Course'
import courseServices from '../../services/CourseService'
import SearchCourses from '../searchFilter/SearchCourses'

const AllCourses = () => {
	let [state, setState] = useState(null)
	let[searchTerm,setSearchTerm]=useState("")
		let fetchCourses = async () => {
			let data = await courseServices.fetchService();
			setState(data);
		};

		let handleSearch = term => {
			setSearchTerm(term);
		};

		useEffect(() => {
			fetchCourses();
		}, []);

	let filteredCourse = state?.filter(val => {
		if (searchTerm === "") {
			return val
		}
		else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
			return val
		}

	}).map(course => (
		<Course key={course.id} {...course} />
	))
	return (
		<> 
			<SearchCourses handleSeach={handleSearch} />
			<h2>All Courses</h2>
			<div className="courses">
				{
					state === null ? <Spinner /> : (filteredCourse)
				}
			</div>
		</>
	)
}

export default AllCourses

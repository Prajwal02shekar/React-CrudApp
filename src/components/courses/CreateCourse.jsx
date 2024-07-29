import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import courseServices from '../../services/CourseService'
import { toast } from 'react-hot-toast';

const CreateCourse = () => {
	let navigate = useNavigate()
	let [state, setState] = useState({
		title: "",
		trainer: "",
		description: "",
		createdAt: "",
		updatedAt: "",
		isLoadng: false,
    })
  
	let { title, trainer, isLoadng, description, createdAt, updatedAt } = state;
	let handleChange = e => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value })
	}
	let handleSubmit = async e => {
		e.preventDefault();
		try {
			let payload = { title, trainer, description, createdAt };
            // let { data } = await axios.post("http://localhost:5000/courses", payload);
            courseServices.createService(payload);
            toast.success('successfully course has been created...')
			navigate("/")
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<section className='content'>
			<main className='authBlock'>
				<h2>Create Course</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" name="title" value={title} onChange={handleChange} required placeholder='Enter Title' />
					</div>

					<div className="form-group">
						<label htmlFor="trainer">Trainer Name</label>
						<input type="text" name="trainer" value={trainer} onChange={handleChange} required placeholder='Enter trainer name' />
					</div>

					<div className="form-group desc-block">
						<label htmlFor="description">Description</label>
						<textarea cols='10' rows='2' name="description" value={description} onChange={handleChange} required placeholder='Write some description' />
					</div>

					<div className="form-group at">
						<label htmlFor="createdAt">Course create at</label>
						<input type='date' name="createdAt" value={createdAt} onChange={handleChange} required placeholder='Enter time' />
					</div>

					<div className="form-group">
						<button>{isLoadng ? "loading" : "Create Course"}</button>
					</div>

				</form>
			</main>
		</section>
	)
}

export default CreateCourse

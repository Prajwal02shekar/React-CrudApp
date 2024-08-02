import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { AuthContextApi } from './../../context/AuthContext';

const Register = () => {
	let { signup } = useContext(AuthContextApi);
	let navigate = useNavigate()
	let [state, setState] = useState({
		name: "",
		email: "",
		password: "",
		avatar: "",
		isLoading: false,
	})

	let { name, email, password, avatar, isLoading } = state;
	let handleChange = e => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value })
	}
	let handleSubmit = async e => {
		e.preventDefault();
		try {
			let payload = { name, email, password, avatar };
			toast.success("User Successfully registered")
			signup(payload)
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<section className='content'>
			<main className='authBlock'>
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="title">Enter Name</label>
						<input type="text" name="name" value={name} onChange={handleChange} required placeholder='Enter Name' />
					</div>

					<div className="form-group">
						<label htmlFor="trainer">Enter Email</label>
						<input type="email" name="email" value={email} onChange={handleChange} required placeholder='Enter Email' />
					</div>

					<div className="form-group desc-block">
						<label htmlFor="description">Enter Password</label>
						<input type='password' name="password" value={password} onChange={handleChange} required placeholder='Enter password' />
					</div>

					<div className="form-group at">
						<label htmlFor="createdAt">Avatar Url</label>
						<input type='url' name="avatar" value={avatar} onChange={handleChange} required placeholder='Avatar url' />
					</div>

					<div className="form-group">
						<button>{isLoading ? "loading" : "Create User"}</button>
					</div>

				</form>
			</main>
		</section>
	)
}

export default Register

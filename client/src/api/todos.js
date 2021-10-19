import axios from 'axios'

export const getAllTodos = async () => {
	try {
		const res = await axios.get('http://localhost:5000/todos')
		return res.data
	} catch (err) {
		return err.response.data
	}
}

export const getTodo = async ({ id }) => {
	try {
		const res = await axios.get(`http://localhost:5000/todos/${id}`)
		return res.data
	} catch (err) {
		return err.response.data
	}
}

export const updateTodo = async ({ id }) => {
	try {
		const res = await axios.put(`http://localhost:5000/todos/${id}`)
		return res.data
	} catch (err) {
		return err.response.data
	}
}

export const deleteTodo = async ({ id }) => {
	try {
		const res = await axios.delete(`http://localhost:5000/todos/${id}`)
		return res.data
	} catch (err) {
		return err.response.data
	}
}

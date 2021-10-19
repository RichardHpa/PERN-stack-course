import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getAllTodos } from '../src/api/todos'

function App() {
	const { data } = useQuery('todos', getAllTodos)

	useEffect(() => {
		if (data) console.log(data)
	}, [data])

	return <div className="App"></div>
}

export default App

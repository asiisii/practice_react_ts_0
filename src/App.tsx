import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'

const App = () => {
	const personName = {
		first: 'Asiisii',
		last: 'M',
	}
	return (
		<div className='app'>
			<Greet name='Asiisii' messageCount={10} isLoggedIn={false} />
			<Person name={personName} />
		</div>
	)
}

export default App

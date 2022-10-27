import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

const App = () => {
	const personName = {
		first: 'Asiisii',
		last: 'M',
	}

	const nameList = [
		{
			first: 'Habibi',
			last: 'M',
		},
		{
			first: 'Yogi',
			last: 'M',
		},
		{
			first: 'Boa',
			last: 'H',
		},
	]
	return (
		<div className='app'>
			<Greet name='Asiisii' messageCount={10} isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} />
		</div>
	)
}

export default App

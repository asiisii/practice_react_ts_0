import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

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
			<Status status='loading' />
      <Heading>test</Heading>
      <Oscar>
        <Heading>Oscar goes to me</Heading>
      </Oscar>
		</div>
	)
}

export default App

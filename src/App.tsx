import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

const App = () => {
	const personName = { first: 'Asiisii', last: 'M' }

	const nameList = [
		{ first: 'Habibi', last: 'M' },
		{ first: 'Yogi', last: 'M' },
	]

	return (
		<div className='app'>
			<Greet name='Asiisii' messageCount={10} isLoggedIn={false} />
			<Greet name='Asiisii' isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Status status='loading' />
			<Heading>test</Heading>
			<Oscar>
				<Heading>Oscar goes to me</Heading>
			</Oscar>
			<Button
				handleClick={(event, id) => {
					console.log('Button Clicked', event, id)
				}}
			/>
      <Input 
        value=''
        handleChange={event => console.log('triggered')}
      />
		</div>
	)
}

export default App

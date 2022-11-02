import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import { ThemeContextProvider } from './components/context/ThemeContext'
import Box from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import User from './state/User'
import Counter from './components/class/Counter'
import Private from './components/auth/Private'
import Profile from './components/auth/Profile'
import List from './components/generics/List'
import RandomNumber from './components/restriction/RandomNumber'
import Toast from './components/templateliterals/Toast'
import CustomButton from './components/html/Button'
import Text from './components/polymorphic/Text'

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
			<Input value='' handleChange={event => console.log('triggered')} />
			<Container styles={{ border: '1px solid black', padding: '1rem' }} />
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContextProvider>
				<User />
			</UserContextProvider>
			<Counter message='hello' />
			<Private isLoggedIn={true} component={Profile} />
			<List
				items={['Batman', 'Superman', 'Wonder Woman']}
				onClick={item => console.log(item)}
			/>
			<List items={[1, 2, 3]} onClick={item => console.log(item)} />
			<List
				items={[
					{ first: 'a', last: 'b' },
					{ first: 'c', last: 'd' },
					{ first: 'e', last: 'f' },
				]}
				onClick={item => console.log(item)}
			/>
			<RandomNumber value={10} isPositive />
			<Toast position='center' />
			<CustomButton variant='primary' onClick={() => console.log('clicked')}>
				Primary button
			</CustomButton>
			{/* <CustomButton variant='primary' onClick={() => console.log('clicked')}>
				{' '}
				<div>Primary button</div>{' '}
			</CustomButton> */}
			{/* error: if we pass div elements because we have omit keyword thats omitting children from it being a componentprops */}
			{/* This JSX tag's 'children' prop expects a single child of type 'string',
			but multiple children were provided. */}
			<Text as='h1' size='lg'>
				Heading
			</Text>
			<Text as='p' size='md'>
				Paragraph
			</Text>
			<Text as='label' htmlFor='someid' size='sm'>
				Label
			</Text>
      {/* cant have wrong attribute eg: htmlFor for h1 or other elements */}
		</div>
	)
}

export default App

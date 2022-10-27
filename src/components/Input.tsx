import React from 'react'

type InputProps = {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('====================================')
		console.log(event)
		console.log('====================================')
	}
	return (
		<>
			<input type='text' value={props.value} onChange={props.handleChange} />
			<input type='text' value={props.value} onChange={handleInputChange} />
		</>
	)
}

export default Input

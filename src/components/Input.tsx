import React from 'react'

type InputProps = {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handleChange}: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('====================================')
		console.log(event)
		console.log('====================================')
	}
	return (
		<>
			<input type='text' value={value} onChange={handleChange} />
			<input type='text' value={value} onChange={handleInputChange} />
		</>
	)
}

export default Input

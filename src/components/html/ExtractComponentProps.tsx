import React from 'react'
import Greet from '../Greet'

const ExtractComponentProps = (props: React.ComponentProps<typeof Greet>) => {
	return <div>{props.name}</div>
}

export default ExtractComponentProps

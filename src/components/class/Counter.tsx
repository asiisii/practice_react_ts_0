import React, { Component } from 'react'

type CounterProps = {
  message: string
}

type CounterState = {
  count: number
}

// if we dont have props then we do < {}. CounterState
// if we dont have state then we can just write CounterProps

class Counter extends Component<CounterProps, CounterState> {
	state = {
		count: 0,
	}

	handleClick = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }))
	}

	render() {
		return (
			<>
				<button onClick={this.handleClick}>Increment</button>
				{this.props.message} {this.state.count}
			</>
		)
	}
}

export default Counter

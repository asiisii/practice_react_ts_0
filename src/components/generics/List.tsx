// T stands for Type - convention
type ListProps<T> = {
	items: T[]
	onClick: (value: T) => void
}

// if List is going to be an object with id then we can do this
// <T extends { id: number } > eg: items = {[{id: 1, first: 'a', last: 'b' }]}
// for number and string only <T extends number | string>
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
	return (
		<div>
			<h2>List of items</h2>
			{items.map((item, index) => {
				return (
					<div key={index} onClick={() => onClick(item)}>
						{JSON.stringify(item)}
					</div>
				)
			})}
		</div>
	)
}

export default List

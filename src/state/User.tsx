import React, { useState } from 'react'

type AuthUser = {
	name: string
	email: string
}

const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null)
// const [user, setUser] = useState<AuthUser>({} as AuthUser) 
// we can do above away if we know we will always have user's info and 
// we dont have to do user?.name anymore we can just write user.name
	const handleLogin = () => {
    setUser({
      name: 'asiisii',
      email: 'test@test.com'
    })
  }

	const handleLogout = () => setUser(null)

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User name is {user?.name}</div>
			<div>User email is {user?.email}</div>
		</div>
	)
}

export default User

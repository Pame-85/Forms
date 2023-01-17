import { useState } from 'react'
import'../styles/styles.css'
const Register = () => {
    const [registerData, setRegisterData] = useState(second)
  return (
    <div>
        <h1>Register page</h1>
        <form>
            <input
            type="text"
            placeholder="Name"
            />
             <input
            type="email"
            placeholder="Email"
            />
            <input
            type="password"
            placeholder="Password"
            />
            <input
            type="password"
            placeholder="Repeat Password"
            />
            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default Register
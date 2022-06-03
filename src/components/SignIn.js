import React, { useState } from 'react'
import {db, auth} from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert(error)
        }
    }
  return (
    <div>
        <form 
        style={{display: 'flex', flexDirection: 'column', position: 'absolute', right: '10px', top: '10px'}}
         onSubmit={signIn}>
            <label>Email :</label>
            <input type='email' onChange={(e)=> {setEmail(e.target.value)}} value={email}/>
            <label>Password</label>
            <input type='text' onChange={(e)=> {setPassword(e.target.value)}} value={password}/>
            <button type='submit'>sign in</button>
        </form>

    </div>
  )
}

export default SignIn
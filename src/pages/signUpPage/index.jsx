import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import styles from './signUp.module.scss';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const SignUpPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');



  const onSubmit = async (e) => {
    e.preventDefault()


    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(user,{
          displayName: firstname + " " + lastname
        })  
             
        console.log(user);
        navigate("/sign-in")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });



  }

  return (
    <Layout>
      <section className={styles.signUpContainer}>
        <div className={styles.wrapper}>
          <h2>Sign Up to KPIBoard</h2>
          <form>
            <input
              label="Firstname"
              name="firstname"
              type="text"
              placeholder="Firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              label="Lastname"
              name="lastname"
              type="text"
              placeholder="Lastname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            
            <input
              label="E-mail"
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />           
            <input
              label="Password"
              name="pass"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />

            <div className={styles.containerButtons}>
              <button 
              type="submit" 
              onClick={onSubmit}

              >Sign Up</button>
            </div>
          </form>
          <p>Already registered? <Link to="/sign-in">Sign In here</Link></p>
        </div>
      </section>
    </Layout>
  )
}

export default SignUpPage
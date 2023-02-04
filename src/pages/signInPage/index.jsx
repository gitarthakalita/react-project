import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import styles from './signIn.module.scss';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase';

const SignInPage = () => {

  const navigate = useNavigate();

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const onLogin = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=> {
        const user = userCredential.user;
        navigate("/pricing")
        console.log(user);
      })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage= error.message;
          console.log(errorCode, errorMessage)
        });
  }

  return (
    <Layout>
      <section className={styles.signInContainer}>
        <div className={styles.wrapper}>
          <h2>Sign In to KPIBoard</h2>
          <form>
            <input
              label="E-mail"
              name="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className={styles.containerButtons}>
              <button 
                type="submit"
                onClick={onLogin}
                >Sign In</button>
              {/* <span>Or</span>
              <button className={styles.buttonGoogle} type="button"> Login with Google </button> */}
            </div>
          </form>
          <p>Don't have an account? <Link to="/sign-up">Create a new one</Link></p>
        </div>
      </section>
    </Layout>
  )
}

export default SignInPage
import React, { useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import styles from './navbar.module.scss';

import {signOut} from 'firebase/auth';

import {auth} from '../../firebase/firebase';
import UserContext from '../../contexts/UserContext';


const Navbar = () => {
  const navigate = useNavigate();


const isUser=useContext(UserContext)

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.wrapper}>
            <Link to="/"><div className={styles.logo}><h1>KPIBoard</h1></div>              
            </Link>
            {
              
              isUser ? <button 
              onClick={ 
                async () => {
                  await signOut(auth).then(() =>{
                    navigate('/');
                    console.log("Signout successfull")
                  }).catch((error) => {
                    console.log(error)
                  })
                  
                }
              }
              >Sign Out</button> : <Link to='/sign-in'><button>Sign In</button></Link>
            }
        </div>
    </div>
  )
}

export default Navbar
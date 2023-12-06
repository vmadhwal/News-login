import React from 'react'
import { Link } from 'react-router-dom';
import styles from './home.module.css'
import News from '../NewsApi/News';

export const Home = (props) => {
  return (
    <div>
    <nav className={styles.container}>
      <ul>
       <li><h2>{props.name?`Welcome-${props.name}`:"Login Please"}</h2></li>
     <li> <h3 className={styles.log}>
        <Link to="/login">Login</Link>
      </h3></li>
      <li><h3 className={styles.sign}>
        <Link to="/signup">SignUp</Link>
      </h3></li>
      <br/>
      </ul>
     
    </nav>
    <h2>{props.name?<News/>:"Login Please"}</h2>
    
    </div>
  )
}
export default Home;
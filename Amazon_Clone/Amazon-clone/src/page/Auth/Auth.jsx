import React from 'react'
import classes from "./signup.module.css"
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'
function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAE2DsdF6RJ3eiqVxPqVmsDix7QsIkFS_sVA&s"
          alt="amazon logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login_siginbtn}>sign in</button>
        </form>
        <p>
          By sining-in you agre to the AMAZON FAKE CLONE conditions of use &
          sale.please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={classes.login_signupbtn}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth

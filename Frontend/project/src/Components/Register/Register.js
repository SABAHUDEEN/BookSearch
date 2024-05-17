import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styles from './Register.module.css'; // Import CSS module
// Import icons
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
  // useState to hold our inputs and validation messages
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [username, setUserName] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // onclick function to register the user
  const createUser = () => {
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email) || !/[1-100]/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    // Validate username
    if (!username || !/[A-Z]/.test(username)) {
      setUsernameError('Username is required some upper case  character.');
      return;
    } else {
      setUsernameError('');
    }

    // Validate password
    if (
      !password ||
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[1-100]/.test(password)
    ) {
      setPasswordError(
        'Password must be at least 8  characters long and give upper and lower characters and numbers .'
      );
      return;
    } else {
      setPasswordError('');
    }

    // Use Axios to send a POST request to register the user
    Axios.post('http://localhost:3000/register', {
      Email: email,
      UserName: username,
      Password: password,
    })
      .then(() => {
        console.log('User has been created');
        alert('Registered successfully!'); // Display alert message
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.'); // Display alert message for error
      });
  };

  return (
    <body className={styles.fullbody}>
      
    
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <img alt='' />
          <h3 >Let Us Know You!</h3>

          <form action='' className={styles.form}>
            <div className={styles.inputDiv}>
              <label htmlFor='email'></label>
              <div className={`${styles.input} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <MdMarkEmailRead className={styles.icon} />
                <input
                  type='email'
                  id='email'
                  className={styles.formControl}
                  placeholder='Enter Email'
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className={styles.validationMessage}>{emailError}</div>
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor='username'></label>
              <div className={`${styles.input} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <FaUserShield className={styles.icon} />
                <input
                  type='text'
                  id='username'
                  className={styles.formControl}
                  placeholder='Enter Username'
                  required
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
              <div className={styles.validationMessage}>{usernameError}</div>
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor='password'></label>
              <div className={`${styles.input} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <BsFillShieldLockFill className={styles.icon} />
                <input
                  type='password'
                  id='password'
                  className={styles.formControl}
                  placeholder='Enter Password'
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className={styles.validationMessage}>{passwordError}</div>
            </div>
            <div className={styles.but}>
              <button
                type='button'
                className={`${styles.btn} ${styles.btnOutlineSecondary} ${styles.dFlex} ${styles.alignItemsCenter}`}
                onClick={createUser}
              >
                <span>Register</span>
                <AiOutlineSwapRight className={styles.icon} />
              </button>
            </div>
            <div className={`${styles.singleLine} ${styles.text}`}>
              <span >
                Forgot your password? <Link to='/forgot-password' className={styles.an}>Click Here</Link>
              </span>
              <div className={`${styles.footerDiv} ${styles.dFlex} ${styles.justifyContentCenter}`}>
                <span>
                  Don't have an account? <a href='/' className={styles.an}>
                    Sign in
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Register;

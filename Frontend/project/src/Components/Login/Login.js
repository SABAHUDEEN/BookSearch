import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import styles from './Login.module.css'; // Import CSS module

// Import icons
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { BsFillShieldLockFill } from 'react-icons/bs';

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigateTo = useNavigate();

  const validateLoginForm = () => {
    let isValid = true;

    // Validate username
    if (loginUserName.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Validate password
    if (loginPassword.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(loginPassword)) {
      setPasswordError(
        'Password must be at least 8 characters long and include both upper and lower case letters'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const LoginUser = (e) => {
    e.preventDefault();

    if (validateLoginForm()) {
      Axios.post('http://localhost:3000/login', {
        LoginUserName: loginUserName,
        LoginPassword: loginPassword,
      })
        .then((response) => {
          if (response.data.message) {
            navigateTo('/');
            alert('Login credentials do not match!');
          } else {
            navigateTo('/dashboard');
          }
        })
        .catch((error) => {
          console.error('Error logging in:', error);
          alert('Login failed. Please try again.');
        });
    }
  };

  return (
    
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          
          <h3>Welcome Back!</h3>
          <form action='' className={styles.form}>
            <span>Login status will go here</span>
            <br />
            <div className={styles.inputDiv}>
              <label htmlFor='username'></label>
              <div className={`${styles.input} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <FaUserShield className={styles.icon} />
                <input
                  type='text'
                  id='username'
                  className={`${styles.formControl} ${styles.us}`}
                  placeholder='Enter Username'
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                    setUsernameError('');
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
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                    setPasswordError('');
                  }}
                />
              </div>
              <div className={styles.validationMessage}>{passwordError}</div>
            </div>
            <div className={styles.but}>
              <button
                type='submit'
                className={`${styles.btn} ${styles.btnOutlineSecondary} ${styles.dFlex} ${styles.alignItemsCenter}`}
                onClick={LoginUser}
              >
                <span>Login</span>
                <AiOutlineSwapRight className={styles.icon} />
              </button>
            </div>
            <div className={`${styles.singleLine} ${styles.text}`}>
              <span >
                Forgot your password? <Link to='/forgot-password'className={styles.an}>Click Here</Link>
              </span>
              <div className={`${styles.footerDiv} ${styles.dFlex} ${styles.justifyContentCenter}`}>
                <span>
                  Don't have an account? <Link to='/Register'className={styles.an}>Sign Up</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

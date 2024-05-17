import React, { useState } from 'react';
import Axios from 'axios';
// Import your CSS file if needed

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (!username || !newPassword || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    Axios.post('http://localhost:3000/reset-password', { UserName: username, NewPassword: newPassword }).then(
      (response) => {
        if (response.data.success) {
          setMessage('Password reset successfully.');
        } else {
          setMessage('Error: Failed to reset password.');
        }
      }
    );
  };

  return (
    <div className='container'>
      <h3>Reset Password</h3>
      <form className='form'>
        <div className='inputDiv'>
          <label htmlFor='username'></label>
          <input
            type='text'
            id='username'
            className='form-control'
            placeholder='Enter Username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='inputDiv'>
          <label htmlFor='newPassword'></label>
          <input
            type='password'
            id='newPassword'
            className='form-control'
            placeholder='Enter New Password'
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className='inputDiv'>
          <label htmlFor='confirmPassword'></label>
          <input
            type='password'
            id='confirmPassword'
            className='form-control'
            placeholder='Confirm New Password'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type='button' className='btn btn-primary' onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
      {message && <div className='message'>{message}</div>}
    </div>
  );
};

export default ForgotPassword;

// Route to handle reset password request
app.post('/reset-password', (req, res) => {
    // Get username and new password from the request body
    const { username, newPassword } = req.body;

    // Check if username and new password are provided
    if (!username || !newPassword) {
        return res.status(400).send({ message: 'Username and new password are required.' });
    }

    // Create SQL statement to update user's password
    const SQL = 'UPDATE user SET password = ? WHERE username = ?';
    const values = [newPassword, username];

    // Execute the SQL query to update the password
    db.query(SQL, values, (err, results) => {
        if (err) {
            console.error('Error updating password:', err);
            return res.status(500).send({ message: 'Internal server error.' });
        }

        // Check if the password was updated successfully
        if (results.affectedRows > 0) {
            return res.status(200).send({ message: 'Password reset successfully.' });
        } else {
            return res.status(404).send({ message: 'User not found or password not updated.' });
        }
    });
});

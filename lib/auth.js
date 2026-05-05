import { pool } from './db';
import bcrypt from 'bcryptjs';

export async function registerUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, hashedPassword, 'user']
  );
  return result.insertId;
}

export async function verifyUser(email, password) {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  if (rows.length === 0) return null;
  
  const user = rows[0];
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
}
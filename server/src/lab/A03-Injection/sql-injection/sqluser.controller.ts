import { Request, Response } from 'express';
import pool from './sqluser.db';

export const createUserSchema = async (req: Request, res: Response): Promise<Response> => {
    try {
        await pool.connect();
    
        const { username, password } = req.body;
    
        const resQuery = await pool.query(`SELECT * FROM user_schema.users
            WHERE username = '${username}' AND password = '${password}'`);
        if (resQuery.rows.length === 0) {
                return res.status(401).json({message:'Invalid credentials'});
         }
        return res.json(resQuery.rows[0]);
      } catch (err) {
        console.error('Error while connecting or executing query:', err);
        return res.status(500).send('Internal Server Error');
      } 
};

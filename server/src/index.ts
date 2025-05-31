import express from 'express';
import path from 'path';
import Nosql from '../src/lab/A03-Injection/no-sql-injection/user.route';
import Cmdinjection from '../src/lab/A03-Injection/command-injection/command.route';
import SqlInjection  from "../src/lab/A03-Injection/sql-injection/sqluser.route";
import XssInjection from './lab/A03-Injection/xss-injection/xss.route'
import IdorV from './lab/A01-Broken_Acess_Control/idor/idor.route';
import Bruteforce from './lab/A07-Broken_Authentication/bruteforce/bruteforce.route';
import SSRF from './lab/A10-SSRF/ssrf.route'
import cors from 'cors'; 
const app = express();


app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/v1/no-sql',Nosql);
app.use('/api/v1/cmdi',Cmdinjection);
app.use('/api/v1/sqli',SqlInjection);
app.use('/api/v1/xss',XssInjection);

app.use('/api/v1/idor', IdorV);

app.use('/api/v1/brute',Bruteforce);

app.use('/api/v1/ssrf',SSRF);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
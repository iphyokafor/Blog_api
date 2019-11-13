import express from 'express';
import User from '../controller/usercontroller';
const router = express.Router();

router.post('/register', User.register);
router.post('/login', User.login);


export default router;
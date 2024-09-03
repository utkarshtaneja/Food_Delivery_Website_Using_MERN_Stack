import express from "express"
import { userLogin, userRegister } from "../controllers/userController"
const router = express.Router();
router.post('/login', userLogin);
router.post('/register', userRegister);

module.exports = router;
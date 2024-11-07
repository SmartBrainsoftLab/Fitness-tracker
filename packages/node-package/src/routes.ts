import { Router, Request, Response } from "express";
import { AppDataSource } from "./db.setup";
import { UserEntity } from "./entities";
import {
	StatusCodes,	
} from 'http-status-codes';

export const appRouter = Router();

appRouter.post("/signup", async (req: Request, res: Response) => {
    console.log("signup");

    const { username, password, email } = req.body;

    const userRepository = AppDataSource.getRepository(UserEntity);

    // Check if user already exists
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email already in use' });
        return;
    }
    
    const newUser = userRepository.create({username, email, password});
    await userRepository.save(newUser);
    res.status(StatusCodes.CREATED).json(newUser);
});


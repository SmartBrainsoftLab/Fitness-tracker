import { Router, Request, Response } from "express";
import { AppDataSource } from "./db.setup";
import { UserEntity } from "./entities";

export const appRouter = Router();

appRouter.post("/signup", async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    const userRepository = AppDataSource.getRepository(UserEntity);
    const newUser = userRepository.create({username, email, password});
    await userRepository.save(newUser);
    res.json(newUser).status(201);
});

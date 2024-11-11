import { Response } from "express";
import { CommonRequest } from "@/types";
import { errorHandlerWrapper } from "@/utils";
import { StatusCodes } from "http-status-codes";

const getUserHandler = async (
  req: CommonRequest,
  res: Response
): Promise<void> => {
  const {name, email, ...other} = req.user;
  res.json({name, email}).status(StatusCodes.OK);
};

export const getUserController = errorHandlerWrapper(getUserHandler);

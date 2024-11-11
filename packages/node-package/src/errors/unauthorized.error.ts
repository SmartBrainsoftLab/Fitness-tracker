import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom.error";

export class UnauthorizedError extends CustomError {
  constructor(message: string, reasonCode?: string) {
    super(message, StatusCodes.UNAUTHORIZED, reasonCode);
  }
}

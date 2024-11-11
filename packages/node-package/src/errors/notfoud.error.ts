import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom.error";

export class NotFoundError extends CustomError {
  constructor(message: string, reasonCode?: string) {
    super(message, StatusCodes.NOT_FOUND, reasonCode);
  }
}

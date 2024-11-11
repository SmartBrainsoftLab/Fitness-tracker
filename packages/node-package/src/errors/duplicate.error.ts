import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom.error";

export class DuplicateError extends CustomError {
  constructor(message: string, reasonCode?: string) {
    super(message, StatusCodes.CONFLICT, reasonCode);
  }
}

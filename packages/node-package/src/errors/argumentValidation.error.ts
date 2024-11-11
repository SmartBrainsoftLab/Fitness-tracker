import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom.error";

export class ArgumentValidationError extends CustomError {
  messages: string[];
  constructor(
    message: string,
    messages: string[],
    reasonCode?: string
  ) {
    super(message, StatusCodes.BAD_REQUEST, reasonCode);
    this.messages = messages;
  }
}

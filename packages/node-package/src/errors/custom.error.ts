import { StatusCodes } from "http-status-codes";

export class CustomError extends Error {
  errorCode: number;
  reasonCode?: string;

  constructor(
    message: string,
    errorCode: number = StatusCodes.BAD_REQUEST,
    reasonCode?: string
  ) {
    super();

    this.message = message;

    this.errorCode = errorCode;

    this.errorCode = errorCode;
    this.reasonCode = reasonCode;
  }
}

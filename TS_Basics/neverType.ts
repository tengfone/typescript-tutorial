let userInput: unknown;
// let userInput: any; // more space, unknown will not allow type cast
let userName: string;

userInput = 5;
userInput = "ASH";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // return nevers, to break (normally to flag out error) ur code
  throw { message: message, errorCode: code };
}

generateError("Error Occured", 500);

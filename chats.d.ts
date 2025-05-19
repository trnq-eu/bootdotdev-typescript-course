// Define what a chat object looks like
export interface Chat {
    time: string;
    message: string;
  }
  
  // The log function takes an array of Chat objects
  export function log(chats: Chat[]): void;
  
  // The chats constant is an array of Chat objects
  export const chats: Chat[];
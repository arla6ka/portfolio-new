declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      [key: string]: string | undefined;
    }
  }
}

export {}; 
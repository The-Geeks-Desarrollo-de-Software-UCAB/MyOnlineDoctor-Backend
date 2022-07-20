import { Logger } from './logger';
import { ConsoleLogger } from './console-logger';

let logger: Logger;

export class LoggerFactory {

    public static getInstance(): Logger {

      if (!logger) {

         logger = new ConsoleLogger();

      }

      return logger;

     }

}
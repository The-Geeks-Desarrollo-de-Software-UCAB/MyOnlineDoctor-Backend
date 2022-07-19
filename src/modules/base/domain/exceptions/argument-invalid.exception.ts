import { ExceptionBase } from './exception.base';
import { ExceptionCodes } from './exception.codes';

/**
 * Usado para indicar que un argumenti incorrecto fue provisto a un constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  readonly code = ExceptionCodes.argumentInvalid;
}
import { ExceptionBase } from './exception.base';
import { ExceptionCodes } from './exception.codes';

/**
 * Usado para indicar que un argumento no fue provisto (está vacío, es null o undefined).
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  readonly code = ExceptionCodes.argumentNotProvided;
}
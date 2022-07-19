import { ExceptionBase } from './exception.base';
import { ExceptionCodes } from './exception.codes';

/**
 * Usado para indicar que un argumento está fuera del rango permitido
 * (por ejemplo: string/array de longitud incorrecta, número no permitido en un rango min/max)
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly code = ExceptionCodes.argumentOutOfRange;
}
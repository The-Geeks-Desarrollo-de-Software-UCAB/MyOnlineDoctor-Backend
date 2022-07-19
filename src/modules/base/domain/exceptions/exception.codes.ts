/**
 * Agregar un string "code" con un código de estado personalizado
 * a cada excepción es una buena práctica, puesto que cuando la
 * excepción se transfiere a otro proceso el check "instanceof"
 * no pude ser ejecutado, por lo que el "code" se utiliza en su
 * lugar. 
 * 
 * Obtenido de: https://github.com/Sairyss/domain-driven-hexagon
 */
 export enum ExceptionCodes {
    argumentInvalid = 'GENERIC.ARGUMENT_INVALID',
    argumentOutOfRange = 'GENERIC.ARGUMENT_OUT_OF_RANGE',
    argumentNotProvided = 'GENERIC.ARGUMENT_NOT_PROVIDED',
    notFound = 'GENERIC.NOT_FOUND',
    conflict = 'GENERIC.CONFLICT',
  }
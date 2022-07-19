export interface SerializedException {
    message: string;
    code: string;
    stack?: string;
    metadata?: unknown;
  }
  
  /**
   * Clase base para excepciones personalizadas.
   *
   * @abstract
   * @class ExceptionBase
   * @extends {Error}
   * 
   * Obtenido de https://github.com/Sairyss/domain-driven-hexagon
   */
  export abstract class ExceptionBase extends Error {
    /**
     * @param {string} message
     * @param {ObjectLiteral} [metadata={}]
     * No se debe incluir información delicada en la metadata.
     * Solo incluir información que pueda ayudar con debugging.
     */
    constructor(readonly message: string, readonly metadata?: unknown) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
    }
  
    abstract code: string;
  
    /**
     * Por defecto en NodeJS los objetos Error
     * no son serializados apropiadamente cuando se envian objetos plain
     * a procesos externos. Este método es una alternativa
     * https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af
     */
    toJSON(): SerializedException {
      return {
        message: this.message,
        code: this.code,
        stack: this.stack,
        metadata: this.metadata,
      };
    }
  }
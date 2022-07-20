import { LoggerFactory } from 'src/modules/logging/logger-factory';

const logger = LoggerFactory.getInstance();

export function decoLog() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const targetMethod = descriptor.value;

        descriptor.value = function ( ... args: any[]) {
 
            logger.log(`Llamando a ${propertyKey}`);
            return targetMethod.apply(this, args);

        }

        return descriptor;

    }
}
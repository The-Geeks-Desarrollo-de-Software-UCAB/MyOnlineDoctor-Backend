import { Logger } from './logger';

export class ConsoleLogger implements Logger {

    public log(message: string): void {
        var fs = require('fs');
        fs.appendFile('LogSalida.txt',message + '\n',function(err){

            if (err){
                return console.log(err);
            }
            //console.log('Archivo creado');

        });

        console.log(message);
    }

}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroModule } from './modules/registro/registro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [RegistroModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'my-weak-password',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }

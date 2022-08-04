import { Injectable } from '@nestjs/common';
import { RtcRole, RtcTokenBuilder } from 'agora-access-token';
import { OrmRepoCita } from 'src/modules/cita/infrastructure/typeorm/repositories/ormRepoCita.repository';
import { EntityManager, Repository } from 'typeorm';
import { Token } from '../entities/token.entity';
import { OrmRepoToken } from '../repositories/ormRepoToken.repository';

@Injectable()
export class VideollamadaService {
    private readonly ormRepoCita: OrmRepoCita;
    private readonly ormRepoToken: OrmRepoToken;
    constructor(private readonly manager: EntityManager){
        this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita);
        this.ormRepoToken = this.manager.getCustomRepository(OrmRepoToken);
    }
  private appID = 'b007b19dfa2e4bfaa50fd2cbd5c0a64a';
  private appCertificate = '348b1196000148628f84a76a1d539445';
  private channelName = 'videochat';
  private uid = 0;

  private role = RtcRole.PUBLISHER;
 
  private expirationTimeInSeconds = 3600;
 
  private currentTimestamp = Math.floor(Date.now() / 1000)
 
  private privilegeExpiredTs = this.currentTimestamp + this.expirationTimeInSeconds

    async generarTokenRTC(id_cita: string){
       const token =  RtcTokenBuilder.buildTokenWithUid(this.appID, this.appCertificate, this.channelName, this.uid, this.role, this.privilegeExpiredTs);
       const cita = await this.ormRepoCita.encontrarPorId(id_cita);
       this.ormRepoToken.guardarToken(id_cita, token);
       return token;
    }   
    
    async getToken(id_cita: string){
      let cita = await this.ormRepoCita.encontrarPorId(id_cita);
      return await this.ormRepoToken.findOne({where: {cita: cita }});
    }
}

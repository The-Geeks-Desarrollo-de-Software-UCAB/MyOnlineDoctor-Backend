import { Injectable } from '@nestjs/common';
import { RtcRole, RtcTokenBuilder } from 'agora-access-token';
import { OrmRepoCita } from 'src/modules/cita/infrastructure/typeorm/repositories/ormRepoCita.repository';
import { EntityManager, Repository } from 'typeorm';
import { OrmRepoToken } from '../repositories/ormRepoToken.repository';

@Injectable()
export class VideollamadaService {
    private readonly ormRepoCita: OrmRepoCita;
    private readonly ormRepoToken: OrmRepoToken;
    constructor(private readonly manager: EntityManager){
        this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita);
    }
  private appID = 'b007b19dfa2e4bfaa50fd2cbd5c0a64a';
  private appCertificate = '348b1196000148628f84a76a1d539445';
  private channelName = 'Videollamada';
  private uid = 2882341273;
  private account = "2882341273";
  private role = RtcRole.PUBLISHER;
 
  private expirationTimeInSeconds = 604800;
 
  private currentTimestamp = Math.floor(Date.now() / 1000)
 
  private privilegeExpiredTs = this.currentTimestamp + this.expirationTimeInSeconds

    async generarTokenRTC(id_cita: string){
       const token =  RtcTokenBuilder.buildTokenWithUid(this.appID, this.appCertificate, this.channelName, this.uid, this.role, this.privilegeExpiredTs);
       const cita = await this.ormRepoCita.encontrarPorId(id_cita);
       this.ormRepoToken.guardarToken(id_cita, token);
       console.log(token);
       return token;
    }    
}

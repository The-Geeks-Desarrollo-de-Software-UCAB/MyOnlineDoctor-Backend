import { CitaEntity } from "src/modules/cita/domain/entities/cita";
import { Cita } from "src/modules/cita/infrastructure/typeorm/entities/cita.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Token } from "../entities/token.entity";
import { IRepoToken } from "./IRepoToken";

@EntityRepository(Token)
export class OrmRepoToken extends Repository<Token> implements IRepoToken{
    private readonly citaRepo: Repository<Cita> = getRepository(Cita);
    async guardarToken(id_cita: string, token: string): Promise<Token> {
        let citatoken = new Token();
        citatoken.cita = await this.citaRepo.findOne({where: {id_cita: id_cita}});
        citatoken.token = token;
        console.log((citatoken));
        
        return await super.save(citatoken);
        
    }


}
import { CitaEntity } from "src/modules/cita/domain/entities/cita";
import { Cita } from "src/modules/cita/infrastructure/typeorm/entities/cita.entity";
import { Paciente } from "src/modules/paciente/infrastructure/typeorm/entities/paciente.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Dispositivo } from "../entities/dispositivo.entity";
import { IRepoDispositivo } from "./IRepoDispositivo";

@EntityRepository(Dispositivo)
export class OrmRepoDispositivo extends Repository<Dispositivo> implements IRepoDispositivo{
    private readonly pacienteRepo: Repository<Paciente> = getRepository(Paciente);
   async encontrarDispositivoPorId(paciente: string): Promise<Dispositivo[]> {
    let item = this.pacienteRepo.findOne({where: {id_paciente: paciente}});
    return await super.find({where: {paciente: item}})
    }
   async guardarDispositivo(paciente: string, token: string): Promise<Dispositivo> {
        let dispositivo = new Dispositivo();
        dispositivo.paciente = await this.pacienteRepo.findOne({where: {id_paciente: paciente}});
        dispositivo.token = token;
        console.log(paciente, token);
        
        return await super.save(dispositivo);
        
    }

    
  
  



}
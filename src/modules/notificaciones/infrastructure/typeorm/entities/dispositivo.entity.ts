import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Dispositivo {
  @PrimaryColumn()
  token: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.dispositivos)
  @JoinColumn({ name: 'paciente' })
  paciente: Paciente;
}

import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryColumn()
  @OneToOne(() => Cita)
  @JoinColumn({ name: 'cita' })
  cita: Cita;

  @Column()
  token: string;
}

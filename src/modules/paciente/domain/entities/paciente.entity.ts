import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base'
import { Nombre } from '../value-objects/nombre.value-object';
import { Correo } from '../value-objects/correo.value-object';
import { Apellido } from '../value-objects/apellido.value-object';
import { Alergia } from '../value-objects/alergia.value-object';
import { Altura } from '../value-objects/altura.value-object';
import { Antecedente } from '../value-objects/antecedente.value-object';
import { EstadoSuscripcion } from '../value-objects/estadosuscripcion.value-object';
import { FechaNacimiento } from '../value-objects/fechanacimiento.value-object';
import { Genero } from '../value-objects/genero.value-object';
import { NumeroMovil } from '../value-objects/numeromovil.value-object';
import { Operacion } from '../value-objects/operacion.value-object';
import { Password } from '../value-objects/password.value-object';
import { Peso } from '../value-objects/peso.value-object';
import { IdPaciente } from '../value-objects/idPaciente.value-object';

export class Paciente extends AggregateRoot {
 
  constructor(
  private idPaciente: IdPaciente,
  private correo: Correo,
  private nombre: Nombre,
  private apellido: Apellido,
  private alergia: Alergia,
  private altura: Altura,
  private antecedente: Antecedente,
  private fechanacimiento: FechaNacimiento,
  private genero: Genero,
  private numeromovil: NumeroMovil,
  private operacion: Operacion,
  private password: Password,
  private peso: Peso,
  private estadosuscripcion: EstadoSuscripcion) {
    super();

    this.idPaciente = idPaciente;
    this.correo = correo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.alergia = alergia;
    this.altura = altura;
    this.antecedente = antecedente;
    this.fechanacimiento = fechanacimiento;
    this.genero = genero;
    this.numeromovil = numeromovil;
    this.operacion = operacion;
    this.password = password;
    this.peso = peso;
    this.estadosuscripcion = estadosuscripcion;

    
  }


  getId(): IdPaciente {
    return this.idPaciente;
  }

  getCorreo(): Correo {
    return this.correo;
  }

  getNombre(): Nombre {
    return this.nombre;
  }

  getApellido(): Apellido {
    return this.apellido;
  }

  getAlergia(): Alergia {
    return this.alergia;
  }

  getAltura(): Altura {
    return this.altura;
  }

  getAntecedente(): Antecedente {
    return this.antecedente;
  }

  getFechaNacimiento(): FechaNacimiento {
    return this.fechanacimiento;
  }

  getGenero(): Genero {
    return this.genero;
  }

  getNumeroMovil(): NumeroMovil {
    return this.numeromovil;
  }

  getOperacion(): Operacion {
    return this.operacion;
  }

  getPassword(): Password {
    return this.password;
  }

  getPeso(): Peso {
    return this.peso;
  }

  getEstadoSuscripcion(): EstadoSuscripcion {
    return this.estadosuscripcion;
  }

  cancelarSuscripcion(): void {
    this.estadosuscripcion = EstadoSuscripcion.CANCELADA;
  }

  bloquearSuscripcion(): void {
    this.estadosuscripcion = EstadoSuscripcion.BLOQUEADA;
  }

  activarSuscripcion(): void {
    this.estadosuscripcion = EstadoSuscripcion.ACTIVA;
  }

  suspenderSuscripcion(): void {
    this.estadosuscripcion = EstadoSuscripcion.SUSPENDIDA;
  }


}

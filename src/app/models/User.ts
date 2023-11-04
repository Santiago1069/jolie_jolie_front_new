export class User {

    identificacion: string;
    nombre: string;
    correo: string;
    password: string;
    celular: number;
    id_perfiles_fk: number;
    id_tipo_documento_fk: number;

    constructor() {
        this.identificacion = '';
        this.nombre = '';
        this.correo = '';
        this.password = '';
        this.celular = 0;
        this.id_perfiles_fk = 0;
        this.id_tipo_documento_fk = 0;
    }

}
export class Compra {
    direccion: string;
    estado: number;
    valor_total: number;
    cantidad_productos: number;
    id_usuario_fk: string;
    id_zona_fk: number;
    metodopago: number

    constructor() {
        this.direccion = "";
        this.estado = 0;
        this.valor_total = 0;
        this.cantidad_productos = 0;
        this.id_usuario_fk = "";
        this.id_zona_fk = 0;
        this.metodopago = 0;
    }
}
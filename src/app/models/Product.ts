export class Product {
    id_producto: number;
    nombre_producto: string;
    color?: string;
    precio: number;
    imagen?: string;
    descripcion_producto?: string;
    cantidad: number;
    estado: number;
    id_categoria: number;

    constructor() {
        this.id_producto = 0;
        this.nombre_producto = "";
        this.color = "";
        this.precio = 0;
        this.imagen = "";
        this.descripcion_producto = "";
        this.cantidad = 0;
        this.estado = 0;
        this.id_categoria = 0;
    }
}

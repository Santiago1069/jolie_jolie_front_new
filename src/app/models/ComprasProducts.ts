export class ComprasProducts {
    id_compra_fk: number;
    id_product_fk: number;
    cantidad: number;
    valor_unidad: number;
    valor_total: number;

    constructor() {
        this.id_compra_fk = 0;
        this.id_product_fk = 0;
        this.cantidad = 0;
        this.valor_unidad = 0;
        this.valor_total = 0;
    }
}
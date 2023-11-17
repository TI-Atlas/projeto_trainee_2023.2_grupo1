import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Camisas } from "./camisas";
import { Clientes } from "./cliente";

@Entity("Pedidos")
export class Pedidos{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    preco: number;

    @Column()
    estoque: number;
    
    @Column()
    CamisasID: string;
    @OneToOne(() => Camisas)
    @JoinColumn({ name: "CamisasID" })
    camisas: Camisas;

    @Column()
    ClientID: string;
    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "ClientesID" })
    Clientes: Clientes;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn() 
    updated_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
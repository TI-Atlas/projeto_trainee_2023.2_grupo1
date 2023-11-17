import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Clientes")
export class Clientes{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    endereco: number;

    @Column()
    senha: string;

    @Column()
    telefone: string;

    @Column()
    cpf: string;

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
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Camisas")
export class Camisas{
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
    imagem: string;

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
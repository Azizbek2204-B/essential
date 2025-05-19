import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IClientCreationAttr{
    name:string,
}

@Table({tableName:"client"})
export class Client extends Model<Client,IClientCreationAttr>{

    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare name:string

    @Column({
        type:DataType.STRING,
    })
    declare phone_number:string

    @Column({
        type:DataType.STRING,
    })
    declare bot_lang:string

    @Column({
        type:DataType.STRING,
    })
    declare proposer:string

    @Column({
        type:DataType.STRING,
    })
    declare offer_link:string
}
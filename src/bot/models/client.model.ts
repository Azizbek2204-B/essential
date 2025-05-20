import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IClientCreationAttr{
    name:string,
    id_telegram:number
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
        type:DataType.BIGINT,
    })
    declare id_telegram:number

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
        type:DataType.BIGINT,
    })
    declare coins:number
}
import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";
const {DataTypes} = Sequelize

const Note = db.define('note',{
    title:{
        type:DataTypes.STRING
    },
    category:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    trash_status:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
})
export default Note
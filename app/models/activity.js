import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";
const {DataTypes} = Sequelize
const Activity = db.define('activity',{
    title:{
        type:DataTypes.STRING
    },
    category:{
        type:DataTypes.STRING
    },
    schedule:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    },
    trash_status:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName:true
})

export default Activity;
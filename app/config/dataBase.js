import { Sequelize } from "sequelize";

const db = new Sequelize(
    'catatan_kegiatan_app','root','',{
        host:"localhost",dialect:"mysql"
    }
)
export default db;
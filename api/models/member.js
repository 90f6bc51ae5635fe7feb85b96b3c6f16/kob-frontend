import mysql from "mysql";
import dbconfig from "../../config/database.js";

let memberModel = {};

memberModel.getLogin = (email, password, callback) => {
  const conn = mysql.createConnection(dbconfig.connection_sale);//CREAMOS LA CONECCION
  if (conn) {
    var sql = `SELECT * FROM tb_customer 
      WHERE customer_username = '`+ email + `' 
      AND customer_password = '` + password + `' 
      `
    console.log("sql", sql);

    conn.query(sql,
      (err, rows) => {
        // console.log("err",err);
        // console.log("rows",rows);
        if (err) {
          throw err
        }
        else {
          if (rows != '') {
            callback(null, rows);
            conn.end()
          } else {
            callback(null, 'loginErr')
            conn.end()
          }
        }
      }
    )
  }
}

export default memberModel

import mysql from "mysql";
import dbconfig  from "../../config/database.js";

let memberModel = {};

memberModel.getLogin = (email,password, callback) => {
  const conn = mysql.createConnection(dbconfig.connection);//CREAMOS LA CONECCION
  if (conn) {
      var sql = `SELECT member_address,member_birthdate,member_email,member_firstname,member_lastname,member_name,member_phone FROM tb_member
      WHERE member_email = '`+ email + `' AND member_password = '`+ password + `'
      `
      conn.query(sql,
          (err, rows) => {
            // console.log("err",err);
            // console.log("rows",rows);
              if (err) {
                  throw err
              }
              else {
                  if(rows != ''){
                    callback(null, rows);
                    conn.end()
                  }else{
                    callback(null,'loginErr')
                    conn.end()
                  }
              }
          }
      )
  }
}

export default memberModel

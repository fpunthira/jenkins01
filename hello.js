const mysql = require('promise-mysql')

module.exports  = class Hello {


    get pool() {
        return mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'dev',
            password: 'Apple2019',
            database: 'test'
        })
    
    }
    
    async getData(pool) {
        let query = "select * from user_details"
        let string1 =  await pool.query(query);
        console.log(string1)
        console.log("debug02")
            
       
    }
    
    
}

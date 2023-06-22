import connection from "../database/database.js";

export function getUsers(){
    return connection.query(`SELECT * FROM passengers LIMIT 100;`)
}

export function getTravelsByUser(passengerId){
    return connection.query(`SELECT * FROM passenger_travels WHERE passenger_travels."passengerId" = $1;`, [passengerId]);
}
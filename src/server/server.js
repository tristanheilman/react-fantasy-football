const express = require('express');
const mysql = require('mysql');
const { Connection, Request } = require("tedious");

const app = express();
const port = 8000;

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "azureuser", // update me
      password: "Password1234" // update me
    },
    type: "default"
  },
  server: "sqlservermidterm.database.windows.net", // update me
  options: {
    database: "nflmidterm", //update me
    encrypt: true
  }
};

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
    const connection = new Connection(config);

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
      if (err) {
        console.error(err.message);
      } else {
          queryDatabase(connection, res);
      }
    });
});

function queryDatabase(conn, result) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    let data = [];
    const request = new Request(
        `SELECT * FROM [dbo].[Teams]`,
        (err, rowCount, rows) => {
            if (err) {
                result.send({ status: 500, data: null, message: "internal server error."});
            } else {
                result.send({ status: 200, data: data, message: "OK"});
            }
        }
    );

    request.on('row', function(row){
        data.push({
            id: row[0].value,
            team: row[1].value,
            LastYearPoints: row[2].value,
            ThisYearPoints: row[3].value
        });
    })

    conn.execSql(request);
}

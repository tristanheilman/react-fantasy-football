require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const { Connection, Request } = require("tedious");

const app = express();
const port = 8000;

// Create connection to database
console.log("ENV PROCESS: ", process.env);
const config = {
  authentication: {
    options: {
      userName: "azureuser",
      password: "Password1234"
    },
    type: "default"
  },
  server: "sqlservermidterm.database.windows.net",
  options: {
    database: "nflmidterm",
    encrypt: true
  }
};
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API Functions
app.get('/api/users', (req, res) => {
    const connection = new Connection(config);

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
      if (err) {
        console.error(err.message);
      } else {
          console.log("HERE")
          queryDatabase(connection, res);
      }
    });
});

// Query Functions
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

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

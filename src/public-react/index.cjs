const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

// crear el servidor web
const server = express();
// server.use(express.json());

// necesito que mi servidor acepte peticiones externas
server.use(cors());
server.use(express.json({limit: '10mb'}));
server.set('view engine', 'ejs');

async function getDBConnection() {
    const connection = await mysql.createConnection({
      // configuro la conexión
      host: "sql.freedb.tech",
      user: "freedb_Griselda",
      password: "%9K6&8TyTVY2JW@",
      database: "freedb_Proyecto createCard",
    });
  
    connection.connect(); // conecto
  
    return connection;
  }
  
// establecer el puerto de conexión
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5002;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});


server.get("/projects", async (req, res) => {
    //try para errores
    try {
      const connection = await getDBConnection();
      const sqlQuery =
       "SELECT * FROM `freedb_Proyecto createCard`.card";
      const [projectsResult] = await connection.query(sqlQuery);
      await connection.end();
      console.log("projectsResult", projectsResult);
      res.json({
        success: true,
        result: projectsResult,
      });
    } catch (e) {
      res.status(500);
      res.json({
        success: false,
        result: [],
        error: e,
      });
    }
  });
  
  server.post("/projects", async (req, res) => {
    try {
      const connection = await getDBConnection();
      const params = req.body;
      const autorQuerySQL =
      "INSERT INTO card (color_palette, name, job, email, photo, phone, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const [projectResult] = await connection.query(autorQuerySQL, [
        params.color_palette,
        params.name,
        params.job,
        params.email,
        params.photo,
        params.phone,
        params.linkedin,
        params.github
      ]);
  
      connection.end();
      console.log("projectResult", projectResult);
      res.json({
        success:true,
        result: projectResult,
        cardUrl: `https://create-card-cs6c.onrender.com/detail/${projectResult.insertId}`,
      });
    } catch (e) {
      res.status(500);
      res.json({
        success: false,
        error: e,
      });
    }
  });

  server.get("/detail/:id", async (req, res) => {
    const connection = await getDBConnection();
    const id = req.params.id;
    const sqlQuery =
      "SELECT * FROM card WHERE idcard = ?";
    const [result] = await connection.query(sqlQuery, [id]);
    connection.end();
    console.log(result);
    res.render("detail", { result: { ...result[0] } });
  });

const staticServer = "./web/public";
server.use(express.static(staticServer));

const ServerPublicStyles = './src/public-react/public-css';
server.use(express.static(ServerPublicStyles));

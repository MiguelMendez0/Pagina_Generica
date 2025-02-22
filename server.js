const express = require('express');
let mysql = require("mysql");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

let conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Fastnet#98",
  database: "generic",
  port: 3307
});

conexion.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Conexión exitosa");
  }
});

// Middleware para parsear JSON del cuerpo de la solicitud
app.use(express.json()); // Si el formulario envía JSON
app.use(express.urlencoded({ extended: true })); // Si el formulario envía datos tipo formulario

// Servir archivos estáticos desde las carpetas adecuadas
app.use('/assets', express.static('ASSETS'));
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));
app.use('/COMPONENTS', express.static(path.join(__dirname, 'COMPONENTS')));
app.use('/VIEWS', express.static(path.join(__dirname, 'VIEWS')));  // Servir la carpeta VIEWS

// Establecer el motor de plantillas (EJS)
app.set('view engine', 'ejs');

// Establecer el directorio para las vistas
app.set('views', path.join(__dirname, 'VIEWS'));

//Establecer rutas para servir los html
app.get('/', (req, res) => {
  res.render('index'); // Aquí debe ser 'index.ejs' dentro de 'VIEWS'
});

app.get('/menu-uno', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'menu-uno.html')); // Ruta específica
});

app.get('/menu-dos', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'menu-dos.html'));
});

app.get('/menu-tres', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'menu-tres.html'));
});

app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'registro.html'));
});

app.post("/usuario", (req, res) => {
  console.log(req.body); // Verificar los datos que llegan

  // Desestructuración de los datos recibidos desde el frontend
  datos = { 
    nombre, 
    primerapellido, 
    segundoapellido, 
    codigo_postal, 
    pais, 
    estado, 
    municipio, 
    colonia, 
    calle, 
    num_ext, 
    num_int, 
    correo, 
    contraseña 
  } = req.body;

  console.log(req.body.nombre);

  // Query para insertar los datos en la base de datos
  const data_base = `
    INSERT INTO usuarios (
      nombre, apellido_uno, apellido_dos, codigo_postal, pais, estado, 
      municipio, colonia, calle, num_interior, num_exterior, correo, contraseña
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  // Ejecutar la consulta
  conexion.query(data_base, [
    nombre, primerapellido, segundoapellido, codigo_postal, pais, estado, 
    municipio, colonia, calle, num_int, num_ext, correo, contraseña
  ], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ mensaje: "ÉXITO", id: result.insertId });
  });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

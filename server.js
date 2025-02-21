const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;





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

app.get('/menu-uno', (req,res) => {
  res.sendFile(path.join(__dirname, 'VIEWS', 'menu-uno.html')); // Ruta específica
});

app.get('/menu-dos', (req,res) =>{
  res.sendFile(path.join(__dirname, 'VIEWS', 'menu-dos.html'));
})

app.get('/menu-tres', (req,res) =>{
  res.sendFile(path.join(__dirname, 'VIEWS', 'menu-tres.html'));
})

app.get('/registro', (req,res) =>{
  res.sendFile(path.join(__dirname, 'VIEWS', 'registro.html'));
})





// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

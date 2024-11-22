const jsonServer = require("json-server");
const express = require("express");
const path = require("path");

const app = express();
const router = jsonServer.router(path.join(__dirname, "../coffe.json")); // Lokasi file JSON
const middlewares = jsonServer.defaults();

app.use(middlewares); // Middleware standar
app.use(express.json()); // Untuk membaca body JSON
app.use(router); // Semua route CRUD dikelola JSON Server

module.exports = app;

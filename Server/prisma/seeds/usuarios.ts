import { Role } from "../../generated/prisma";

export const usuarios = [
  //Usuario 1 
  {
    nombre: "Kisha Perez Soto",
    correo: "admin1@prueba.com",
    password: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.ADMIN,
  },
  //Usuario 2
  {
    nombre: "Johainer Fernandez Miranda",
    correo: "admin2@prueba.com",
    password: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
    role: Role.ADMIN,
  },

  //Usuario 3
  {
    nombre: "Ericka Ovares Sandoval",
    correo: "cliente1@prueba.com",
    password: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
  },

  //Usuario 4
  {
    nombre: "Angélica Gonzalez Madrigal",
    correo: "cliente2@prueba.com",
    password: "$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO",
  },
];
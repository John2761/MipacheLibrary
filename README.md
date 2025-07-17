# MipacheLibrary
Proyecto de Apliaciones Web de Software libre, basado en un emprendimiento de libreria con facturación y sistema de productos personalizados

Cargar Node_modules, con el terminal en la carpeta server usando 
npm install

--- PRISMA ---
--- PASOS PARA CAMBIAR ALGO EN LA BASE DE DATOS ---

---Borrar tablas y datos y volver a generar---
npx prisma migrate reset

---Crea una migración y actualizar la base de datos con los cambios actuales del esquema.---
npx prisma migrate dev --name init ( Insertar nombre para la migracion, sin parentesis )

---Correr solo el seed---
npx prisma db seed

---Correr servidor---
npm run dev

---Detener ejecución---
Ctrl + c 


-========================================================================-
---ANGULAR---

---Ejecutar la aplicación Angular---
ng serve 

---Ejecutar la aplicación Angular y abrirla en el navegador por defecto---
ng serve -o 

---Detener ejecución---
Ctrl + c 

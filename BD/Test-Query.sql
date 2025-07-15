USE MipacheLibrary;
SELECT * FROM imagen;

SELECT 
  p.id AS producto_id,
  p.nombre AS nombre_producto,
  i.id AS imagen_id,
  i.ruta AS ruta_imagen
FROM 
  Producto p
LEFT JOIN 
  Imagen i ON i.productoId = p.id;
  
SELECT * FROM Promocion;

SELECT * FROM Producto;

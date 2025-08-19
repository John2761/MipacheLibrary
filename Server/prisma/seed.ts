import { PrismaClient } from "../generated/prisma";
import { categorias } from "./seeds/categorias";
import { etiquetas } from "./seeds/etiquetas";
import { PrecioColor, PrecioMaterial, PrecioTamanno } from "./seeds/precios";
import { usuarios } from "./seeds/usuarios";

const prisma = new PrismaClient();

const main = async () => {
  try {
    //categorias - no tiene relaciones
    await prisma.categoria.createMany({
      data: categorias,
    });

    //PrecioColor - no tiene relaciones
    await prisma.precioColor.createMany({
      data: PrecioColor,
    });
    //PrecioMaterial - no tiene relaciones
    await prisma.precioMaterial.createMany({
      data: PrecioMaterial,
    });
    //PrecioTamanno - no tiene relaciones
    await prisma.precioTamanno.createMany({
      data: PrecioTamanno,
    });

    //Usuarios - no tiene relaciones
    await prisma.usuario.createMany({
      data: usuarios,
    });

    //Etiquetas
    await prisma.etiqueta.createMany({
      data: etiquetas,
    });

    //Productos - con relaciones incluidas
    //PRODUCTO PERSONALIZADO
    await prisma.producto.create({
  data: {
    nombre: "Bolsa para libros (Personalizable)",
    descripcion:
      "Empaca tus libros y llevalos donde quieras siempre ordenados con nuestra bolsa para libros completamente personalizable /n" + 
      "lleva tu saga favorita contigo o tus libros pendientes para que puedas seguir desde donde lo dejaste sin tener que esperar",
    precio: 11200.0,
    stock: 10,
    imagenPrincipal: "Bolsa-personalizada.jpg",
    imagenes: {
      create: [
        { ruta: "Bolsa-personalizada.jpg" },
      ],
    },
    esPersonalizado: true,
  },
});

    // Producto 1
await prisma.producto.create({
  data: {
    nombre: "Erase una vez un corazón roto",
    descripcion:
      "Evangeline Fox se crio en la tienda de curiosidades de su amado padre, donde creció con leyendas sobre inmortales, como el trágico Príncipe de Corazones.",
    precio: 11200.0,
    stock: 10,
    imagenPrincipal: "Erase-una-vez-un-corazon-roto.jpg",
    imagenes: {
      create: [
        { ruta: "Erase-una-vez-un-corazon-roto.jpg" },
        { ruta: "Erase-una-vez-1.jpg" },
      ],
    },
    autor: "Stephanie Garber",
    fechaCreacion: new Date("2021-09-28"),
    categorias: {
      create: [
        { categoria: { connect: { id: 4 } } },
        { categoria: { connect: { id: 5 } } },
      ],
    },
    etiquetas: {
      create: [
        { etiqueta: { connect: { id: 1 } } }, // Pasta dura
        { etiqueta: { connect: { id: 2 } } }, // Español
        { etiqueta: { connect: { id: 3 } } }, // Ficción
      ],
    },
  },
});

// Producto 2
await prisma.producto.create({
  data: {
    nombre: "La balada de nunca jamás",
    descripcion:
      "Haciendo estragos en la vida de Evangeline, en lugar de un hechizo de amor, hay un encantamiento mortal...",
    precio: 11350.0,
    stock: 10,
    imagenPrincipal: "La-balada-de-nunca-jamas.jpg",
    imagenes: {
      create: [
        { ruta: "La-balada-de-nunca-jamas.jpg" },
        { ruta: "La-balada-1.jpg" },
      ],
    },
    autor: "Stephanie Garber",
    fechaCreacion: new Date("2022-09-28"),
    categorias: {
      create: [{ categoria: { connect: { id: 4 } } }],
    },
    etiquetas: {
      create: [
        { etiqueta: { connect: { id: 1 } } },
        { etiqueta: { connect: { id: 2 } } },
        { etiqueta: { connect: { id: 4 } } }, // Literatura
      ],
    },
  },
});

// Producto 3
await prisma.producto.create({
  data: {
    nombre: "La maldición del amor verdadero",
    descripcion:
      "Una chica y una batalla mortal para conseguir un final feliz...",
    precio: 14800.0,
    stock: 10,
    imagenPrincipal: "La-maldicion-del-amor-verdadero.jpg",
    imagenes: {
      create: [{ ruta: "La-maldicion-del-amor-verdadero.jpg" }],
    },
    autor: "Stephanie Garber",
    fechaCreacion: new Date("2024-02-06"),
    categorias: {
      create: [
        { categoria: { connect: { id: 4 } } },
        { categoria: { connect: { id: 5 } } },
      ],
    },
    etiquetas: {
      create: [
        { etiqueta: { connect: { id: 1 } } },
        { etiqueta: { connect: { id: 2 } } },
        { etiqueta: { connect: { id: 5 } } }, // Adulto Joven
      ],
    },
  },
});

// Producto 4
await prisma.producto.create({
  data: {
    nombre: "Una corte de rosas y espinas",
    descripcion:
      "Cuando la cazadora de diecinueve años llamada Feyre mata a un lobo en el bosque...",
    precio: 14800.0,
    stock: 10,
    imagenPrincipal: "Una-corte-de-rosas-y-espinas.jpg",
    imagenes: {
      create: [
        { ruta: "Una-corte-de-rosas-y-espinas.jpg" },
        { ruta: "Una-corte-1.jpg" },
        { ruta: "Una-corte-2.jpg" },
      ],
    },
    autor: "Sarah J. Maas",
    fechaCreacion: new Date("2015-05-05"),
    categorias: {
      create: [
        { categoria: { connect: { id: 4 } } },
        { categoria: { connect: { id: 5 } } },
        { categoria: { connect: { id: 8 } } },
        { categoria: { connect: { id: 9 } } },
      ],
    },
    etiquetas: {
      create: [
        { etiqueta: { connect: { id: 1 } } },
        { etiqueta: { connect: { id: 2 } } },
        { etiqueta: { connect: { id: 3 } } },
        { etiqueta: { connect: { id: 5 } } },
      ],
    },
  },
});

// Producto 5
await prisma.producto.create({
  data: {
    nombre: "De sangre y cenizas",
    descripcion:
      "La historia sigue a Poppy, una joven que ha sido elegida para ser la Doncella...",
    precio: 16800.0,
    stock: 10,
    imagenPrincipal: "De-sangre-y-cenizas.jpg",
    imagenes: {
      create: [
        { ruta: "De-sangre-y-cenizas.jpg" },
        { ruta: "De-sangre-1.jpg" },
      ],
    },
    autor: "Jennifer L. Armentrout",
    fechaCreacion: new Date("2021-10-05"),
    categorias: {
      create: [
        { categoria: { connect: { id: 2 } } },
        { categoria: { connect: { id: 4 } } },
        { categoria: { connect: { id: 9 } } },
      ],
    },
    etiquetas: {
      create: [
        { etiqueta: { connect: { id: 1 } } },
        { etiqueta: { connect: { id: 2 } } },
        { etiqueta: { connect: { id: 3 } } },
      ],
    },
  },
});

// Producto 6
await prisma.producto.create({
  data: {
    nombre: "Powerless",
    descripcion:
      "Cuando el rey decreta que todos los vulgares serán eliminados...",
    precio: 18000.0,
    stock: 10,
    imagenPrincipal: "Powerless.jpg",
    imagenes: {
      create: [{ ruta: "Powerless.jpg" }, { ruta: "Powerless-1.jpg" }],
    },
    autor: "Lauren Roberts",
    fechaCreacion: new Date("2024-02-08"),
    categorias: {
      create: [
        { categoria: { connect: { id: 2 } } },
        { categoria: { connect: { id: 4 } } },
        { categoria: { connect: { id: 9 } } },
      ],
    },
    etiquetas: {
      create: [
        { etiqueta: { connect: { id: 1 } } },
        { etiqueta: { connect: { id: 2 } } },
        { etiqueta: { connect: { id: 5 } } },
      ],
    },
  },
});

    await prisma.resena.create({
      data: {
        valoracion: 4,
        comentario: "BOTY",
        usuarioId: 1,
        productoId: 4,
      },
    });

    await prisma.resena.create({
      data: {
        valoracion: 5,
        comentario: "Me encantó este libro",
        usuarioId: 2,
        productoId: 5,
      },
    });

    //PROMOCIONES 
    await prisma.promocion.create({
      data: {
        nombre: "Descuento Verano",
        descuento: 10,
        tipoDescuento: "PORCENTAJE",
        fechaInicio: new Date("2025-07-01T00:00:00.000Z"),
        fechaFin: new Date("2025-07-31T00:00:00.000Z"),
        estadoPromo: "VIGENTE",
        tipoPromocion: "POR_CATEGORIA",
        categorias: {
          connect: [{ id: 9 }],
        },
      },
    });

    await prisma.promocion.create({
      data: {
        nombre: "Descuento de Julio",
        descuento: 10,
        tipoDescuento: "PORCENTAJE",
        fechaInicio: new Date("2025-07-01T00:00:00.000Z"),
        fechaFin: new Date("2025-07-31T00:00:00.000Z"),
        estadoPromo: "VIGENTE",
        tipoPromocion: "POR_PRODUCTO",
        productos: {
          connect: [{ id: 5 }],
        },
      },
    }),
      await prisma.promocion.create({
        data: {
          nombre: "Promo Junio",
          descuento: 3000,
          tipoDescuento: "MONTO_FIJO",
          fechaInicio: "2025-06-01T00:00:00.000Z",
          fechaFin: "2025-06-30T00:00:00.000Z",
          estadoPromo: "APLICADA",
          tipoPromocion: "POR_CATEGORIA",
          categorias: {
            connect: [{ id: 9 }],
          },
        },
      }),
      await prisma.promocion.create({
        data: {
          nombre: "Agosto Especial",
          descuento: 15,
          tipoDescuento: "PORCENTAJE",
          fechaInicio: "2025-08-01T00:00:00.000Z",
          fechaFin: "2025-08-15T00:00:00.000Z",
          estadoPromo: "PENDIENTE",
          tipoPromocion: "POR_PRODUCTO",
        },
      }),
      /*
    //Pedidos - con relaciones incluidas
    //Pedidos
    await prisma.pedido.create({
      data: {
        fechaPedido: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 1 }
            ],
          },
        },
      },
    });

    await prisma.pedido.create({
      data: {
        fechaPedido: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 1 },
              { cantidad: 1, productoId: 2 },
              { cantidad: 1, productoId: 3 },
            ],
          },
        },
      },
    });

    await prisma.pedido.create({
      data: {
        fechaPedido: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 3 },
              { cantidad: 2, productoId: 4 },
            ],
          },
        },
      },
    });

    await prisma.pedido.create({
      data: {
        fechaPedido: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 4 }
            ],
          },
        },
      },
    });

    await prisma.pedido.create({
      data: {
        fechaPedido: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 3 }
            ],
          },
        },
      },
    });

    await prisma.pedido.create({
      data: {
        fechaPedido: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 2 },
              { cantidad: 1, productoId: 1 },
            ],
          },
        },
      },
    });

    await prisma.pedido.create({
      data: {
        fechaOrden: new Date('2024-09-27'),
        usuarioId: 4,
        productos: {
          createMany: {
            data: [
              { cantidad: 1, productoId: 3 },
              { cantidad: 1, productoId: 4 },
            ],
          },
        },
      },
    });
    */

      // Reseñas
      await prisma.resena.createMany({
        data: [
          // Producto 1
          {
            valoracion: 4,
            comentario: "Un libro mágico y envolvente.",
            productoId: 2,
            usuarioId: 1,
          },
          {
            valoracion: 2,
            comentario: "Esperaba más de la historia.",
            productoId: 2,
            usuarioId: 2,
            moderada: true,
            observacion: "Comentario poco constructivo y ambiguo",
          },

          // Producto 2
          {
            valoracion: 5,
            comentario: "Me encantó el desarrollo de los personajes.",
            productoId: 2,
            usuarioId: 3,
          },
          {
            valoracion: 3,
            comentario: "Interesante pero lento al principio.",
            productoId: 2,
            usuarioId: 4,
          },

          // Producto 3
          {
            valoracion: 5,
            comentario: "Una conclusión perfecta para la saga.",
            productoId: 3,
            usuarioId: 1,
          },
          {
            valoracion: 1,
            comentario: "No me gustó nada.",
            productoId: 3,
            usuarioId: 2,
            moderada: true,
            observacion: "Comentario ofensivo editado por moderación",
          },

          // Producto 4
          {
            valoracion: 4,
            comentario: "Una fantasía muy bien construida.",
            productoId: 4,
            usuarioId: 3,
          },
          {
            valoracion: 5,
            comentario: "Una obra maestra moderna.",
            productoId: 4,
            usuarioId: 4,
          },

          // Producto 5
          {
            valoracion: 3,
            comentario: "No está mal, pero no es lo mío.",
            productoId: 5,
            usuarioId: 1,
          },
          {
            valoracion: 2,
            comentario: "Demasiado confuso el mundo creado.",
            productoId: 5,
            usuarioId: 2,
          },

          // Producto 6
          {
            valoracion: 4,
            comentario: "Buena trama y personajes fuertes.",
            productoId: 6,
            usuarioId: 3,
          },
          {
            valoracion: 5,
            comentario: "Me atrapó desde el inicio hasta el final.",
            productoId: 6,
            usuarioId: 4,
          },
        ],
      });
  } catch (error) {
    throw error;
  }
};
main().catch((err) => {
  console.warn("Error al ejecutar el seeder:\n", err);
});

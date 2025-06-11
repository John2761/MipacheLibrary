import { PrismaClient } from "../generated/prisma";
import { categorias } from "./seeds/categorias";
import { usuarios } from "./seeds/usuarios";

const prisma = new PrismaClient();
const main = async () => {
  try {
    //categorias - no tiene relaciones
    await prisma.categoria.createMany({
      data:categorias
    })
    //Usuarios - no tiene relaciones
    await prisma.usuario.createMany({
      data:usuarios
    })
    //Plataforma - no tiene relaciones
    
    //Productos - con relaciones incluidas
    //Productos
    await prisma.producto.create({
      //Instancia de producto 1
      data: {
        nombre: 'Erase una vez un corazón roto',
        descripcion:
          'Libro de Stephanie Garber, Evangeline Fox se crio en la tienda de curiosidades de su amado padre, donde creció con leyendas sobre inmortales, como el trágico Príncipe de Corazones.',
        precio: 11200.00,
        stock: 10,
        imagen: 'Erase-una-vez-un-corazon-roto.jpg',
        fechaCreacion: new Date("2021-09-28"),
        categorias: {
          create: [
                { categoria: { connect: { id: 4 } } },
                { categoria: { connect: { id: 5 } } }
          ]
        },
        },
      });

    //Instancia de producto 2
    await prisma.producto.create({
      data: {
        nombre: 'La balada de nunca jamás',
        descripcion:
          'Libro de Stephanie Garber, Haciendo estragos en la vida de Evangeline, en lugar de un hechizo de amor, hay un encantamiento mortal. Para romperlo, Evangeline y Jacks tendrán que batallar con viejos amigos.',
        precio: 11350.00,
        stock: 10,
        imagen: 'Balada-de-nunca-jamas.jpg',
        fechaCreacion: new Date("2022-09-28"),
        categorias: {
          create: [
                { categoria: { connect: { id: 4 } } }
          ]
        }
      },
  });

    //Instancia de producto 3
    await prisma.producto.create({
      data: {
        nombre: 'La maldición del amor verdadero',
        descripcion:
          'Libro de Stephanie Garber, una chica y una batalla mortal para conseguir un final feliz.Evangeline Fox viajó al Glorioso Norte buscando su «felices para siempre» ',
        precio: 14800.00,
        stock: 10,
        imagen: 'La-maldición-del-amor-verdadero.jpg',
        fechaCreacion: new Date("2024-02-06"),
        categorias: {
          create: [
                { categoria: { connect: { id: 4 } } },
                { categoria: { connect: { id: 5 } } }
          ]
        }
      },
    });

    //Instancia de producto 4
    await prisma.producto.create({
      data: {
        nombre: 'Una corte de rosas y espinas',
        descripcion:
          'Sarah J. Maas, Cuando la cazadora de diecinueve años llamada Feyre mata a un lobo en el bosque, una criatura misteriosa parecida a una bestia llega para cobrar su recompensa',
        precio: 14800.00,
        stock: 10,
        imagen: 'Una-corte-de-rosas-y-espinas.jpg',
        fechaCreacion: new Date("2015-05-05"),
        categorias: {
          create: [
                { categoria: { connect: { id: 4 } } },
                { categoria: { connect: { id: 5 } } },
                { categoria: { connect: { id: 8 } } },
                { categoria: { connect: { id: 9 } } }
          ]
        }
      },
    });
    //Instancia de producto 5
    await prisma.producto.create({
      data: {
        nombre: 'De Sangre y cenizas',
        descripcion:
          'Libro de Jennifer L. Armentrout, La historia sigue a Poppy, una joven que ha sido elegida para ser la Doncella, una figura sagrada que debe sacrificarse para mantener a salvo a su reino',
        precio: 16800.00,
        stock: 10,
        imagen: 'De-Sangre-y-cenizas.jpg',
        fechaCreacion: new Date("2021-10-05"),
        categorias: {
          create: [
                { categoria: { connect: { id: 2 } } },
                { categoria: { connect: { id: 4 } } },
                { categoria: { connect: { id: 9 } } }
          ]
        }
      },
    });
    //Instancia de producto 6
    await prisma.producto.create({
      data: {
        nombre: 'Powerless',
        descripcion:
          "Libro de  Lauren Roberts, cuando el rey decreta que todos los vulgares serán eliminados para preservar su sociedad de elite, carecer de poder se vuelve un crimen.",
        precio: 18000.00,
        stock: 10,
        imagen: 'Powerless.jpg',
        fechaCreacion: new Date("2024-02-08"),
        categorias: {
          create: [
                { categoria: { connect: { id: 2 } } },
                { categoria: { connect: { id: 4 } } },
                { categoria: { connect: { id: 9 } } }
          ]
        }
      },
    });

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
              { cantidad: 1, productoId: 1 },
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

  } catch (error) {
    throw error;
  }
};
main().catch((err) => {
  console.warn('Error al ejecutar el seeder:\n', err);
});

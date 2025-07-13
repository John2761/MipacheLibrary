-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `password` VARCHAR(191) NOT NULL,
    `ultimoLogin` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ruta` VARCHAR(191) NOT NULL DEFAULT 'image-not-found.jpg',
    `productoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `imagenPrincipal` VARCHAR(191) NOT NULL DEFAULT '',
    `autor` VARCHAR(191) NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaActualizacion` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `promocionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `promocionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductoCategoria` (
    `productoId` INTEGER NOT NULL,
    `categoriaId` INTEGER NOT NULL,

    PRIMARY KEY (`productoId`, `categoriaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etiqueta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductoEtiqueta` (
    `productoId` INTEGER NOT NULL,
    `etiquetaId` INTEGER NOT NULL,

    PRIMARY KEY (`productoId`, `etiquetaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaPedido` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuarioId` INTEGER NOT NULL,
    `estado` ENUM('EN_CARRITO', 'PAGADO', 'EN_ENTREGA', 'COMPLETADO') NOT NULL DEFAULT 'EN_CARRITO',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedidoProducto` (
    `cantidad` INTEGER NOT NULL,
    `precioUnitario` DECIMAL(10, 2) NOT NULL,
    `subtotal` DECIMAL(10, 2) NOT NULL,
    `impuestos` DOUBLE NOT NULL DEFAULT 1.13,
    `total` DECIMAL(10, 2) NOT NULL,
    `pedidoId` INTEGER NOT NULL,
    `productoId` INTEGER NOT NULL,
    `personalizadoId` INTEGER NULL,

    PRIMARY KEY (`pedidoId`, `productoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductoPersonalizado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` BOOLEAN NOT NULL DEFAULT true,
    `precioTotal` DECIMAL(10, 2) NOT NULL,
    `colorId` INTEGER NOT NULL,
    `materialId` INTEGER NOT NULL,
    `tamannoId` INTEGER NOT NULL,
    `productoId` INTEGER NOT NULL,
    `pedidoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrecioMaterial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrecioTamanno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrecioColor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hexa` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reseña` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valoracion` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `moderada` BOOLEAN NOT NULL DEFAULT false,
    `observacion` VARCHAR(191) NULL,
    `usuarioId` INTEGER NOT NULL,
    `productoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reporte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportadaPor` VARCHAR(191) NOT NULL DEFAULT 'Anonimo',
    `motivo` VARCHAR(500) NOT NULL,
    `reseñaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promocion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descuento` DECIMAL(10, 2) NOT NULL,
    `fechaInicio` DATETIME(3) NOT NULL,
    `fechaFin` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistorialPedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` ENUM('EN_CARRITO', 'PAGADO', 'EN_ENTREGA', 'COMPLETADO') NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoPorId` INTEGER NOT NULL,
    `pedidoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Imagen` ADD CONSTRAINT `Imagen_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_promocionId_fkey` FOREIGN KEY (`promocionId`) REFERENCES `Promocion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categoria` ADD CONSTRAINT `Categoria_promocionId_fkey` FOREIGN KEY (`promocionId`) REFERENCES `Promocion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoCategoria` ADD CONSTRAINT `ProductoCategoria_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoCategoria` ADD CONSTRAINT `ProductoCategoria_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoEtiqueta` ADD CONSTRAINT `ProductoEtiqueta_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoEtiqueta` ADD CONSTRAINT `ProductoEtiqueta_etiquetaId_fkey` FOREIGN KEY (`etiquetaId`) REFERENCES `Etiqueta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoProducto` ADD CONSTRAINT `PedidoProducto_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoProducto` ADD CONSTRAINT `PedidoProducto_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoPersonalizado` ADD CONSTRAINT `ProductoPersonalizado_colorId_fkey` FOREIGN KEY (`colorId`) REFERENCES `PrecioColor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoPersonalizado` ADD CONSTRAINT `ProductoPersonalizado_materialId_fkey` FOREIGN KEY (`materialId`) REFERENCES `PrecioMaterial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoPersonalizado` ADD CONSTRAINT `ProductoPersonalizado_tamannoId_fkey` FOREIGN KEY (`tamannoId`) REFERENCES `PrecioTamanno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoPersonalizado` ADD CONSTRAINT `ProductoPersonalizado_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoPersonalizado` ADD CONSTRAINT `ProductoPersonalizado_pedidoId_productoId_fkey` FOREIGN KEY (`pedidoId`, `productoId`) REFERENCES `PedidoProducto`(`pedidoId`, `productoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reseña` ADD CONSTRAINT `Reseña_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reseña` ADD CONSTRAINT `Reseña_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reporte` ADD CONSTRAINT `Reporte_reseñaId_fkey` FOREIGN KEY (`reseñaId`) REFERENCES `Reseña`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialPedidos` ADD CONSTRAINT `HistorialPedidos_actualizadoPorId_fkey` FOREIGN KEY (`actualizadoPorId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialPedidos` ADD CONSTRAINT `HistorialPedidos_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model ProductoCategoria
 * 
 */
export type ProductoCategoria = $Result.DefaultSelection<Prisma.$ProductoCategoriaPayload>
/**
 * Model Etiqueta
 * 
 */
export type Etiqueta = $Result.DefaultSelection<Prisma.$EtiquetaPayload>
/**
 * Model ProductoEtiqueta
 * 
 */
export type ProductoEtiqueta = $Result.DefaultSelection<Prisma.$ProductoEtiquetaPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoProducto
 * 
 */
export type PedidoProducto = $Result.DefaultSelection<Prisma.$PedidoProductoPayload>
/**
 * Model ProductoPersonalizado
 * 
 */
export type ProductoPersonalizado = $Result.DefaultSelection<Prisma.$ProductoPersonalizadoPayload>
/**
 * Model Reseña
 * 
 */
export type Reseña = $Result.DefaultSelection<Prisma.$ReseñaPayload>
/**
 * Model Promocion
 * 
 */
export type Promocion = $Result.DefaultSelection<Prisma.$PromocionPayload>
/**
 * Model HistorialPedidos
 * 
 */
export type HistorialPedidos = $Result.DefaultSelection<Prisma.$HistorialPedidosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Estado: {
  CARRITO: 'CARRITO',
  EN_PROCESO: 'EN_PROCESO',
  EN_CAMINO: 'EN_CAMINO',
  COMPLETADO: 'COMPLETADO'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productoCategoria`: Exposes CRUD operations for the **ProductoCategoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoCategorias
    * const productoCategorias = await prisma.productoCategoria.findMany()
    * ```
    */
  get productoCategoria(): Prisma.ProductoCategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etiqueta`: Exposes CRUD operations for the **Etiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etiquetas
    * const etiquetas = await prisma.etiqueta.findMany()
    * ```
    */
  get etiqueta(): Prisma.EtiquetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productoEtiqueta`: Exposes CRUD operations for the **ProductoEtiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoEtiquetas
    * const productoEtiquetas = await prisma.productoEtiqueta.findMany()
    * ```
    */
  get productoEtiqueta(): Prisma.ProductoEtiquetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoProducto`: Exposes CRUD operations for the **PedidoProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoProductos
    * const pedidoProductos = await prisma.pedidoProducto.findMany()
    * ```
    */
  get pedidoProducto(): Prisma.PedidoProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productoPersonalizado`: Exposes CRUD operations for the **ProductoPersonalizado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoPersonalizados
    * const productoPersonalizados = await prisma.productoPersonalizado.findMany()
    * ```
    */
  get productoPersonalizado(): Prisma.ProductoPersonalizadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reseña`: Exposes CRUD operations for the **Reseña** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reseñas
    * const reseñas = await prisma.reseña.findMany()
    * ```
    */
  get reseña(): Prisma.ReseñaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promocion`: Exposes CRUD operations for the **Promocion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promocions
    * const promocions = await prisma.promocion.findMany()
    * ```
    */
  get promocion(): Prisma.PromocionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialPedidos`: Exposes CRUD operations for the **HistorialPedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialPedidos
    * const historialPedidos = await prisma.historialPedidos.findMany()
    * ```
    */
  get historialPedidos(): Prisma.HistorialPedidosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Producto: 'Producto',
    Categoria: 'Categoria',
    ProductoCategoria: 'ProductoCategoria',
    Etiqueta: 'Etiqueta',
    ProductoEtiqueta: 'ProductoEtiqueta',
    Pedido: 'Pedido',
    PedidoProducto: 'PedidoProducto',
    ProductoPersonalizado: 'ProductoPersonalizado',
    Reseña: 'Reseña',
    Promocion: 'Promocion',
    HistorialPedidos: 'HistorialPedidos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "producto" | "categoria" | "productoCategoria" | "etiqueta" | "productoEtiqueta" | "pedido" | "pedidoProducto" | "productoPersonalizado" | "reseña" | "promocion" | "historialPedidos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      ProductoCategoria: {
        payload: Prisma.$ProductoCategoriaPayload<ExtArgs>
        fields: Prisma.ProductoCategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoCategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoCategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>
          }
          findFirst: {
            args: Prisma.ProductoCategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoCategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>
          }
          findMany: {
            args: Prisma.ProductoCategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>[]
          }
          create: {
            args: Prisma.ProductoCategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>
          }
          createMany: {
            args: Prisma.ProductoCategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoCategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>
          }
          update: {
            args: Prisma.ProductoCategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>
          }
          deleteMany: {
            args: Prisma.ProductoCategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoCategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoCategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoCategoriaPayload>
          }
          aggregate: {
            args: Prisma.ProductoCategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoCategoria>
          }
          groupBy: {
            args: Prisma.ProductoCategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoCategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCategoriaCountAggregateOutputType> | number
          }
        }
      }
      Etiqueta: {
        payload: Prisma.$EtiquetaPayload<ExtArgs>
        fields: Prisma.EtiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtiquetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtiquetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findFirst: {
            args: Prisma.EtiquetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtiquetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findMany: {
            args: Prisma.EtiquetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          create: {
            args: Prisma.EtiquetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          createMany: {
            args: Prisma.EtiquetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EtiquetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          update: {
            args: Prisma.EtiquetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          deleteMany: {
            args: Prisma.EtiquetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtiquetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EtiquetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          aggregate: {
            args: Prisma.EtiquetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtiqueta>
          }
          groupBy: {
            args: Prisma.EtiquetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtiquetaCountArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaCountAggregateOutputType> | number
          }
        }
      }
      ProductoEtiqueta: {
        payload: Prisma.$ProductoEtiquetaPayload<ExtArgs>
        fields: Prisma.ProductoEtiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoEtiquetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoEtiquetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>
          }
          findFirst: {
            args: Prisma.ProductoEtiquetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoEtiquetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>
          }
          findMany: {
            args: Prisma.ProductoEtiquetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>[]
          }
          create: {
            args: Prisma.ProductoEtiquetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>
          }
          createMany: {
            args: Prisma.ProductoEtiquetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoEtiquetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>
          }
          update: {
            args: Prisma.ProductoEtiquetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>
          }
          deleteMany: {
            args: Prisma.ProductoEtiquetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoEtiquetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoEtiquetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoEtiquetaPayload>
          }
          aggregate: {
            args: Prisma.ProductoEtiquetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoEtiqueta>
          }
          groupBy: {
            args: Prisma.ProductoEtiquetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoEtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoEtiquetaCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoEtiquetaCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoProducto: {
        payload: Prisma.$PedidoProductoPayload<ExtArgs>
        fields: Prisma.PedidoProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          findFirst: {
            args: Prisma.PedidoProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          findMany: {
            args: Prisma.PedidoProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>[]
          }
          create: {
            args: Prisma.PedidoProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          createMany: {
            args: Prisma.PedidoProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          update: {
            args: Prisma.PedidoProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          aggregate: {
            args: Prisma.PedidoProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoProducto>
          }
          groupBy: {
            args: Prisma.PedidoProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoProductoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoProductoCountAggregateOutputType> | number
          }
        }
      }
      ProductoPersonalizado: {
        payload: Prisma.$ProductoPersonalizadoPayload<ExtArgs>
        fields: Prisma.ProductoPersonalizadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoPersonalizadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoPersonalizadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>
          }
          findFirst: {
            args: Prisma.ProductoPersonalizadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoPersonalizadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>
          }
          findMany: {
            args: Prisma.ProductoPersonalizadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>[]
          }
          create: {
            args: Prisma.ProductoPersonalizadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>
          }
          createMany: {
            args: Prisma.ProductoPersonalizadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoPersonalizadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>
          }
          update: {
            args: Prisma.ProductoPersonalizadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoPersonalizadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoPersonalizadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoPersonalizadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPersonalizadoPayload>
          }
          aggregate: {
            args: Prisma.ProductoPersonalizadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoPersonalizado>
          }
          groupBy: {
            args: Prisma.ProductoPersonalizadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoPersonalizadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoPersonalizadoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoPersonalizadoCountAggregateOutputType> | number
          }
        }
      }
      Reseña: {
        payload: Prisma.$ReseñaPayload<ExtArgs>
        fields: Prisma.ReseñaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReseñaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReseñaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          findFirst: {
            args: Prisma.ReseñaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReseñaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          findMany: {
            args: Prisma.ReseñaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>[]
          }
          create: {
            args: Prisma.ReseñaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          createMany: {
            args: Prisma.ReseñaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReseñaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          update: {
            args: Prisma.ReseñaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          deleteMany: {
            args: Prisma.ReseñaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReseñaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReseñaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          aggregate: {
            args: Prisma.ReseñaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReseña>
          }
          groupBy: {
            args: Prisma.ReseñaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReseñaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReseñaCountArgs<ExtArgs>
            result: $Utils.Optional<ReseñaCountAggregateOutputType> | number
          }
        }
      }
      Promocion: {
        payload: Prisma.$PromocionPayload<ExtArgs>
        fields: Prisma.PromocionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromocionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromocionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          findFirst: {
            args: Prisma.PromocionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromocionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          findMany: {
            args: Prisma.PromocionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>[]
          }
          create: {
            args: Prisma.PromocionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          createMany: {
            args: Prisma.PromocionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PromocionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          update: {
            args: Prisma.PromocionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          deleteMany: {
            args: Prisma.PromocionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromocionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromocionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          aggregate: {
            args: Prisma.PromocionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromocion>
          }
          groupBy: {
            args: Prisma.PromocionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromocionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromocionCountArgs<ExtArgs>
            result: $Utils.Optional<PromocionCountAggregateOutputType> | number
          }
        }
      }
      HistorialPedidos: {
        payload: Prisma.$HistorialPedidosPayload<ExtArgs>
        fields: Prisma.HistorialPedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialPedidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialPedidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>
          }
          findFirst: {
            args: Prisma.HistorialPedidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialPedidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>
          }
          findMany: {
            args: Prisma.HistorialPedidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>[]
          }
          create: {
            args: Prisma.HistorialPedidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>
          }
          createMany: {
            args: Prisma.HistorialPedidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistorialPedidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>
          }
          update: {
            args: Prisma.HistorialPedidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>
          }
          deleteMany: {
            args: Prisma.HistorialPedidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialPedidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistorialPedidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialPedidosPayload>
          }
          aggregate: {
            args: Prisma.HistorialPedidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialPedidos>
          }
          groupBy: {
            args: Prisma.HistorialPedidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialPedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialPedidosCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialPedidosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    producto?: ProductoOmit
    categoria?: CategoriaOmit
    productoCategoria?: ProductoCategoriaOmit
    etiqueta?: EtiquetaOmit
    productoEtiqueta?: ProductoEtiquetaOmit
    pedido?: PedidoOmit
    pedidoProducto?: PedidoProductoOmit
    productoPersonalizado?: ProductoPersonalizadoOmit
    reseña?: ReseñaOmit
    promocion?: PromocionOmit
    historialPedidos?: HistorialPedidosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    pedidos: number
    reseñas: number
    historial: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
    reseñas?: boolean | UsuarioCountOutputTypeCountReseñasArgs
    historial?: boolean | UsuarioCountOutputTypeCountHistorialArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialPedidosWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    personalizado: number
    categorias: number
    etiquetas: number
    pedidos: number
    reseñas: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalizado?: boolean | ProductoCountOutputTypeCountPersonalizadoArgs
    categorias?: boolean | ProductoCountOutputTypeCountCategoriasArgs
    etiquetas?: boolean | ProductoCountOutputTypeCountEtiquetasArgs
    pedidos?: boolean | ProductoCountOutputTypeCountPedidosArgs
    reseñas?: boolean | ProductoCountOutputTypeCountReseñasArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPersonalizadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoPersonalizadoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoCategoriaWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountEtiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoEtiquetaWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProductoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountReseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoCategoriaWhereInput
  }


  /**
   * Count Type EtiquetaCountOutputType
   */

  export type EtiquetaCountOutputType = {
    productos: number
  }

  export type EtiquetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | EtiquetaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtiquetaCountOutputType
     */
    select?: EtiquetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoEtiquetaWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    productos: number
    personalizado: number
    historial: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | PedidoCountOutputTypeCountProductosArgs
    personalizado?: boolean | PedidoCountOutputTypeCountPersonalizadoArgs
    historial?: boolean | PedidoCountOutputTypeCountHistorialArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProductoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPersonalizadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoPersonalizadoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialPedidosWhereInput
  }


  /**
   * Count Type PromocionCountOutputType
   */

  export type PromocionCountOutputType = {
    productos: number
  }

  export type PromocionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | PromocionCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromocionCountOutputType
     */
    select?: PromocionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    role: $Enums.Role | null
    password: string | null
    ultimoLogin: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    role: $Enums.Role | null
    password: string | null
    ultimoLogin: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    role: number
    password: number
    ultimoLogin: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    role?: true
    password?: true
    ultimoLogin?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    role?: true
    password?: true
    ultimoLogin?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    role?: true
    password?: true
    ultimoLogin?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    role: $Enums.Role
    password: string
    ultimoLogin: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    role?: boolean
    password?: boolean
    ultimoLogin?: boolean
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    reseñas?: boolean | Usuario$reseñasArgs<ExtArgs>
    historial?: boolean | Usuario$historialArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    role?: boolean
    password?: boolean
    ultimoLogin?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "role" | "password" | "ultimoLogin", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    reseñas?: boolean | Usuario$reseñasArgs<ExtArgs>
    historial?: boolean | Usuario$historialArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      reseñas: Prisma.$ReseñaPayload<ExtArgs>[]
      historial: Prisma.$HistorialPedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      role: $Enums.Role
      password: string
      ultimoLogin: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reseñas<T extends Usuario$reseñasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reseñasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historial<T extends Usuario$historialArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly ultimoLogin: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario.reseñas
   */
  export type Usuario$reseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    where?: ReseñaWhereInput
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    cursor?: ReseñaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Usuario.historial
   */
  export type Usuario$historialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    where?: HistorialPedidosWhereInput
    orderBy?: HistorialPedidosOrderByWithRelationInput | HistorialPedidosOrderByWithRelationInput[]
    cursor?: HistorialPedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialPedidosScalarFieldEnum | HistorialPedidosScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    stock: number | null
    promocionId: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    stock: number | null
    promocionId: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    imagen: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
    promocionId: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    imagen: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
    promocionId: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    imagen: number
    fechaCreacion: number
    fechaActualizacion: number
    promocionId: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    promocionId?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    promocionId?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    imagen?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    promocionId?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    imagen?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    promocionId?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    imagen?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    promocionId?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: Decimal
    stock: number
    imagen: string
    fechaCreacion: Date
    fechaActualizacion: Date | null
    promocionId: number | null
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    imagen?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    promocionId?: boolean
    personalizado?: boolean | Producto$personalizadoArgs<ExtArgs>
    categorias?: boolean | Producto$categoriasArgs<ExtArgs>
    etiquetas?: boolean | Producto$etiquetasArgs<ExtArgs>
    pedidos?: boolean | Producto$pedidosArgs<ExtArgs>
    reseñas?: boolean | Producto$reseñasArgs<ExtArgs>
    promocion?: boolean | Producto$promocionArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    imagen?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    promocionId?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "stock" | "imagen" | "fechaCreacion" | "fechaActualizacion" | "promocionId", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalizado?: boolean | Producto$personalizadoArgs<ExtArgs>
    categorias?: boolean | Producto$categoriasArgs<ExtArgs>
    etiquetas?: boolean | Producto$etiquetasArgs<ExtArgs>
    pedidos?: boolean | Producto$pedidosArgs<ExtArgs>
    reseñas?: boolean | Producto$reseñasArgs<ExtArgs>
    promocion?: boolean | Producto$promocionArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      personalizado: Prisma.$ProductoPersonalizadoPayload<ExtArgs>[]
      categorias: Prisma.$ProductoCategoriaPayload<ExtArgs>[]
      etiquetas: Prisma.$ProductoEtiquetaPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoProductoPayload<ExtArgs>[]
      reseñas: Prisma.$ReseñaPayload<ExtArgs>[]
      promocion: Prisma.$PromocionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: Prisma.Decimal
      stock: number
      imagen: string
      fechaCreacion: Date
      fechaActualizacion: Date | null
      promocionId: number | null
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalizado<T extends Producto$personalizadoArgs<ExtArgs> = {}>(args?: Subset<T, Producto$personalizadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends Producto$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etiquetas<T extends Producto$etiquetasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$etiquetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Producto$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reseñas<T extends Producto$reseñasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$reseñasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promocion<T extends Producto$promocionArgs<ExtArgs> = {}>(args?: Subset<T, Producto$promocionArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly imagen: FieldRef<"Producto", 'String'>
    readonly fechaCreacion: FieldRef<"Producto", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Producto", 'DateTime'>
    readonly promocionId: FieldRef<"Producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.personalizado
   */
  export type Producto$personalizadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    where?: ProductoPersonalizadoWhereInput
    orderBy?: ProductoPersonalizadoOrderByWithRelationInput | ProductoPersonalizadoOrderByWithRelationInput[]
    cursor?: ProductoPersonalizadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoPersonalizadoScalarFieldEnum | ProductoPersonalizadoScalarFieldEnum[]
  }

  /**
   * Producto.categorias
   */
  export type Producto$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    where?: ProductoCategoriaWhereInput
    orderBy?: ProductoCategoriaOrderByWithRelationInput | ProductoCategoriaOrderByWithRelationInput[]
    cursor?: ProductoCategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoCategoriaScalarFieldEnum | ProductoCategoriaScalarFieldEnum[]
  }

  /**
   * Producto.etiquetas
   */
  export type Producto$etiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    where?: ProductoEtiquetaWhereInput
    orderBy?: ProductoEtiquetaOrderByWithRelationInput | ProductoEtiquetaOrderByWithRelationInput[]
    cursor?: ProductoEtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoEtiquetaScalarFieldEnum | ProductoEtiquetaScalarFieldEnum[]
  }

  /**
   * Producto.pedidos
   */
  export type Producto$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    where?: PedidoProductoWhereInput
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    cursor?: PedidoProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * Producto.reseñas
   */
  export type Producto$reseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    where?: ReseñaWhereInput
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    cursor?: ReseñaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Producto.promocion
   */
  export type Producto$promocionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    where?: PromocionWhereInput
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    descripcion: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    descripcion?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoCategoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descripcion: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    where?: ProductoCategoriaWhereInput
    orderBy?: ProductoCategoriaOrderByWithRelationInput | ProductoCategoriaOrderByWithRelationInput[]
    cursor?: ProductoCategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoCategoriaScalarFieldEnum | ProductoCategoriaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model ProductoCategoria
   */

  export type AggregateProductoCategoria = {
    _count: ProductoCategoriaCountAggregateOutputType | null
    _avg: ProductoCategoriaAvgAggregateOutputType | null
    _sum: ProductoCategoriaSumAggregateOutputType | null
    _min: ProductoCategoriaMinAggregateOutputType | null
    _max: ProductoCategoriaMaxAggregateOutputType | null
  }

  export type ProductoCategoriaAvgAggregateOutputType = {
    productoId: number | null
    categoriaId: number | null
  }

  export type ProductoCategoriaSumAggregateOutputType = {
    productoId: number | null
    categoriaId: number | null
  }

  export type ProductoCategoriaMinAggregateOutputType = {
    productoId: number | null
    categoriaId: number | null
  }

  export type ProductoCategoriaMaxAggregateOutputType = {
    productoId: number | null
    categoriaId: number | null
  }

  export type ProductoCategoriaCountAggregateOutputType = {
    productoId: number
    categoriaId: number
    _all: number
  }


  export type ProductoCategoriaAvgAggregateInputType = {
    productoId?: true
    categoriaId?: true
  }

  export type ProductoCategoriaSumAggregateInputType = {
    productoId?: true
    categoriaId?: true
  }

  export type ProductoCategoriaMinAggregateInputType = {
    productoId?: true
    categoriaId?: true
  }

  export type ProductoCategoriaMaxAggregateInputType = {
    productoId?: true
    categoriaId?: true
  }

  export type ProductoCategoriaCountAggregateInputType = {
    productoId?: true
    categoriaId?: true
    _all?: true
  }

  export type ProductoCategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoCategoria to aggregate.
     */
    where?: ProductoCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoCategorias to fetch.
     */
    orderBy?: ProductoCategoriaOrderByWithRelationInput | ProductoCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoCategorias
    **/
    _count?: true | ProductoCategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoCategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoCategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoCategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoCategoriaMaxAggregateInputType
  }

  export type GetProductoCategoriaAggregateType<T extends ProductoCategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoCategoria[P]>
      : GetScalarType<T[P], AggregateProductoCategoria[P]>
  }




  export type ProductoCategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoCategoriaWhereInput
    orderBy?: ProductoCategoriaOrderByWithAggregationInput | ProductoCategoriaOrderByWithAggregationInput[]
    by: ProductoCategoriaScalarFieldEnum[] | ProductoCategoriaScalarFieldEnum
    having?: ProductoCategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCategoriaCountAggregateInputType | true
    _avg?: ProductoCategoriaAvgAggregateInputType
    _sum?: ProductoCategoriaSumAggregateInputType
    _min?: ProductoCategoriaMinAggregateInputType
    _max?: ProductoCategoriaMaxAggregateInputType
  }

  export type ProductoCategoriaGroupByOutputType = {
    productoId: number
    categoriaId: number
    _count: ProductoCategoriaCountAggregateOutputType | null
    _avg: ProductoCategoriaAvgAggregateOutputType | null
    _sum: ProductoCategoriaSumAggregateOutputType | null
    _min: ProductoCategoriaMinAggregateOutputType | null
    _max: ProductoCategoriaMaxAggregateOutputType | null
  }

  type GetProductoCategoriaGroupByPayload<T extends ProductoCategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoCategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoCategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoCategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoCategoriaGroupByOutputType[P]>
        }
      >
    >


  export type ProductoCategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productoId?: boolean
    categoriaId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoCategoria"]>



  export type ProductoCategoriaSelectScalar = {
    productoId?: boolean
    categoriaId?: boolean
  }

  export type ProductoCategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productoId" | "categoriaId", ExtArgs["result"]["productoCategoria"]>
  export type ProductoCategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ProductoCategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoCategoria"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productoId: number
      categoriaId: number
    }, ExtArgs["result"]["productoCategoria"]>
    composites: {}
  }

  type ProductoCategoriaGetPayload<S extends boolean | null | undefined | ProductoCategoriaDefaultArgs> = $Result.GetResult<Prisma.$ProductoCategoriaPayload, S>

  type ProductoCategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoCategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCategoriaCountAggregateInputType | true
    }

  export interface ProductoCategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoCategoria'], meta: { name: 'ProductoCategoria' } }
    /**
     * Find zero or one ProductoCategoria that matches the filter.
     * @param {ProductoCategoriaFindUniqueArgs} args - Arguments to find a ProductoCategoria
     * @example
     * // Get one ProductoCategoria
     * const productoCategoria = await prisma.productoCategoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoCategoriaFindUniqueArgs>(args: SelectSubset<T, ProductoCategoriaFindUniqueArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductoCategoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoCategoriaFindUniqueOrThrowArgs} args - Arguments to find a ProductoCategoria
     * @example
     * // Get one ProductoCategoria
     * const productoCategoria = await prisma.productoCategoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoCategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoCategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoCategoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaFindFirstArgs} args - Arguments to find a ProductoCategoria
     * @example
     * // Get one ProductoCategoria
     * const productoCategoria = await prisma.productoCategoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoCategoriaFindFirstArgs>(args?: SelectSubset<T, ProductoCategoriaFindFirstArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoCategoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaFindFirstOrThrowArgs} args - Arguments to find a ProductoCategoria
     * @example
     * // Get one ProductoCategoria
     * const productoCategoria = await prisma.productoCategoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoCategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoCategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductoCategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoCategorias
     * const productoCategorias = await prisma.productoCategoria.findMany()
     * 
     * // Get first 10 ProductoCategorias
     * const productoCategorias = await prisma.productoCategoria.findMany({ take: 10 })
     * 
     * // Only select the `productoId`
     * const productoCategoriaWithProductoIdOnly = await prisma.productoCategoria.findMany({ select: { productoId: true } })
     * 
     */
    findMany<T extends ProductoCategoriaFindManyArgs>(args?: SelectSubset<T, ProductoCategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductoCategoria.
     * @param {ProductoCategoriaCreateArgs} args - Arguments to create a ProductoCategoria.
     * @example
     * // Create one ProductoCategoria
     * const ProductoCategoria = await prisma.productoCategoria.create({
     *   data: {
     *     // ... data to create a ProductoCategoria
     *   }
     * })
     * 
     */
    create<T extends ProductoCategoriaCreateArgs>(args: SelectSubset<T, ProductoCategoriaCreateArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductoCategorias.
     * @param {ProductoCategoriaCreateManyArgs} args - Arguments to create many ProductoCategorias.
     * @example
     * // Create many ProductoCategorias
     * const productoCategoria = await prisma.productoCategoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCategoriaCreateManyArgs>(args?: SelectSubset<T, ProductoCategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductoCategoria.
     * @param {ProductoCategoriaDeleteArgs} args - Arguments to delete one ProductoCategoria.
     * @example
     * // Delete one ProductoCategoria
     * const ProductoCategoria = await prisma.productoCategoria.delete({
     *   where: {
     *     // ... filter to delete one ProductoCategoria
     *   }
     * })
     * 
     */
    delete<T extends ProductoCategoriaDeleteArgs>(args: SelectSubset<T, ProductoCategoriaDeleteArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductoCategoria.
     * @param {ProductoCategoriaUpdateArgs} args - Arguments to update one ProductoCategoria.
     * @example
     * // Update one ProductoCategoria
     * const productoCategoria = await prisma.productoCategoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoCategoriaUpdateArgs>(args: SelectSubset<T, ProductoCategoriaUpdateArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductoCategorias.
     * @param {ProductoCategoriaDeleteManyArgs} args - Arguments to filter ProductoCategorias to delete.
     * @example
     * // Delete a few ProductoCategorias
     * const { count } = await prisma.productoCategoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoCategoriaDeleteManyArgs>(args?: SelectSubset<T, ProductoCategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoCategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoCategorias
     * const productoCategoria = await prisma.productoCategoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoCategoriaUpdateManyArgs>(args: SelectSubset<T, ProductoCategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductoCategoria.
     * @param {ProductoCategoriaUpsertArgs} args - Arguments to update or create a ProductoCategoria.
     * @example
     * // Update or create a ProductoCategoria
     * const productoCategoria = await prisma.productoCategoria.upsert({
     *   create: {
     *     // ... data to create a ProductoCategoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoCategoria we want to update
     *   }
     * })
     */
    upsert<T extends ProductoCategoriaUpsertArgs>(args: SelectSubset<T, ProductoCategoriaUpsertArgs<ExtArgs>>): Prisma__ProductoCategoriaClient<$Result.GetResult<Prisma.$ProductoCategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductoCategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaCountArgs} args - Arguments to filter ProductoCategorias to count.
     * @example
     * // Count the number of ProductoCategorias
     * const count = await prisma.productoCategoria.count({
     *   where: {
     *     // ... the filter for the ProductoCategorias we want to count
     *   }
     * })
    **/
    count<T extends ProductoCategoriaCountArgs>(
      args?: Subset<T, ProductoCategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoCategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoCategoriaAggregateArgs>(args: Subset<T, ProductoCategoriaAggregateArgs>): Prisma.PrismaPromise<GetProductoCategoriaAggregateType<T>>

    /**
     * Group by ProductoCategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoCategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoCategoriaGroupByArgs['orderBy'] }
        : { orderBy?: ProductoCategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoCategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoCategoria model
   */
  readonly fields: ProductoCategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoCategoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoCategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoCategoria model
   */
  interface ProductoCategoriaFieldRefs {
    readonly productoId: FieldRef<"ProductoCategoria", 'Int'>
    readonly categoriaId: FieldRef<"ProductoCategoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductoCategoria findUnique
   */
  export type ProductoCategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoCategoria to fetch.
     */
    where: ProductoCategoriaWhereUniqueInput
  }

  /**
   * ProductoCategoria findUniqueOrThrow
   */
  export type ProductoCategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoCategoria to fetch.
     */
    where: ProductoCategoriaWhereUniqueInput
  }

  /**
   * ProductoCategoria findFirst
   */
  export type ProductoCategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoCategoria to fetch.
     */
    where?: ProductoCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoCategorias to fetch.
     */
    orderBy?: ProductoCategoriaOrderByWithRelationInput | ProductoCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoCategorias.
     */
    cursor?: ProductoCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoCategorias.
     */
    distinct?: ProductoCategoriaScalarFieldEnum | ProductoCategoriaScalarFieldEnum[]
  }

  /**
   * ProductoCategoria findFirstOrThrow
   */
  export type ProductoCategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoCategoria to fetch.
     */
    where?: ProductoCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoCategorias to fetch.
     */
    orderBy?: ProductoCategoriaOrderByWithRelationInput | ProductoCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoCategorias.
     */
    cursor?: ProductoCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoCategorias.
     */
    distinct?: ProductoCategoriaScalarFieldEnum | ProductoCategoriaScalarFieldEnum[]
  }

  /**
   * ProductoCategoria findMany
   */
  export type ProductoCategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoCategorias to fetch.
     */
    where?: ProductoCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoCategorias to fetch.
     */
    orderBy?: ProductoCategoriaOrderByWithRelationInput | ProductoCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoCategorias.
     */
    cursor?: ProductoCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoCategorias.
     */
    skip?: number
    distinct?: ProductoCategoriaScalarFieldEnum | ProductoCategoriaScalarFieldEnum[]
  }

  /**
   * ProductoCategoria create
   */
  export type ProductoCategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoCategoria.
     */
    data: XOR<ProductoCategoriaCreateInput, ProductoCategoriaUncheckedCreateInput>
  }

  /**
   * ProductoCategoria createMany
   */
  export type ProductoCategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoCategorias.
     */
    data: ProductoCategoriaCreateManyInput | ProductoCategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoCategoria update
   */
  export type ProductoCategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoCategoria.
     */
    data: XOR<ProductoCategoriaUpdateInput, ProductoCategoriaUncheckedUpdateInput>
    /**
     * Choose, which ProductoCategoria to update.
     */
    where: ProductoCategoriaWhereUniqueInput
  }

  /**
   * ProductoCategoria updateMany
   */
  export type ProductoCategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoCategorias.
     */
    data: XOR<ProductoCategoriaUpdateManyMutationInput, ProductoCategoriaUncheckedUpdateManyInput>
    /**
     * Filter which ProductoCategorias to update
     */
    where?: ProductoCategoriaWhereInput
    /**
     * Limit how many ProductoCategorias to update.
     */
    limit?: number
  }

  /**
   * ProductoCategoria upsert
   */
  export type ProductoCategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoCategoria to update in case it exists.
     */
    where: ProductoCategoriaWhereUniqueInput
    /**
     * In case the ProductoCategoria found by the `where` argument doesn't exist, create a new ProductoCategoria with this data.
     */
    create: XOR<ProductoCategoriaCreateInput, ProductoCategoriaUncheckedCreateInput>
    /**
     * In case the ProductoCategoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoCategoriaUpdateInput, ProductoCategoriaUncheckedUpdateInput>
  }

  /**
   * ProductoCategoria delete
   */
  export type ProductoCategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
    /**
     * Filter which ProductoCategoria to delete.
     */
    where: ProductoCategoriaWhereUniqueInput
  }

  /**
   * ProductoCategoria deleteMany
   */
  export type ProductoCategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoCategorias to delete
     */
    where?: ProductoCategoriaWhereInput
    /**
     * Limit how many ProductoCategorias to delete.
     */
    limit?: number
  }

  /**
   * ProductoCategoria without action
   */
  export type ProductoCategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCategoria
     */
    select?: ProductoCategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoCategoria
     */
    omit?: ProductoCategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoCategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Etiqueta
   */

  export type AggregateEtiqueta = {
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  export type EtiquetaAvgAggregateOutputType = {
    id: number | null
  }

  export type EtiquetaSumAggregateOutputType = {
    id: number | null
  }

  export type EtiquetaMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type EtiquetaMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type EtiquetaCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type EtiquetaAvgAggregateInputType = {
    id?: true
  }

  export type EtiquetaSumAggregateInputType = {
    id?: true
  }

  export type EtiquetaMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type EtiquetaMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type EtiquetaCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type EtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiqueta to aggregate.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etiquetas
    **/
    _count?: true | EtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtiquetaMaxAggregateInputType
  }

  export type GetEtiquetaAggregateType<T extends EtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiqueta[P]>
      : GetScalarType<T[P], AggregateEtiqueta[P]>
  }




  export type EtiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithAggregationInput | EtiquetaOrderByWithAggregationInput[]
    by: EtiquetaScalarFieldEnum[] | EtiquetaScalarFieldEnum
    having?: EtiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtiquetaCountAggregateInputType | true
    _avg?: EtiquetaAvgAggregateInputType
    _sum?: EtiquetaSumAggregateInputType
    _min?: EtiquetaMinAggregateInputType
    _max?: EtiquetaMaxAggregateInputType
  }

  export type EtiquetaGroupByOutputType = {
    id: number
    descripcion: string
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  type GetEtiquetaGroupByPayload<T extends EtiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type EtiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    productos?: boolean | Etiqueta$productosArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>



  export type EtiquetaSelectScalar = {
    id?: boolean
    descripcion?: boolean
  }

  export type EtiquetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion", ExtArgs["result"]["etiqueta"]>
  export type EtiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Etiqueta$productosArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EtiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etiqueta"
    objects: {
      productos: Prisma.$ProductoEtiquetaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descripcion: string
    }, ExtArgs["result"]["etiqueta"]>
    composites: {}
  }

  type EtiquetaGetPayload<S extends boolean | null | undefined | EtiquetaDefaultArgs> = $Result.GetResult<Prisma.$EtiquetaPayload, S>

  type EtiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtiquetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtiquetaCountAggregateInputType | true
    }

  export interface EtiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etiqueta'], meta: { name: 'Etiqueta' } }
    /**
     * Find zero or one Etiqueta that matches the filter.
     * @param {EtiquetaFindUniqueArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtiquetaFindUniqueArgs>(args: SelectSubset<T, EtiquetaFindUniqueArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtiquetaFindUniqueOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtiquetaFindUniqueOrThrowArgs>(args: SelectSubset<T, EtiquetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtiquetaFindFirstArgs>(args?: SelectSubset<T, EtiquetaFindFirstArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtiquetaFindFirstOrThrowArgs>(args?: SelectSubset<T, EtiquetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany()
     * 
     * // Get first 10 Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtiquetaFindManyArgs>(args?: SelectSubset<T, EtiquetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etiqueta.
     * @param {EtiquetaCreateArgs} args - Arguments to create a Etiqueta.
     * @example
     * // Create one Etiqueta
     * const Etiqueta = await prisma.etiqueta.create({
     *   data: {
     *     // ... data to create a Etiqueta
     *   }
     * })
     * 
     */
    create<T extends EtiquetaCreateArgs>(args: SelectSubset<T, EtiquetaCreateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etiquetas.
     * @param {EtiquetaCreateManyArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtiquetaCreateManyArgs>(args?: SelectSubset<T, EtiquetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Etiqueta.
     * @param {EtiquetaDeleteArgs} args - Arguments to delete one Etiqueta.
     * @example
     * // Delete one Etiqueta
     * const Etiqueta = await prisma.etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Etiqueta
     *   }
     * })
     * 
     */
    delete<T extends EtiquetaDeleteArgs>(args: SelectSubset<T, EtiquetaDeleteArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etiqueta.
     * @param {EtiquetaUpdateArgs} args - Arguments to update one Etiqueta.
     * @example
     * // Update one Etiqueta
     * const etiqueta = await prisma.etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtiquetaUpdateArgs>(args: SelectSubset<T, EtiquetaUpdateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etiquetas.
     * @param {EtiquetaDeleteManyArgs} args - Arguments to filter Etiquetas to delete.
     * @example
     * // Delete a few Etiquetas
     * const { count } = await prisma.etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtiquetaDeleteManyArgs>(args?: SelectSubset<T, EtiquetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtiquetaUpdateManyArgs>(args: SelectSubset<T, EtiquetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Etiqueta.
     * @param {EtiquetaUpsertArgs} args - Arguments to update or create a Etiqueta.
     * @example
     * // Update or create a Etiqueta
     * const etiqueta = await prisma.etiqueta.upsert({
     *   create: {
     *     // ... data to create a Etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etiqueta we want to update
     *   }
     * })
     */
    upsert<T extends EtiquetaUpsertArgs>(args: SelectSubset<T, EtiquetaUpsertArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaCountArgs} args - Arguments to filter Etiquetas to count.
     * @example
     * // Count the number of Etiquetas
     * const count = await prisma.etiqueta.count({
     *   where: {
     *     // ... the filter for the Etiquetas we want to count
     *   }
     * })
    **/
    count<T extends EtiquetaCountArgs>(
      args?: Subset<T, EtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtiquetaAggregateArgs>(args: Subset<T, EtiquetaAggregateArgs>): Prisma.PrismaPromise<GetEtiquetaAggregateType<T>>

    /**
     * Group by Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: EtiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etiqueta model
   */
  readonly fields: EtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Etiqueta$productosArgs<ExtArgs> = {}>(args?: Subset<T, Etiqueta$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etiqueta model
   */
  interface EtiquetaFieldRefs {
    readonly id: FieldRef<"Etiqueta", 'Int'>
    readonly descripcion: FieldRef<"Etiqueta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Etiqueta findUnique
   */
  export type EtiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findUniqueOrThrow
   */
  export type EtiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findFirst
   */
  export type EtiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findFirstOrThrow
   */
  export type EtiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findMany
   */
  export type EtiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiquetas to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta create
   */
  export type EtiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Etiqueta.
     */
    data: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
  }

  /**
   * Etiqueta createMany
   */
  export type EtiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etiqueta update
   */
  export type EtiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Etiqueta.
     */
    data: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
    /**
     * Choose, which Etiqueta to update.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta updateMany
   */
  export type EtiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to update.
     */
    limit?: number
  }

  /**
   * Etiqueta upsert
   */
  export type EtiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Etiqueta to update in case it exists.
     */
    where: EtiquetaWhereUniqueInput
    /**
     * In case the Etiqueta found by the `where` argument doesn't exist, create a new Etiqueta with this data.
     */
    create: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
    /**
     * In case the Etiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
  }

  /**
   * Etiqueta delete
   */
  export type EtiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter which Etiqueta to delete.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta deleteMany
   */
  export type EtiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiquetas to delete
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to delete.
     */
    limit?: number
  }

  /**
   * Etiqueta.productos
   */
  export type Etiqueta$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    where?: ProductoEtiquetaWhereInput
    orderBy?: ProductoEtiquetaOrderByWithRelationInput | ProductoEtiquetaOrderByWithRelationInput[]
    cursor?: ProductoEtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoEtiquetaScalarFieldEnum | ProductoEtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta without action
   */
  export type EtiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
  }


  /**
   * Model ProductoEtiqueta
   */

  export type AggregateProductoEtiqueta = {
    _count: ProductoEtiquetaCountAggregateOutputType | null
    _avg: ProductoEtiquetaAvgAggregateOutputType | null
    _sum: ProductoEtiquetaSumAggregateOutputType | null
    _min: ProductoEtiquetaMinAggregateOutputType | null
    _max: ProductoEtiquetaMaxAggregateOutputType | null
  }

  export type ProductoEtiquetaAvgAggregateOutputType = {
    productoId: number | null
    etiquetaId: number | null
  }

  export type ProductoEtiquetaSumAggregateOutputType = {
    productoId: number | null
    etiquetaId: number | null
  }

  export type ProductoEtiquetaMinAggregateOutputType = {
    productoId: number | null
    etiquetaId: number | null
  }

  export type ProductoEtiquetaMaxAggregateOutputType = {
    productoId: number | null
    etiquetaId: number | null
  }

  export type ProductoEtiquetaCountAggregateOutputType = {
    productoId: number
    etiquetaId: number
    _all: number
  }


  export type ProductoEtiquetaAvgAggregateInputType = {
    productoId?: true
    etiquetaId?: true
  }

  export type ProductoEtiquetaSumAggregateInputType = {
    productoId?: true
    etiquetaId?: true
  }

  export type ProductoEtiquetaMinAggregateInputType = {
    productoId?: true
    etiquetaId?: true
  }

  export type ProductoEtiquetaMaxAggregateInputType = {
    productoId?: true
    etiquetaId?: true
  }

  export type ProductoEtiquetaCountAggregateInputType = {
    productoId?: true
    etiquetaId?: true
    _all?: true
  }

  export type ProductoEtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoEtiqueta to aggregate.
     */
    where?: ProductoEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoEtiquetas to fetch.
     */
    orderBy?: ProductoEtiquetaOrderByWithRelationInput | ProductoEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoEtiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoEtiquetas
    **/
    _count?: true | ProductoEtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoEtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoEtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoEtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoEtiquetaMaxAggregateInputType
  }

  export type GetProductoEtiquetaAggregateType<T extends ProductoEtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoEtiqueta[P]>
      : GetScalarType<T[P], AggregateProductoEtiqueta[P]>
  }




  export type ProductoEtiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoEtiquetaWhereInput
    orderBy?: ProductoEtiquetaOrderByWithAggregationInput | ProductoEtiquetaOrderByWithAggregationInput[]
    by: ProductoEtiquetaScalarFieldEnum[] | ProductoEtiquetaScalarFieldEnum
    having?: ProductoEtiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoEtiquetaCountAggregateInputType | true
    _avg?: ProductoEtiquetaAvgAggregateInputType
    _sum?: ProductoEtiquetaSumAggregateInputType
    _min?: ProductoEtiquetaMinAggregateInputType
    _max?: ProductoEtiquetaMaxAggregateInputType
  }

  export type ProductoEtiquetaGroupByOutputType = {
    productoId: number
    etiquetaId: number
    _count: ProductoEtiquetaCountAggregateOutputType | null
    _avg: ProductoEtiquetaAvgAggregateOutputType | null
    _sum: ProductoEtiquetaSumAggregateOutputType | null
    _min: ProductoEtiquetaMinAggregateOutputType | null
    _max: ProductoEtiquetaMaxAggregateOutputType | null
  }

  type GetProductoEtiquetaGroupByPayload<T extends ProductoEtiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoEtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoEtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoEtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoEtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type ProductoEtiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productoId?: boolean
    etiquetaId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoEtiqueta"]>



  export type ProductoEtiquetaSelectScalar = {
    productoId?: boolean
    etiquetaId?: boolean
  }

  export type ProductoEtiquetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productoId" | "etiquetaId", ExtArgs["result"]["productoEtiqueta"]>
  export type ProductoEtiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }

  export type $ProductoEtiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoEtiqueta"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      etiqueta: Prisma.$EtiquetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productoId: number
      etiquetaId: number
    }, ExtArgs["result"]["productoEtiqueta"]>
    composites: {}
  }

  type ProductoEtiquetaGetPayload<S extends boolean | null | undefined | ProductoEtiquetaDefaultArgs> = $Result.GetResult<Prisma.$ProductoEtiquetaPayload, S>

  type ProductoEtiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoEtiquetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoEtiquetaCountAggregateInputType | true
    }

  export interface ProductoEtiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoEtiqueta'], meta: { name: 'ProductoEtiqueta' } }
    /**
     * Find zero or one ProductoEtiqueta that matches the filter.
     * @param {ProductoEtiquetaFindUniqueArgs} args - Arguments to find a ProductoEtiqueta
     * @example
     * // Get one ProductoEtiqueta
     * const productoEtiqueta = await prisma.productoEtiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoEtiquetaFindUniqueArgs>(args: SelectSubset<T, ProductoEtiquetaFindUniqueArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductoEtiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoEtiquetaFindUniqueOrThrowArgs} args - Arguments to find a ProductoEtiqueta
     * @example
     * // Get one ProductoEtiqueta
     * const productoEtiqueta = await prisma.productoEtiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoEtiquetaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoEtiquetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoEtiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaFindFirstArgs} args - Arguments to find a ProductoEtiqueta
     * @example
     * // Get one ProductoEtiqueta
     * const productoEtiqueta = await prisma.productoEtiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoEtiquetaFindFirstArgs>(args?: SelectSubset<T, ProductoEtiquetaFindFirstArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoEtiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaFindFirstOrThrowArgs} args - Arguments to find a ProductoEtiqueta
     * @example
     * // Get one ProductoEtiqueta
     * const productoEtiqueta = await prisma.productoEtiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoEtiquetaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoEtiquetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductoEtiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoEtiquetas
     * const productoEtiquetas = await prisma.productoEtiqueta.findMany()
     * 
     * // Get first 10 ProductoEtiquetas
     * const productoEtiquetas = await prisma.productoEtiqueta.findMany({ take: 10 })
     * 
     * // Only select the `productoId`
     * const productoEtiquetaWithProductoIdOnly = await prisma.productoEtiqueta.findMany({ select: { productoId: true } })
     * 
     */
    findMany<T extends ProductoEtiquetaFindManyArgs>(args?: SelectSubset<T, ProductoEtiquetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductoEtiqueta.
     * @param {ProductoEtiquetaCreateArgs} args - Arguments to create a ProductoEtiqueta.
     * @example
     * // Create one ProductoEtiqueta
     * const ProductoEtiqueta = await prisma.productoEtiqueta.create({
     *   data: {
     *     // ... data to create a ProductoEtiqueta
     *   }
     * })
     * 
     */
    create<T extends ProductoEtiquetaCreateArgs>(args: SelectSubset<T, ProductoEtiquetaCreateArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductoEtiquetas.
     * @param {ProductoEtiquetaCreateManyArgs} args - Arguments to create many ProductoEtiquetas.
     * @example
     * // Create many ProductoEtiquetas
     * const productoEtiqueta = await prisma.productoEtiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoEtiquetaCreateManyArgs>(args?: SelectSubset<T, ProductoEtiquetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductoEtiqueta.
     * @param {ProductoEtiquetaDeleteArgs} args - Arguments to delete one ProductoEtiqueta.
     * @example
     * // Delete one ProductoEtiqueta
     * const ProductoEtiqueta = await prisma.productoEtiqueta.delete({
     *   where: {
     *     // ... filter to delete one ProductoEtiqueta
     *   }
     * })
     * 
     */
    delete<T extends ProductoEtiquetaDeleteArgs>(args: SelectSubset<T, ProductoEtiquetaDeleteArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductoEtiqueta.
     * @param {ProductoEtiquetaUpdateArgs} args - Arguments to update one ProductoEtiqueta.
     * @example
     * // Update one ProductoEtiqueta
     * const productoEtiqueta = await prisma.productoEtiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoEtiquetaUpdateArgs>(args: SelectSubset<T, ProductoEtiquetaUpdateArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductoEtiquetas.
     * @param {ProductoEtiquetaDeleteManyArgs} args - Arguments to filter ProductoEtiquetas to delete.
     * @example
     * // Delete a few ProductoEtiquetas
     * const { count } = await prisma.productoEtiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoEtiquetaDeleteManyArgs>(args?: SelectSubset<T, ProductoEtiquetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoEtiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoEtiquetas
     * const productoEtiqueta = await prisma.productoEtiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoEtiquetaUpdateManyArgs>(args: SelectSubset<T, ProductoEtiquetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductoEtiqueta.
     * @param {ProductoEtiquetaUpsertArgs} args - Arguments to update or create a ProductoEtiqueta.
     * @example
     * // Update or create a ProductoEtiqueta
     * const productoEtiqueta = await prisma.productoEtiqueta.upsert({
     *   create: {
     *     // ... data to create a ProductoEtiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoEtiqueta we want to update
     *   }
     * })
     */
    upsert<T extends ProductoEtiquetaUpsertArgs>(args: SelectSubset<T, ProductoEtiquetaUpsertArgs<ExtArgs>>): Prisma__ProductoEtiquetaClient<$Result.GetResult<Prisma.$ProductoEtiquetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductoEtiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaCountArgs} args - Arguments to filter ProductoEtiquetas to count.
     * @example
     * // Count the number of ProductoEtiquetas
     * const count = await prisma.productoEtiqueta.count({
     *   where: {
     *     // ... the filter for the ProductoEtiquetas we want to count
     *   }
     * })
    **/
    count<T extends ProductoEtiquetaCountArgs>(
      args?: Subset<T, ProductoEtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoEtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoEtiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoEtiquetaAggregateArgs>(args: Subset<T, ProductoEtiquetaAggregateArgs>): Prisma.PrismaPromise<GetProductoEtiquetaAggregateType<T>>

    /**
     * Group by ProductoEtiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoEtiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoEtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoEtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: ProductoEtiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoEtiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoEtiqueta model
   */
  readonly fields: ProductoEtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoEtiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoEtiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etiqueta<T extends EtiquetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtiquetaDefaultArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoEtiqueta model
   */
  interface ProductoEtiquetaFieldRefs {
    readonly productoId: FieldRef<"ProductoEtiqueta", 'Int'>
    readonly etiquetaId: FieldRef<"ProductoEtiqueta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductoEtiqueta findUnique
   */
  export type ProductoEtiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoEtiqueta to fetch.
     */
    where: ProductoEtiquetaWhereUniqueInput
  }

  /**
   * ProductoEtiqueta findUniqueOrThrow
   */
  export type ProductoEtiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoEtiqueta to fetch.
     */
    where: ProductoEtiquetaWhereUniqueInput
  }

  /**
   * ProductoEtiqueta findFirst
   */
  export type ProductoEtiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoEtiqueta to fetch.
     */
    where?: ProductoEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoEtiquetas to fetch.
     */
    orderBy?: ProductoEtiquetaOrderByWithRelationInput | ProductoEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoEtiquetas.
     */
    cursor?: ProductoEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoEtiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoEtiquetas.
     */
    distinct?: ProductoEtiquetaScalarFieldEnum | ProductoEtiquetaScalarFieldEnum[]
  }

  /**
   * ProductoEtiqueta findFirstOrThrow
   */
  export type ProductoEtiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoEtiqueta to fetch.
     */
    where?: ProductoEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoEtiquetas to fetch.
     */
    orderBy?: ProductoEtiquetaOrderByWithRelationInput | ProductoEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoEtiquetas.
     */
    cursor?: ProductoEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoEtiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoEtiquetas.
     */
    distinct?: ProductoEtiquetaScalarFieldEnum | ProductoEtiquetaScalarFieldEnum[]
  }

  /**
   * ProductoEtiqueta findMany
   */
  export type ProductoEtiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoEtiquetas to fetch.
     */
    where?: ProductoEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoEtiquetas to fetch.
     */
    orderBy?: ProductoEtiquetaOrderByWithRelationInput | ProductoEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoEtiquetas.
     */
    cursor?: ProductoEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoEtiquetas.
     */
    skip?: number
    distinct?: ProductoEtiquetaScalarFieldEnum | ProductoEtiquetaScalarFieldEnum[]
  }

  /**
   * ProductoEtiqueta create
   */
  export type ProductoEtiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoEtiqueta.
     */
    data: XOR<ProductoEtiquetaCreateInput, ProductoEtiquetaUncheckedCreateInput>
  }

  /**
   * ProductoEtiqueta createMany
   */
  export type ProductoEtiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoEtiquetas.
     */
    data: ProductoEtiquetaCreateManyInput | ProductoEtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoEtiqueta update
   */
  export type ProductoEtiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoEtiqueta.
     */
    data: XOR<ProductoEtiquetaUpdateInput, ProductoEtiquetaUncheckedUpdateInput>
    /**
     * Choose, which ProductoEtiqueta to update.
     */
    where: ProductoEtiquetaWhereUniqueInput
  }

  /**
   * ProductoEtiqueta updateMany
   */
  export type ProductoEtiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoEtiquetas.
     */
    data: XOR<ProductoEtiquetaUpdateManyMutationInput, ProductoEtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which ProductoEtiquetas to update
     */
    where?: ProductoEtiquetaWhereInput
    /**
     * Limit how many ProductoEtiquetas to update.
     */
    limit?: number
  }

  /**
   * ProductoEtiqueta upsert
   */
  export type ProductoEtiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoEtiqueta to update in case it exists.
     */
    where: ProductoEtiquetaWhereUniqueInput
    /**
     * In case the ProductoEtiqueta found by the `where` argument doesn't exist, create a new ProductoEtiqueta with this data.
     */
    create: XOR<ProductoEtiquetaCreateInput, ProductoEtiquetaUncheckedCreateInput>
    /**
     * In case the ProductoEtiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoEtiquetaUpdateInput, ProductoEtiquetaUncheckedUpdateInput>
  }

  /**
   * ProductoEtiqueta delete
   */
  export type ProductoEtiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
    /**
     * Filter which ProductoEtiqueta to delete.
     */
    where: ProductoEtiquetaWhereUniqueInput
  }

  /**
   * ProductoEtiqueta deleteMany
   */
  export type ProductoEtiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoEtiquetas to delete
     */
    where?: ProductoEtiquetaWhereInput
    /**
     * Limit how many ProductoEtiquetas to delete.
     */
    limit?: number
  }

  /**
   * ProductoEtiqueta without action
   */
  export type ProductoEtiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoEtiqueta
     */
    select?: ProductoEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoEtiqueta
     */
    omit?: ProductoEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoEtiquetaInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    fechaPedido: Date | null
    usuarioId: number | null
    estado: $Enums.Estado | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    fechaPedido: Date | null
    usuarioId: number | null
    estado: $Enums.Estado | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    fechaPedido: number
    usuarioId: number
    estado: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    fechaPedido?: true
    usuarioId?: true
    estado?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    fechaPedido?: true
    usuarioId?: true
    estado?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    fechaPedido?: true
    usuarioId?: true
    estado?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    fechaPedido: Date
    usuarioId: number
    estado: $Enums.Estado
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPedido?: boolean
    usuarioId?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    productos?: boolean | Pedido$productosArgs<ExtArgs>
    personalizado?: boolean | Pedido$personalizadoArgs<ExtArgs>
    historial?: boolean | Pedido$historialArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    fechaPedido?: boolean
    usuarioId?: boolean
    estado?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaPedido" | "usuarioId" | "estado", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    productos?: boolean | Pedido$productosArgs<ExtArgs>
    personalizado?: boolean | Pedido$personalizadoArgs<ExtArgs>
    historial?: boolean | Pedido$historialArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      productos: Prisma.$PedidoProductoPayload<ExtArgs>[]
      personalizado: Prisma.$ProductoPersonalizadoPayload<ExtArgs>[]
      historial: Prisma.$HistorialPedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaPedido: Date
      usuarioId: number
      estado: $Enums.Estado
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends Pedido$productosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personalizado<T extends Pedido$personalizadoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$personalizadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historial<T extends Pedido$historialArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$historialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly fechaPedido: FieldRef<"Pedido", 'DateTime'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly estado: FieldRef<"Pedido", 'Estado'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.productos
   */
  export type Pedido$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    where?: PedidoProductoWhereInput
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    cursor?: PedidoProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * Pedido.personalizado
   */
  export type Pedido$personalizadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    where?: ProductoPersonalizadoWhereInput
    orderBy?: ProductoPersonalizadoOrderByWithRelationInput | ProductoPersonalizadoOrderByWithRelationInput[]
    cursor?: ProductoPersonalizadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoPersonalizadoScalarFieldEnum | ProductoPersonalizadoScalarFieldEnum[]
  }

  /**
   * Pedido.historial
   */
  export type Pedido$historialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    where?: HistorialPedidosWhereInput
    orderBy?: HistorialPedidosOrderByWithRelationInput | HistorialPedidosOrderByWithRelationInput[]
    cursor?: HistorialPedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialPedidosScalarFieldEnum | HistorialPedidosScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoProducto
   */

  export type AggregatePedidoProducto = {
    _count: PedidoProductoCountAggregateOutputType | null
    _avg: PedidoProductoAvgAggregateOutputType | null
    _sum: PedidoProductoSumAggregateOutputType | null
    _min: PedidoProductoMinAggregateOutputType | null
    _max: PedidoProductoMaxAggregateOutputType | null
  }

  export type PedidoProductoAvgAggregateOutputType = {
    cantidad: number | null
    precioUnitario: Decimal | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    pedidoId: number | null
    productoId: number | null
  }

  export type PedidoProductoSumAggregateOutputType = {
    cantidad: number | null
    precioUnitario: Decimal | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    pedidoId: number | null
    productoId: number | null
  }

  export type PedidoProductoMinAggregateOutputType = {
    cantidad: number | null
    precioUnitario: Decimal | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    pedidoId: number | null
    productoId: number | null
  }

  export type PedidoProductoMaxAggregateOutputType = {
    cantidad: number | null
    precioUnitario: Decimal | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    pedidoId: number | null
    productoId: number | null
  }

  export type PedidoProductoCountAggregateOutputType = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    impuestos: number
    total: number
    pedidoId: number
    productoId: number
    _all: number
  }


  export type PedidoProductoAvgAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
    impuestos?: true
    total?: true
    pedidoId?: true
    productoId?: true
  }

  export type PedidoProductoSumAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
    impuestos?: true
    total?: true
    pedidoId?: true
    productoId?: true
  }

  export type PedidoProductoMinAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
    impuestos?: true
    total?: true
    pedidoId?: true
    productoId?: true
  }

  export type PedidoProductoMaxAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
    impuestos?: true
    total?: true
    pedidoId?: true
    productoId?: true
  }

  export type PedidoProductoCountAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
    impuestos?: true
    total?: true
    pedidoId?: true
    productoId?: true
    _all?: true
  }

  export type PedidoProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoProducto to aggregate.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoProductos
    **/
    _count?: true | PedidoProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoProductoMaxAggregateInputType
  }

  export type GetPedidoProductoAggregateType<T extends PedidoProductoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoProducto[P]>
      : GetScalarType<T[P], AggregatePedidoProducto[P]>
  }




  export type PedidoProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProductoWhereInput
    orderBy?: PedidoProductoOrderByWithAggregationInput | PedidoProductoOrderByWithAggregationInput[]
    by: PedidoProductoScalarFieldEnum[] | PedidoProductoScalarFieldEnum
    having?: PedidoProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoProductoCountAggregateInputType | true
    _avg?: PedidoProductoAvgAggregateInputType
    _sum?: PedidoProductoSumAggregateInputType
    _min?: PedidoProductoMinAggregateInputType
    _max?: PedidoProductoMaxAggregateInputType
  }

  export type PedidoProductoGroupByOutputType = {
    cantidad: number
    precioUnitario: Decimal
    subtotal: Decimal
    impuestos: Decimal
    total: Decimal
    pedidoId: number
    productoId: number
    _count: PedidoProductoCountAggregateOutputType | null
    _avg: PedidoProductoAvgAggregateOutputType | null
    _sum: PedidoProductoSumAggregateOutputType | null
    _min: PedidoProductoMinAggregateOutputType | null
    _max: PedidoProductoMaxAggregateOutputType | null
  }

  type GetPedidoProductoGroupByPayload<T extends PedidoProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoProductoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoProductoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    impuestos?: boolean
    total?: boolean
    pedidoId?: boolean
    productoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoProducto"]>



  export type PedidoProductoSelectScalar = {
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    impuestos?: boolean
    total?: boolean
    pedidoId?: boolean
    productoId?: boolean
  }

  export type PedidoProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cantidad" | "precioUnitario" | "subtotal" | "impuestos" | "total" | "pedidoId" | "productoId", ExtArgs["result"]["pedidoProducto"]>
  export type PedidoProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $PedidoProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoProducto"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cantidad: number
      precioUnitario: Prisma.Decimal
      subtotal: Prisma.Decimal
      impuestos: Prisma.Decimal
      total: Prisma.Decimal
      pedidoId: number
      productoId: number
    }, ExtArgs["result"]["pedidoProducto"]>
    composites: {}
  }

  type PedidoProductoGetPayload<S extends boolean | null | undefined | PedidoProductoDefaultArgs> = $Result.GetResult<Prisma.$PedidoProductoPayload, S>

  type PedidoProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoProductoCountAggregateInputType | true
    }

  export interface PedidoProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoProducto'], meta: { name: 'PedidoProducto' } }
    /**
     * Find zero or one PedidoProducto that matches the filter.
     * @param {PedidoProductoFindUniqueArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoProductoFindUniqueArgs>(args: SelectSubset<T, PedidoProductoFindUniqueArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoProducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoProductoFindUniqueOrThrowArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoFindFirstArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoProductoFindFirstArgs>(args?: SelectSubset<T, PedidoProductoFindFirstArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoFindFirstOrThrowArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoProductos
     * const pedidoProductos = await prisma.pedidoProducto.findMany()
     * 
     * // Get first 10 PedidoProductos
     * const pedidoProductos = await prisma.pedidoProducto.findMany({ take: 10 })
     * 
     * // Only select the `cantidad`
     * const pedidoProductoWithCantidadOnly = await prisma.pedidoProducto.findMany({ select: { cantidad: true } })
     * 
     */
    findMany<T extends PedidoProductoFindManyArgs>(args?: SelectSubset<T, PedidoProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoProducto.
     * @param {PedidoProductoCreateArgs} args - Arguments to create a PedidoProducto.
     * @example
     * // Create one PedidoProducto
     * const PedidoProducto = await prisma.pedidoProducto.create({
     *   data: {
     *     // ... data to create a PedidoProducto
     *   }
     * })
     * 
     */
    create<T extends PedidoProductoCreateArgs>(args: SelectSubset<T, PedidoProductoCreateArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoProductos.
     * @param {PedidoProductoCreateManyArgs} args - Arguments to create many PedidoProductos.
     * @example
     * // Create many PedidoProductos
     * const pedidoProducto = await prisma.pedidoProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoProductoCreateManyArgs>(args?: SelectSubset<T, PedidoProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PedidoProducto.
     * @param {PedidoProductoDeleteArgs} args - Arguments to delete one PedidoProducto.
     * @example
     * // Delete one PedidoProducto
     * const PedidoProducto = await prisma.pedidoProducto.delete({
     *   where: {
     *     // ... filter to delete one PedidoProducto
     *   }
     * })
     * 
     */
    delete<T extends PedidoProductoDeleteArgs>(args: SelectSubset<T, PedidoProductoDeleteArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoProducto.
     * @param {PedidoProductoUpdateArgs} args - Arguments to update one PedidoProducto.
     * @example
     * // Update one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoProductoUpdateArgs>(args: SelectSubset<T, PedidoProductoUpdateArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoProductos.
     * @param {PedidoProductoDeleteManyArgs} args - Arguments to filter PedidoProductos to delete.
     * @example
     * // Delete a few PedidoProductos
     * const { count } = await prisma.pedidoProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoProductoDeleteManyArgs>(args?: SelectSubset<T, PedidoProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoProductos
     * const pedidoProducto = await prisma.pedidoProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoProductoUpdateManyArgs>(args: SelectSubset<T, PedidoProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PedidoProducto.
     * @param {PedidoProductoUpsertArgs} args - Arguments to update or create a PedidoProducto.
     * @example
     * // Update or create a PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.upsert({
     *   create: {
     *     // ... data to create a PedidoProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoProducto we want to update
     *   }
     * })
     */
    upsert<T extends PedidoProductoUpsertArgs>(args: SelectSubset<T, PedidoProductoUpsertArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoCountArgs} args - Arguments to filter PedidoProductos to count.
     * @example
     * // Count the number of PedidoProductos
     * const count = await prisma.pedidoProducto.count({
     *   where: {
     *     // ... the filter for the PedidoProductos we want to count
     *   }
     * })
    **/
    count<T extends PedidoProductoCountArgs>(
      args?: Subset<T, PedidoProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoProductoAggregateArgs>(args: Subset<T, PedidoProductoAggregateArgs>): Prisma.PrismaPromise<GetPedidoProductoAggregateType<T>>

    /**
     * Group by PedidoProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoProductoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoProducto model
   */
  readonly fields: PedidoProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoProducto model
   */
  interface PedidoProductoFieldRefs {
    readonly cantidad: FieldRef<"PedidoProducto", 'Int'>
    readonly precioUnitario: FieldRef<"PedidoProducto", 'Decimal'>
    readonly subtotal: FieldRef<"PedidoProducto", 'Decimal'>
    readonly impuestos: FieldRef<"PedidoProducto", 'Decimal'>
    readonly total: FieldRef<"PedidoProducto", 'Decimal'>
    readonly pedidoId: FieldRef<"PedidoProducto", 'Int'>
    readonly productoId: FieldRef<"PedidoProducto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidoProducto findUnique
   */
  export type PedidoProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto findUniqueOrThrow
   */
  export type PedidoProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto findFirst
   */
  export type PedidoProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoProductos.
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoProductos.
     */
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * PedidoProducto findFirstOrThrow
   */
  export type PedidoProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoProductos.
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoProductos.
     */
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * PedidoProducto findMany
   */
  export type PedidoProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProductos to fetch.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoProductos.
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * PedidoProducto create
   */
  export type PedidoProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoProducto.
     */
    data: XOR<PedidoProductoCreateInput, PedidoProductoUncheckedCreateInput>
  }

  /**
   * PedidoProducto createMany
   */
  export type PedidoProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoProductos.
     */
    data: PedidoProductoCreateManyInput | PedidoProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoProducto update
   */
  export type PedidoProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoProducto.
     */
    data: XOR<PedidoProductoUpdateInput, PedidoProductoUncheckedUpdateInput>
    /**
     * Choose, which PedidoProducto to update.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto updateMany
   */
  export type PedidoProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoProductos.
     */
    data: XOR<PedidoProductoUpdateManyMutationInput, PedidoProductoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoProductos to update
     */
    where?: PedidoProductoWhereInput
    /**
     * Limit how many PedidoProductos to update.
     */
    limit?: number
  }

  /**
   * PedidoProducto upsert
   */
  export type PedidoProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoProducto to update in case it exists.
     */
    where: PedidoProductoWhereUniqueInput
    /**
     * In case the PedidoProducto found by the `where` argument doesn't exist, create a new PedidoProducto with this data.
     */
    create: XOR<PedidoProductoCreateInput, PedidoProductoUncheckedCreateInput>
    /**
     * In case the PedidoProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoProductoUpdateInput, PedidoProductoUncheckedUpdateInput>
  }

  /**
   * PedidoProducto delete
   */
  export type PedidoProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter which PedidoProducto to delete.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto deleteMany
   */
  export type PedidoProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoProductos to delete
     */
    where?: PedidoProductoWhereInput
    /**
     * Limit how many PedidoProductos to delete.
     */
    limit?: number
  }

  /**
   * PedidoProducto without action
   */
  export type PedidoProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
  }


  /**
   * Model ProductoPersonalizado
   */

  export type AggregateProductoPersonalizado = {
    _count: ProductoPersonalizadoCountAggregateOutputType | null
    _avg: ProductoPersonalizadoAvgAggregateOutputType | null
    _sum: ProductoPersonalizadoSumAggregateOutputType | null
    _min: ProductoPersonalizadoMinAggregateOutputType | null
    _max: ProductoPersonalizadoMaxAggregateOutputType | null
  }

  export type ProductoPersonalizadoAvgAggregateOutputType = {
    id: number | null
    tamanno: number | null
    productoId: number | null
    pedidoId: number | null
  }

  export type ProductoPersonalizadoSumAggregateOutputType = {
    id: number | null
    tamanno: number | null
    productoId: number | null
    pedidoId: number | null
  }

  export type ProductoPersonalizadoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    color: string | null
    material: string | null
    tamanno: number | null
    logo: boolean | null
    productoId: number | null
    pedidoId: number | null
  }

  export type ProductoPersonalizadoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    color: string | null
    material: string | null
    tamanno: number | null
    logo: boolean | null
    productoId: number | null
    pedidoId: number | null
  }

  export type ProductoPersonalizadoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    color: number
    material: number
    tamanno: number
    logo: number
    productoId: number
    pedidoId: number
    _all: number
  }


  export type ProductoPersonalizadoAvgAggregateInputType = {
    id?: true
    tamanno?: true
    productoId?: true
    pedidoId?: true
  }

  export type ProductoPersonalizadoSumAggregateInputType = {
    id?: true
    tamanno?: true
    productoId?: true
    pedidoId?: true
  }

  export type ProductoPersonalizadoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    color?: true
    material?: true
    tamanno?: true
    logo?: true
    productoId?: true
    pedidoId?: true
  }

  export type ProductoPersonalizadoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    color?: true
    material?: true
    tamanno?: true
    logo?: true
    productoId?: true
    pedidoId?: true
  }

  export type ProductoPersonalizadoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    color?: true
    material?: true
    tamanno?: true
    logo?: true
    productoId?: true
    pedidoId?: true
    _all?: true
  }

  export type ProductoPersonalizadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoPersonalizado to aggregate.
     */
    where?: ProductoPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoPersonalizados to fetch.
     */
    orderBy?: ProductoPersonalizadoOrderByWithRelationInput | ProductoPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoPersonalizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoPersonalizados
    **/
    _count?: true | ProductoPersonalizadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoPersonalizadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoPersonalizadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoPersonalizadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoPersonalizadoMaxAggregateInputType
  }

  export type GetProductoPersonalizadoAggregateType<T extends ProductoPersonalizadoAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoPersonalizado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoPersonalizado[P]>
      : GetScalarType<T[P], AggregateProductoPersonalizado[P]>
  }




  export type ProductoPersonalizadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoPersonalizadoWhereInput
    orderBy?: ProductoPersonalizadoOrderByWithAggregationInput | ProductoPersonalizadoOrderByWithAggregationInput[]
    by: ProductoPersonalizadoScalarFieldEnum[] | ProductoPersonalizadoScalarFieldEnum
    having?: ProductoPersonalizadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoPersonalizadoCountAggregateInputType | true
    _avg?: ProductoPersonalizadoAvgAggregateInputType
    _sum?: ProductoPersonalizadoSumAggregateInputType
    _min?: ProductoPersonalizadoMinAggregateInputType
    _max?: ProductoPersonalizadoMaxAggregateInputType
  }

  export type ProductoPersonalizadoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    productoId: number
    pedidoId: number | null
    _count: ProductoPersonalizadoCountAggregateOutputType | null
    _avg: ProductoPersonalizadoAvgAggregateOutputType | null
    _sum: ProductoPersonalizadoSumAggregateOutputType | null
    _min: ProductoPersonalizadoMinAggregateOutputType | null
    _max: ProductoPersonalizadoMaxAggregateOutputType | null
  }

  type GetProductoPersonalizadoGroupByPayload<T extends ProductoPersonalizadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoPersonalizadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoPersonalizadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoPersonalizadoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoPersonalizadoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoPersonalizadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    color?: boolean
    material?: boolean
    tamanno?: boolean
    logo?: boolean
    productoId?: boolean
    pedidoId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    pedido?: boolean | ProductoPersonalizado$pedidoArgs<ExtArgs>
  }, ExtArgs["result"]["productoPersonalizado"]>



  export type ProductoPersonalizadoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    color?: boolean
    material?: boolean
    tamanno?: boolean
    logo?: boolean
    productoId?: boolean
    pedidoId?: boolean
  }

  export type ProductoPersonalizadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "color" | "material" | "tamanno" | "logo" | "productoId" | "pedidoId", ExtArgs["result"]["productoPersonalizado"]>
  export type ProductoPersonalizadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    pedido?: boolean | ProductoPersonalizado$pedidoArgs<ExtArgs>
  }

  export type $ProductoPersonalizadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoPersonalizado"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      color: string
      material: string
      tamanno: number
      logo: boolean
      productoId: number
      pedidoId: number | null
    }, ExtArgs["result"]["productoPersonalizado"]>
    composites: {}
  }

  type ProductoPersonalizadoGetPayload<S extends boolean | null | undefined | ProductoPersonalizadoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPersonalizadoPayload, S>

  type ProductoPersonalizadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoPersonalizadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoPersonalizadoCountAggregateInputType | true
    }

  export interface ProductoPersonalizadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoPersonalizado'], meta: { name: 'ProductoPersonalizado' } }
    /**
     * Find zero or one ProductoPersonalizado that matches the filter.
     * @param {ProductoPersonalizadoFindUniqueArgs} args - Arguments to find a ProductoPersonalizado
     * @example
     * // Get one ProductoPersonalizado
     * const productoPersonalizado = await prisma.productoPersonalizado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoPersonalizadoFindUniqueArgs>(args: SelectSubset<T, ProductoPersonalizadoFindUniqueArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductoPersonalizado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoPersonalizadoFindUniqueOrThrowArgs} args - Arguments to find a ProductoPersonalizado
     * @example
     * // Get one ProductoPersonalizado
     * const productoPersonalizado = await prisma.productoPersonalizado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoPersonalizadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoPersonalizadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoPersonalizado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoFindFirstArgs} args - Arguments to find a ProductoPersonalizado
     * @example
     * // Get one ProductoPersonalizado
     * const productoPersonalizado = await prisma.productoPersonalizado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoPersonalizadoFindFirstArgs>(args?: SelectSubset<T, ProductoPersonalizadoFindFirstArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoPersonalizado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoFindFirstOrThrowArgs} args - Arguments to find a ProductoPersonalizado
     * @example
     * // Get one ProductoPersonalizado
     * const productoPersonalizado = await prisma.productoPersonalizado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoPersonalizadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoPersonalizadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductoPersonalizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoPersonalizados
     * const productoPersonalizados = await prisma.productoPersonalizado.findMany()
     * 
     * // Get first 10 ProductoPersonalizados
     * const productoPersonalizados = await prisma.productoPersonalizado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoPersonalizadoWithIdOnly = await prisma.productoPersonalizado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoPersonalizadoFindManyArgs>(args?: SelectSubset<T, ProductoPersonalizadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductoPersonalizado.
     * @param {ProductoPersonalizadoCreateArgs} args - Arguments to create a ProductoPersonalizado.
     * @example
     * // Create one ProductoPersonalizado
     * const ProductoPersonalizado = await prisma.productoPersonalizado.create({
     *   data: {
     *     // ... data to create a ProductoPersonalizado
     *   }
     * })
     * 
     */
    create<T extends ProductoPersonalizadoCreateArgs>(args: SelectSubset<T, ProductoPersonalizadoCreateArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductoPersonalizados.
     * @param {ProductoPersonalizadoCreateManyArgs} args - Arguments to create many ProductoPersonalizados.
     * @example
     * // Create many ProductoPersonalizados
     * const productoPersonalizado = await prisma.productoPersonalizado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoPersonalizadoCreateManyArgs>(args?: SelectSubset<T, ProductoPersonalizadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductoPersonalizado.
     * @param {ProductoPersonalizadoDeleteArgs} args - Arguments to delete one ProductoPersonalizado.
     * @example
     * // Delete one ProductoPersonalizado
     * const ProductoPersonalizado = await prisma.productoPersonalizado.delete({
     *   where: {
     *     // ... filter to delete one ProductoPersonalizado
     *   }
     * })
     * 
     */
    delete<T extends ProductoPersonalizadoDeleteArgs>(args: SelectSubset<T, ProductoPersonalizadoDeleteArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductoPersonalizado.
     * @param {ProductoPersonalizadoUpdateArgs} args - Arguments to update one ProductoPersonalizado.
     * @example
     * // Update one ProductoPersonalizado
     * const productoPersonalizado = await prisma.productoPersonalizado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoPersonalizadoUpdateArgs>(args: SelectSubset<T, ProductoPersonalizadoUpdateArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductoPersonalizados.
     * @param {ProductoPersonalizadoDeleteManyArgs} args - Arguments to filter ProductoPersonalizados to delete.
     * @example
     * // Delete a few ProductoPersonalizados
     * const { count } = await prisma.productoPersonalizado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoPersonalizadoDeleteManyArgs>(args?: SelectSubset<T, ProductoPersonalizadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoPersonalizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoPersonalizados
     * const productoPersonalizado = await prisma.productoPersonalizado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoPersonalizadoUpdateManyArgs>(args: SelectSubset<T, ProductoPersonalizadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductoPersonalizado.
     * @param {ProductoPersonalizadoUpsertArgs} args - Arguments to update or create a ProductoPersonalizado.
     * @example
     * // Update or create a ProductoPersonalizado
     * const productoPersonalizado = await prisma.productoPersonalizado.upsert({
     *   create: {
     *     // ... data to create a ProductoPersonalizado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoPersonalizado we want to update
     *   }
     * })
     */
    upsert<T extends ProductoPersonalizadoUpsertArgs>(args: SelectSubset<T, ProductoPersonalizadoUpsertArgs<ExtArgs>>): Prisma__ProductoPersonalizadoClient<$Result.GetResult<Prisma.$ProductoPersonalizadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductoPersonalizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoCountArgs} args - Arguments to filter ProductoPersonalizados to count.
     * @example
     * // Count the number of ProductoPersonalizados
     * const count = await prisma.productoPersonalizado.count({
     *   where: {
     *     // ... the filter for the ProductoPersonalizados we want to count
     *   }
     * })
    **/
    count<T extends ProductoPersonalizadoCountArgs>(
      args?: Subset<T, ProductoPersonalizadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoPersonalizadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoPersonalizado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoPersonalizadoAggregateArgs>(args: Subset<T, ProductoPersonalizadoAggregateArgs>): Prisma.PrismaPromise<GetProductoPersonalizadoAggregateType<T>>

    /**
     * Group by ProductoPersonalizado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoPersonalizadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoPersonalizadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoPersonalizadoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoPersonalizadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoPersonalizadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoPersonalizadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoPersonalizado model
   */
  readonly fields: ProductoPersonalizadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoPersonalizado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoPersonalizadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends ProductoPersonalizado$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, ProductoPersonalizado$pedidoArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoPersonalizado model
   */
  interface ProductoPersonalizadoFieldRefs {
    readonly id: FieldRef<"ProductoPersonalizado", 'Int'>
    readonly nombre: FieldRef<"ProductoPersonalizado", 'String'>
    readonly descripcion: FieldRef<"ProductoPersonalizado", 'String'>
    readonly color: FieldRef<"ProductoPersonalizado", 'String'>
    readonly material: FieldRef<"ProductoPersonalizado", 'String'>
    readonly tamanno: FieldRef<"ProductoPersonalizado", 'Int'>
    readonly logo: FieldRef<"ProductoPersonalizado", 'Boolean'>
    readonly productoId: FieldRef<"ProductoPersonalizado", 'Int'>
    readonly pedidoId: FieldRef<"ProductoPersonalizado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductoPersonalizado findUnique
   */
  export type ProductoPersonalizadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which ProductoPersonalizado to fetch.
     */
    where: ProductoPersonalizadoWhereUniqueInput
  }

  /**
   * ProductoPersonalizado findUniqueOrThrow
   */
  export type ProductoPersonalizadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which ProductoPersonalizado to fetch.
     */
    where: ProductoPersonalizadoWhereUniqueInput
  }

  /**
   * ProductoPersonalizado findFirst
   */
  export type ProductoPersonalizadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which ProductoPersonalizado to fetch.
     */
    where?: ProductoPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoPersonalizados to fetch.
     */
    orderBy?: ProductoPersonalizadoOrderByWithRelationInput | ProductoPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoPersonalizados.
     */
    cursor?: ProductoPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoPersonalizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoPersonalizados.
     */
    distinct?: ProductoPersonalizadoScalarFieldEnum | ProductoPersonalizadoScalarFieldEnum[]
  }

  /**
   * ProductoPersonalizado findFirstOrThrow
   */
  export type ProductoPersonalizadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which ProductoPersonalizado to fetch.
     */
    where?: ProductoPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoPersonalizados to fetch.
     */
    orderBy?: ProductoPersonalizadoOrderByWithRelationInput | ProductoPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoPersonalizados.
     */
    cursor?: ProductoPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoPersonalizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoPersonalizados.
     */
    distinct?: ProductoPersonalizadoScalarFieldEnum | ProductoPersonalizadoScalarFieldEnum[]
  }

  /**
   * ProductoPersonalizado findMany
   */
  export type ProductoPersonalizadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter, which ProductoPersonalizados to fetch.
     */
    where?: ProductoPersonalizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoPersonalizados to fetch.
     */
    orderBy?: ProductoPersonalizadoOrderByWithRelationInput | ProductoPersonalizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoPersonalizados.
     */
    cursor?: ProductoPersonalizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoPersonalizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoPersonalizados.
     */
    skip?: number
    distinct?: ProductoPersonalizadoScalarFieldEnum | ProductoPersonalizadoScalarFieldEnum[]
  }

  /**
   * ProductoPersonalizado create
   */
  export type ProductoPersonalizadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoPersonalizado.
     */
    data: XOR<ProductoPersonalizadoCreateInput, ProductoPersonalizadoUncheckedCreateInput>
  }

  /**
   * ProductoPersonalizado createMany
   */
  export type ProductoPersonalizadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoPersonalizados.
     */
    data: ProductoPersonalizadoCreateManyInput | ProductoPersonalizadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoPersonalizado update
   */
  export type ProductoPersonalizadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoPersonalizado.
     */
    data: XOR<ProductoPersonalizadoUpdateInput, ProductoPersonalizadoUncheckedUpdateInput>
    /**
     * Choose, which ProductoPersonalizado to update.
     */
    where: ProductoPersonalizadoWhereUniqueInput
  }

  /**
   * ProductoPersonalizado updateMany
   */
  export type ProductoPersonalizadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoPersonalizados.
     */
    data: XOR<ProductoPersonalizadoUpdateManyMutationInput, ProductoPersonalizadoUncheckedUpdateManyInput>
    /**
     * Filter which ProductoPersonalizados to update
     */
    where?: ProductoPersonalizadoWhereInput
    /**
     * Limit how many ProductoPersonalizados to update.
     */
    limit?: number
  }

  /**
   * ProductoPersonalizado upsert
   */
  export type ProductoPersonalizadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoPersonalizado to update in case it exists.
     */
    where: ProductoPersonalizadoWhereUniqueInput
    /**
     * In case the ProductoPersonalizado found by the `where` argument doesn't exist, create a new ProductoPersonalizado with this data.
     */
    create: XOR<ProductoPersonalizadoCreateInput, ProductoPersonalizadoUncheckedCreateInput>
    /**
     * In case the ProductoPersonalizado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoPersonalizadoUpdateInput, ProductoPersonalizadoUncheckedUpdateInput>
  }

  /**
   * ProductoPersonalizado delete
   */
  export type ProductoPersonalizadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
    /**
     * Filter which ProductoPersonalizado to delete.
     */
    where: ProductoPersonalizadoWhereUniqueInput
  }

  /**
   * ProductoPersonalizado deleteMany
   */
  export type ProductoPersonalizadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoPersonalizados to delete
     */
    where?: ProductoPersonalizadoWhereInput
    /**
     * Limit how many ProductoPersonalizados to delete.
     */
    limit?: number
  }

  /**
   * ProductoPersonalizado.pedido
   */
  export type ProductoPersonalizado$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
  }

  /**
   * ProductoPersonalizado without action
   */
  export type ProductoPersonalizadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoPersonalizado
     */
    select?: ProductoPersonalizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoPersonalizado
     */
    omit?: ProductoPersonalizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoPersonalizadoInclude<ExtArgs> | null
  }


  /**
   * Model Reseña
   */

  export type AggregateReseña = {
    _count: ReseñaCountAggregateOutputType | null
    _avg: ReseñaAvgAggregateOutputType | null
    _sum: ReseñaSumAggregateOutputType | null
    _min: ReseñaMinAggregateOutputType | null
    _max: ReseñaMaxAggregateOutputType | null
  }

  export type ReseñaAvgAggregateOutputType = {
    id: number | null
    valoracion: number | null
    usuarioId: number | null
    productoId: number | null
  }

  export type ReseñaSumAggregateOutputType = {
    id: number | null
    valoracion: number | null
    usuarioId: number | null
    productoId: number | null
  }

  export type ReseñaMinAggregateOutputType = {
    id: number | null
    valoracion: number | null
    comentario: string | null
    fecha: Date | null
    moderada: boolean | null
    observacion: string | null
    usuarioId: number | null
    productoId: number | null
  }

  export type ReseñaMaxAggregateOutputType = {
    id: number | null
    valoracion: number | null
    comentario: string | null
    fecha: Date | null
    moderada: boolean | null
    observacion: string | null
    usuarioId: number | null
    productoId: number | null
  }

  export type ReseñaCountAggregateOutputType = {
    id: number
    valoracion: number
    comentario: number
    fecha: number
    moderada: number
    observacion: number
    usuarioId: number
    productoId: number
    _all: number
  }


  export type ReseñaAvgAggregateInputType = {
    id?: true
    valoracion?: true
    usuarioId?: true
    productoId?: true
  }

  export type ReseñaSumAggregateInputType = {
    id?: true
    valoracion?: true
    usuarioId?: true
    productoId?: true
  }

  export type ReseñaMinAggregateInputType = {
    id?: true
    valoracion?: true
    comentario?: true
    fecha?: true
    moderada?: true
    observacion?: true
    usuarioId?: true
    productoId?: true
  }

  export type ReseñaMaxAggregateInputType = {
    id?: true
    valoracion?: true
    comentario?: true
    fecha?: true
    moderada?: true
    observacion?: true
    usuarioId?: true
    productoId?: true
  }

  export type ReseñaCountAggregateInputType = {
    id?: true
    valoracion?: true
    comentario?: true
    fecha?: true
    moderada?: true
    observacion?: true
    usuarioId?: true
    productoId?: true
    _all?: true
  }

  export type ReseñaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseña to aggregate.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reseñas
    **/
    _count?: true | ReseñaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReseñaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReseñaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReseñaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReseñaMaxAggregateInputType
  }

  export type GetReseñaAggregateType<T extends ReseñaAggregateArgs> = {
        [P in keyof T & keyof AggregateReseña]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReseña[P]>
      : GetScalarType<T[P], AggregateReseña[P]>
  }




  export type ReseñaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
    orderBy?: ReseñaOrderByWithAggregationInput | ReseñaOrderByWithAggregationInput[]
    by: ReseñaScalarFieldEnum[] | ReseñaScalarFieldEnum
    having?: ReseñaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReseñaCountAggregateInputType | true
    _avg?: ReseñaAvgAggregateInputType
    _sum?: ReseñaSumAggregateInputType
    _min?: ReseñaMinAggregateInputType
    _max?: ReseñaMaxAggregateInputType
  }

  export type ReseñaGroupByOutputType = {
    id: number
    valoracion: number
    comentario: string | null
    fecha: Date
    moderada: boolean
    observacion: string | null
    usuarioId: number
    productoId: number
    _count: ReseñaCountAggregateOutputType | null
    _avg: ReseñaAvgAggregateOutputType | null
    _sum: ReseñaSumAggregateOutputType | null
    _min: ReseñaMinAggregateOutputType | null
    _max: ReseñaMaxAggregateOutputType | null
  }

  type GetReseñaGroupByPayload<T extends ReseñaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReseñaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReseñaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReseñaGroupByOutputType[P]>
            : GetScalarType<T[P], ReseñaGroupByOutputType[P]>
        }
      >
    >


  export type ReseñaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valoracion?: boolean
    comentario?: boolean
    fecha?: boolean
    moderada?: boolean
    observacion?: boolean
    usuarioId?: boolean
    productoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>



  export type ReseñaSelectScalar = {
    id?: boolean
    valoracion?: boolean
    comentario?: boolean
    fecha?: boolean
    moderada?: boolean
    observacion?: boolean
    usuarioId?: boolean
    productoId?: boolean
  }

  export type ReseñaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valoracion" | "comentario" | "fecha" | "moderada" | "observacion" | "usuarioId" | "productoId", ExtArgs["result"]["reseña"]>
  export type ReseñaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ReseñaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reseña"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valoracion: number
      comentario: string | null
      fecha: Date
      moderada: boolean
      observacion: string | null
      usuarioId: number
      productoId: number
    }, ExtArgs["result"]["reseña"]>
    composites: {}
  }

  type ReseñaGetPayload<S extends boolean | null | undefined | ReseñaDefaultArgs> = $Result.GetResult<Prisma.$ReseñaPayload, S>

  type ReseñaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReseñaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReseñaCountAggregateInputType | true
    }

  export interface ReseñaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reseña'], meta: { name: 'Reseña' } }
    /**
     * Find zero or one Reseña that matches the filter.
     * @param {ReseñaFindUniqueArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReseñaFindUniqueArgs>(args: SelectSubset<T, ReseñaFindUniqueArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reseña that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReseñaFindUniqueOrThrowArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReseñaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReseñaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseña that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaFindFirstArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReseñaFindFirstArgs>(args?: SelectSubset<T, ReseñaFindFirstArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseña that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaFindFirstOrThrowArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReseñaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReseñaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reseñas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reseñas
     * const reseñas = await prisma.reseña.findMany()
     * 
     * // Get first 10 Reseñas
     * const reseñas = await prisma.reseña.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reseñaWithIdOnly = await prisma.reseña.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReseñaFindManyArgs>(args?: SelectSubset<T, ReseñaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reseña.
     * @param {ReseñaCreateArgs} args - Arguments to create a Reseña.
     * @example
     * // Create one Reseña
     * const Reseña = await prisma.reseña.create({
     *   data: {
     *     // ... data to create a Reseña
     *   }
     * })
     * 
     */
    create<T extends ReseñaCreateArgs>(args: SelectSubset<T, ReseñaCreateArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reseñas.
     * @param {ReseñaCreateManyArgs} args - Arguments to create many Reseñas.
     * @example
     * // Create many Reseñas
     * const reseña = await prisma.reseña.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReseñaCreateManyArgs>(args?: SelectSubset<T, ReseñaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reseña.
     * @param {ReseñaDeleteArgs} args - Arguments to delete one Reseña.
     * @example
     * // Delete one Reseña
     * const Reseña = await prisma.reseña.delete({
     *   where: {
     *     // ... filter to delete one Reseña
     *   }
     * })
     * 
     */
    delete<T extends ReseñaDeleteArgs>(args: SelectSubset<T, ReseñaDeleteArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reseña.
     * @param {ReseñaUpdateArgs} args - Arguments to update one Reseña.
     * @example
     * // Update one Reseña
     * const reseña = await prisma.reseña.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReseñaUpdateArgs>(args: SelectSubset<T, ReseñaUpdateArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reseñas.
     * @param {ReseñaDeleteManyArgs} args - Arguments to filter Reseñas to delete.
     * @example
     * // Delete a few Reseñas
     * const { count } = await prisma.reseña.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReseñaDeleteManyArgs>(args?: SelectSubset<T, ReseñaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseñas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reseñas
     * const reseña = await prisma.reseña.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReseñaUpdateManyArgs>(args: SelectSubset<T, ReseñaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reseña.
     * @param {ReseñaUpsertArgs} args - Arguments to update or create a Reseña.
     * @example
     * // Update or create a Reseña
     * const reseña = await prisma.reseña.upsert({
     *   create: {
     *     // ... data to create a Reseña
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reseña we want to update
     *   }
     * })
     */
    upsert<T extends ReseñaUpsertArgs>(args: SelectSubset<T, ReseñaUpsertArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reseñas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaCountArgs} args - Arguments to filter Reseñas to count.
     * @example
     * // Count the number of Reseñas
     * const count = await prisma.reseña.count({
     *   where: {
     *     // ... the filter for the Reseñas we want to count
     *   }
     * })
    **/
    count<T extends ReseñaCountArgs>(
      args?: Subset<T, ReseñaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReseñaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reseña.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReseñaAggregateArgs>(args: Subset<T, ReseñaAggregateArgs>): Prisma.PrismaPromise<GetReseñaAggregateType<T>>

    /**
     * Group by Reseña.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReseñaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReseñaGroupByArgs['orderBy'] }
        : { orderBy?: ReseñaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReseñaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReseñaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reseña model
   */
  readonly fields: ReseñaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reseña.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReseñaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reseña model
   */
  interface ReseñaFieldRefs {
    readonly id: FieldRef<"Reseña", 'Int'>
    readonly valoracion: FieldRef<"Reseña", 'Int'>
    readonly comentario: FieldRef<"Reseña", 'String'>
    readonly fecha: FieldRef<"Reseña", 'DateTime'>
    readonly moderada: FieldRef<"Reseña", 'Boolean'>
    readonly observacion: FieldRef<"Reseña", 'String'>
    readonly usuarioId: FieldRef<"Reseña", 'Int'>
    readonly productoId: FieldRef<"Reseña", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reseña findUnique
   */
  export type ReseñaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña findUniqueOrThrow
   */
  export type ReseñaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña findFirst
   */
  export type ReseñaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseñas.
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseñas.
     */
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Reseña findFirstOrThrow
   */
  export type ReseñaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseñas.
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseñas.
     */
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Reseña findMany
   */
  export type ReseñaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseñas to fetch.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reseñas.
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Reseña create
   */
  export type ReseñaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reseña.
     */
    data: XOR<ReseñaCreateInput, ReseñaUncheckedCreateInput>
  }

  /**
   * Reseña createMany
   */
  export type ReseñaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reseñas.
     */
    data: ReseñaCreateManyInput | ReseñaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reseña update
   */
  export type ReseñaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reseña.
     */
    data: XOR<ReseñaUpdateInput, ReseñaUncheckedUpdateInput>
    /**
     * Choose, which Reseña to update.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña updateMany
   */
  export type ReseñaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reseñas.
     */
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyInput>
    /**
     * Filter which Reseñas to update
     */
    where?: ReseñaWhereInput
    /**
     * Limit how many Reseñas to update.
     */
    limit?: number
  }

  /**
   * Reseña upsert
   */
  export type ReseñaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reseña to update in case it exists.
     */
    where: ReseñaWhereUniqueInput
    /**
     * In case the Reseña found by the `where` argument doesn't exist, create a new Reseña with this data.
     */
    create: XOR<ReseñaCreateInput, ReseñaUncheckedCreateInput>
    /**
     * In case the Reseña was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReseñaUpdateInput, ReseñaUncheckedUpdateInput>
  }

  /**
   * Reseña delete
   */
  export type ReseñaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter which Reseña to delete.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña deleteMany
   */
  export type ReseñaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseñas to delete
     */
    where?: ReseñaWhereInput
    /**
     * Limit how many Reseñas to delete.
     */
    limit?: number
  }

  /**
   * Reseña without action
   */
  export type ReseñaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
  }


  /**
   * Model Promocion
   */

  export type AggregatePromocion = {
    _count: PromocionCountAggregateOutputType | null
    _avg: PromocionAvgAggregateOutputType | null
    _sum: PromocionSumAggregateOutputType | null
    _min: PromocionMinAggregateOutputType | null
    _max: PromocionMaxAggregateOutputType | null
  }

  export type PromocionAvgAggregateOutputType = {
    id: number | null
    descuento: Decimal | null
  }

  export type PromocionSumAggregateOutputType = {
    id: number | null
    descuento: Decimal | null
  }

  export type PromocionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descuento: Decimal | null
    fechaInicio: Date | null
    fechaFin: Date | null
  }

  export type PromocionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descuento: Decimal | null
    fechaInicio: Date | null
    fechaFin: Date | null
  }

  export type PromocionCountAggregateOutputType = {
    id: number
    nombre: number
    descuento: number
    fechaInicio: number
    fechaFin: number
    _all: number
  }


  export type PromocionAvgAggregateInputType = {
    id?: true
    descuento?: true
  }

  export type PromocionSumAggregateInputType = {
    id?: true
    descuento?: true
  }

  export type PromocionMinAggregateInputType = {
    id?: true
    nombre?: true
    descuento?: true
    fechaInicio?: true
    fechaFin?: true
  }

  export type PromocionMaxAggregateInputType = {
    id?: true
    nombre?: true
    descuento?: true
    fechaInicio?: true
    fechaFin?: true
  }

  export type PromocionCountAggregateInputType = {
    id?: true
    nombre?: true
    descuento?: true
    fechaInicio?: true
    fechaFin?: true
    _all?: true
  }

  export type PromocionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocion to aggregate.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promocions
    **/
    _count?: true | PromocionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromocionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromocionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromocionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromocionMaxAggregateInputType
  }

  export type GetPromocionAggregateType<T extends PromocionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromocion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromocion[P]>
      : GetScalarType<T[P], AggregatePromocion[P]>
  }




  export type PromocionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocionWhereInput
    orderBy?: PromocionOrderByWithAggregationInput | PromocionOrderByWithAggregationInput[]
    by: PromocionScalarFieldEnum[] | PromocionScalarFieldEnum
    having?: PromocionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromocionCountAggregateInputType | true
    _avg?: PromocionAvgAggregateInputType
    _sum?: PromocionSumAggregateInputType
    _min?: PromocionMinAggregateInputType
    _max?: PromocionMaxAggregateInputType
  }

  export type PromocionGroupByOutputType = {
    id: number
    nombre: string
    descuento: Decimal
    fechaInicio: Date
    fechaFin: Date
    _count: PromocionCountAggregateOutputType | null
    _avg: PromocionAvgAggregateOutputType | null
    _sum: PromocionSumAggregateOutputType | null
    _min: PromocionMinAggregateOutputType | null
    _max: PromocionMaxAggregateOutputType | null
  }

  type GetPromocionGroupByPayload<T extends PromocionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromocionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromocionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromocionGroupByOutputType[P]>
            : GetScalarType<T[P], PromocionGroupByOutputType[P]>
        }
      >
    >


  export type PromocionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descuento?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    productos?: boolean | Promocion$productosArgs<ExtArgs>
    _count?: boolean | PromocionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocion"]>



  export type PromocionSelectScalar = {
    id?: boolean
    nombre?: boolean
    descuento?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }

  export type PromocionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descuento" | "fechaInicio" | "fechaFin", ExtArgs["result"]["promocion"]>
  export type PromocionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Promocion$productosArgs<ExtArgs>
    _count?: boolean | PromocionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PromocionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promocion"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descuento: Prisma.Decimal
      fechaInicio: Date
      fechaFin: Date
    }, ExtArgs["result"]["promocion"]>
    composites: {}
  }

  type PromocionGetPayload<S extends boolean | null | undefined | PromocionDefaultArgs> = $Result.GetResult<Prisma.$PromocionPayload, S>

  type PromocionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromocionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromocionCountAggregateInputType | true
    }

  export interface PromocionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promocion'], meta: { name: 'Promocion' } }
    /**
     * Find zero or one Promocion that matches the filter.
     * @param {PromocionFindUniqueArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromocionFindUniqueArgs>(args: SelectSubset<T, PromocionFindUniqueArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promocion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromocionFindUniqueOrThrowArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromocionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromocionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindFirstArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromocionFindFirstArgs>(args?: SelectSubset<T, PromocionFindFirstArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindFirstOrThrowArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromocionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromocionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promocions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promocions
     * const promocions = await prisma.promocion.findMany()
     * 
     * // Get first 10 Promocions
     * const promocions = await prisma.promocion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promocionWithIdOnly = await prisma.promocion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromocionFindManyArgs>(args?: SelectSubset<T, PromocionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promocion.
     * @param {PromocionCreateArgs} args - Arguments to create a Promocion.
     * @example
     * // Create one Promocion
     * const Promocion = await prisma.promocion.create({
     *   data: {
     *     // ... data to create a Promocion
     *   }
     * })
     * 
     */
    create<T extends PromocionCreateArgs>(args: SelectSubset<T, PromocionCreateArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promocions.
     * @param {PromocionCreateManyArgs} args - Arguments to create many Promocions.
     * @example
     * // Create many Promocions
     * const promocion = await prisma.promocion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromocionCreateManyArgs>(args?: SelectSubset<T, PromocionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promocion.
     * @param {PromocionDeleteArgs} args - Arguments to delete one Promocion.
     * @example
     * // Delete one Promocion
     * const Promocion = await prisma.promocion.delete({
     *   where: {
     *     // ... filter to delete one Promocion
     *   }
     * })
     * 
     */
    delete<T extends PromocionDeleteArgs>(args: SelectSubset<T, PromocionDeleteArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promocion.
     * @param {PromocionUpdateArgs} args - Arguments to update one Promocion.
     * @example
     * // Update one Promocion
     * const promocion = await prisma.promocion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromocionUpdateArgs>(args: SelectSubset<T, PromocionUpdateArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promocions.
     * @param {PromocionDeleteManyArgs} args - Arguments to filter Promocions to delete.
     * @example
     * // Delete a few Promocions
     * const { count } = await prisma.promocion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromocionDeleteManyArgs>(args?: SelectSubset<T, PromocionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promocions
     * const promocion = await prisma.promocion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromocionUpdateManyArgs>(args: SelectSubset<T, PromocionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promocion.
     * @param {PromocionUpsertArgs} args - Arguments to update or create a Promocion.
     * @example
     * // Update or create a Promocion
     * const promocion = await prisma.promocion.upsert({
     *   create: {
     *     // ... data to create a Promocion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promocion we want to update
     *   }
     * })
     */
    upsert<T extends PromocionUpsertArgs>(args: SelectSubset<T, PromocionUpsertArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionCountArgs} args - Arguments to filter Promocions to count.
     * @example
     * // Count the number of Promocions
     * const count = await prisma.promocion.count({
     *   where: {
     *     // ... the filter for the Promocions we want to count
     *   }
     * })
    **/
    count<T extends PromocionCountArgs>(
      args?: Subset<T, PromocionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromocionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromocionAggregateArgs>(args: Subset<T, PromocionAggregateArgs>): Prisma.PrismaPromise<GetPromocionAggregateType<T>>

    /**
     * Group by Promocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromocionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromocionGroupByArgs['orderBy'] }
        : { orderBy?: PromocionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromocionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promocion model
   */
  readonly fields: PromocionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promocion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromocionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Promocion$productosArgs<ExtArgs> = {}>(args?: Subset<T, Promocion$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promocion model
   */
  interface PromocionFieldRefs {
    readonly id: FieldRef<"Promocion", 'Int'>
    readonly nombre: FieldRef<"Promocion", 'String'>
    readonly descuento: FieldRef<"Promocion", 'Decimal'>
    readonly fechaInicio: FieldRef<"Promocion", 'DateTime'>
    readonly fechaFin: FieldRef<"Promocion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promocion findUnique
   */
  export type PromocionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion findUniqueOrThrow
   */
  export type PromocionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion findFirst
   */
  export type PromocionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion findFirstOrThrow
   */
  export type PromocionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion findMany
   */
  export type PromocionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocions to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion create
   */
  export type PromocionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promocion.
     */
    data: XOR<PromocionCreateInput, PromocionUncheckedCreateInput>
  }

  /**
   * Promocion createMany
   */
  export type PromocionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promocions.
     */
    data: PromocionCreateManyInput | PromocionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocion update
   */
  export type PromocionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promocion.
     */
    data: XOR<PromocionUpdateInput, PromocionUncheckedUpdateInput>
    /**
     * Choose, which Promocion to update.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion updateMany
   */
  export type PromocionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promocions.
     */
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyInput>
    /**
     * Filter which Promocions to update
     */
    where?: PromocionWhereInput
    /**
     * Limit how many Promocions to update.
     */
    limit?: number
  }

  /**
   * Promocion upsert
   */
  export type PromocionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promocion to update in case it exists.
     */
    where: PromocionWhereUniqueInput
    /**
     * In case the Promocion found by the `where` argument doesn't exist, create a new Promocion with this data.
     */
    create: XOR<PromocionCreateInput, PromocionUncheckedCreateInput>
    /**
     * In case the Promocion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromocionUpdateInput, PromocionUncheckedUpdateInput>
  }

  /**
   * Promocion delete
   */
  export type PromocionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter which Promocion to delete.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion deleteMany
   */
  export type PromocionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocions to delete
     */
    where?: PromocionWhereInput
    /**
     * Limit how many Promocions to delete.
     */
    limit?: number
  }

  /**
   * Promocion.productos
   */
  export type Promocion$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Promocion without action
   */
  export type PromocionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocion
     */
    omit?: PromocionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
  }


  /**
   * Model HistorialPedidos
   */

  export type AggregateHistorialPedidos = {
    _count: HistorialPedidosCountAggregateOutputType | null
    _avg: HistorialPedidosAvgAggregateOutputType | null
    _sum: HistorialPedidosSumAggregateOutputType | null
    _min: HistorialPedidosMinAggregateOutputType | null
    _max: HistorialPedidosMaxAggregateOutputType | null
  }

  export type HistorialPedidosAvgAggregateOutputType = {
    pedidoId: number | null
    usuarioId: number | null
  }

  export type HistorialPedidosSumAggregateOutputType = {
    pedidoId: number | null
    usuarioId: number | null
  }

  export type HistorialPedidosMinAggregateOutputType = {
    pedidoId: number | null
    usuarioId: number | null
  }

  export type HistorialPedidosMaxAggregateOutputType = {
    pedidoId: number | null
    usuarioId: number | null
  }

  export type HistorialPedidosCountAggregateOutputType = {
    pedidoId: number
    usuarioId: number
    _all: number
  }


  export type HistorialPedidosAvgAggregateInputType = {
    pedidoId?: true
    usuarioId?: true
  }

  export type HistorialPedidosSumAggregateInputType = {
    pedidoId?: true
    usuarioId?: true
  }

  export type HistorialPedidosMinAggregateInputType = {
    pedidoId?: true
    usuarioId?: true
  }

  export type HistorialPedidosMaxAggregateInputType = {
    pedidoId?: true
    usuarioId?: true
  }

  export type HistorialPedidosCountAggregateInputType = {
    pedidoId?: true
    usuarioId?: true
    _all?: true
  }

  export type HistorialPedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialPedidos to aggregate.
     */
    where?: HistorialPedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPedidos to fetch.
     */
    orderBy?: HistorialPedidosOrderByWithRelationInput | HistorialPedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialPedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialPedidos
    **/
    _count?: true | HistorialPedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialPedidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialPedidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialPedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialPedidosMaxAggregateInputType
  }

  export type GetHistorialPedidosAggregateType<T extends HistorialPedidosAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialPedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialPedidos[P]>
      : GetScalarType<T[P], AggregateHistorialPedidos[P]>
  }




  export type HistorialPedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialPedidosWhereInput
    orderBy?: HistorialPedidosOrderByWithAggregationInput | HistorialPedidosOrderByWithAggregationInput[]
    by: HistorialPedidosScalarFieldEnum[] | HistorialPedidosScalarFieldEnum
    having?: HistorialPedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialPedidosCountAggregateInputType | true
    _avg?: HistorialPedidosAvgAggregateInputType
    _sum?: HistorialPedidosSumAggregateInputType
    _min?: HistorialPedidosMinAggregateInputType
    _max?: HistorialPedidosMaxAggregateInputType
  }

  export type HistorialPedidosGroupByOutputType = {
    pedidoId: number
    usuarioId: number
    _count: HistorialPedidosCountAggregateOutputType | null
    _avg: HistorialPedidosAvgAggregateOutputType | null
    _sum: HistorialPedidosSumAggregateOutputType | null
    _min: HistorialPedidosMinAggregateOutputType | null
    _max: HistorialPedidosMaxAggregateOutputType | null
  }

  type GetHistorialPedidosGroupByPayload<T extends HistorialPedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialPedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialPedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialPedidosGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialPedidosGroupByOutputType[P]>
        }
      >
    >


  export type HistorialPedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedidoId?: boolean
    usuarioId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialPedidos"]>



  export type HistorialPedidosSelectScalar = {
    pedidoId?: boolean
    usuarioId?: boolean
  }

  export type HistorialPedidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedidoId" | "usuarioId", ExtArgs["result"]["historialPedidos"]>
  export type HistorialPedidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $HistorialPedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialPedidos"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pedidoId: number
      usuarioId: number
    }, ExtArgs["result"]["historialPedidos"]>
    composites: {}
  }

  type HistorialPedidosGetPayload<S extends boolean | null | undefined | HistorialPedidosDefaultArgs> = $Result.GetResult<Prisma.$HistorialPedidosPayload, S>

  type HistorialPedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialPedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialPedidosCountAggregateInputType | true
    }

  export interface HistorialPedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialPedidos'], meta: { name: 'HistorialPedidos' } }
    /**
     * Find zero or one HistorialPedidos that matches the filter.
     * @param {HistorialPedidosFindUniqueArgs} args - Arguments to find a HistorialPedidos
     * @example
     * // Get one HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialPedidosFindUniqueArgs>(args: SelectSubset<T, HistorialPedidosFindUniqueArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialPedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialPedidosFindUniqueOrThrowArgs} args - Arguments to find a HistorialPedidos
     * @example
     * // Get one HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialPedidosFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialPedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosFindFirstArgs} args - Arguments to find a HistorialPedidos
     * @example
     * // Get one HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialPedidosFindFirstArgs>(args?: SelectSubset<T, HistorialPedidosFindFirstArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialPedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosFindFirstOrThrowArgs} args - Arguments to find a HistorialPedidos
     * @example
     * // Get one HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialPedidosFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialPedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.findMany()
     * 
     * // Get first 10 HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.findMany({ take: 10 })
     * 
     * // Only select the `pedidoId`
     * const historialPedidosWithPedidoIdOnly = await prisma.historialPedidos.findMany({ select: { pedidoId: true } })
     * 
     */
    findMany<T extends HistorialPedidosFindManyArgs>(args?: SelectSubset<T, HistorialPedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialPedidos.
     * @param {HistorialPedidosCreateArgs} args - Arguments to create a HistorialPedidos.
     * @example
     * // Create one HistorialPedidos
     * const HistorialPedidos = await prisma.historialPedidos.create({
     *   data: {
     *     // ... data to create a HistorialPedidos
     *   }
     * })
     * 
     */
    create<T extends HistorialPedidosCreateArgs>(args: SelectSubset<T, HistorialPedidosCreateArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialPedidos.
     * @param {HistorialPedidosCreateManyArgs} args - Arguments to create many HistorialPedidos.
     * @example
     * // Create many HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialPedidosCreateManyArgs>(args?: SelectSubset<T, HistorialPedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistorialPedidos.
     * @param {HistorialPedidosDeleteArgs} args - Arguments to delete one HistorialPedidos.
     * @example
     * // Delete one HistorialPedidos
     * const HistorialPedidos = await prisma.historialPedidos.delete({
     *   where: {
     *     // ... filter to delete one HistorialPedidos
     *   }
     * })
     * 
     */
    delete<T extends HistorialPedidosDeleteArgs>(args: SelectSubset<T, HistorialPedidosDeleteArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialPedidos.
     * @param {HistorialPedidosUpdateArgs} args - Arguments to update one HistorialPedidos.
     * @example
     * // Update one HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialPedidosUpdateArgs>(args: SelectSubset<T, HistorialPedidosUpdateArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialPedidos.
     * @param {HistorialPedidosDeleteManyArgs} args - Arguments to filter HistorialPedidos to delete.
     * @example
     * // Delete a few HistorialPedidos
     * const { count } = await prisma.historialPedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialPedidosDeleteManyArgs>(args?: SelectSubset<T, HistorialPedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialPedidosUpdateManyArgs>(args: SelectSubset<T, HistorialPedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistorialPedidos.
     * @param {HistorialPedidosUpsertArgs} args - Arguments to update or create a HistorialPedidos.
     * @example
     * // Update or create a HistorialPedidos
     * const historialPedidos = await prisma.historialPedidos.upsert({
     *   create: {
     *     // ... data to create a HistorialPedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialPedidos we want to update
     *   }
     * })
     */
    upsert<T extends HistorialPedidosUpsertArgs>(args: SelectSubset<T, HistorialPedidosUpsertArgs<ExtArgs>>): Prisma__HistorialPedidosClient<$Result.GetResult<Prisma.$HistorialPedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosCountArgs} args - Arguments to filter HistorialPedidos to count.
     * @example
     * // Count the number of HistorialPedidos
     * const count = await prisma.historialPedidos.count({
     *   where: {
     *     // ... the filter for the HistorialPedidos we want to count
     *   }
     * })
    **/
    count<T extends HistorialPedidosCountArgs>(
      args?: Subset<T, HistorialPedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialPedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistorialPedidosAggregateArgs>(args: Subset<T, HistorialPedidosAggregateArgs>): Prisma.PrismaPromise<GetHistorialPedidosAggregateType<T>>

    /**
     * Group by HistorialPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialPedidosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistorialPedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialPedidosGroupByArgs['orderBy'] }
        : { orderBy?: HistorialPedidosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistorialPedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialPedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialPedidos model
   */
  readonly fields: HistorialPedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialPedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialPedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistorialPedidos model
   */
  interface HistorialPedidosFieldRefs {
    readonly pedidoId: FieldRef<"HistorialPedidos", 'Int'>
    readonly usuarioId: FieldRef<"HistorialPedidos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HistorialPedidos findUnique
   */
  export type HistorialPedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPedidos to fetch.
     */
    where: HistorialPedidosWhereUniqueInput
  }

  /**
   * HistorialPedidos findUniqueOrThrow
   */
  export type HistorialPedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPedidos to fetch.
     */
    where: HistorialPedidosWhereUniqueInput
  }

  /**
   * HistorialPedidos findFirst
   */
  export type HistorialPedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPedidos to fetch.
     */
    where?: HistorialPedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPedidos to fetch.
     */
    orderBy?: HistorialPedidosOrderByWithRelationInput | HistorialPedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialPedidos.
     */
    cursor?: HistorialPedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialPedidos.
     */
    distinct?: HistorialPedidosScalarFieldEnum | HistorialPedidosScalarFieldEnum[]
  }

  /**
   * HistorialPedidos findFirstOrThrow
   */
  export type HistorialPedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPedidos to fetch.
     */
    where?: HistorialPedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPedidos to fetch.
     */
    orderBy?: HistorialPedidosOrderByWithRelationInput | HistorialPedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialPedidos.
     */
    cursor?: HistorialPedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialPedidos.
     */
    distinct?: HistorialPedidosScalarFieldEnum | HistorialPedidosScalarFieldEnum[]
  }

  /**
   * HistorialPedidos findMany
   */
  export type HistorialPedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * Filter, which HistorialPedidos to fetch.
     */
    where?: HistorialPedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialPedidos to fetch.
     */
    orderBy?: HistorialPedidosOrderByWithRelationInput | HistorialPedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialPedidos.
     */
    cursor?: HistorialPedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialPedidos.
     */
    skip?: number
    distinct?: HistorialPedidosScalarFieldEnum | HistorialPedidosScalarFieldEnum[]
  }

  /**
   * HistorialPedidos create
   */
  export type HistorialPedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialPedidos.
     */
    data: XOR<HistorialPedidosCreateInput, HistorialPedidosUncheckedCreateInput>
  }

  /**
   * HistorialPedidos createMany
   */
  export type HistorialPedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialPedidos.
     */
    data: HistorialPedidosCreateManyInput | HistorialPedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistorialPedidos update
   */
  export type HistorialPedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialPedidos.
     */
    data: XOR<HistorialPedidosUpdateInput, HistorialPedidosUncheckedUpdateInput>
    /**
     * Choose, which HistorialPedidos to update.
     */
    where: HistorialPedidosWhereUniqueInput
  }

  /**
   * HistorialPedidos updateMany
   */
  export type HistorialPedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialPedidos.
     */
    data: XOR<HistorialPedidosUpdateManyMutationInput, HistorialPedidosUncheckedUpdateManyInput>
    /**
     * Filter which HistorialPedidos to update
     */
    where?: HistorialPedidosWhereInput
    /**
     * Limit how many HistorialPedidos to update.
     */
    limit?: number
  }

  /**
   * HistorialPedidos upsert
   */
  export type HistorialPedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialPedidos to update in case it exists.
     */
    where: HistorialPedidosWhereUniqueInput
    /**
     * In case the HistorialPedidos found by the `where` argument doesn't exist, create a new HistorialPedidos with this data.
     */
    create: XOR<HistorialPedidosCreateInput, HistorialPedidosUncheckedCreateInput>
    /**
     * In case the HistorialPedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialPedidosUpdateInput, HistorialPedidosUncheckedUpdateInput>
  }

  /**
   * HistorialPedidos delete
   */
  export type HistorialPedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
    /**
     * Filter which HistorialPedidos to delete.
     */
    where: HistorialPedidosWhereUniqueInput
  }

  /**
   * HistorialPedidos deleteMany
   */
  export type HistorialPedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialPedidos to delete
     */
    where?: HistorialPedidosWhereInput
    /**
     * Limit how many HistorialPedidos to delete.
     */
    limit?: number
  }

  /**
   * HistorialPedidos without action
   */
  export type HistorialPedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialPedidos
     */
    select?: HistorialPedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialPedidos
     */
    omit?: HistorialPedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialPedidosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    role: 'role',
    password: 'password',
    ultimoLogin: 'ultimoLogin'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    imagen: 'imagen',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion',
    promocionId: 'promocionId'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProductoCategoriaScalarFieldEnum: {
    productoId: 'productoId',
    categoriaId: 'categoriaId'
  };

  export type ProductoCategoriaScalarFieldEnum = (typeof ProductoCategoriaScalarFieldEnum)[keyof typeof ProductoCategoriaScalarFieldEnum]


  export const EtiquetaScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type EtiquetaScalarFieldEnum = (typeof EtiquetaScalarFieldEnum)[keyof typeof EtiquetaScalarFieldEnum]


  export const ProductoEtiquetaScalarFieldEnum: {
    productoId: 'productoId',
    etiquetaId: 'etiquetaId'
  };

  export type ProductoEtiquetaScalarFieldEnum = (typeof ProductoEtiquetaScalarFieldEnum)[keyof typeof ProductoEtiquetaScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    fechaPedido: 'fechaPedido',
    usuarioId: 'usuarioId',
    estado: 'estado'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoProductoScalarFieldEnum: {
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    subtotal: 'subtotal',
    impuestos: 'impuestos',
    total: 'total',
    pedidoId: 'pedidoId',
    productoId: 'productoId'
  };

  export type PedidoProductoScalarFieldEnum = (typeof PedidoProductoScalarFieldEnum)[keyof typeof PedidoProductoScalarFieldEnum]


  export const ProductoPersonalizadoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    color: 'color',
    material: 'material',
    tamanno: 'tamanno',
    logo: 'logo',
    productoId: 'productoId',
    pedidoId: 'pedidoId'
  };

  export type ProductoPersonalizadoScalarFieldEnum = (typeof ProductoPersonalizadoScalarFieldEnum)[keyof typeof ProductoPersonalizadoScalarFieldEnum]


  export const ReseñaScalarFieldEnum: {
    id: 'id',
    valoracion: 'valoracion',
    comentario: 'comentario',
    fecha: 'fecha',
    moderada: 'moderada',
    observacion: 'observacion',
    usuarioId: 'usuarioId',
    productoId: 'productoId'
  };

  export type ReseñaScalarFieldEnum = (typeof ReseñaScalarFieldEnum)[keyof typeof ReseñaScalarFieldEnum]


  export const PromocionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descuento: 'descuento',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin'
  };

  export type PromocionScalarFieldEnum = (typeof PromocionScalarFieldEnum)[keyof typeof PromocionScalarFieldEnum]


  export const HistorialPedidosScalarFieldEnum: {
    pedidoId: 'pedidoId',
    usuarioId: 'usuarioId'
  };

  export type HistorialPedidosScalarFieldEnum = (typeof HistorialPedidosScalarFieldEnum)[keyof typeof HistorialPedidosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    correo: 'correo',
    password: 'password'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const EtiquetaOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion'
  };

  export type EtiquetaOrderByRelevanceFieldEnum = (typeof EtiquetaOrderByRelevanceFieldEnum)[keyof typeof EtiquetaOrderByRelevanceFieldEnum]


  export const ProductoPersonalizadoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    color: 'color',
    material: 'material'
  };

  export type ProductoPersonalizadoOrderByRelevanceFieldEnum = (typeof ProductoPersonalizadoOrderByRelevanceFieldEnum)[keyof typeof ProductoPersonalizadoOrderByRelevanceFieldEnum]


  export const ReseñaOrderByRelevanceFieldEnum: {
    comentario: 'comentario',
    observacion: 'observacion'
  };

  export type ReseñaOrderByRelevanceFieldEnum = (typeof ReseñaOrderByRelevanceFieldEnum)[keyof typeof ReseñaOrderByRelevanceFieldEnum]


  export const PromocionOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type PromocionOrderByRelevanceFieldEnum = (typeof PromocionOrderByRelevanceFieldEnum)[keyof typeof PromocionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    password?: StringFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    pedidos?: PedidoListRelationFilter
    reseñas?: ReseñaListRelationFilter
    historial?: HistorialPedidosListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    role?: SortOrder
    password?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
    reseñas?: ReseñaOrderByRelationAggregateInput
    historial?: HistorialPedidosOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    password?: StringFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    pedidos?: PedidoListRelationFilter
    reseñas?: ReseñaListRelationFilter
    historial?: HistorialPedidosListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    role?: SortOrder
    password?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    password?: StringWithAggregatesFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    imagen?: StringFilter<"Producto"> | string
    fechaCreacion?: DateTimeFilter<"Producto"> | Date | string
    fechaActualizacion?: DateTimeNullableFilter<"Producto"> | Date | string | null
    promocionId?: IntNullableFilter<"Producto"> | number | null
    personalizado?: ProductoPersonalizadoListRelationFilter
    categorias?: ProductoCategoriaListRelationFilter
    etiquetas?: ProductoEtiquetaListRelationFilter
    pedidos?: PedidoProductoListRelationFilter
    reseñas?: ReseñaListRelationFilter
    promocion?: XOR<PromocionNullableScalarRelationFilter, PromocionWhereInput> | null
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    imagen?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrderInput | SortOrder
    promocionId?: SortOrderInput | SortOrder
    personalizado?: ProductoPersonalizadoOrderByRelationAggregateInput
    categorias?: ProductoCategoriaOrderByRelationAggregateInput
    etiquetas?: ProductoEtiquetaOrderByRelationAggregateInput
    pedidos?: PedidoProductoOrderByRelationAggregateInput
    reseñas?: ReseñaOrderByRelationAggregateInput
    promocion?: PromocionOrderByWithRelationInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    imagen?: StringFilter<"Producto"> | string
    fechaCreacion?: DateTimeFilter<"Producto"> | Date | string
    fechaActualizacion?: DateTimeNullableFilter<"Producto"> | Date | string | null
    promocionId?: IntNullableFilter<"Producto"> | number | null
    personalizado?: ProductoPersonalizadoListRelationFilter
    categorias?: ProductoCategoriaListRelationFilter
    etiquetas?: ProductoEtiquetaListRelationFilter
    pedidos?: PedidoProductoListRelationFilter
    reseñas?: ReseñaListRelationFilter
    promocion?: XOR<PromocionNullableScalarRelationFilter, PromocionWhereInput> | null
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    imagen?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrderInput | SortOrder
    promocionId?: SortOrderInput | SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Producto"> | number
    imagen?: StringWithAggregatesFilter<"Producto"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    fechaActualizacion?: DateTimeNullableWithAggregatesFilter<"Producto"> | Date | string | null
    promocionId?: IntNullableWithAggregatesFilter<"Producto"> | number | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    descripcion?: StringFilter<"Categoria"> | string
    productos?: ProductoCategoriaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    productos?: ProductoCategoriaOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descripcion?: StringFilter<"Categoria"> | string
    productos?: ProductoCategoriaListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    descripcion?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type ProductoCategoriaWhereInput = {
    AND?: ProductoCategoriaWhereInput | ProductoCategoriaWhereInput[]
    OR?: ProductoCategoriaWhereInput[]
    NOT?: ProductoCategoriaWhereInput | ProductoCategoriaWhereInput[]
    productoId?: IntFilter<"ProductoCategoria"> | number
    categoriaId?: IntFilter<"ProductoCategoria"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type ProductoCategoriaOrderByWithRelationInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
  }

  export type ProductoCategoriaWhereUniqueInput = Prisma.AtLeast<{
    productoId_categoriaId?: ProductoCategoriaProductoIdCategoriaIdCompoundUniqueInput
    AND?: ProductoCategoriaWhereInput | ProductoCategoriaWhereInput[]
    OR?: ProductoCategoriaWhereInput[]
    NOT?: ProductoCategoriaWhereInput | ProductoCategoriaWhereInput[]
    productoId?: IntFilter<"ProductoCategoria"> | number
    categoriaId?: IntFilter<"ProductoCategoria"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "productoId_categoriaId">

  export type ProductoCategoriaOrderByWithAggregationInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
    _count?: ProductoCategoriaCountOrderByAggregateInput
    _avg?: ProductoCategoriaAvgOrderByAggregateInput
    _max?: ProductoCategoriaMaxOrderByAggregateInput
    _min?: ProductoCategoriaMinOrderByAggregateInput
    _sum?: ProductoCategoriaSumOrderByAggregateInput
  }

  export type ProductoCategoriaScalarWhereWithAggregatesInput = {
    AND?: ProductoCategoriaScalarWhereWithAggregatesInput | ProductoCategoriaScalarWhereWithAggregatesInput[]
    OR?: ProductoCategoriaScalarWhereWithAggregatesInput[]
    NOT?: ProductoCategoriaScalarWhereWithAggregatesInput | ProductoCategoriaScalarWhereWithAggregatesInput[]
    productoId?: IntWithAggregatesFilter<"ProductoCategoria"> | number
    categoriaId?: IntWithAggregatesFilter<"ProductoCategoria"> | number
  }

  export type EtiquetaWhereInput = {
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    id?: IntFilter<"Etiqueta"> | number
    descripcion?: StringFilter<"Etiqueta"> | string
    productos?: ProductoEtiquetaListRelationFilter
  }

  export type EtiquetaOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    productos?: ProductoEtiquetaOrderByRelationAggregateInput
    _relevance?: EtiquetaOrderByRelevanceInput
  }

  export type EtiquetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    descripcion?: StringFilter<"Etiqueta"> | string
    productos?: ProductoEtiquetaListRelationFilter
  }, "id">

  export type EtiquetaOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: EtiquetaCountOrderByAggregateInput
    _avg?: EtiquetaAvgOrderByAggregateInput
    _max?: EtiquetaMaxOrderByAggregateInput
    _min?: EtiquetaMinOrderByAggregateInput
    _sum?: EtiquetaSumOrderByAggregateInput
  }

  export type EtiquetaScalarWhereWithAggregatesInput = {
    AND?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    OR?: EtiquetaScalarWhereWithAggregatesInput[]
    NOT?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etiqueta"> | number
    descripcion?: StringWithAggregatesFilter<"Etiqueta"> | string
  }

  export type ProductoEtiquetaWhereInput = {
    AND?: ProductoEtiquetaWhereInput | ProductoEtiquetaWhereInput[]
    OR?: ProductoEtiquetaWhereInput[]
    NOT?: ProductoEtiquetaWhereInput | ProductoEtiquetaWhereInput[]
    productoId?: IntFilter<"ProductoEtiqueta"> | number
    etiquetaId?: IntFilter<"ProductoEtiqueta"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    etiqueta?: XOR<EtiquetaScalarRelationFilter, EtiquetaWhereInput>
  }

  export type ProductoEtiquetaOrderByWithRelationInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    etiqueta?: EtiquetaOrderByWithRelationInput
  }

  export type ProductoEtiquetaWhereUniqueInput = Prisma.AtLeast<{
    productoId_etiquetaId?: ProductoEtiquetaProductoIdEtiquetaIdCompoundUniqueInput
    AND?: ProductoEtiquetaWhereInput | ProductoEtiquetaWhereInput[]
    OR?: ProductoEtiquetaWhereInput[]
    NOT?: ProductoEtiquetaWhereInput | ProductoEtiquetaWhereInput[]
    productoId?: IntFilter<"ProductoEtiqueta"> | number
    etiquetaId?: IntFilter<"ProductoEtiqueta"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    etiqueta?: XOR<EtiquetaScalarRelationFilter, EtiquetaWhereInput>
  }, "productoId_etiquetaId">

  export type ProductoEtiquetaOrderByWithAggregationInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
    _count?: ProductoEtiquetaCountOrderByAggregateInput
    _avg?: ProductoEtiquetaAvgOrderByAggregateInput
    _max?: ProductoEtiquetaMaxOrderByAggregateInput
    _min?: ProductoEtiquetaMinOrderByAggregateInput
    _sum?: ProductoEtiquetaSumOrderByAggregateInput
  }

  export type ProductoEtiquetaScalarWhereWithAggregatesInput = {
    AND?: ProductoEtiquetaScalarWhereWithAggregatesInput | ProductoEtiquetaScalarWhereWithAggregatesInput[]
    OR?: ProductoEtiquetaScalarWhereWithAggregatesInput[]
    NOT?: ProductoEtiquetaScalarWhereWithAggregatesInput | ProductoEtiquetaScalarWhereWithAggregatesInput[]
    productoId?: IntWithAggregatesFilter<"ProductoEtiqueta"> | number
    etiquetaId?: IntWithAggregatesFilter<"ProductoEtiqueta"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    estado?: EnumEstadoFilter<"Pedido"> | $Enums.Estado
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    productos?: PedidoProductoListRelationFilter
    personalizado?: ProductoPersonalizadoListRelationFilter
    historial?: HistorialPedidosListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    productos?: PedidoProductoOrderByRelationAggregateInput
    personalizado?: ProductoPersonalizadoOrderByRelationAggregateInput
    historial?: HistorialPedidosOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    estado?: EnumEstadoFilter<"Pedido"> | $Enums.Estado
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    productos?: PedidoProductoListRelationFilter
    personalizado?: ProductoPersonalizadoListRelationFilter
    historial?: HistorialPedidosListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    fechaPedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    estado?: EnumEstadoWithAggregatesFilter<"Pedido"> | $Enums.Estado
  }

  export type PedidoProductoWhereInput = {
    AND?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    OR?: PedidoProductoWhereInput[]
    NOT?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    cantidad?: IntFilter<"PedidoProducto"> | number
    precioUnitario?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"PedidoProducto"> | number
    productoId?: IntFilter<"PedidoProducto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type PedidoProductoOrderByWithRelationInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type PedidoProductoWhereUniqueInput = Prisma.AtLeast<{
    pedidoId_productoId?: PedidoProductoPedidoIdProductoIdCompoundUniqueInput
    AND?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    OR?: PedidoProductoWhereInput[]
    NOT?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    cantidad?: IntFilter<"PedidoProducto"> | number
    precioUnitario?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"PedidoProducto"> | number
    productoId?: IntFilter<"PedidoProducto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "pedidoId_productoId">

  export type PedidoProductoOrderByWithAggregationInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    _count?: PedidoProductoCountOrderByAggregateInput
    _avg?: PedidoProductoAvgOrderByAggregateInput
    _max?: PedidoProductoMaxOrderByAggregateInput
    _min?: PedidoProductoMinOrderByAggregateInput
    _sum?: PedidoProductoSumOrderByAggregateInput
  }

  export type PedidoProductoScalarWhereWithAggregatesInput = {
    AND?: PedidoProductoScalarWhereWithAggregatesInput | PedidoProductoScalarWhereWithAggregatesInput[]
    OR?: PedidoProductoScalarWhereWithAggregatesInput[]
    NOT?: PedidoProductoScalarWhereWithAggregatesInput | PedidoProductoScalarWhereWithAggregatesInput[]
    cantidad?: IntWithAggregatesFilter<"PedidoProducto"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalWithAggregatesFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntWithAggregatesFilter<"PedidoProducto"> | number
    productoId?: IntWithAggregatesFilter<"PedidoProducto"> | number
  }

  export type ProductoPersonalizadoWhereInput = {
    AND?: ProductoPersonalizadoWhereInput | ProductoPersonalizadoWhereInput[]
    OR?: ProductoPersonalizadoWhereInput[]
    NOT?: ProductoPersonalizadoWhereInput | ProductoPersonalizadoWhereInput[]
    id?: IntFilter<"ProductoPersonalizado"> | number
    nombre?: StringFilter<"ProductoPersonalizado"> | string
    descripcion?: StringFilter<"ProductoPersonalizado"> | string
    color?: StringFilter<"ProductoPersonalizado"> | string
    material?: StringFilter<"ProductoPersonalizado"> | string
    tamanno?: IntFilter<"ProductoPersonalizado"> | number
    logo?: BoolFilter<"ProductoPersonalizado"> | boolean
    productoId?: IntFilter<"ProductoPersonalizado"> | number
    pedidoId?: IntNullableFilter<"ProductoPersonalizado"> | number | null
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    pedido?: XOR<PedidoNullableScalarRelationFilter, PedidoWhereInput> | null
  }

  export type ProductoPersonalizadoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    material?: SortOrder
    tamanno?: SortOrder
    logo?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrderInput | SortOrder
    producto?: ProductoOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
    _relevance?: ProductoPersonalizadoOrderByRelevanceInput
  }

  export type ProductoPersonalizadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoPersonalizadoWhereInput | ProductoPersonalizadoWhereInput[]
    OR?: ProductoPersonalizadoWhereInput[]
    NOT?: ProductoPersonalizadoWhereInput | ProductoPersonalizadoWhereInput[]
    nombre?: StringFilter<"ProductoPersonalizado"> | string
    descripcion?: StringFilter<"ProductoPersonalizado"> | string
    color?: StringFilter<"ProductoPersonalizado"> | string
    material?: StringFilter<"ProductoPersonalizado"> | string
    tamanno?: IntFilter<"ProductoPersonalizado"> | number
    logo?: BoolFilter<"ProductoPersonalizado"> | boolean
    productoId?: IntFilter<"ProductoPersonalizado"> | number
    pedidoId?: IntNullableFilter<"ProductoPersonalizado"> | number | null
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    pedido?: XOR<PedidoNullableScalarRelationFilter, PedidoWhereInput> | null
  }, "id">

  export type ProductoPersonalizadoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    material?: SortOrder
    tamanno?: SortOrder
    logo?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrderInput | SortOrder
    _count?: ProductoPersonalizadoCountOrderByAggregateInput
    _avg?: ProductoPersonalizadoAvgOrderByAggregateInput
    _max?: ProductoPersonalizadoMaxOrderByAggregateInput
    _min?: ProductoPersonalizadoMinOrderByAggregateInput
    _sum?: ProductoPersonalizadoSumOrderByAggregateInput
  }

  export type ProductoPersonalizadoScalarWhereWithAggregatesInput = {
    AND?: ProductoPersonalizadoScalarWhereWithAggregatesInput | ProductoPersonalizadoScalarWhereWithAggregatesInput[]
    OR?: ProductoPersonalizadoScalarWhereWithAggregatesInput[]
    NOT?: ProductoPersonalizadoScalarWhereWithAggregatesInput | ProductoPersonalizadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductoPersonalizado"> | number
    nombre?: StringWithAggregatesFilter<"ProductoPersonalizado"> | string
    descripcion?: StringWithAggregatesFilter<"ProductoPersonalizado"> | string
    color?: StringWithAggregatesFilter<"ProductoPersonalizado"> | string
    material?: StringWithAggregatesFilter<"ProductoPersonalizado"> | string
    tamanno?: IntWithAggregatesFilter<"ProductoPersonalizado"> | number
    logo?: BoolWithAggregatesFilter<"ProductoPersonalizado"> | boolean
    productoId?: IntWithAggregatesFilter<"ProductoPersonalizado"> | number
    pedidoId?: IntNullableWithAggregatesFilter<"ProductoPersonalizado"> | number | null
  }

  export type ReseñaWhereInput = {
    AND?: ReseñaWhereInput | ReseñaWhereInput[]
    OR?: ReseñaWhereInput[]
    NOT?: ReseñaWhereInput | ReseñaWhereInput[]
    id?: IntFilter<"Reseña"> | number
    valoracion?: IntFilter<"Reseña"> | number
    comentario?: StringNullableFilter<"Reseña"> | string | null
    fecha?: DateTimeFilter<"Reseña"> | Date | string
    moderada?: BoolFilter<"Reseña"> | boolean
    observacion?: StringNullableFilter<"Reseña"> | string | null
    usuarioId?: IntFilter<"Reseña"> | number
    productoId?: IntFilter<"Reseña"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type ReseñaOrderByWithRelationInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrderInput | SortOrder
    fecha?: SortOrder
    moderada?: SortOrder
    observacion?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
    _relevance?: ReseñaOrderByRelevanceInput
  }

  export type ReseñaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReseñaWhereInput | ReseñaWhereInput[]
    OR?: ReseñaWhereInput[]
    NOT?: ReseñaWhereInput | ReseñaWhereInput[]
    valoracion?: IntFilter<"Reseña"> | number
    comentario?: StringNullableFilter<"Reseña"> | string | null
    fecha?: DateTimeFilter<"Reseña"> | Date | string
    moderada?: BoolFilter<"Reseña"> | boolean
    observacion?: StringNullableFilter<"Reseña"> | string | null
    usuarioId?: IntFilter<"Reseña"> | number
    productoId?: IntFilter<"Reseña"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type ReseñaOrderByWithAggregationInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrderInput | SortOrder
    fecha?: SortOrder
    moderada?: SortOrder
    observacion?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    _count?: ReseñaCountOrderByAggregateInput
    _avg?: ReseñaAvgOrderByAggregateInput
    _max?: ReseñaMaxOrderByAggregateInput
    _min?: ReseñaMinOrderByAggregateInput
    _sum?: ReseñaSumOrderByAggregateInput
  }

  export type ReseñaScalarWhereWithAggregatesInput = {
    AND?: ReseñaScalarWhereWithAggregatesInput | ReseñaScalarWhereWithAggregatesInput[]
    OR?: ReseñaScalarWhereWithAggregatesInput[]
    NOT?: ReseñaScalarWhereWithAggregatesInput | ReseñaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reseña"> | number
    valoracion?: IntWithAggregatesFilter<"Reseña"> | number
    comentario?: StringNullableWithAggregatesFilter<"Reseña"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Reseña"> | Date | string
    moderada?: BoolWithAggregatesFilter<"Reseña"> | boolean
    observacion?: StringNullableWithAggregatesFilter<"Reseña"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Reseña"> | number
    productoId?: IntWithAggregatesFilter<"Reseña"> | number
  }

  export type PromocionWhereInput = {
    AND?: PromocionWhereInput | PromocionWhereInput[]
    OR?: PromocionWhereInput[]
    NOT?: PromocionWhereInput | PromocionWhereInput[]
    id?: IntFilter<"Promocion"> | number
    nombre?: StringFilter<"Promocion"> | string
    descuento?: DecimalFilter<"Promocion"> | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeFilter<"Promocion"> | Date | string
    productos?: ProductoListRelationFilter
  }

  export type PromocionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descuento?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: PromocionOrderByRelevanceInput
  }

  export type PromocionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PromocionWhereInput | PromocionWhereInput[]
    OR?: PromocionWhereInput[]
    NOT?: PromocionWhereInput | PromocionWhereInput[]
    nombre?: StringFilter<"Promocion"> | string
    descuento?: DecimalFilter<"Promocion"> | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeFilter<"Promocion"> | Date | string
    productos?: ProductoListRelationFilter
  }, "id">

  export type PromocionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descuento?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    _count?: PromocionCountOrderByAggregateInput
    _avg?: PromocionAvgOrderByAggregateInput
    _max?: PromocionMaxOrderByAggregateInput
    _min?: PromocionMinOrderByAggregateInput
    _sum?: PromocionSumOrderByAggregateInput
  }

  export type PromocionScalarWhereWithAggregatesInput = {
    AND?: PromocionScalarWhereWithAggregatesInput | PromocionScalarWhereWithAggregatesInput[]
    OR?: PromocionScalarWhereWithAggregatesInput[]
    NOT?: PromocionScalarWhereWithAggregatesInput | PromocionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promocion"> | number
    nombre?: StringWithAggregatesFilter<"Promocion"> | string
    descuento?: DecimalWithAggregatesFilter<"Promocion"> | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeWithAggregatesFilter<"Promocion"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Promocion"> | Date | string
  }

  export type HistorialPedidosWhereInput = {
    AND?: HistorialPedidosWhereInput | HistorialPedidosWhereInput[]
    OR?: HistorialPedidosWhereInput[]
    NOT?: HistorialPedidosWhereInput | HistorialPedidosWhereInput[]
    pedidoId?: IntFilter<"HistorialPedidos"> | number
    usuarioId?: IntFilter<"HistorialPedidos"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type HistorialPedidosOrderByWithRelationInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type HistorialPedidosWhereUniqueInput = Prisma.AtLeast<{
    pedidoId_usuarioId?: HistorialPedidosPedidoIdUsuarioIdCompoundUniqueInput
    AND?: HistorialPedidosWhereInput | HistorialPedidosWhereInput[]
    OR?: HistorialPedidosWhereInput[]
    NOT?: HistorialPedidosWhereInput | HistorialPedidosWhereInput[]
    pedidoId?: IntFilter<"HistorialPedidos"> | number
    usuarioId?: IntFilter<"HistorialPedidos"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "pedidoId_usuarioId">

  export type HistorialPedidosOrderByWithAggregationInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
    _count?: HistorialPedidosCountOrderByAggregateInput
    _avg?: HistorialPedidosAvgOrderByAggregateInput
    _max?: HistorialPedidosMaxOrderByAggregateInput
    _min?: HistorialPedidosMinOrderByAggregateInput
    _sum?: HistorialPedidosSumOrderByAggregateInput
  }

  export type HistorialPedidosScalarWhereWithAggregatesInput = {
    AND?: HistorialPedidosScalarWhereWithAggregatesInput | HistorialPedidosScalarWhereWithAggregatesInput[]
    OR?: HistorialPedidosScalarWhereWithAggregatesInput[]
    NOT?: HistorialPedidosScalarWhereWithAggregatesInput | HistorialPedidosScalarWhereWithAggregatesInput[]
    pedidoId?: IntWithAggregatesFilter<"HistorialPedidos"> | number
    usuarioId?: IntWithAggregatesFilter<"HistorialPedidos"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaCreateNestedManyWithoutUsuarioInput
    historial?: HistorialPedidosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUsuarioInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUpdateManyWithoutUsuarioNestedInput
    historial?: HistorialPedidosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaCreateNestedManyWithoutProductoInput
    promocion?: PromocionCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUpdateManyWithoutProductoNestedInput
    promocion?: PromocionUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriaCreateInput = {
    descripcion: string
    productos?: ProductoCategoriaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    descripcion: string
    productos?: ProductoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: ProductoCategoriaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: ProductoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    descripcion: string
  }

  export type CategoriaUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCategoriaCreateInput = {
    producto: ProductoCreateNestedOneWithoutCategoriasInput
    categoria: CategoriaCreateNestedOneWithoutProductosInput
  }

  export type ProductoCategoriaUncheckedCreateInput = {
    productoId: number
    categoriaId: number
  }

  export type ProductoCategoriaUpdateInput = {
    producto?: ProductoUpdateOneRequiredWithoutCategoriasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoCategoriaUncheckedUpdateInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCategoriaCreateManyInput = {
    productoId: number
    categoriaId: number
  }

  export type ProductoCategoriaUpdateManyMutationInput = {

  }

  export type ProductoCategoriaUncheckedUpdateManyInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type EtiquetaCreateInput = {
    descripcion: string
    productos?: ProductoEtiquetaCreateNestedManyWithoutEtiquetaInput
  }

  export type EtiquetaUncheckedCreateInput = {
    id?: number
    descripcion: string
    productos?: ProductoEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput
  }

  export type EtiquetaUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: ProductoEtiquetaUpdateManyWithoutEtiquetaNestedInput
  }

  export type EtiquetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: ProductoEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInput
  }

  export type EtiquetaCreateManyInput = {
    id?: number
    descripcion: string
  }

  export type EtiquetaUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type EtiquetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoEtiquetaCreateInput = {
    producto: ProductoCreateNestedOneWithoutEtiquetasInput
    etiqueta: EtiquetaCreateNestedOneWithoutProductosInput
  }

  export type ProductoEtiquetaUncheckedCreateInput = {
    productoId: number
    etiquetaId: number
  }

  export type ProductoEtiquetaUpdateInput = {
    producto?: ProductoUpdateOneRequiredWithoutEtiquetasNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoEtiquetaUncheckedUpdateInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    etiquetaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoEtiquetaCreateManyInput = {
    productoId: number
    etiquetaId: number
  }

  export type ProductoEtiquetaUpdateManyMutationInput = {

  }

  export type ProductoEtiquetaUncheckedUpdateManyInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    etiquetaId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    fechaPedido?: Date | string
    estado?: $Enums.Estado
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    fechaPedido?: Date | string
    usuarioId: number
    estado?: $Enums.Estado
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    personalizado?: ProductoPersonalizadoUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    fechaPedido?: Date | string
    usuarioId: number
    estado?: $Enums.Estado
  }

  export type PedidoUpdateManyMutationInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type PedidoProductoCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutProductosInput
    producto: ProductoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoProductoUncheckedCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pedidoId: number
    productoId: number
  }

  export type PedidoProductoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutProductosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoProductoUncheckedUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoCreateManyInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pedidoId: number
    productoId: number
  }

  export type PedidoProductoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoProductoUncheckedUpdateManyInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoPersonalizadoCreateInput = {
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    producto: ProductoCreateNestedOneWithoutPersonalizadoInput
    pedido?: PedidoCreateNestedOneWithoutPersonalizadoInput
  }

  export type ProductoPersonalizadoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    productoId: number
    pedidoId?: number | null
  }

  export type ProductoPersonalizadoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    producto?: ProductoUpdateOneRequiredWithoutPersonalizadoNestedInput
    pedido?: PedidoUpdateOneWithoutPersonalizadoNestedInput
  }

  export type ProductoPersonalizadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    productoId?: IntFieldUpdateOperationsInput | number
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductoPersonalizadoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    productoId: number
    pedidoId?: number | null
  }

  export type ProductoPersonalizadoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductoPersonalizadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    productoId?: IntFieldUpdateOperationsInput | number
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReseñaCreateInput = {
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    usuario: UsuarioCreateNestedOneWithoutReseñasInput
    producto: ProductoCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateInput = {
    id?: number
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    usuarioId: number
    productoId: number
  }

  export type ReseñaUpdateInput = {
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutReseñasNestedInput
    producto?: ProductoUpdateOneRequiredWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaCreateManyInput = {
    id?: number
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    usuarioId: number
    productoId: number
  }

  export type ReseñaUpdateManyMutationInput = {
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReseñaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type PromocionCreateInput = {
    nombre: string
    descuento: Decimal | DecimalJsLike | number | string
    fechaInicio: Date | string
    fechaFin: Date | string
    productos?: ProductoCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateInput = {
    id?: number
    nombre: string
    descuento: Decimal | DecimalJsLike | number | string
    fechaInicio: Date | string
    fechaFin: Date | string
    productos?: ProductoUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionCreateManyInput = {
    id?: number
    nombre: string
    descuento: Decimal | DecimalJsLike | number | string
    fechaInicio: Date | string
    fechaFin: Date | string
  }

  export type PromocionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialPedidosCreateInput = {
    pedido: PedidoCreateNestedOneWithoutHistorialInput
    usuario: UsuarioCreateNestedOneWithoutHistorialInput
  }

  export type HistorialPedidosUncheckedCreateInput = {
    pedidoId: number
    usuarioId: number
  }

  export type HistorialPedidosUpdateInput = {
    pedido?: PedidoUpdateOneRequiredWithoutHistorialNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type HistorialPedidosUncheckedUpdateInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialPedidosCreateManyInput = {
    pedidoId: number
    usuarioId: number
  }

  export type HistorialPedidosUpdateManyMutationInput = {

  }

  export type HistorialPedidosUncheckedUpdateManyInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type ReseñaListRelationFilter = {
    every?: ReseñaWhereInput
    some?: ReseñaWhereInput
    none?: ReseñaWhereInput
  }

  export type HistorialPedidosListRelationFilter = {
    every?: HistorialPedidosWhereInput
    some?: HistorialPedidosWhereInput
    none?: HistorialPedidosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReseñaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistorialPedidosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    role?: SortOrder
    password?: SortOrder
    ultimoLogin?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    role?: SortOrder
    password?: SortOrder
    ultimoLogin?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    role?: SortOrder
    password?: SortOrder
    ultimoLogin?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductoPersonalizadoListRelationFilter = {
    every?: ProductoPersonalizadoWhereInput
    some?: ProductoPersonalizadoWhereInput
    none?: ProductoPersonalizadoWhereInput
  }

  export type ProductoCategoriaListRelationFilter = {
    every?: ProductoCategoriaWhereInput
    some?: ProductoCategoriaWhereInput
    none?: ProductoCategoriaWhereInput
  }

  export type ProductoEtiquetaListRelationFilter = {
    every?: ProductoEtiquetaWhereInput
    some?: ProductoEtiquetaWhereInput
    none?: ProductoEtiquetaWhereInput
  }

  export type PedidoProductoListRelationFilter = {
    every?: PedidoProductoWhereInput
    some?: PedidoProductoWhereInput
    none?: PedidoProductoWhereInput
  }

  export type PromocionNullableScalarRelationFilter = {
    is?: PromocionWhereInput | null
    isNot?: PromocionWhereInput | null
  }

  export type ProductoPersonalizadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoEtiquetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    imagen?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    promocionId?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    promocionId?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    imagen?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    promocionId?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    imagen?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    promocionId?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    promocionId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ProductoCategoriaProductoIdCategoriaIdCompoundUniqueInput = {
    productoId: number
    categoriaId: number
  }

  export type ProductoCategoriaCountOrderByAggregateInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProductoCategoriaAvgOrderByAggregateInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProductoCategoriaMaxOrderByAggregateInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProductoCategoriaMinOrderByAggregateInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProductoCategoriaSumOrderByAggregateInput = {
    productoId?: SortOrder
    categoriaId?: SortOrder
  }

  export type EtiquetaOrderByRelevanceInput = {
    fields: EtiquetaOrderByRelevanceFieldEnum | EtiquetaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EtiquetaCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type EtiquetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtiquetaMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type EtiquetaMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type EtiquetaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtiquetaScalarRelationFilter = {
    is?: EtiquetaWhereInput
    isNot?: EtiquetaWhereInput
  }

  export type ProductoEtiquetaProductoIdEtiquetaIdCompoundUniqueInput = {
    productoId: number
    etiquetaId: number
  }

  export type ProductoEtiquetaCountOrderByAggregateInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type ProductoEtiquetaAvgOrderByAggregateInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type ProductoEtiquetaMaxOrderByAggregateInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type ProductoEtiquetaMinOrderByAggregateInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type ProductoEtiquetaSumOrderByAggregateInput = {
    productoId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    usuarioId?: SortOrder
    estado?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type PedidoProductoPedidoIdProductoIdCompoundUniqueInput = {
    pedidoId: number
    productoId: number
  }

  export type PedidoProductoCountOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
  }

  export type PedidoProductoAvgOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
  }

  export type PedidoProductoMaxOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
  }

  export type PedidoProductoMinOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
  }

  export type PedidoProductoSumOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PedidoNullableScalarRelationFilter = {
    is?: PedidoWhereInput | null
    isNot?: PedidoWhereInput | null
  }

  export type ProductoPersonalizadoOrderByRelevanceInput = {
    fields: ProductoPersonalizadoOrderByRelevanceFieldEnum | ProductoPersonalizadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoPersonalizadoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    material?: SortOrder
    tamanno?: SortOrder
    logo?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type ProductoPersonalizadoAvgOrderByAggregateInput = {
    id?: SortOrder
    tamanno?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type ProductoPersonalizadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    material?: SortOrder
    tamanno?: SortOrder
    logo?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type ProductoPersonalizadoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    color?: SortOrder
    material?: SortOrder
    tamanno?: SortOrder
    logo?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type ProductoPersonalizadoSumOrderByAggregateInput = {
    id?: SortOrder
    tamanno?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReseñaOrderByRelevanceInput = {
    fields: ReseñaOrderByRelevanceFieldEnum | ReseñaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReseñaCountOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    moderada?: SortOrder
    observacion?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type ReseñaAvgOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type ReseñaMaxOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    moderada?: SortOrder
    observacion?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type ReseñaMinOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    fecha?: SortOrder
    moderada?: SortOrder
    observacion?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type ReseñaSumOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromocionOrderByRelevanceInput = {
    fields: PromocionOrderByRelevanceFieldEnum | PromocionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PromocionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descuento?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type PromocionAvgOrderByAggregateInput = {
    id?: SortOrder
    descuento?: SortOrder
  }

  export type PromocionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descuento?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type PromocionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descuento?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type PromocionSumOrderByAggregateInput = {
    id?: SortOrder
    descuento?: SortOrder
  }

  export type HistorialPedidosPedidoIdUsuarioIdCompoundUniqueInput = {
    pedidoId: number
    usuarioId: number
  }

  export type HistorialPedidosCountOrderByAggregateInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistorialPedidosAvgOrderByAggregateInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistorialPedidosMaxOrderByAggregateInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistorialPedidosMinOrderByAggregateInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistorialPedidosSumOrderByAggregateInput = {
    pedidoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ReseñaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type HistorialPedidosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialPedidosCreateWithoutUsuarioInput, HistorialPedidosUncheckedCreateWithoutUsuarioInput> | HistorialPedidosCreateWithoutUsuarioInput[] | HistorialPedidosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutUsuarioInput | HistorialPedidosCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialPedidosCreateManyUsuarioInputEnvelope
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ReseñaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type HistorialPedidosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialPedidosCreateWithoutUsuarioInput, HistorialPedidosUncheckedCreateWithoutUsuarioInput> | HistorialPedidosCreateWithoutUsuarioInput[] | HistorialPedidosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutUsuarioInput | HistorialPedidosCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialPedidosCreateManyUsuarioInputEnvelope
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ReseñaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutUsuarioInput | ReseñaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutUsuarioInput | ReseñaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutUsuarioInput | ReseñaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type HistorialPedidosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialPedidosCreateWithoutUsuarioInput, HistorialPedidosUncheckedCreateWithoutUsuarioInput> | HistorialPedidosCreateWithoutUsuarioInput[] | HistorialPedidosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutUsuarioInput | HistorialPedidosCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialPedidosUpsertWithWhereUniqueWithoutUsuarioInput | HistorialPedidosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialPedidosCreateManyUsuarioInputEnvelope
    set?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    disconnect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    delete?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    update?: HistorialPedidosUpdateWithWhereUniqueWithoutUsuarioInput | HistorialPedidosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialPedidosUpdateManyWithWhereWithoutUsuarioInput | HistorialPedidosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialPedidosScalarWhereInput | HistorialPedidosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutUsuarioInput | ReseñaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutUsuarioInput | ReseñaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutUsuarioInput | ReseñaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type HistorialPedidosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialPedidosCreateWithoutUsuarioInput, HistorialPedidosUncheckedCreateWithoutUsuarioInput> | HistorialPedidosCreateWithoutUsuarioInput[] | HistorialPedidosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutUsuarioInput | HistorialPedidosCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialPedidosUpsertWithWhereUniqueWithoutUsuarioInput | HistorialPedidosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialPedidosCreateManyUsuarioInputEnvelope
    set?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    disconnect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    delete?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    update?: HistorialPedidosUpdateWithWhereUniqueWithoutUsuarioInput | HistorialPedidosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialPedidosUpdateManyWithWhereWithoutUsuarioInput | HistorialPedidosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialPedidosScalarWhereInput | HistorialPedidosScalarWhereInput[]
  }

  export type ProductoPersonalizadoCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutProductoInput, ProductoPersonalizadoUncheckedCreateWithoutProductoInput> | ProductoPersonalizadoCreateWithoutProductoInput[] | ProductoPersonalizadoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutProductoInput | ProductoPersonalizadoCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoPersonalizadoCreateManyProductoInputEnvelope
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
  }

  export type ProductoCategoriaCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoCategoriaCreateWithoutProductoInput, ProductoCategoriaUncheckedCreateWithoutProductoInput> | ProductoCategoriaCreateWithoutProductoInput[] | ProductoCategoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutProductoInput | ProductoCategoriaCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoCategoriaCreateManyProductoInputEnvelope
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
  }

  export type ProductoEtiquetaCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutProductoInput, ProductoEtiquetaUncheckedCreateWithoutProductoInput> | ProductoEtiquetaCreateWithoutProductoInput[] | ProductoEtiquetaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutProductoInput | ProductoEtiquetaCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoEtiquetaCreateManyProductoInputEnvelope
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
  }

  export type PedidoProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type ReseñaCreateNestedManyWithoutProductoInput = {
    create?: XOR<ReseñaCreateWithoutProductoInput, ReseñaUncheckedCreateWithoutProductoInput> | ReseñaCreateWithoutProductoInput[] | ReseñaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutProductoInput | ReseñaCreateOrConnectWithoutProductoInput[]
    createMany?: ReseñaCreateManyProductoInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type PromocionCreateNestedOneWithoutProductosInput = {
    create?: XOR<PromocionCreateWithoutProductosInput, PromocionUncheckedCreateWithoutProductosInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutProductosInput
    connect?: PromocionWhereUniqueInput
  }

  export type ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutProductoInput, ProductoPersonalizadoUncheckedCreateWithoutProductoInput> | ProductoPersonalizadoCreateWithoutProductoInput[] | ProductoPersonalizadoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutProductoInput | ProductoPersonalizadoCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoPersonalizadoCreateManyProductoInputEnvelope
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
  }

  export type ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoCategoriaCreateWithoutProductoInput, ProductoCategoriaUncheckedCreateWithoutProductoInput> | ProductoCategoriaCreateWithoutProductoInput[] | ProductoCategoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutProductoInput | ProductoCategoriaCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoCategoriaCreateManyProductoInputEnvelope
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
  }

  export type ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutProductoInput, ProductoEtiquetaUncheckedCreateWithoutProductoInput> | ProductoEtiquetaCreateWithoutProductoInput[] | ProductoEtiquetaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutProductoInput | ProductoEtiquetaCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoEtiquetaCreateManyProductoInputEnvelope
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
  }

  export type PedidoProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type ReseñaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ReseñaCreateWithoutProductoInput, ReseñaUncheckedCreateWithoutProductoInput> | ReseñaCreateWithoutProductoInput[] | ReseñaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutProductoInput | ReseñaCreateOrConnectWithoutProductoInput[]
    createMany?: ReseñaCreateManyProductoInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductoPersonalizadoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutProductoInput, ProductoPersonalizadoUncheckedCreateWithoutProductoInput> | ProductoPersonalizadoCreateWithoutProductoInput[] | ProductoPersonalizadoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutProductoInput | ProductoPersonalizadoCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoPersonalizadoUpsertWithWhereUniqueWithoutProductoInput | ProductoPersonalizadoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoPersonalizadoCreateManyProductoInputEnvelope
    set?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    disconnect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    delete?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    update?: ProductoPersonalizadoUpdateWithWhereUniqueWithoutProductoInput | ProductoPersonalizadoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoPersonalizadoUpdateManyWithWhereWithoutProductoInput | ProductoPersonalizadoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoPersonalizadoScalarWhereInput | ProductoPersonalizadoScalarWhereInput[]
  }

  export type ProductoCategoriaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoCategoriaCreateWithoutProductoInput, ProductoCategoriaUncheckedCreateWithoutProductoInput> | ProductoCategoriaCreateWithoutProductoInput[] | ProductoCategoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutProductoInput | ProductoCategoriaCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoCategoriaUpsertWithWhereUniqueWithoutProductoInput | ProductoCategoriaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoCategoriaCreateManyProductoInputEnvelope
    set?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    disconnect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    delete?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    update?: ProductoCategoriaUpdateWithWhereUniqueWithoutProductoInput | ProductoCategoriaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoCategoriaUpdateManyWithWhereWithoutProductoInput | ProductoCategoriaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoCategoriaScalarWhereInput | ProductoCategoriaScalarWhereInput[]
  }

  export type ProductoEtiquetaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutProductoInput, ProductoEtiquetaUncheckedCreateWithoutProductoInput> | ProductoEtiquetaCreateWithoutProductoInput[] | ProductoEtiquetaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutProductoInput | ProductoEtiquetaCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoEtiquetaUpsertWithWhereUniqueWithoutProductoInput | ProductoEtiquetaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoEtiquetaCreateManyProductoInputEnvelope
    set?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    disconnect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    delete?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    update?: ProductoEtiquetaUpdateWithWhereUniqueWithoutProductoInput | ProductoEtiquetaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoEtiquetaUpdateManyWithWhereWithoutProductoInput | ProductoEtiquetaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoEtiquetaScalarWhereInput | ProductoEtiquetaScalarWhereInput[]
  }

  export type PedidoProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutProductoInput | PedidoProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutProductoInput | PedidoProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutProductoInput | PedidoProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type ReseñaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ReseñaCreateWithoutProductoInput, ReseñaUncheckedCreateWithoutProductoInput> | ReseñaCreateWithoutProductoInput[] | ReseñaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutProductoInput | ReseñaCreateOrConnectWithoutProductoInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutProductoInput | ReseñaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ReseñaCreateManyProductoInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutProductoInput | ReseñaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutProductoInput | ReseñaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type PromocionUpdateOneWithoutProductosNestedInput = {
    create?: XOR<PromocionCreateWithoutProductosInput, PromocionUncheckedCreateWithoutProductosInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutProductosInput
    upsert?: PromocionUpsertWithoutProductosInput
    disconnect?: PromocionWhereInput | boolean
    delete?: PromocionWhereInput | boolean
    connect?: PromocionWhereUniqueInput
    update?: XOR<XOR<PromocionUpdateToOneWithWhereWithoutProductosInput, PromocionUpdateWithoutProductosInput>, PromocionUncheckedUpdateWithoutProductosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutProductoInput, ProductoPersonalizadoUncheckedCreateWithoutProductoInput> | ProductoPersonalizadoCreateWithoutProductoInput[] | ProductoPersonalizadoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutProductoInput | ProductoPersonalizadoCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoPersonalizadoUpsertWithWhereUniqueWithoutProductoInput | ProductoPersonalizadoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoPersonalizadoCreateManyProductoInputEnvelope
    set?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    disconnect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    delete?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    update?: ProductoPersonalizadoUpdateWithWhereUniqueWithoutProductoInput | ProductoPersonalizadoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoPersonalizadoUpdateManyWithWhereWithoutProductoInput | ProductoPersonalizadoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoPersonalizadoScalarWhereInput | ProductoPersonalizadoScalarWhereInput[]
  }

  export type ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoCategoriaCreateWithoutProductoInput, ProductoCategoriaUncheckedCreateWithoutProductoInput> | ProductoCategoriaCreateWithoutProductoInput[] | ProductoCategoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutProductoInput | ProductoCategoriaCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoCategoriaUpsertWithWhereUniqueWithoutProductoInput | ProductoCategoriaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoCategoriaCreateManyProductoInputEnvelope
    set?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    disconnect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    delete?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    update?: ProductoCategoriaUpdateWithWhereUniqueWithoutProductoInput | ProductoCategoriaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoCategoriaUpdateManyWithWhereWithoutProductoInput | ProductoCategoriaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoCategoriaScalarWhereInput | ProductoCategoriaScalarWhereInput[]
  }

  export type ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutProductoInput, ProductoEtiquetaUncheckedCreateWithoutProductoInput> | ProductoEtiquetaCreateWithoutProductoInput[] | ProductoEtiquetaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutProductoInput | ProductoEtiquetaCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoEtiquetaUpsertWithWhereUniqueWithoutProductoInput | ProductoEtiquetaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoEtiquetaCreateManyProductoInputEnvelope
    set?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    disconnect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    delete?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    update?: ProductoEtiquetaUpdateWithWhereUniqueWithoutProductoInput | ProductoEtiquetaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoEtiquetaUpdateManyWithWhereWithoutProductoInput | ProductoEtiquetaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoEtiquetaScalarWhereInput | ProductoEtiquetaScalarWhereInput[]
  }

  export type PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutProductoInput | PedidoProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutProductoInput | PedidoProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutProductoInput | PedidoProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type ReseñaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ReseñaCreateWithoutProductoInput, ReseñaUncheckedCreateWithoutProductoInput> | ReseñaCreateWithoutProductoInput[] | ReseñaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutProductoInput | ReseñaCreateOrConnectWithoutProductoInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutProductoInput | ReseñaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ReseñaCreateManyProductoInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutProductoInput | ReseñaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutProductoInput | ReseñaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type ProductoCategoriaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCategoriaCreateWithoutCategoriaInput, ProductoCategoriaUncheckedCreateWithoutCategoriaInput> | ProductoCategoriaCreateWithoutCategoriaInput[] | ProductoCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutCategoriaInput | ProductoCategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCategoriaCreateManyCategoriaInputEnvelope
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
  }

  export type ProductoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCategoriaCreateWithoutCategoriaInput, ProductoCategoriaUncheckedCreateWithoutCategoriaInput> | ProductoCategoriaCreateWithoutCategoriaInput[] | ProductoCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutCategoriaInput | ProductoCategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCategoriaCreateManyCategoriaInputEnvelope
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
  }

  export type ProductoCategoriaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCategoriaCreateWithoutCategoriaInput, ProductoCategoriaUncheckedCreateWithoutCategoriaInput> | ProductoCategoriaCreateWithoutCategoriaInput[] | ProductoCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutCategoriaInput | ProductoCategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | ProductoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCategoriaCreateManyCategoriaInputEnvelope
    set?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    disconnect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    delete?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    update?: ProductoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | ProductoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoCategoriaUpdateManyWithWhereWithoutCategoriaInput | ProductoCategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoCategoriaScalarWhereInput | ProductoCategoriaScalarWhereInput[]
  }

  export type ProductoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCategoriaCreateWithoutCategoriaInput, ProductoCategoriaUncheckedCreateWithoutCategoriaInput> | ProductoCategoriaCreateWithoutCategoriaInput[] | ProductoCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCategoriaCreateOrConnectWithoutCategoriaInput | ProductoCategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | ProductoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCategoriaCreateManyCategoriaInputEnvelope
    set?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    disconnect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    delete?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    connect?: ProductoCategoriaWhereUniqueInput | ProductoCategoriaWhereUniqueInput[]
    update?: ProductoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | ProductoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoCategoriaUpdateManyWithWhereWithoutCategoriaInput | ProductoCategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoCategoriaScalarWhereInput | ProductoCategoriaScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<ProductoCreateWithoutCategoriasInput, ProductoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriasInput
    connect?: ProductoWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriasInput, ProductoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriasInput
    upsert?: ProductoUpsertWithoutCategoriasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutCategoriasInput, ProductoUpdateWithoutCategoriasInput>, ProductoUncheckedUpdateWithoutCategoriasInput>
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type ProductoEtiquetaCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutEtiquetaInput, ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput> | ProductoEtiquetaCreateWithoutEtiquetaInput[] | ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput | ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    createMany?: ProductoEtiquetaCreateManyEtiquetaInputEnvelope
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
  }

  export type ProductoEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutEtiquetaInput, ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput> | ProductoEtiquetaCreateWithoutEtiquetaInput[] | ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput | ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    createMany?: ProductoEtiquetaCreateManyEtiquetaInputEnvelope
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
  }

  export type ProductoEtiquetaUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutEtiquetaInput, ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput> | ProductoEtiquetaCreateWithoutEtiquetaInput[] | ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput | ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    upsert?: ProductoEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput | ProductoEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: ProductoEtiquetaCreateManyEtiquetaInputEnvelope
    set?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    disconnect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    delete?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    update?: ProductoEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput | ProductoEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: ProductoEtiquetaUpdateManyWithWhereWithoutEtiquetaInput | ProductoEtiquetaUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: ProductoEtiquetaScalarWhereInput | ProductoEtiquetaScalarWhereInput[]
  }

  export type ProductoEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<ProductoEtiquetaCreateWithoutEtiquetaInput, ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput> | ProductoEtiquetaCreateWithoutEtiquetaInput[] | ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput | ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    upsert?: ProductoEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput | ProductoEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: ProductoEtiquetaCreateManyEtiquetaInputEnvelope
    set?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    disconnect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    delete?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    connect?: ProductoEtiquetaWhereUniqueInput | ProductoEtiquetaWhereUniqueInput[]
    update?: ProductoEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput | ProductoEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: ProductoEtiquetaUpdateManyWithWhereWithoutEtiquetaInput | ProductoEtiquetaUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: ProductoEtiquetaScalarWhereInput | ProductoEtiquetaScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutEtiquetasInput = {
    create?: XOR<ProductoCreateWithoutEtiquetasInput, ProductoUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutEtiquetasInput
    connect?: ProductoWhereUniqueInput
  }

  export type EtiquetaCreateNestedOneWithoutProductosInput = {
    create?: XOR<EtiquetaCreateWithoutProductosInput, EtiquetaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: EtiquetaCreateOrConnectWithoutProductosInput
    connect?: EtiquetaWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutEtiquetasNestedInput = {
    create?: XOR<ProductoCreateWithoutEtiquetasInput, ProductoUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutEtiquetasInput
    upsert?: ProductoUpsertWithoutEtiquetasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutEtiquetasInput, ProductoUpdateWithoutEtiquetasInput>, ProductoUncheckedUpdateWithoutEtiquetasInput>
  }

  export type EtiquetaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<EtiquetaCreateWithoutProductosInput, EtiquetaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: EtiquetaCreateOrConnectWithoutProductosInput
    upsert?: EtiquetaUpsertWithoutProductosInput
    connect?: EtiquetaWhereUniqueInput
    update?: XOR<XOR<EtiquetaUpdateToOneWithWhereWithoutProductosInput, EtiquetaUpdateWithoutProductosInput>, EtiquetaUncheckedUpdateWithoutProductosInput>
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoProductoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type ProductoPersonalizadoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutPedidoInput, ProductoPersonalizadoUncheckedCreateWithoutPedidoInput> | ProductoPersonalizadoCreateWithoutPedidoInput[] | ProductoPersonalizadoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutPedidoInput | ProductoPersonalizadoCreateOrConnectWithoutPedidoInput[]
    createMany?: ProductoPersonalizadoCreateManyPedidoInputEnvelope
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
  }

  export type HistorialPedidosCreateNestedManyWithoutPedidoInput = {
    create?: XOR<HistorialPedidosCreateWithoutPedidoInput, HistorialPedidosUncheckedCreateWithoutPedidoInput> | HistorialPedidosCreateWithoutPedidoInput[] | HistorialPedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutPedidoInput | HistorialPedidosCreateOrConnectWithoutPedidoInput[]
    createMany?: HistorialPedidosCreateManyPedidoInputEnvelope
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
  }

  export type PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type ProductoPersonalizadoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutPedidoInput, ProductoPersonalizadoUncheckedCreateWithoutPedidoInput> | ProductoPersonalizadoCreateWithoutPedidoInput[] | ProductoPersonalizadoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutPedidoInput | ProductoPersonalizadoCreateOrConnectWithoutPedidoInput[]
    createMany?: ProductoPersonalizadoCreateManyPedidoInputEnvelope
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
  }

  export type HistorialPedidosUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<HistorialPedidosCreateWithoutPedidoInput, HistorialPedidosUncheckedCreateWithoutPedidoInput> | HistorialPedidosCreateWithoutPedidoInput[] | HistorialPedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutPedidoInput | HistorialPedidosCreateOrConnectWithoutPedidoInput[]
    createMany?: HistorialPedidosCreateManyPedidoInputEnvelope
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidoProductoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput | PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput | PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutPedidoInput | PedidoProductoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type ProductoPersonalizadoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutPedidoInput, ProductoPersonalizadoUncheckedCreateWithoutPedidoInput> | ProductoPersonalizadoCreateWithoutPedidoInput[] | ProductoPersonalizadoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutPedidoInput | ProductoPersonalizadoCreateOrConnectWithoutPedidoInput[]
    upsert?: ProductoPersonalizadoUpsertWithWhereUniqueWithoutPedidoInput | ProductoPersonalizadoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ProductoPersonalizadoCreateManyPedidoInputEnvelope
    set?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    disconnect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    delete?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    update?: ProductoPersonalizadoUpdateWithWhereUniqueWithoutPedidoInput | ProductoPersonalizadoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ProductoPersonalizadoUpdateManyWithWhereWithoutPedidoInput | ProductoPersonalizadoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ProductoPersonalizadoScalarWhereInput | ProductoPersonalizadoScalarWhereInput[]
  }

  export type HistorialPedidosUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<HistorialPedidosCreateWithoutPedidoInput, HistorialPedidosUncheckedCreateWithoutPedidoInput> | HistorialPedidosCreateWithoutPedidoInput[] | HistorialPedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutPedidoInput | HistorialPedidosCreateOrConnectWithoutPedidoInput[]
    upsert?: HistorialPedidosUpsertWithWhereUniqueWithoutPedidoInput | HistorialPedidosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: HistorialPedidosCreateManyPedidoInputEnvelope
    set?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    disconnect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    delete?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    update?: HistorialPedidosUpdateWithWhereUniqueWithoutPedidoInput | HistorialPedidosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: HistorialPedidosUpdateManyWithWhereWithoutPedidoInput | HistorialPedidosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: HistorialPedidosScalarWhereInput | HistorialPedidosScalarWhereInput[]
  }

  export type PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput | PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput | PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutPedidoInput | PedidoProductoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ProductoPersonalizadoCreateWithoutPedidoInput, ProductoPersonalizadoUncheckedCreateWithoutPedidoInput> | ProductoPersonalizadoCreateWithoutPedidoInput[] | ProductoPersonalizadoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ProductoPersonalizadoCreateOrConnectWithoutPedidoInput | ProductoPersonalizadoCreateOrConnectWithoutPedidoInput[]
    upsert?: ProductoPersonalizadoUpsertWithWhereUniqueWithoutPedidoInput | ProductoPersonalizadoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ProductoPersonalizadoCreateManyPedidoInputEnvelope
    set?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    disconnect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    delete?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    connect?: ProductoPersonalizadoWhereUniqueInput | ProductoPersonalizadoWhereUniqueInput[]
    update?: ProductoPersonalizadoUpdateWithWhereUniqueWithoutPedidoInput | ProductoPersonalizadoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ProductoPersonalizadoUpdateManyWithWhereWithoutPedidoInput | ProductoPersonalizadoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ProductoPersonalizadoScalarWhereInput | ProductoPersonalizadoScalarWhereInput[]
  }

  export type HistorialPedidosUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<HistorialPedidosCreateWithoutPedidoInput, HistorialPedidosUncheckedCreateWithoutPedidoInput> | HistorialPedidosCreateWithoutPedidoInput[] | HistorialPedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: HistorialPedidosCreateOrConnectWithoutPedidoInput | HistorialPedidosCreateOrConnectWithoutPedidoInput[]
    upsert?: HistorialPedidosUpsertWithWhereUniqueWithoutPedidoInput | HistorialPedidosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: HistorialPedidosCreateManyPedidoInputEnvelope
    set?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    disconnect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    delete?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    connect?: HistorialPedidosWhereUniqueInput | HistorialPedidosWhereUniqueInput[]
    update?: HistorialPedidosUpdateWithWhereUniqueWithoutPedidoInput | HistorialPedidosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: HistorialPedidosUpdateManyWithWhereWithoutPedidoInput | HistorialPedidosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: HistorialPedidosScalarWhereInput | HistorialPedidosScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutProductosInput = {
    create?: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProductosInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProductosInput
    upsert?: PedidoUpsertWithoutProductosInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutProductosInput, PedidoUpdateWithoutProductosInput>, PedidoUncheckedUpdateWithoutProductosInput>
  }

  export type ProductoUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosInput
    upsert?: ProductoUpsertWithoutPedidosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutPedidosInput, ProductoUpdateWithoutPedidosInput>, ProductoUncheckedUpdateWithoutPedidosInput>
  }

  export type ProductoCreateNestedOneWithoutPersonalizadoInput = {
    create?: XOR<ProductoCreateWithoutPersonalizadoInput, ProductoUncheckedCreateWithoutPersonalizadoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPersonalizadoInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutPersonalizadoInput = {
    create?: XOR<PedidoCreateWithoutPersonalizadoInput, PedidoUncheckedCreateWithoutPersonalizadoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPersonalizadoInput
    connect?: PedidoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductoUpdateOneRequiredWithoutPersonalizadoNestedInput = {
    create?: XOR<ProductoCreateWithoutPersonalizadoInput, ProductoUncheckedCreateWithoutPersonalizadoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPersonalizadoInput
    upsert?: ProductoUpsertWithoutPersonalizadoInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutPersonalizadoInput, ProductoUpdateWithoutPersonalizadoInput>, ProductoUncheckedUpdateWithoutPersonalizadoInput>
  }

  export type PedidoUpdateOneWithoutPersonalizadoNestedInput = {
    create?: XOR<PedidoCreateWithoutPersonalizadoInput, PedidoUncheckedCreateWithoutPersonalizadoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPersonalizadoInput
    upsert?: PedidoUpsertWithoutPersonalizadoInput
    disconnect?: PedidoWhereInput | boolean
    delete?: PedidoWhereInput | boolean
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPersonalizadoInput, PedidoUpdateWithoutPersonalizadoInput>, PedidoUncheckedUpdateWithoutPersonalizadoInput>
  }

  export type UsuarioCreateNestedOneWithoutReseñasInput = {
    create?: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReseñasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutReseñasInput = {
    create?: XOR<ProductoCreateWithoutReseñasInput, ProductoUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutReseñasInput
    connect?: ProductoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutReseñasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReseñasInput
    upsert?: UsuarioUpsertWithoutReseñasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReseñasInput, UsuarioUpdateWithoutReseñasInput>, UsuarioUncheckedUpdateWithoutReseñasInput>
  }

  export type ProductoUpdateOneRequiredWithoutReseñasNestedInput = {
    create?: XOR<ProductoCreateWithoutReseñasInput, ProductoUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutReseñasInput
    upsert?: ProductoUpsertWithoutReseñasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutReseñasInput, ProductoUpdateWithoutReseñasInput>, ProductoUncheckedUpdateWithoutReseñasInput>
  }

  export type ProductoCreateNestedManyWithoutPromocionInput = {
    create?: XOR<ProductoCreateWithoutPromocionInput, ProductoUncheckedCreateWithoutPromocionInput> | ProductoCreateWithoutPromocionInput[] | ProductoUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutPromocionInput | ProductoCreateOrConnectWithoutPromocionInput[]
    createMany?: ProductoCreateManyPromocionInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutPromocionInput = {
    create?: XOR<ProductoCreateWithoutPromocionInput, ProductoUncheckedCreateWithoutPromocionInput> | ProductoCreateWithoutPromocionInput[] | ProductoUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutPromocionInput | ProductoCreateOrConnectWithoutPromocionInput[]
    createMany?: ProductoCreateManyPromocionInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<ProductoCreateWithoutPromocionInput, ProductoUncheckedCreateWithoutPromocionInput> | ProductoCreateWithoutPromocionInput[] | ProductoUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutPromocionInput | ProductoCreateOrConnectWithoutPromocionInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutPromocionInput | ProductoUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: ProductoCreateManyPromocionInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutPromocionInput | ProductoUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutPromocionInput | ProductoUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<ProductoCreateWithoutPromocionInput, ProductoUncheckedCreateWithoutPromocionInput> | ProductoCreateWithoutPromocionInput[] | ProductoUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutPromocionInput | ProductoCreateOrConnectWithoutPromocionInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutPromocionInput | ProductoUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: ProductoCreateManyPromocionInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutPromocionInput | ProductoUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutPromocionInput | ProductoUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutHistorialInput = {
    create?: XOR<PedidoCreateWithoutHistorialInput, PedidoUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutHistorialInput
    connect?: PedidoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutHistorialInput = {
    create?: XOR<UsuarioCreateWithoutHistorialInput, UsuarioUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<PedidoCreateWithoutHistorialInput, PedidoUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutHistorialInput
    upsert?: PedidoUpsertWithoutHistorialInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutHistorialInput, PedidoUpdateWithoutHistorialInput>, PedidoUncheckedUpdateWithoutHistorialInput>
  }

  export type UsuarioUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistorialInput, UsuarioUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialInput
    upsert?: UsuarioUpsertWithoutHistorialInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistorialInput, UsuarioUpdateWithoutHistorialInput>, UsuarioUncheckedUpdateWithoutHistorialInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutUsuarioInput = {
    fechaPedido?: Date | string
    estado?: $Enums.Estado
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fechaPedido?: Date | string
    estado?: $Enums.Estado
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReseñaCreateWithoutUsuarioInput = {
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    producto: ProductoCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    productoId: number
  }

  export type ReseñaCreateOrConnectWithoutUsuarioInput = {
    where: ReseñaWhereUniqueInput
    create: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReseñaCreateManyUsuarioInputEnvelope = {
    data: ReseñaCreateManyUsuarioInput | ReseñaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type HistorialPedidosCreateWithoutUsuarioInput = {
    pedido: PedidoCreateNestedOneWithoutHistorialInput
  }

  export type HistorialPedidosUncheckedCreateWithoutUsuarioInput = {
    pedidoId: number
  }

  export type HistorialPedidosCreateOrConnectWithoutUsuarioInput = {
    where: HistorialPedidosWhereUniqueInput
    create: XOR<HistorialPedidosCreateWithoutUsuarioInput, HistorialPedidosUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialPedidosCreateManyUsuarioInputEnvelope = {
    data: HistorialPedidosCreateManyUsuarioInput | HistorialPedidosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    estado?: EnumEstadoFilter<"Pedido"> | $Enums.Estado
  }

  export type ReseñaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReseñaWhereUniqueInput
    update: XOR<ReseñaUpdateWithoutUsuarioInput, ReseñaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReseñaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReseñaWhereUniqueInput
    data: XOR<ReseñaUpdateWithoutUsuarioInput, ReseñaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReseñaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReseñaScalarWhereInput
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReseñaScalarWhereInput = {
    AND?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
    OR?: ReseñaScalarWhereInput[]
    NOT?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
    id?: IntFilter<"Reseña"> | number
    valoracion?: IntFilter<"Reseña"> | number
    comentario?: StringNullableFilter<"Reseña"> | string | null
    fecha?: DateTimeFilter<"Reseña"> | Date | string
    moderada?: BoolFilter<"Reseña"> | boolean
    observacion?: StringNullableFilter<"Reseña"> | string | null
    usuarioId?: IntFilter<"Reseña"> | number
    productoId?: IntFilter<"Reseña"> | number
  }

  export type HistorialPedidosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialPedidosWhereUniqueInput
    update: XOR<HistorialPedidosUpdateWithoutUsuarioInput, HistorialPedidosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistorialPedidosCreateWithoutUsuarioInput, HistorialPedidosUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialPedidosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialPedidosWhereUniqueInput
    data: XOR<HistorialPedidosUpdateWithoutUsuarioInput, HistorialPedidosUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistorialPedidosUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistorialPedidosScalarWhereInput
    data: XOR<HistorialPedidosUpdateManyMutationInput, HistorialPedidosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistorialPedidosScalarWhereInput = {
    AND?: HistorialPedidosScalarWhereInput | HistorialPedidosScalarWhereInput[]
    OR?: HistorialPedidosScalarWhereInput[]
    NOT?: HistorialPedidosScalarWhereInput | HistorialPedidosScalarWhereInput[]
    pedidoId?: IntFilter<"HistorialPedidos"> | number
    usuarioId?: IntFilter<"HistorialPedidos"> | number
  }

  export type ProductoPersonalizadoCreateWithoutProductoInput = {
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    pedido?: PedidoCreateNestedOneWithoutPersonalizadoInput
  }

  export type ProductoPersonalizadoUncheckedCreateWithoutProductoInput = {
    id?: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    pedidoId?: number | null
  }

  export type ProductoPersonalizadoCreateOrConnectWithoutProductoInput = {
    where: ProductoPersonalizadoWhereUniqueInput
    create: XOR<ProductoPersonalizadoCreateWithoutProductoInput, ProductoPersonalizadoUncheckedCreateWithoutProductoInput>
  }

  export type ProductoPersonalizadoCreateManyProductoInputEnvelope = {
    data: ProductoPersonalizadoCreateManyProductoInput | ProductoPersonalizadoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ProductoCategoriaCreateWithoutProductoInput = {
    categoria: CategoriaCreateNestedOneWithoutProductosInput
  }

  export type ProductoCategoriaUncheckedCreateWithoutProductoInput = {
    categoriaId: number
  }

  export type ProductoCategoriaCreateOrConnectWithoutProductoInput = {
    where: ProductoCategoriaWhereUniqueInput
    create: XOR<ProductoCategoriaCreateWithoutProductoInput, ProductoCategoriaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoCategoriaCreateManyProductoInputEnvelope = {
    data: ProductoCategoriaCreateManyProductoInput | ProductoCategoriaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ProductoEtiquetaCreateWithoutProductoInput = {
    etiqueta: EtiquetaCreateNestedOneWithoutProductosInput
  }

  export type ProductoEtiquetaUncheckedCreateWithoutProductoInput = {
    etiquetaId: number
  }

  export type ProductoEtiquetaCreateOrConnectWithoutProductoInput = {
    where: ProductoEtiquetaWhereUniqueInput
    create: XOR<ProductoEtiquetaCreateWithoutProductoInput, ProductoEtiquetaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoEtiquetaCreateManyProductoInputEnvelope = {
    data: ProductoEtiquetaCreateManyProductoInput | ProductoEtiquetaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type PedidoProductoCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutProductosInput
  }

  export type PedidoProductoUncheckedCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pedidoId: number
  }

  export type PedidoProductoCreateOrConnectWithoutProductoInput = {
    where: PedidoProductoWhereUniqueInput
    create: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput>
  }

  export type PedidoProductoCreateManyProductoInputEnvelope = {
    data: PedidoProductoCreateManyProductoInput | PedidoProductoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ReseñaCreateWithoutProductoInput = {
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    usuario: UsuarioCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateWithoutProductoInput = {
    id?: number
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    usuarioId: number
  }

  export type ReseñaCreateOrConnectWithoutProductoInput = {
    where: ReseñaWhereUniqueInput
    create: XOR<ReseñaCreateWithoutProductoInput, ReseñaUncheckedCreateWithoutProductoInput>
  }

  export type ReseñaCreateManyProductoInputEnvelope = {
    data: ReseñaCreateManyProductoInput | ReseñaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type PromocionCreateWithoutProductosInput = {
    nombre: string
    descuento: Decimal | DecimalJsLike | number | string
    fechaInicio: Date | string
    fechaFin: Date | string
  }

  export type PromocionUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    descuento: Decimal | DecimalJsLike | number | string
    fechaInicio: Date | string
    fechaFin: Date | string
  }

  export type PromocionCreateOrConnectWithoutProductosInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutProductosInput, PromocionUncheckedCreateWithoutProductosInput>
  }

  export type ProductoPersonalizadoUpsertWithWhereUniqueWithoutProductoInput = {
    where: ProductoPersonalizadoWhereUniqueInput
    update: XOR<ProductoPersonalizadoUpdateWithoutProductoInput, ProductoPersonalizadoUncheckedUpdateWithoutProductoInput>
    create: XOR<ProductoPersonalizadoCreateWithoutProductoInput, ProductoPersonalizadoUncheckedCreateWithoutProductoInput>
  }

  export type ProductoPersonalizadoUpdateWithWhereUniqueWithoutProductoInput = {
    where: ProductoPersonalizadoWhereUniqueInput
    data: XOR<ProductoPersonalizadoUpdateWithoutProductoInput, ProductoPersonalizadoUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoPersonalizadoUpdateManyWithWhereWithoutProductoInput = {
    where: ProductoPersonalizadoScalarWhereInput
    data: XOR<ProductoPersonalizadoUpdateManyMutationInput, ProductoPersonalizadoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoPersonalizadoScalarWhereInput = {
    AND?: ProductoPersonalizadoScalarWhereInput | ProductoPersonalizadoScalarWhereInput[]
    OR?: ProductoPersonalizadoScalarWhereInput[]
    NOT?: ProductoPersonalizadoScalarWhereInput | ProductoPersonalizadoScalarWhereInput[]
    id?: IntFilter<"ProductoPersonalizado"> | number
    nombre?: StringFilter<"ProductoPersonalizado"> | string
    descripcion?: StringFilter<"ProductoPersonalizado"> | string
    color?: StringFilter<"ProductoPersonalizado"> | string
    material?: StringFilter<"ProductoPersonalizado"> | string
    tamanno?: IntFilter<"ProductoPersonalizado"> | number
    logo?: BoolFilter<"ProductoPersonalizado"> | boolean
    productoId?: IntFilter<"ProductoPersonalizado"> | number
    pedidoId?: IntNullableFilter<"ProductoPersonalizado"> | number | null
  }

  export type ProductoCategoriaUpsertWithWhereUniqueWithoutProductoInput = {
    where: ProductoCategoriaWhereUniqueInput
    update: XOR<ProductoCategoriaUpdateWithoutProductoInput, ProductoCategoriaUncheckedUpdateWithoutProductoInput>
    create: XOR<ProductoCategoriaCreateWithoutProductoInput, ProductoCategoriaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoCategoriaUpdateWithWhereUniqueWithoutProductoInput = {
    where: ProductoCategoriaWhereUniqueInput
    data: XOR<ProductoCategoriaUpdateWithoutProductoInput, ProductoCategoriaUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoCategoriaUpdateManyWithWhereWithoutProductoInput = {
    where: ProductoCategoriaScalarWhereInput
    data: XOR<ProductoCategoriaUpdateManyMutationInput, ProductoCategoriaUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoCategoriaScalarWhereInput = {
    AND?: ProductoCategoriaScalarWhereInput | ProductoCategoriaScalarWhereInput[]
    OR?: ProductoCategoriaScalarWhereInput[]
    NOT?: ProductoCategoriaScalarWhereInput | ProductoCategoriaScalarWhereInput[]
    productoId?: IntFilter<"ProductoCategoria"> | number
    categoriaId?: IntFilter<"ProductoCategoria"> | number
  }

  export type ProductoEtiquetaUpsertWithWhereUniqueWithoutProductoInput = {
    where: ProductoEtiquetaWhereUniqueInput
    update: XOR<ProductoEtiquetaUpdateWithoutProductoInput, ProductoEtiquetaUncheckedUpdateWithoutProductoInput>
    create: XOR<ProductoEtiquetaCreateWithoutProductoInput, ProductoEtiquetaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoEtiquetaUpdateWithWhereUniqueWithoutProductoInput = {
    where: ProductoEtiquetaWhereUniqueInput
    data: XOR<ProductoEtiquetaUpdateWithoutProductoInput, ProductoEtiquetaUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoEtiquetaUpdateManyWithWhereWithoutProductoInput = {
    where: ProductoEtiquetaScalarWhereInput
    data: XOR<ProductoEtiquetaUpdateManyMutationInput, ProductoEtiquetaUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoEtiquetaScalarWhereInput = {
    AND?: ProductoEtiquetaScalarWhereInput | ProductoEtiquetaScalarWhereInput[]
    OR?: ProductoEtiquetaScalarWhereInput[]
    NOT?: ProductoEtiquetaScalarWhereInput | ProductoEtiquetaScalarWhereInput[]
    productoId?: IntFilter<"ProductoEtiqueta"> | number
    etiquetaId?: IntFilter<"ProductoEtiqueta"> | number
  }

  export type PedidoProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: PedidoProductoWhereUniqueInput
    update: XOR<PedidoProductoUpdateWithoutProductoInput, PedidoProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput>
  }

  export type PedidoProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: PedidoProductoWhereUniqueInput
    data: XOR<PedidoProductoUpdateWithoutProductoInput, PedidoProductoUncheckedUpdateWithoutProductoInput>
  }

  export type PedidoProductoUpdateManyWithWhereWithoutProductoInput = {
    where: PedidoProductoScalarWhereInput
    data: XOR<PedidoProductoUpdateManyMutationInput, PedidoProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type PedidoProductoScalarWhereInput = {
    AND?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
    OR?: PedidoProductoScalarWhereInput[]
    NOT?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
    cantidad?: IntFilter<"PedidoProducto"> | number
    precioUnitario?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"PedidoProducto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"PedidoProducto"> | number
    productoId?: IntFilter<"PedidoProducto"> | number
  }

  export type ReseñaUpsertWithWhereUniqueWithoutProductoInput = {
    where: ReseñaWhereUniqueInput
    update: XOR<ReseñaUpdateWithoutProductoInput, ReseñaUncheckedUpdateWithoutProductoInput>
    create: XOR<ReseñaCreateWithoutProductoInput, ReseñaUncheckedCreateWithoutProductoInput>
  }

  export type ReseñaUpdateWithWhereUniqueWithoutProductoInput = {
    where: ReseñaWhereUniqueInput
    data: XOR<ReseñaUpdateWithoutProductoInput, ReseñaUncheckedUpdateWithoutProductoInput>
  }

  export type ReseñaUpdateManyWithWhereWithoutProductoInput = {
    where: ReseñaScalarWhereInput
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyWithoutProductoInput>
  }

  export type PromocionUpsertWithoutProductosInput = {
    update: XOR<PromocionUpdateWithoutProductosInput, PromocionUncheckedUpdateWithoutProductosInput>
    create: XOR<PromocionCreateWithoutProductosInput, PromocionUncheckedCreateWithoutProductosInput>
    where?: PromocionWhereInput
  }

  export type PromocionUpdateToOneWithWhereWithoutProductosInput = {
    where?: PromocionWhereInput
    data: XOR<PromocionUpdateWithoutProductosInput, PromocionUncheckedUpdateWithoutProductosInput>
  }

  export type PromocionUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCategoriaCreateWithoutCategoriaInput = {
    producto: ProductoCreateNestedOneWithoutCategoriasInput
  }

  export type ProductoCategoriaUncheckedCreateWithoutCategoriaInput = {
    productoId: number
  }

  export type ProductoCategoriaCreateOrConnectWithoutCategoriaInput = {
    where: ProductoCategoriaWhereUniqueInput
    create: XOR<ProductoCategoriaCreateWithoutCategoriaInput, ProductoCategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCategoriaCreateManyCategoriaInputEnvelope = {
    data: ProductoCategoriaCreateManyCategoriaInput | ProductoCategoriaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoCategoriaWhereUniqueInput
    update: XOR<ProductoCategoriaUpdateWithoutCategoriaInput, ProductoCategoriaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCategoriaCreateWithoutCategoriaInput, ProductoCategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoCategoriaWhereUniqueInput
    data: XOR<ProductoCategoriaUpdateWithoutCategoriaInput, ProductoCategoriaUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoCategoriaUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoCategoriaScalarWhereInput
    data: XOR<ProductoCategoriaUpdateManyMutationInput, ProductoCategoriaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoCreateWithoutCategoriasInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaCreateNestedManyWithoutProductoInput
    promocion?: PromocionCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutCategoriasInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriasInput, ProductoUncheckedCreateWithoutCategoriasInput>
  }

  export type CategoriaCreateWithoutProductosInput = {
    descripcion: string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    descripcion: string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type ProductoUpsertWithoutCategoriasInput = {
    update: XOR<ProductoUpdateWithoutCategoriasInput, ProductoUncheckedUpdateWithoutCategoriasInput>
    create: XOR<ProductoCreateWithoutCategoriasInput, ProductoUncheckedCreateWithoutCategoriasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutCategoriasInput, ProductoUncheckedUpdateWithoutCategoriasInput>
  }

  export type ProductoUpdateWithoutCategoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUpdateManyWithoutProductoNestedInput
    promocion?: PromocionUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoEtiquetaCreateWithoutEtiquetaInput = {
    producto: ProductoCreateNestedOneWithoutEtiquetasInput
  }

  export type ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput = {
    productoId: number
  }

  export type ProductoEtiquetaCreateOrConnectWithoutEtiquetaInput = {
    where: ProductoEtiquetaWhereUniqueInput
    create: XOR<ProductoEtiquetaCreateWithoutEtiquetaInput, ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput>
  }

  export type ProductoEtiquetaCreateManyEtiquetaInputEnvelope = {
    data: ProductoEtiquetaCreateManyEtiquetaInput | ProductoEtiquetaCreateManyEtiquetaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput = {
    where: ProductoEtiquetaWhereUniqueInput
    update: XOR<ProductoEtiquetaUpdateWithoutEtiquetaInput, ProductoEtiquetaUncheckedUpdateWithoutEtiquetaInput>
    create: XOR<ProductoEtiquetaCreateWithoutEtiquetaInput, ProductoEtiquetaUncheckedCreateWithoutEtiquetaInput>
  }

  export type ProductoEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput = {
    where: ProductoEtiquetaWhereUniqueInput
    data: XOR<ProductoEtiquetaUpdateWithoutEtiquetaInput, ProductoEtiquetaUncheckedUpdateWithoutEtiquetaInput>
  }

  export type ProductoEtiquetaUpdateManyWithWhereWithoutEtiquetaInput = {
    where: ProductoEtiquetaScalarWhereInput
    data: XOR<ProductoEtiquetaUpdateManyMutationInput, ProductoEtiquetaUncheckedUpdateManyWithoutEtiquetaInput>
  }

  export type ProductoCreateWithoutEtiquetasInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaCreateNestedManyWithoutProductoInput
    promocion?: PromocionCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutEtiquetasInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutEtiquetasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutEtiquetasInput, ProductoUncheckedCreateWithoutEtiquetasInput>
  }

  export type EtiquetaCreateWithoutProductosInput = {
    descripcion: string
  }

  export type EtiquetaUncheckedCreateWithoutProductosInput = {
    id?: number
    descripcion: string
  }

  export type EtiquetaCreateOrConnectWithoutProductosInput = {
    where: EtiquetaWhereUniqueInput
    create: XOR<EtiquetaCreateWithoutProductosInput, EtiquetaUncheckedCreateWithoutProductosInput>
  }

  export type ProductoUpsertWithoutEtiquetasInput = {
    update: XOR<ProductoUpdateWithoutEtiquetasInput, ProductoUncheckedUpdateWithoutEtiquetasInput>
    create: XOR<ProductoCreateWithoutEtiquetasInput, ProductoUncheckedCreateWithoutEtiquetasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutEtiquetasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutEtiquetasInput, ProductoUncheckedUpdateWithoutEtiquetasInput>
  }

  export type ProductoUpdateWithoutEtiquetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUpdateManyWithoutProductoNestedInput
    promocion?: PromocionUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutEtiquetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type EtiquetaUpsertWithoutProductosInput = {
    update: XOR<EtiquetaUpdateWithoutProductosInput, EtiquetaUncheckedUpdateWithoutProductosInput>
    create: XOR<EtiquetaCreateWithoutProductosInput, EtiquetaUncheckedCreateWithoutProductosInput>
    where?: EtiquetaWhereInput
  }

  export type EtiquetaUpdateToOneWithWhereWithoutProductosInput = {
    where?: EtiquetaWhereInput
    data: XOR<EtiquetaUpdateWithoutProductosInput, EtiquetaUncheckedUpdateWithoutProductosInput>
  }

  export type EtiquetaUpdateWithoutProductosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type EtiquetaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    reseñas?: ReseñaCreateNestedManyWithoutUsuarioInput
    historial?: HistorialPedidosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUsuarioInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoProductoCreateWithoutPedidoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoProductoUncheckedCreateWithoutPedidoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    productoId: number
  }

  export type PedidoProductoCreateOrConnectWithoutPedidoInput = {
    where: PedidoProductoWhereUniqueInput
    create: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProductoCreateManyPedidoInputEnvelope = {
    data: PedidoProductoCreateManyPedidoInput | PedidoProductoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ProductoPersonalizadoCreateWithoutPedidoInput = {
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    producto: ProductoCreateNestedOneWithoutPersonalizadoInput
  }

  export type ProductoPersonalizadoUncheckedCreateWithoutPedidoInput = {
    id?: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    productoId: number
  }

  export type ProductoPersonalizadoCreateOrConnectWithoutPedidoInput = {
    where: ProductoPersonalizadoWhereUniqueInput
    create: XOR<ProductoPersonalizadoCreateWithoutPedidoInput, ProductoPersonalizadoUncheckedCreateWithoutPedidoInput>
  }

  export type ProductoPersonalizadoCreateManyPedidoInputEnvelope = {
    data: ProductoPersonalizadoCreateManyPedidoInput | ProductoPersonalizadoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type HistorialPedidosCreateWithoutPedidoInput = {
    usuario: UsuarioCreateNestedOneWithoutHistorialInput
  }

  export type HistorialPedidosUncheckedCreateWithoutPedidoInput = {
    usuarioId: number
  }

  export type HistorialPedidosCreateOrConnectWithoutPedidoInput = {
    where: HistorialPedidosWhereUniqueInput
    create: XOR<HistorialPedidosCreateWithoutPedidoInput, HistorialPedidosUncheckedCreateWithoutPedidoInput>
  }

  export type HistorialPedidosCreateManyPedidoInputEnvelope = {
    data: HistorialPedidosCreateManyPedidoInput | HistorialPedidosCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reseñas?: ReseñaUpdateManyWithoutUsuarioNestedInput
    historial?: HistorialPedidosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reseñas?: ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoProductoWhereUniqueInput
    update: XOR<PedidoProductoUpdateWithoutPedidoInput, PedidoProductoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoProductoWhereUniqueInput
    data: XOR<PedidoProductoUpdateWithoutPedidoInput, PedidoProductoUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoProductoUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoProductoScalarWhereInput
    data: XOR<PedidoProductoUpdateManyMutationInput, PedidoProductoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ProductoPersonalizadoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ProductoPersonalizadoWhereUniqueInput
    update: XOR<ProductoPersonalizadoUpdateWithoutPedidoInput, ProductoPersonalizadoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ProductoPersonalizadoCreateWithoutPedidoInput, ProductoPersonalizadoUncheckedCreateWithoutPedidoInput>
  }

  export type ProductoPersonalizadoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ProductoPersonalizadoWhereUniqueInput
    data: XOR<ProductoPersonalizadoUpdateWithoutPedidoInput, ProductoPersonalizadoUncheckedUpdateWithoutPedidoInput>
  }

  export type ProductoPersonalizadoUpdateManyWithWhereWithoutPedidoInput = {
    where: ProductoPersonalizadoScalarWhereInput
    data: XOR<ProductoPersonalizadoUpdateManyMutationInput, ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type HistorialPedidosUpsertWithWhereUniqueWithoutPedidoInput = {
    where: HistorialPedidosWhereUniqueInput
    update: XOR<HistorialPedidosUpdateWithoutPedidoInput, HistorialPedidosUncheckedUpdateWithoutPedidoInput>
    create: XOR<HistorialPedidosCreateWithoutPedidoInput, HistorialPedidosUncheckedCreateWithoutPedidoInput>
  }

  export type HistorialPedidosUpdateWithWhereUniqueWithoutPedidoInput = {
    where: HistorialPedidosWhereUniqueInput
    data: XOR<HistorialPedidosUpdateWithoutPedidoInput, HistorialPedidosUncheckedUpdateWithoutPedidoInput>
  }

  export type HistorialPedidosUpdateManyWithWhereWithoutPedidoInput = {
    where: HistorialPedidosScalarWhereInput
    data: XOR<HistorialPedidosUpdateManyMutationInput, HistorialPedidosUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutProductosInput = {
    fechaPedido?: Date | string
    estado?: $Enums.Estado
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutProductosInput = {
    id?: number
    fechaPedido?: Date | string
    usuarioId: number
    estado?: $Enums.Estado
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutProductosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
  }

  export type ProductoCreateWithoutPedidosInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaCreateNestedManyWithoutProductoInput
    promocion?: PromocionCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutPedidosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoUpsertWithoutProductosInput = {
    update: XOR<PedidoUpdateWithoutProductosInput, PedidoUncheckedUpdateWithoutProductosInput>
    create: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutProductosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutProductosInput, PedidoUncheckedUpdateWithoutProductosInput>
  }

  export type PedidoUpdateWithoutProductosInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    personalizado?: ProductoPersonalizadoUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type ProductoUpsertWithoutPedidosInput = {
    update: XOR<ProductoUpdateWithoutPedidosInput, ProductoUncheckedUpdateWithoutPedidosInput>
    create: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutPedidosInput, ProductoUncheckedUpdateWithoutPedidosInput>
  }

  export type ProductoUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUpdateManyWithoutProductoNestedInput
    promocion?: PromocionUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateWithoutPersonalizadoInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    categorias?: ProductoCategoriaCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaCreateNestedManyWithoutProductoInput
    promocion?: PromocionCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutPersonalizadoInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
    categorias?: ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutPersonalizadoInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPersonalizadoInput, ProductoUncheckedCreateWithoutPersonalizadoInput>
  }

  export type PedidoCreateWithoutPersonalizadoInput = {
    fechaPedido?: Date | string
    estado?: $Enums.Estado
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPersonalizadoInput = {
    id?: number
    fechaPedido?: Date | string
    usuarioId: number
    estado?: $Enums.Estado
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPersonalizadoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPersonalizadoInput, PedidoUncheckedCreateWithoutPersonalizadoInput>
  }

  export type ProductoUpsertWithoutPersonalizadoInput = {
    update: XOR<ProductoUpdateWithoutPersonalizadoInput, ProductoUncheckedUpdateWithoutPersonalizadoInput>
    create: XOR<ProductoCreateWithoutPersonalizadoInput, ProductoUncheckedCreateWithoutPersonalizadoInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutPersonalizadoInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutPersonalizadoInput, ProductoUncheckedUpdateWithoutPersonalizadoInput>
  }

  export type ProductoUpdateWithoutPersonalizadoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categorias?: ProductoCategoriaUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUpdateManyWithoutProductoNestedInput
    promocion?: PromocionUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutPersonalizadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
    categorias?: ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type PedidoUpsertWithoutPersonalizadoInput = {
    update: XOR<PedidoUpdateWithoutPersonalizadoInput, PedidoUncheckedUpdateWithoutPersonalizadoInput>
    create: XOR<PedidoCreateWithoutPersonalizadoInput, PedidoUncheckedCreateWithoutPersonalizadoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPersonalizadoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPersonalizadoInput, PedidoUncheckedUpdateWithoutPersonalizadoInput>
  }

  export type PedidoUpdateWithoutPersonalizadoInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPersonalizadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type UsuarioCreateWithoutReseñasInput = {
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
    historial?: HistorialPedidosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReseñasInput = {
    id?: number
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
    historial?: HistorialPedidosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReseñasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
  }

  export type ProductoCreateWithoutReseñasInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    promocion?: PromocionCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutReseñasInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    promocionId?: number | null
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutReseñasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutReseñasInput, ProductoUncheckedCreateWithoutReseñasInput>
  }

  export type UsuarioUpsertWithoutReseñasInput = {
    update: XOR<UsuarioUpdateWithoutReseñasInput, UsuarioUncheckedUpdateWithoutReseñasInput>
    create: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReseñasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReseñasInput, UsuarioUncheckedUpdateWithoutReseñasInput>
  }

  export type UsuarioUpdateWithoutReseñasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
    historial?: HistorialPedidosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReseñasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProductoUpsertWithoutReseñasInput = {
    update: XOR<ProductoUpdateWithoutReseñasInput, ProductoUncheckedUpdateWithoutReseñasInput>
    create: XOR<ProductoCreateWithoutReseñasInput, ProductoUncheckedCreateWithoutReseñasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutReseñasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutReseñasInput, ProductoUncheckedUpdateWithoutReseñasInput>
  }

  export type ProductoUpdateWithoutReseñasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    promocion?: PromocionUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutReseñasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promocionId?: NullableIntFieldUpdateOperationsInput | number | null
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateWithoutPromocionInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutPromocionInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutProductoInput
    categorias?: ProductoCategoriaUncheckedCreateNestedManyWithoutProductoInput
    etiquetas?: ProductoEtiquetaUncheckedCreateNestedManyWithoutProductoInput
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutPromocionInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPromocionInput, ProductoUncheckedCreateWithoutPromocionInput>
  }

  export type ProductoCreateManyPromocionInputEnvelope = {
    data: ProductoCreateManyPromocionInput | ProductoCreateManyPromocionInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutPromocionInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutPromocionInput, ProductoUncheckedUpdateWithoutPromocionInput>
    create: XOR<ProductoCreateWithoutPromocionInput, ProductoUncheckedCreateWithoutPromocionInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutPromocionInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutPromocionInput, ProductoUncheckedUpdateWithoutPromocionInput>
  }

  export type ProductoUpdateManyWithWhereWithoutPromocionInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutPromocionInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    imagen?: StringFilter<"Producto"> | string
    fechaCreacion?: DateTimeFilter<"Producto"> | Date | string
    fechaActualizacion?: DateTimeNullableFilter<"Producto"> | Date | string | null
    promocionId?: IntNullableFilter<"Producto"> | number | null
  }

  export type PedidoCreateWithoutHistorialInput = {
    fechaPedido?: Date | string
    estado?: $Enums.Estado
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    personalizado?: ProductoPersonalizadoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutHistorialInput = {
    id?: number
    fechaPedido?: Date | string
    usuarioId: number
    estado?: $Enums.Estado
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    personalizado?: ProductoPersonalizadoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutHistorialInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutHistorialInput, PedidoUncheckedCreateWithoutHistorialInput>
  }

  export type UsuarioCreateWithoutHistorialInput = {
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutHistorialInput = {
    id?: number
    nombre: string
    correo: string
    role?: $Enums.Role
    password: string
    ultimoLogin?: Date | string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutHistorialInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistorialInput, UsuarioUncheckedCreateWithoutHistorialInput>
  }

  export type PedidoUpsertWithoutHistorialInput = {
    update: XOR<PedidoUpdateWithoutHistorialInput, PedidoUncheckedUpdateWithoutHistorialInput>
    create: XOR<PedidoCreateWithoutHistorialInput, PedidoUncheckedCreateWithoutHistorialInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutHistorialInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutHistorialInput, PedidoUncheckedUpdateWithoutHistorialInput>
  }

  export type PedidoUpdateWithoutHistorialInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    personalizado?: ProductoPersonalizadoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutHistorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type UsuarioUpsertWithoutHistorialInput = {
    update: XOR<UsuarioUpdateWithoutHistorialInput, UsuarioUncheckedUpdateWithoutHistorialInput>
    create: XOR<UsuarioCreateWithoutHistorialInput, UsuarioUncheckedCreateWithoutHistorialInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistorialInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistorialInput, UsuarioUncheckedUpdateWithoutHistorialInput>
  }

  export type UsuarioUpdateWithoutHistorialInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    fechaPedido?: Date | string
    estado?: $Enums.Estado
  }

  export type ReseñaCreateManyUsuarioInput = {
    id?: number
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    productoId: number
  }

  export type HistorialPedidosCreateManyUsuarioInput = {
    pedidoId: number
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    personalizado?: ProductoPersonalizadoUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoNestedInput
    historial?: HistorialPedidosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type ReseñaUpdateWithoutUsuarioInput = {
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: ProductoUpdateOneRequiredWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialPedidosUpdateWithoutUsuarioInput = {
    pedido?: PedidoUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type HistorialPedidosUncheckedUpdateWithoutUsuarioInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialPedidosUncheckedUpdateManyWithoutUsuarioInput = {
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoPersonalizadoCreateManyProductoInput = {
    id?: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    pedidoId?: number | null
  }

  export type ProductoCategoriaCreateManyProductoInput = {
    categoriaId: number
  }

  export type ProductoEtiquetaCreateManyProductoInput = {
    etiquetaId: number
  }

  export type PedidoProductoCreateManyProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pedidoId: number
  }

  export type ReseñaCreateManyProductoInput = {
    id?: number
    valoracion: number
    comentario?: string | null
    fecha?: Date | string
    moderada?: boolean
    observacion?: string | null
    usuarioId: number
  }

  export type ProductoPersonalizadoUpdateWithoutProductoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    pedido?: PedidoUpdateOneWithoutPersonalizadoNestedInput
  }

  export type ProductoPersonalizadoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductoPersonalizadoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductoCategoriaUpdateWithoutProductoInput = {
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoCategoriaUncheckedUpdateWithoutProductoInput = {
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCategoriaUncheckedUpdateManyWithoutProductoInput = {
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoEtiquetaUpdateWithoutProductoInput = {
    etiqueta?: EtiquetaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoEtiquetaUncheckedUpdateWithoutProductoInput = {
    etiquetaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoEtiquetaUncheckedUpdateManyWithoutProductoInput = {
    etiquetaId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutProductosNestedInput
  }

  export type PedidoProductoUncheckedUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUncheckedUpdateManyWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaUpdateWithoutProductoInput = {
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    moderada?: BoolFieldUpdateOperationsInput | boolean
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCategoriaCreateManyCategoriaInput = {
    productoId: number
  }

  export type ProductoCategoriaUpdateWithoutCategoriaInput = {
    producto?: ProductoUpdateOneRequiredWithoutCategoriasNestedInput
  }

  export type ProductoCategoriaUncheckedUpdateWithoutCategoriaInput = {
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCategoriaUncheckedUpdateManyWithoutCategoriaInput = {
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoEtiquetaCreateManyEtiquetaInput = {
    productoId: number
  }

  export type ProductoEtiquetaUpdateWithoutEtiquetaInput = {
    producto?: ProductoUpdateOneRequiredWithoutEtiquetasNestedInput
  }

  export type ProductoEtiquetaUncheckedUpdateWithoutEtiquetaInput = {
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoEtiquetaUncheckedUpdateManyWithoutEtiquetaInput = {
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoCreateManyPedidoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    impuestos: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    productoId: number
  }

  export type ProductoPersonalizadoCreateManyPedidoInput = {
    id?: number
    nombre: string
    descripcion: string
    color: string
    material: string
    tamanno: number
    logo: boolean
    productoId: number
  }

  export type HistorialPedidosCreateManyPedidoInput = {
    usuarioId: number
  }

  export type PedidoProductoUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoProductoUncheckedUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUncheckedUpdateManyWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuestos?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoPersonalizadoUpdateWithoutPedidoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    producto?: ProductoUpdateOneRequiredWithoutPersonalizadoNestedInput
  }

  export type ProductoPersonalizadoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoPersonalizadoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    tamanno?: IntFieldUpdateOperationsInput | number
    logo?: BoolFieldUpdateOperationsInput | boolean
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialPedidosUpdateWithoutPedidoInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type HistorialPedidosUncheckedUpdateWithoutPedidoInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialPedidosUncheckedUpdateManyWithoutPedidoInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCreateManyPromocionInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    imagen?: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string | null
  }

  export type ProductoUpdateWithoutPromocionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutPromocionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalizado?: ProductoPersonalizadoUncheckedUpdateManyWithoutProductoNestedInput
    categorias?: ProductoCategoriaUncheckedUpdateManyWithoutProductoNestedInput
    etiquetas?: ProductoEtiquetaUncheckedUpdateManyWithoutProductoNestedInput
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutPromocionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
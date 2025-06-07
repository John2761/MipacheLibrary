
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
 * Model Videojuego
 * 
 */
export type Videojuego = $Result.DefaultSelection<Prisma.$VideojuegoPayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>
/**
 * Model Plataforma
 * 
 */
export type Plataforma = $Result.DefaultSelection<Prisma.$PlataformaPayload>
/**
 * Model PlataformaVideojuego
 * 
 */
export type PlataformaVideojuego = $Result.DefaultSelection<Prisma.$PlataformaVideojuegoPayload>
/**
 * Model Orden
 * 
 */
export type Orden = $Result.DefaultSelection<Prisma.$OrdenPayload>
/**
 * Model OrdenVideojuego
 * 
 */
export type OrdenVideojuego = $Result.DefaultSelection<Prisma.$OrdenVideojuegoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.videojuego`: Exposes CRUD operations for the **Videojuego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videojuegos
    * const videojuegos = await prisma.videojuego.findMany()
    * ```
    */
  get videojuego(): Prisma.VideojuegoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plataforma`: Exposes CRUD operations for the **Plataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plataformas
    * const plataformas = await prisma.plataforma.findMany()
    * ```
    */
  get plataforma(): Prisma.PlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plataformaVideojuego`: Exposes CRUD operations for the **PlataformaVideojuego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlataformaVideojuegos
    * const plataformaVideojuegos = await prisma.plataformaVideojuego.findMany()
    * ```
    */
  get plataformaVideojuego(): Prisma.PlataformaVideojuegoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orden`: Exposes CRUD operations for the **Orden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ordens
    * const ordens = await prisma.orden.findMany()
    * ```
    */
  get orden(): Prisma.OrdenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenVideojuego`: Exposes CRUD operations for the **OrdenVideojuego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenVideojuegos
    * const ordenVideojuegos = await prisma.ordenVideojuego.findMany()
    * ```
    */
  get ordenVideojuego(): Prisma.OrdenVideojuegoDelegate<ExtArgs, ClientOptions>;
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
    Videojuego: 'Videojuego',
    Genero: 'Genero',
    Plataforma: 'Plataforma',
    PlataformaVideojuego: 'PlataformaVideojuego',
    Orden: 'Orden',
    OrdenVideojuego: 'OrdenVideojuego'
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
      modelProps: "usuario" | "videojuego" | "genero" | "plataforma" | "plataformaVideojuego" | "orden" | "ordenVideojuego"
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
      Videojuego: {
        payload: Prisma.$VideojuegoPayload<ExtArgs>
        fields: Prisma.VideojuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideojuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideojuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>
          }
          findFirst: {
            args: Prisma.VideojuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideojuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>
          }
          findMany: {
            args: Prisma.VideojuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>[]
          }
          create: {
            args: Prisma.VideojuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>
          }
          createMany: {
            args: Prisma.VideojuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideojuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>
          }
          update: {
            args: Prisma.VideojuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>
          }
          deleteMany: {
            args: Prisma.VideojuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideojuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideojuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideojuegoPayload>
          }
          aggregate: {
            args: Prisma.VideojuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideojuego>
          }
          groupBy: {
            args: Prisma.VideojuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideojuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideojuegoCountArgs<ExtArgs>
            result: $Utils.Optional<VideojuegoCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      Plataforma: {
        payload: Prisma.$PlataformaPayload<ExtArgs>
        fields: Prisma.PlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findFirst: {
            args: Prisma.PlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findMany: {
            args: Prisma.PlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          create: {
            args: Prisma.PlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          createMany: {
            args: Prisma.PlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          update: {
            args: Prisma.PlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          deleteMany: {
            args: Prisma.PlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          aggregate: {
            args: Prisma.PlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlataforma>
          }
          groupBy: {
            args: Prisma.PlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<PlataformaCountAggregateOutputType> | number
          }
        }
      }
      PlataformaVideojuego: {
        payload: Prisma.$PlataformaVideojuegoPayload<ExtArgs>
        fields: Prisma.PlataformaVideojuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlataformaVideojuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlataformaVideojuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>
          }
          findFirst: {
            args: Prisma.PlataformaVideojuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlataformaVideojuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>
          }
          findMany: {
            args: Prisma.PlataformaVideojuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>[]
          }
          create: {
            args: Prisma.PlataformaVideojuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>
          }
          createMany: {
            args: Prisma.PlataformaVideojuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlataformaVideojuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>
          }
          update: {
            args: Prisma.PlataformaVideojuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>
          }
          deleteMany: {
            args: Prisma.PlataformaVideojuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlataformaVideojuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlataformaVideojuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaVideojuegoPayload>
          }
          aggregate: {
            args: Prisma.PlataformaVideojuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlataformaVideojuego>
          }
          groupBy: {
            args: Prisma.PlataformaVideojuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlataformaVideojuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlataformaVideojuegoCountArgs<ExtArgs>
            result: $Utils.Optional<PlataformaVideojuegoCountAggregateOutputType> | number
          }
        }
      }
      Orden: {
        payload: Prisma.$OrdenPayload<ExtArgs>
        fields: Prisma.OrdenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findFirst: {
            args: Prisma.OrdenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findMany: {
            args: Prisma.OrdenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          create: {
            args: Prisma.OrdenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          createMany: {
            args: Prisma.OrdenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          update: {
            args: Prisma.OrdenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          deleteMany: {
            args: Prisma.OrdenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          aggregate: {
            args: Prisma.OrdenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrden>
          }
          groupBy: {
            args: Prisma.OrdenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCountAggregateOutputType> | number
          }
        }
      }
      OrdenVideojuego: {
        payload: Prisma.$OrdenVideojuegoPayload<ExtArgs>
        fields: Prisma.OrdenVideojuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenVideojuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenVideojuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>
          }
          findFirst: {
            args: Prisma.OrdenVideojuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenVideojuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>
          }
          findMany: {
            args: Prisma.OrdenVideojuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>[]
          }
          create: {
            args: Prisma.OrdenVideojuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>
          }
          createMany: {
            args: Prisma.OrdenVideojuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdenVideojuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>
          }
          update: {
            args: Prisma.OrdenVideojuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>
          }
          deleteMany: {
            args: Prisma.OrdenVideojuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenVideojuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdenVideojuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenVideojuegoPayload>
          }
          aggregate: {
            args: Prisma.OrdenVideojuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenVideojuego>
          }
          groupBy: {
            args: Prisma.OrdenVideojuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenVideojuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenVideojuegoCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenVideojuegoCountAggregateOutputType> | number
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
    videojuego?: VideojuegoOmit
    genero?: GeneroOmit
    plataforma?: PlataformaOmit
    plataformaVideojuego?: PlataformaVideojuegoOmit
    orden?: OrdenOmit
    ordenVideojuego?: OrdenVideojuegoOmit
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
    ordenes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | UsuarioCountOutputTypeCountOrdenesArgs
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
  export type UsuarioCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
  }


  /**
   * Count Type VideojuegoCountOutputType
   */

  export type VideojuegoCountOutputType = {
    generos: number
    ordenes: number
    plataformas: number
  }

  export type VideojuegoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | VideojuegoCountOutputTypeCountGenerosArgs
    ordenes?: boolean | VideojuegoCountOutputTypeCountOrdenesArgs
    plataformas?: boolean | VideojuegoCountOutputTypeCountPlataformasArgs
  }

  // Custom InputTypes
  /**
   * VideojuegoCountOutputType without action
   */
  export type VideojuegoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideojuegoCountOutputType
     */
    select?: VideojuegoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideojuegoCountOutputType without action
   */
  export type VideojuegoCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
  }

  /**
   * VideojuegoCountOutputType without action
   */
  export type VideojuegoCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenVideojuegoWhereInput
  }

  /**
   * VideojuegoCountOutputType without action
   */
  export type VideojuegoCountOutputTypeCountPlataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaVideojuegoWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    videojuegos: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videojuegos?: boolean | GeneroCountOutputTypeCountVideojuegosArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountVideojuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideojuegoWhereInput
  }


  /**
   * Count Type PlataformaCountOutputType
   */

  export type PlataformaCountOutputType = {
    videojuegos: number
  }

  export type PlataformaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videojuegos?: boolean | PlataformaCountOutputTypeCountVideojuegosArgs
  }

  // Custom InputTypes
  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaCountOutputType
     */
    select?: PlataformaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountVideojuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaVideojuegoWhereInput
  }


  /**
   * Count Type OrdenCountOutputType
   */

  export type OrdenCountOutputType = {
    videojuegos: number
  }

  export type OrdenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videojuegos?: boolean | OrdenCountOutputTypeCountVideojuegosArgs
  }

  // Custom InputTypes
  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCountOutputType
     */
    select?: OrdenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeCountVideojuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenVideojuegoWhereInput
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
    email: string | null
    nombre: string | null
    role: $Enums.Role | null
    password: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    role: $Enums.Role | null
    password: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nombre: number
    role: number
    password: number
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
    email?: true
    nombre?: true
    role?: true
    password?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    role?: true
    password?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    role?: true
    password?: true
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
    email: string
    nombre: string | null
    role: $Enums.Role
    password: string
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
    email?: boolean
    nombre?: boolean
    role?: boolean
    password?: boolean
    ordenes?: boolean | Usuario$ordenesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nombre?: boolean
    role?: boolean
    password?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nombre" | "role" | "password", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | Usuario$ordenesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      ordenes: Prisma.$OrdenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nombre: string | null
      role: $Enums.Role
      password: string
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
    ordenes<T extends Usuario$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly password: FieldRef<"Usuario", 'String'>
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
   * Usuario.ordenes
   */
  export type Usuario$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    cursor?: OrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
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
   * Model Videojuego
   */

  export type AggregateVideojuego = {
    _count: VideojuegoCountAggregateOutputType | null
    _avg: VideojuegoAvgAggregateOutputType | null
    _sum: VideojuegoSumAggregateOutputType | null
    _min: VideojuegoMinAggregateOutputType | null
    _max: VideojuegoMaxAggregateOutputType | null
  }

  export type VideojuegoAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type VideojuegoSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type VideojuegoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    publicar: boolean | null
    precio: Decimal | null
    imagen: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideojuegoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    publicar: boolean | null
    precio: Decimal | null
    imagen: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideojuegoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    publicar: number
    precio: number
    imagen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideojuegoAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type VideojuegoSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type VideojuegoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    publicar?: true
    precio?: true
    imagen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideojuegoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    publicar?: true
    precio?: true
    imagen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideojuegoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    publicar?: true
    precio?: true
    imagen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideojuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videojuego to aggregate.
     */
    where?: VideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videojuegos to fetch.
     */
    orderBy?: VideojuegoOrderByWithRelationInput | VideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videojuegos
    **/
    _count?: true | VideojuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideojuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideojuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideojuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideojuegoMaxAggregateInputType
  }

  export type GetVideojuegoAggregateType<T extends VideojuegoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideojuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideojuego[P]>
      : GetScalarType<T[P], AggregateVideojuego[P]>
  }




  export type VideojuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideojuegoWhereInput
    orderBy?: VideojuegoOrderByWithAggregationInput | VideojuegoOrderByWithAggregationInput[]
    by: VideojuegoScalarFieldEnum[] | VideojuegoScalarFieldEnum
    having?: VideojuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideojuegoCountAggregateInputType | true
    _avg?: VideojuegoAvgAggregateInputType
    _sum?: VideojuegoSumAggregateInputType
    _min?: VideojuegoMinAggregateInputType
    _max?: VideojuegoMaxAggregateInputType
  }

  export type VideojuegoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    publicar: boolean
    precio: Decimal
    imagen: string
    createdAt: Date
    updatedAt: Date
    _count: VideojuegoCountAggregateOutputType | null
    _avg: VideojuegoAvgAggregateOutputType | null
    _sum: VideojuegoSumAggregateOutputType | null
    _min: VideojuegoMinAggregateOutputType | null
    _max: VideojuegoMaxAggregateOutputType | null
  }

  type GetVideojuegoGroupByPayload<T extends VideojuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideojuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideojuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideojuegoGroupByOutputType[P]>
            : GetScalarType<T[P], VideojuegoGroupByOutputType[P]>
        }
      >
    >


  export type VideojuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    publicar?: boolean
    precio?: boolean
    imagen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generos?: boolean | Videojuego$generosArgs<ExtArgs>
    ordenes?: boolean | Videojuego$ordenesArgs<ExtArgs>
    plataformas?: boolean | Videojuego$plataformasArgs<ExtArgs>
    _count?: boolean | VideojuegoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videojuego"]>



  export type VideojuegoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    publicar?: boolean
    precio?: boolean
    imagen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideojuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "publicar" | "precio" | "imagen" | "createdAt" | "updatedAt", ExtArgs["result"]["videojuego"]>
  export type VideojuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | Videojuego$generosArgs<ExtArgs>
    ordenes?: boolean | Videojuego$ordenesArgs<ExtArgs>
    plataformas?: boolean | Videojuego$plataformasArgs<ExtArgs>
    _count?: boolean | VideojuegoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VideojuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Videojuego"
    objects: {
      generos: Prisma.$GeneroPayload<ExtArgs>[]
      ordenes: Prisma.$OrdenVideojuegoPayload<ExtArgs>[]
      plataformas: Prisma.$PlataformaVideojuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      publicar: boolean
      precio: Prisma.Decimal
      imagen: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videojuego"]>
    composites: {}
  }

  type VideojuegoGetPayload<S extends boolean | null | undefined | VideojuegoDefaultArgs> = $Result.GetResult<Prisma.$VideojuegoPayload, S>

  type VideojuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideojuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideojuegoCountAggregateInputType | true
    }

  export interface VideojuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Videojuego'], meta: { name: 'Videojuego' } }
    /**
     * Find zero or one Videojuego that matches the filter.
     * @param {VideojuegoFindUniqueArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideojuegoFindUniqueArgs>(args: SelectSubset<T, VideojuegoFindUniqueArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videojuego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideojuegoFindUniqueOrThrowArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideojuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideojuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videojuego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoFindFirstArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideojuegoFindFirstArgs>(args?: SelectSubset<T, VideojuegoFindFirstArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videojuego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoFindFirstOrThrowArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideojuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideojuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videojuegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videojuegos
     * const videojuegos = await prisma.videojuego.findMany()
     * 
     * // Get first 10 Videojuegos
     * const videojuegos = await prisma.videojuego.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videojuegoWithIdOnly = await prisma.videojuego.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideojuegoFindManyArgs>(args?: SelectSubset<T, VideojuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videojuego.
     * @param {VideojuegoCreateArgs} args - Arguments to create a Videojuego.
     * @example
     * // Create one Videojuego
     * const Videojuego = await prisma.videojuego.create({
     *   data: {
     *     // ... data to create a Videojuego
     *   }
     * })
     * 
     */
    create<T extends VideojuegoCreateArgs>(args: SelectSubset<T, VideojuegoCreateArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videojuegos.
     * @param {VideojuegoCreateManyArgs} args - Arguments to create many Videojuegos.
     * @example
     * // Create many Videojuegos
     * const videojuego = await prisma.videojuego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideojuegoCreateManyArgs>(args?: SelectSubset<T, VideojuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Videojuego.
     * @param {VideojuegoDeleteArgs} args - Arguments to delete one Videojuego.
     * @example
     * // Delete one Videojuego
     * const Videojuego = await prisma.videojuego.delete({
     *   where: {
     *     // ... filter to delete one Videojuego
     *   }
     * })
     * 
     */
    delete<T extends VideojuegoDeleteArgs>(args: SelectSubset<T, VideojuegoDeleteArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videojuego.
     * @param {VideojuegoUpdateArgs} args - Arguments to update one Videojuego.
     * @example
     * // Update one Videojuego
     * const videojuego = await prisma.videojuego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideojuegoUpdateArgs>(args: SelectSubset<T, VideojuegoUpdateArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videojuegos.
     * @param {VideojuegoDeleteManyArgs} args - Arguments to filter Videojuegos to delete.
     * @example
     * // Delete a few Videojuegos
     * const { count } = await prisma.videojuego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideojuegoDeleteManyArgs>(args?: SelectSubset<T, VideojuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videojuegos
     * const videojuego = await prisma.videojuego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideojuegoUpdateManyArgs>(args: SelectSubset<T, VideojuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Videojuego.
     * @param {VideojuegoUpsertArgs} args - Arguments to update or create a Videojuego.
     * @example
     * // Update or create a Videojuego
     * const videojuego = await prisma.videojuego.upsert({
     *   create: {
     *     // ... data to create a Videojuego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videojuego we want to update
     *   }
     * })
     */
    upsert<T extends VideojuegoUpsertArgs>(args: SelectSubset<T, VideojuegoUpsertArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoCountArgs} args - Arguments to filter Videojuegos to count.
     * @example
     * // Count the number of Videojuegos
     * const count = await prisma.videojuego.count({
     *   where: {
     *     // ... the filter for the Videojuegos we want to count
     *   }
     * })
    **/
    count<T extends VideojuegoCountArgs>(
      args?: Subset<T, VideojuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideojuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideojuegoAggregateArgs>(args: Subset<T, VideojuegoAggregateArgs>): Prisma.PrismaPromise<GetVideojuegoAggregateType<T>>

    /**
     * Group by Videojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoGroupByArgs} args - Group by arguments.
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
      T extends VideojuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideojuegoGroupByArgs['orderBy'] }
        : { orderBy?: VideojuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideojuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideojuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Videojuego model
   */
  readonly fields: VideojuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Videojuego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideojuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generos<T extends Videojuego$generosArgs<ExtArgs> = {}>(args?: Subset<T, Videojuego$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordenes<T extends Videojuego$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Videojuego$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plataformas<T extends Videojuego$plataformasArgs<ExtArgs> = {}>(args?: Subset<T, Videojuego$plataformasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Videojuego model
   */
  interface VideojuegoFieldRefs {
    readonly id: FieldRef<"Videojuego", 'Int'>
    readonly nombre: FieldRef<"Videojuego", 'String'>
    readonly descripcion: FieldRef<"Videojuego", 'String'>
    readonly publicar: FieldRef<"Videojuego", 'Boolean'>
    readonly precio: FieldRef<"Videojuego", 'Decimal'>
    readonly imagen: FieldRef<"Videojuego", 'String'>
    readonly createdAt: FieldRef<"Videojuego", 'DateTime'>
    readonly updatedAt: FieldRef<"Videojuego", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Videojuego findUnique
   */
  export type VideojuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which Videojuego to fetch.
     */
    where: VideojuegoWhereUniqueInput
  }

  /**
   * Videojuego findUniqueOrThrow
   */
  export type VideojuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which Videojuego to fetch.
     */
    where: VideojuegoWhereUniqueInput
  }

  /**
   * Videojuego findFirst
   */
  export type VideojuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which Videojuego to fetch.
     */
    where?: VideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videojuegos to fetch.
     */
    orderBy?: VideojuegoOrderByWithRelationInput | VideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videojuegos.
     */
    cursor?: VideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videojuegos.
     */
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * Videojuego findFirstOrThrow
   */
  export type VideojuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which Videojuego to fetch.
     */
    where?: VideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videojuegos to fetch.
     */
    orderBy?: VideojuegoOrderByWithRelationInput | VideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videojuegos.
     */
    cursor?: VideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videojuegos.
     */
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * Videojuego findMany
   */
  export type VideojuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which Videojuegos to fetch.
     */
    where?: VideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videojuegos to fetch.
     */
    orderBy?: VideojuegoOrderByWithRelationInput | VideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videojuegos.
     */
    cursor?: VideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videojuegos.
     */
    skip?: number
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * Videojuego create
   */
  export type VideojuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a Videojuego.
     */
    data: XOR<VideojuegoCreateInput, VideojuegoUncheckedCreateInput>
  }

  /**
   * Videojuego createMany
   */
  export type VideojuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videojuegos.
     */
    data: VideojuegoCreateManyInput | VideojuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Videojuego update
   */
  export type VideojuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a Videojuego.
     */
    data: XOR<VideojuegoUpdateInput, VideojuegoUncheckedUpdateInput>
    /**
     * Choose, which Videojuego to update.
     */
    where: VideojuegoWhereUniqueInput
  }

  /**
   * Videojuego updateMany
   */
  export type VideojuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videojuegos.
     */
    data: XOR<VideojuegoUpdateManyMutationInput, VideojuegoUncheckedUpdateManyInput>
    /**
     * Filter which Videojuegos to update
     */
    where?: VideojuegoWhereInput
    /**
     * Limit how many Videojuegos to update.
     */
    limit?: number
  }

  /**
   * Videojuego upsert
   */
  export type VideojuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the Videojuego to update in case it exists.
     */
    where: VideojuegoWhereUniqueInput
    /**
     * In case the Videojuego found by the `where` argument doesn't exist, create a new Videojuego with this data.
     */
    create: XOR<VideojuegoCreateInput, VideojuegoUncheckedCreateInput>
    /**
     * In case the Videojuego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideojuegoUpdateInput, VideojuegoUncheckedUpdateInput>
  }

  /**
   * Videojuego delete
   */
  export type VideojuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    /**
     * Filter which Videojuego to delete.
     */
    where: VideojuegoWhereUniqueInput
  }

  /**
   * Videojuego deleteMany
   */
  export type VideojuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videojuegos to delete
     */
    where?: VideojuegoWhereInput
    /**
     * Limit how many Videojuegos to delete.
     */
    limit?: number
  }

  /**
   * Videojuego.generos
   */
  export type Videojuego$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    cursor?: GeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Videojuego.ordenes
   */
  export type Videojuego$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    where?: OrdenVideojuegoWhereInput
    orderBy?: OrdenVideojuegoOrderByWithRelationInput | OrdenVideojuegoOrderByWithRelationInput[]
    cursor?: OrdenVideojuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenVideojuegoScalarFieldEnum | OrdenVideojuegoScalarFieldEnum[]
  }

  /**
   * Videojuego.plataformas
   */
  export type Videojuego$plataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    where?: PlataformaVideojuegoWhereInput
    orderBy?: PlataformaVideojuegoOrderByWithRelationInput | PlataformaVideojuegoOrderByWithRelationInput[]
    cursor?: PlataformaVideojuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlataformaVideojuegoScalarFieldEnum | PlataformaVideojuegoScalarFieldEnum[]
  }

  /**
   * Videojuego without action
   */
  export type VideojuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    updatedAt: Date | null
  }

  export type GeneroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    updatedAt: Date | null
  }

  export type GeneroCountAggregateOutputType = {
    id: number
    nombre: number
    updatedAt: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id?: true
  }

  export type GeneroSumAggregateInputType = {
    id?: true
  }

  export type GeneroMinAggregateInputType = {
    id?: true
    nombre?: true
    updatedAt?: true
  }

  export type GeneroMaxAggregateInputType = {
    id?: true
    nombre?: true
    updatedAt?: true
  }

  export type GeneroCountAggregateInputType = {
    id?: true
    nombre?: true
    updatedAt?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id: number
    nombre: string
    updatedAt: Date
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    updatedAt?: boolean
    videojuegos?: boolean | Genero$videojuegosArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type GeneroSelectScalar = {
    id?: boolean
    nombre?: boolean
    updatedAt?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "updatedAt", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videojuegos?: boolean | Genero$videojuegosArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      videojuegos: Prisma.$VideojuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      updatedAt: Date
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoWithIdOnly = await prisma.genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
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
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videojuegos<T extends Genero$videojuegosArgs<ExtArgs> = {}>(args?: Subset<T, Genero$videojuegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id: FieldRef<"Genero", 'Int'>
    readonly nombre: FieldRef<"Genero", 'String'>
    readonly updatedAt: FieldRef<"Genero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.videojuegos
   */
  export type Genero$videojuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videojuego
     */
    select?: VideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videojuego
     */
    omit?: VideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideojuegoInclude<ExtArgs> | null
    where?: VideojuegoWhereInput
    orderBy?: VideojuegoOrderByWithRelationInput | VideojuegoOrderByWithRelationInput[]
    cursor?: VideojuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
  }


  /**
   * Model Plataforma
   */

  export type AggregatePlataforma = {
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  export type PlataformaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlataformaSumAggregateOutputType = {
    id: number | null
  }

  export type PlataformaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    updatedAt: Date | null
  }

  export type PlataformaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    updatedAt: Date | null
  }

  export type PlataformaCountAggregateOutputType = {
    id: number
    nombre: number
    updatedAt: number
    _all: number
  }


  export type PlataformaAvgAggregateInputType = {
    id?: true
  }

  export type PlataformaSumAggregateInputType = {
    id?: true
  }

  export type PlataformaMinAggregateInputType = {
    id?: true
    nombre?: true
    updatedAt?: true
  }

  export type PlataformaMaxAggregateInputType = {
    id?: true
    nombre?: true
    updatedAt?: true
  }

  export type PlataformaCountAggregateInputType = {
    id?: true
    nombre?: true
    updatedAt?: true
    _all?: true
  }

  export type PlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataforma to aggregate.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plataformas
    **/
    _count?: true | PlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlataformaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlataformaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlataformaMaxAggregateInputType
  }

  export type GetPlataformaAggregateType<T extends PlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlataforma[P]>
      : GetScalarType<T[P], AggregatePlataforma[P]>
  }




  export type PlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaWhereInput
    orderBy?: PlataformaOrderByWithAggregationInput | PlataformaOrderByWithAggregationInput[]
    by: PlataformaScalarFieldEnum[] | PlataformaScalarFieldEnum
    having?: PlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlataformaCountAggregateInputType | true
    _avg?: PlataformaAvgAggregateInputType
    _sum?: PlataformaSumAggregateInputType
    _min?: PlataformaMinAggregateInputType
    _max?: PlataformaMaxAggregateInputType
  }

  export type PlataformaGroupByOutputType = {
    id: number
    nombre: string
    updatedAt: Date
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  type GetPlataformaGroupByPayload<T extends PlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
        }
      >
    >


  export type PlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    updatedAt?: boolean
    videojuegos?: boolean | Plataforma$videojuegosArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plataforma"]>



  export type PlataformaSelectScalar = {
    id?: boolean
    nombre?: boolean
    updatedAt?: boolean
  }

  export type PlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "updatedAt", ExtArgs["result"]["plataforma"]>
  export type PlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videojuegos?: boolean | Plataforma$videojuegosArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plataforma"
    objects: {
      videojuegos: Prisma.$PlataformaVideojuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      updatedAt: Date
    }, ExtArgs["result"]["plataforma"]>
    composites: {}
  }

  type PlataformaGetPayload<S extends boolean | null | undefined | PlataformaDefaultArgs> = $Result.GetResult<Prisma.$PlataformaPayload, S>

  type PlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlataformaCountAggregateInputType | true
    }

  export interface PlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plataforma'], meta: { name: 'Plataforma' } }
    /**
     * Find zero or one Plataforma that matches the filter.
     * @param {PlataformaFindUniqueArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlataformaFindUniqueArgs>(args: SelectSubset<T, PlataformaFindUniqueArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlataformaFindUniqueOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlataformaFindFirstArgs>(args?: SelectSubset<T, PlataformaFindFirstArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plataformas
     * const plataformas = await prisma.plataforma.findMany()
     * 
     * // Get first 10 Plataformas
     * const plataformas = await prisma.plataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlataformaFindManyArgs>(args?: SelectSubset<T, PlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plataforma.
     * @param {PlataformaCreateArgs} args - Arguments to create a Plataforma.
     * @example
     * // Create one Plataforma
     * const Plataforma = await prisma.plataforma.create({
     *   data: {
     *     // ... data to create a Plataforma
     *   }
     * })
     * 
     */
    create<T extends PlataformaCreateArgs>(args: SelectSubset<T, PlataformaCreateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plataformas.
     * @param {PlataformaCreateManyArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlataformaCreateManyArgs>(args?: SelectSubset<T, PlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plataforma.
     * @param {PlataformaDeleteArgs} args - Arguments to delete one Plataforma.
     * @example
     * // Delete one Plataforma
     * const Plataforma = await prisma.plataforma.delete({
     *   where: {
     *     // ... filter to delete one Plataforma
     *   }
     * })
     * 
     */
    delete<T extends PlataformaDeleteArgs>(args: SelectSubset<T, PlataformaDeleteArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plataforma.
     * @param {PlataformaUpdateArgs} args - Arguments to update one Plataforma.
     * @example
     * // Update one Plataforma
     * const plataforma = await prisma.plataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlataformaUpdateArgs>(args: SelectSubset<T, PlataformaUpdateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plataformas.
     * @param {PlataformaDeleteManyArgs} args - Arguments to filter Plataformas to delete.
     * @example
     * // Delete a few Plataformas
     * const { count } = await prisma.plataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlataformaDeleteManyArgs>(args?: SelectSubset<T, PlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlataformaUpdateManyArgs>(args: SelectSubset<T, PlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plataforma.
     * @param {PlataformaUpsertArgs} args - Arguments to update or create a Plataforma.
     * @example
     * // Update or create a Plataforma
     * const plataforma = await prisma.plataforma.upsert({
     *   create: {
     *     // ... data to create a Plataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plataforma we want to update
     *   }
     * })
     */
    upsert<T extends PlataformaUpsertArgs>(args: SelectSubset<T, PlataformaUpsertArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaCountArgs} args - Arguments to filter Plataformas to count.
     * @example
     * // Count the number of Plataformas
     * const count = await prisma.plataforma.count({
     *   where: {
     *     // ... the filter for the Plataformas we want to count
     *   }
     * })
    **/
    count<T extends PlataformaCountArgs>(
      args?: Subset<T, PlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlataformaAggregateArgs>(args: Subset<T, PlataformaAggregateArgs>): Prisma.PrismaPromise<GetPlataformaAggregateType<T>>

    /**
     * Group by Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaGroupByArgs} args - Group by arguments.
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
      T extends PlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlataformaGroupByArgs['orderBy'] }
        : { orderBy?: PlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plataforma model
   */
  readonly fields: PlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videojuegos<T extends Plataforma$videojuegosArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$videojuegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plataforma model
   */
  interface PlataformaFieldRefs {
    readonly id: FieldRef<"Plataforma", 'Int'>
    readonly nombre: FieldRef<"Plataforma", 'String'>
    readonly updatedAt: FieldRef<"Plataforma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plataforma findUnique
   */
  export type PlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findUniqueOrThrow
   */
  export type PlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findFirst
   */
  export type PlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findFirstOrThrow
   */
  export type PlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findMany
   */
  export type PlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataformas to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma create
   */
  export type PlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plataforma.
     */
    data: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
  }

  /**
   * Plataforma createMany
   */
  export type PlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plataforma update
   */
  export type PlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plataforma.
     */
    data: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
    /**
     * Choose, which Plataforma to update.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma updateMany
   */
  export type PlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
  }

  /**
   * Plataforma upsert
   */
  export type PlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plataforma to update in case it exists.
     */
    where: PlataformaWhereUniqueInput
    /**
     * In case the Plataforma found by the `where` argument doesn't exist, create a new Plataforma with this data.
     */
    create: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
    /**
     * In case the Plataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
  }

  /**
   * Plataforma delete
   */
  export type PlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter which Plataforma to delete.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma deleteMany
   */
  export type PlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataformas to delete
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to delete.
     */
    limit?: number
  }

  /**
   * Plataforma.videojuegos
   */
  export type Plataforma$videojuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    where?: PlataformaVideojuegoWhereInput
    orderBy?: PlataformaVideojuegoOrderByWithRelationInput | PlataformaVideojuegoOrderByWithRelationInput[]
    cursor?: PlataformaVideojuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlataformaVideojuegoScalarFieldEnum | PlataformaVideojuegoScalarFieldEnum[]
  }

  /**
   * Plataforma without action
   */
  export type PlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
  }


  /**
   * Model PlataformaVideojuego
   */

  export type AggregatePlataformaVideojuego = {
    _count: PlataformaVideojuegoCountAggregateOutputType | null
    _avg: PlataformaVideojuegoAvgAggregateOutputType | null
    _sum: PlataformaVideojuegoSumAggregateOutputType | null
    _min: PlataformaVideojuegoMinAggregateOutputType | null
    _max: PlataformaVideojuegoMaxAggregateOutputType | null
  }

  export type PlataformaVideojuegoAvgAggregateOutputType = {
    plataformaId: number | null
    videojuegoId: number | null
    anno_lanzamiento: number | null
  }

  export type PlataformaVideojuegoSumAggregateOutputType = {
    plataformaId: number | null
    videojuegoId: number | null
    anno_lanzamiento: number | null
  }

  export type PlataformaVideojuegoMinAggregateOutputType = {
    plataformaId: number | null
    videojuegoId: number | null
    anno_lanzamiento: number | null
    updatedAt: Date | null
  }

  export type PlataformaVideojuegoMaxAggregateOutputType = {
    plataformaId: number | null
    videojuegoId: number | null
    anno_lanzamiento: number | null
    updatedAt: Date | null
  }

  export type PlataformaVideojuegoCountAggregateOutputType = {
    plataformaId: number
    videojuegoId: number
    anno_lanzamiento: number
    updatedAt: number
    _all: number
  }


  export type PlataformaVideojuegoAvgAggregateInputType = {
    plataformaId?: true
    videojuegoId?: true
    anno_lanzamiento?: true
  }

  export type PlataformaVideojuegoSumAggregateInputType = {
    plataformaId?: true
    videojuegoId?: true
    anno_lanzamiento?: true
  }

  export type PlataformaVideojuegoMinAggregateInputType = {
    plataformaId?: true
    videojuegoId?: true
    anno_lanzamiento?: true
    updatedAt?: true
  }

  export type PlataformaVideojuegoMaxAggregateInputType = {
    plataformaId?: true
    videojuegoId?: true
    anno_lanzamiento?: true
    updatedAt?: true
  }

  export type PlataformaVideojuegoCountAggregateInputType = {
    plataformaId?: true
    videojuegoId?: true
    anno_lanzamiento?: true
    updatedAt?: true
    _all?: true
  }

  export type PlataformaVideojuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlataformaVideojuego to aggregate.
     */
    where?: PlataformaVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlataformaVideojuegos to fetch.
     */
    orderBy?: PlataformaVideojuegoOrderByWithRelationInput | PlataformaVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlataformaVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlataformaVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlataformaVideojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlataformaVideojuegos
    **/
    _count?: true | PlataformaVideojuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlataformaVideojuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlataformaVideojuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlataformaVideojuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlataformaVideojuegoMaxAggregateInputType
  }

  export type GetPlataformaVideojuegoAggregateType<T extends PlataformaVideojuegoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlataformaVideojuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlataformaVideojuego[P]>
      : GetScalarType<T[P], AggregatePlataformaVideojuego[P]>
  }




  export type PlataformaVideojuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaVideojuegoWhereInput
    orderBy?: PlataformaVideojuegoOrderByWithAggregationInput | PlataformaVideojuegoOrderByWithAggregationInput[]
    by: PlataformaVideojuegoScalarFieldEnum[] | PlataformaVideojuegoScalarFieldEnum
    having?: PlataformaVideojuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlataformaVideojuegoCountAggregateInputType | true
    _avg?: PlataformaVideojuegoAvgAggregateInputType
    _sum?: PlataformaVideojuegoSumAggregateInputType
    _min?: PlataformaVideojuegoMinAggregateInputType
    _max?: PlataformaVideojuegoMaxAggregateInputType
  }

  export type PlataformaVideojuegoGroupByOutputType = {
    plataformaId: number
    videojuegoId: number
    anno_lanzamiento: number
    updatedAt: Date
    _count: PlataformaVideojuegoCountAggregateOutputType | null
    _avg: PlataformaVideojuegoAvgAggregateOutputType | null
    _sum: PlataformaVideojuegoSumAggregateOutputType | null
    _min: PlataformaVideojuegoMinAggregateOutputType | null
    _max: PlataformaVideojuegoMaxAggregateOutputType | null
  }

  type GetPlataformaVideojuegoGroupByPayload<T extends PlataformaVideojuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlataformaVideojuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlataformaVideojuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlataformaVideojuegoGroupByOutputType[P]>
            : GetScalarType<T[P], PlataformaVideojuegoGroupByOutputType[P]>
        }
      >
    >


  export type PlataformaVideojuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plataformaId?: boolean
    videojuegoId?: boolean
    anno_lanzamiento?: boolean
    updatedAt?: boolean
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    videojuego?: boolean | VideojuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plataformaVideojuego"]>



  export type PlataformaVideojuegoSelectScalar = {
    plataformaId?: boolean
    videojuegoId?: boolean
    anno_lanzamiento?: boolean
    updatedAt?: boolean
  }

  export type PlataformaVideojuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"plataformaId" | "videojuegoId" | "anno_lanzamiento" | "updatedAt", ExtArgs["result"]["plataformaVideojuego"]>
  export type PlataformaVideojuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
    videojuego?: boolean | VideojuegoDefaultArgs<ExtArgs>
  }

  export type $PlataformaVideojuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlataformaVideojuego"
    objects: {
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
      videojuego: Prisma.$VideojuegoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      plataformaId: number
      videojuegoId: number
      anno_lanzamiento: number
      updatedAt: Date
    }, ExtArgs["result"]["plataformaVideojuego"]>
    composites: {}
  }

  type PlataformaVideojuegoGetPayload<S extends boolean | null | undefined | PlataformaVideojuegoDefaultArgs> = $Result.GetResult<Prisma.$PlataformaVideojuegoPayload, S>

  type PlataformaVideojuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlataformaVideojuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlataformaVideojuegoCountAggregateInputType | true
    }

  export interface PlataformaVideojuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlataformaVideojuego'], meta: { name: 'PlataformaVideojuego' } }
    /**
     * Find zero or one PlataformaVideojuego that matches the filter.
     * @param {PlataformaVideojuegoFindUniqueArgs} args - Arguments to find a PlataformaVideojuego
     * @example
     * // Get one PlataformaVideojuego
     * const plataformaVideojuego = await prisma.plataformaVideojuego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlataformaVideojuegoFindUniqueArgs>(args: SelectSubset<T, PlataformaVideojuegoFindUniqueArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlataformaVideojuego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlataformaVideojuegoFindUniqueOrThrowArgs} args - Arguments to find a PlataformaVideojuego
     * @example
     * // Get one PlataformaVideojuego
     * const plataformaVideojuego = await prisma.plataformaVideojuego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlataformaVideojuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlataformaVideojuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlataformaVideojuego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoFindFirstArgs} args - Arguments to find a PlataformaVideojuego
     * @example
     * // Get one PlataformaVideojuego
     * const plataformaVideojuego = await prisma.plataformaVideojuego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlataformaVideojuegoFindFirstArgs>(args?: SelectSubset<T, PlataformaVideojuegoFindFirstArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlataformaVideojuego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoFindFirstOrThrowArgs} args - Arguments to find a PlataformaVideojuego
     * @example
     * // Get one PlataformaVideojuego
     * const plataformaVideojuego = await prisma.plataformaVideojuego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlataformaVideojuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlataformaVideojuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlataformaVideojuegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlataformaVideojuegos
     * const plataformaVideojuegos = await prisma.plataformaVideojuego.findMany()
     * 
     * // Get first 10 PlataformaVideojuegos
     * const plataformaVideojuegos = await prisma.plataformaVideojuego.findMany({ take: 10 })
     * 
     * // Only select the `plataformaId`
     * const plataformaVideojuegoWithPlataformaIdOnly = await prisma.plataformaVideojuego.findMany({ select: { plataformaId: true } })
     * 
     */
    findMany<T extends PlataformaVideojuegoFindManyArgs>(args?: SelectSubset<T, PlataformaVideojuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlataformaVideojuego.
     * @param {PlataformaVideojuegoCreateArgs} args - Arguments to create a PlataformaVideojuego.
     * @example
     * // Create one PlataformaVideojuego
     * const PlataformaVideojuego = await prisma.plataformaVideojuego.create({
     *   data: {
     *     // ... data to create a PlataformaVideojuego
     *   }
     * })
     * 
     */
    create<T extends PlataformaVideojuegoCreateArgs>(args: SelectSubset<T, PlataformaVideojuegoCreateArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlataformaVideojuegos.
     * @param {PlataformaVideojuegoCreateManyArgs} args - Arguments to create many PlataformaVideojuegos.
     * @example
     * // Create many PlataformaVideojuegos
     * const plataformaVideojuego = await prisma.plataformaVideojuego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlataformaVideojuegoCreateManyArgs>(args?: SelectSubset<T, PlataformaVideojuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlataformaVideojuego.
     * @param {PlataformaVideojuegoDeleteArgs} args - Arguments to delete one PlataformaVideojuego.
     * @example
     * // Delete one PlataformaVideojuego
     * const PlataformaVideojuego = await prisma.plataformaVideojuego.delete({
     *   where: {
     *     // ... filter to delete one PlataformaVideojuego
     *   }
     * })
     * 
     */
    delete<T extends PlataformaVideojuegoDeleteArgs>(args: SelectSubset<T, PlataformaVideojuegoDeleteArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlataformaVideojuego.
     * @param {PlataformaVideojuegoUpdateArgs} args - Arguments to update one PlataformaVideojuego.
     * @example
     * // Update one PlataformaVideojuego
     * const plataformaVideojuego = await prisma.plataformaVideojuego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlataformaVideojuegoUpdateArgs>(args: SelectSubset<T, PlataformaVideojuegoUpdateArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlataformaVideojuegos.
     * @param {PlataformaVideojuegoDeleteManyArgs} args - Arguments to filter PlataformaVideojuegos to delete.
     * @example
     * // Delete a few PlataformaVideojuegos
     * const { count } = await prisma.plataformaVideojuego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlataformaVideojuegoDeleteManyArgs>(args?: SelectSubset<T, PlataformaVideojuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlataformaVideojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlataformaVideojuegos
     * const plataformaVideojuego = await prisma.plataformaVideojuego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlataformaVideojuegoUpdateManyArgs>(args: SelectSubset<T, PlataformaVideojuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlataformaVideojuego.
     * @param {PlataformaVideojuegoUpsertArgs} args - Arguments to update or create a PlataformaVideojuego.
     * @example
     * // Update or create a PlataformaVideojuego
     * const plataformaVideojuego = await prisma.plataformaVideojuego.upsert({
     *   create: {
     *     // ... data to create a PlataformaVideojuego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlataformaVideojuego we want to update
     *   }
     * })
     */
    upsert<T extends PlataformaVideojuegoUpsertArgs>(args: SelectSubset<T, PlataformaVideojuegoUpsertArgs<ExtArgs>>): Prisma__PlataformaVideojuegoClient<$Result.GetResult<Prisma.$PlataformaVideojuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlataformaVideojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoCountArgs} args - Arguments to filter PlataformaVideojuegos to count.
     * @example
     * // Count the number of PlataformaVideojuegos
     * const count = await prisma.plataformaVideojuego.count({
     *   where: {
     *     // ... the filter for the PlataformaVideojuegos we want to count
     *   }
     * })
    **/
    count<T extends PlataformaVideojuegoCountArgs>(
      args?: Subset<T, PlataformaVideojuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlataformaVideojuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlataformaVideojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlataformaVideojuegoAggregateArgs>(args: Subset<T, PlataformaVideojuegoAggregateArgs>): Prisma.PrismaPromise<GetPlataformaVideojuegoAggregateType<T>>

    /**
     * Group by PlataformaVideojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaVideojuegoGroupByArgs} args - Group by arguments.
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
      T extends PlataformaVideojuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlataformaVideojuegoGroupByArgs['orderBy'] }
        : { orderBy?: PlataformaVideojuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlataformaVideojuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlataformaVideojuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlataformaVideojuego model
   */
  readonly fields: PlataformaVideojuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlataformaVideojuego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlataformaVideojuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videojuego<T extends VideojuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideojuegoDefaultArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlataformaVideojuego model
   */
  interface PlataformaVideojuegoFieldRefs {
    readonly plataformaId: FieldRef<"PlataformaVideojuego", 'Int'>
    readonly videojuegoId: FieldRef<"PlataformaVideojuego", 'Int'>
    readonly anno_lanzamiento: FieldRef<"PlataformaVideojuego", 'Int'>
    readonly updatedAt: FieldRef<"PlataformaVideojuego", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlataformaVideojuego findUnique
   */
  export type PlataformaVideojuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which PlataformaVideojuego to fetch.
     */
    where: PlataformaVideojuegoWhereUniqueInput
  }

  /**
   * PlataformaVideojuego findUniqueOrThrow
   */
  export type PlataformaVideojuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which PlataformaVideojuego to fetch.
     */
    where: PlataformaVideojuegoWhereUniqueInput
  }

  /**
   * PlataformaVideojuego findFirst
   */
  export type PlataformaVideojuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which PlataformaVideojuego to fetch.
     */
    where?: PlataformaVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlataformaVideojuegos to fetch.
     */
    orderBy?: PlataformaVideojuegoOrderByWithRelationInput | PlataformaVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlataformaVideojuegos.
     */
    cursor?: PlataformaVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlataformaVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlataformaVideojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlataformaVideojuegos.
     */
    distinct?: PlataformaVideojuegoScalarFieldEnum | PlataformaVideojuegoScalarFieldEnum[]
  }

  /**
   * PlataformaVideojuego findFirstOrThrow
   */
  export type PlataformaVideojuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which PlataformaVideojuego to fetch.
     */
    where?: PlataformaVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlataformaVideojuegos to fetch.
     */
    orderBy?: PlataformaVideojuegoOrderByWithRelationInput | PlataformaVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlataformaVideojuegos.
     */
    cursor?: PlataformaVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlataformaVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlataformaVideojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlataformaVideojuegos.
     */
    distinct?: PlataformaVideojuegoScalarFieldEnum | PlataformaVideojuegoScalarFieldEnum[]
  }

  /**
   * PlataformaVideojuego findMany
   */
  export type PlataformaVideojuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which PlataformaVideojuegos to fetch.
     */
    where?: PlataformaVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlataformaVideojuegos to fetch.
     */
    orderBy?: PlataformaVideojuegoOrderByWithRelationInput | PlataformaVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlataformaVideojuegos.
     */
    cursor?: PlataformaVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlataformaVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlataformaVideojuegos.
     */
    skip?: number
    distinct?: PlataformaVideojuegoScalarFieldEnum | PlataformaVideojuegoScalarFieldEnum[]
  }

  /**
   * PlataformaVideojuego create
   */
  export type PlataformaVideojuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlataformaVideojuego.
     */
    data: XOR<PlataformaVideojuegoCreateInput, PlataformaVideojuegoUncheckedCreateInput>
  }

  /**
   * PlataformaVideojuego createMany
   */
  export type PlataformaVideojuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlataformaVideojuegos.
     */
    data: PlataformaVideojuegoCreateManyInput | PlataformaVideojuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlataformaVideojuego update
   */
  export type PlataformaVideojuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlataformaVideojuego.
     */
    data: XOR<PlataformaVideojuegoUpdateInput, PlataformaVideojuegoUncheckedUpdateInput>
    /**
     * Choose, which PlataformaVideojuego to update.
     */
    where: PlataformaVideojuegoWhereUniqueInput
  }

  /**
   * PlataformaVideojuego updateMany
   */
  export type PlataformaVideojuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlataformaVideojuegos.
     */
    data: XOR<PlataformaVideojuegoUpdateManyMutationInput, PlataformaVideojuegoUncheckedUpdateManyInput>
    /**
     * Filter which PlataformaVideojuegos to update
     */
    where?: PlataformaVideojuegoWhereInput
    /**
     * Limit how many PlataformaVideojuegos to update.
     */
    limit?: number
  }

  /**
   * PlataformaVideojuego upsert
   */
  export type PlataformaVideojuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlataformaVideojuego to update in case it exists.
     */
    where: PlataformaVideojuegoWhereUniqueInput
    /**
     * In case the PlataformaVideojuego found by the `where` argument doesn't exist, create a new PlataformaVideojuego with this data.
     */
    create: XOR<PlataformaVideojuegoCreateInput, PlataformaVideojuegoUncheckedCreateInput>
    /**
     * In case the PlataformaVideojuego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlataformaVideojuegoUpdateInput, PlataformaVideojuegoUncheckedUpdateInput>
  }

  /**
   * PlataformaVideojuego delete
   */
  export type PlataformaVideojuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
    /**
     * Filter which PlataformaVideojuego to delete.
     */
    where: PlataformaVideojuegoWhereUniqueInput
  }

  /**
   * PlataformaVideojuego deleteMany
   */
  export type PlataformaVideojuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlataformaVideojuegos to delete
     */
    where?: PlataformaVideojuegoWhereInput
    /**
     * Limit how many PlataformaVideojuegos to delete.
     */
    limit?: number
  }

  /**
   * PlataformaVideojuego without action
   */
  export type PlataformaVideojuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaVideojuego
     */
    select?: PlataformaVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlataformaVideojuego
     */
    omit?: PlataformaVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaVideojuegoInclude<ExtArgs> | null
  }


  /**
   * Model Orden
   */

  export type AggregateOrden = {
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  export type OrdenAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type OrdenSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type OrdenMinAggregateOutputType = {
    id: number | null
    fechaOrden: Date | null
    usuarioId: number | null
  }

  export type OrdenMaxAggregateOutputType = {
    id: number | null
    fechaOrden: Date | null
    usuarioId: number | null
  }

  export type OrdenCountAggregateOutputType = {
    id: number
    fechaOrden: number
    usuarioId: number
    _all: number
  }


  export type OrdenAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type OrdenSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type OrdenMinAggregateInputType = {
    id?: true
    fechaOrden?: true
    usuarioId?: true
  }

  export type OrdenMaxAggregateInputType = {
    id?: true
    fechaOrden?: true
    usuarioId?: true
  }

  export type OrdenCountAggregateInputType = {
    id?: true
    fechaOrden?: true
    usuarioId?: true
    _all?: true
  }

  export type OrdenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orden to aggregate.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ordens
    **/
    _count?: true | OrdenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenMaxAggregateInputType
  }

  export type GetOrdenAggregateType<T extends OrdenAggregateArgs> = {
        [P in keyof T & keyof AggregateOrden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrden[P]>
      : GetScalarType<T[P], AggregateOrden[P]>
  }




  export type OrdenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithAggregationInput | OrdenOrderByWithAggregationInput[]
    by: OrdenScalarFieldEnum[] | OrdenScalarFieldEnum
    having?: OrdenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCountAggregateInputType | true
    _avg?: OrdenAvgAggregateInputType
    _sum?: OrdenSumAggregateInputType
    _min?: OrdenMinAggregateInputType
    _max?: OrdenMaxAggregateInputType
  }

  export type OrdenGroupByOutputType = {
    id: number
    fechaOrden: Date
    usuarioId: number
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  type GetOrdenGroupByPayload<T extends OrdenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenGroupByOutputType[P]>
        }
      >
    >


  export type OrdenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaOrden?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    videojuegos?: boolean | Orden$videojuegosArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>



  export type OrdenSelectScalar = {
    id?: boolean
    fechaOrden?: boolean
    usuarioId?: boolean
  }

  export type OrdenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaOrden" | "usuarioId", ExtArgs["result"]["orden"]>
  export type OrdenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    videojuegos?: boolean | Orden$videojuegosArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orden"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      videojuegos: Prisma.$OrdenVideojuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaOrden: Date
      usuarioId: number
    }, ExtArgs["result"]["orden"]>
    composites: {}
  }

  type OrdenGetPayload<S extends boolean | null | undefined | OrdenDefaultArgs> = $Result.GetResult<Prisma.$OrdenPayload, S>

  type OrdenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCountAggregateInputType | true
    }

  export interface OrdenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orden'], meta: { name: 'Orden' } }
    /**
     * Find zero or one Orden that matches the filter.
     * @param {OrdenFindUniqueArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenFindUniqueArgs>(args: SelectSubset<T, OrdenFindUniqueArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenFindUniqueOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenFindFirstArgs>(args?: SelectSubset<T, OrdenFindFirstArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ordens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ordens
     * const ordens = await prisma.orden.findMany()
     * 
     * // Get first 10 Ordens
     * const ordens = await prisma.orden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenWithIdOnly = await prisma.orden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenFindManyArgs>(args?: SelectSubset<T, OrdenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orden.
     * @param {OrdenCreateArgs} args - Arguments to create a Orden.
     * @example
     * // Create one Orden
     * const Orden = await prisma.orden.create({
     *   data: {
     *     // ... data to create a Orden
     *   }
     * })
     * 
     */
    create<T extends OrdenCreateArgs>(args: SelectSubset<T, OrdenCreateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ordens.
     * @param {OrdenCreateManyArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCreateManyArgs>(args?: SelectSubset<T, OrdenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orden.
     * @param {OrdenDeleteArgs} args - Arguments to delete one Orden.
     * @example
     * // Delete one Orden
     * const Orden = await prisma.orden.delete({
     *   where: {
     *     // ... filter to delete one Orden
     *   }
     * })
     * 
     */
    delete<T extends OrdenDeleteArgs>(args: SelectSubset<T, OrdenDeleteArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orden.
     * @param {OrdenUpdateArgs} args - Arguments to update one Orden.
     * @example
     * // Update one Orden
     * const orden = await prisma.orden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenUpdateArgs>(args: SelectSubset<T, OrdenUpdateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ordens.
     * @param {OrdenDeleteManyArgs} args - Arguments to filter Ordens to delete.
     * @example
     * // Delete a few Ordens
     * const { count } = await prisma.orden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenDeleteManyArgs>(args?: SelectSubset<T, OrdenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenUpdateManyArgs>(args: SelectSubset<T, OrdenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orden.
     * @param {OrdenUpsertArgs} args - Arguments to update or create a Orden.
     * @example
     * // Update or create a Orden
     * const orden = await prisma.orden.upsert({
     *   create: {
     *     // ... data to create a Orden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orden we want to update
     *   }
     * })
     */
    upsert<T extends OrdenUpsertArgs>(args: SelectSubset<T, OrdenUpsertArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCountArgs} args - Arguments to filter Ordens to count.
     * @example
     * // Count the number of Ordens
     * const count = await prisma.orden.count({
     *   where: {
     *     // ... the filter for the Ordens we want to count
     *   }
     * })
    **/
    count<T extends OrdenCountArgs>(
      args?: Subset<T, OrdenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenAggregateArgs>(args: Subset<T, OrdenAggregateArgs>): Prisma.PrismaPromise<GetOrdenAggregateType<T>>

    /**
     * Group by Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenGroupByArgs} args - Group by arguments.
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
      T extends OrdenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenGroupByArgs['orderBy'] }
        : { orderBy?: OrdenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orden model
   */
  readonly fields: OrdenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videojuegos<T extends Orden$videojuegosArgs<ExtArgs> = {}>(args?: Subset<T, Orden$videojuegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orden model
   */
  interface OrdenFieldRefs {
    readonly id: FieldRef<"Orden", 'Int'>
    readonly fechaOrden: FieldRef<"Orden", 'DateTime'>
    readonly usuarioId: FieldRef<"Orden", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orden findUnique
   */
  export type OrdenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findUniqueOrThrow
   */
  export type OrdenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findFirst
   */
  export type OrdenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findFirstOrThrow
   */
  export type OrdenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findMany
   */
  export type OrdenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Ordens to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden create
   */
  export type OrdenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to create a Orden.
     */
    data: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
  }

  /**
   * Orden createMany
   */
  export type OrdenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orden update
   */
  export type OrdenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to update a Orden.
     */
    data: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
    /**
     * Choose, which Orden to update.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden updateMany
   */
  export type OrdenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
  }

  /**
   * Orden upsert
   */
  export type OrdenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The filter to search for the Orden to update in case it exists.
     */
    where: OrdenWhereUniqueInput
    /**
     * In case the Orden found by the `where` argument doesn't exist, create a new Orden with this data.
     */
    create: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
    /**
     * In case the Orden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
  }

  /**
   * Orden delete
   */
  export type OrdenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter which Orden to delete.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden deleteMany
   */
  export type OrdenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ordens to delete
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to delete.
     */
    limit?: number
  }

  /**
   * Orden.videojuegos
   */
  export type Orden$videojuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    where?: OrdenVideojuegoWhereInput
    orderBy?: OrdenVideojuegoOrderByWithRelationInput | OrdenVideojuegoOrderByWithRelationInput[]
    cursor?: OrdenVideojuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenVideojuegoScalarFieldEnum | OrdenVideojuegoScalarFieldEnum[]
  }

  /**
   * Orden without action
   */
  export type OrdenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
  }


  /**
   * Model OrdenVideojuego
   */

  export type AggregateOrdenVideojuego = {
    _count: OrdenVideojuegoCountAggregateOutputType | null
    _avg: OrdenVideojuegoAvgAggregateOutputType | null
    _sum: OrdenVideojuegoSumAggregateOutputType | null
    _min: OrdenVideojuegoMinAggregateOutputType | null
    _max: OrdenVideojuegoMaxAggregateOutputType | null
  }

  export type OrdenVideojuegoAvgAggregateOutputType = {
    ordenId: number | null
    videojuegoId: number | null
    cantidad: number | null
  }

  export type OrdenVideojuegoSumAggregateOutputType = {
    ordenId: number | null
    videojuegoId: number | null
    cantidad: number | null
  }

  export type OrdenVideojuegoMinAggregateOutputType = {
    ordenId: number | null
    videojuegoId: number | null
    cantidad: number | null
    updatedAt: Date | null
  }

  export type OrdenVideojuegoMaxAggregateOutputType = {
    ordenId: number | null
    videojuegoId: number | null
    cantidad: number | null
    updatedAt: Date | null
  }

  export type OrdenVideojuegoCountAggregateOutputType = {
    ordenId: number
    videojuegoId: number
    cantidad: number
    updatedAt: number
    _all: number
  }


  export type OrdenVideojuegoAvgAggregateInputType = {
    ordenId?: true
    videojuegoId?: true
    cantidad?: true
  }

  export type OrdenVideojuegoSumAggregateInputType = {
    ordenId?: true
    videojuegoId?: true
    cantidad?: true
  }

  export type OrdenVideojuegoMinAggregateInputType = {
    ordenId?: true
    videojuegoId?: true
    cantidad?: true
    updatedAt?: true
  }

  export type OrdenVideojuegoMaxAggregateInputType = {
    ordenId?: true
    videojuegoId?: true
    cantidad?: true
    updatedAt?: true
  }

  export type OrdenVideojuegoCountAggregateInputType = {
    ordenId?: true
    videojuegoId?: true
    cantidad?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdenVideojuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenVideojuego to aggregate.
     */
    where?: OrdenVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenVideojuegos to fetch.
     */
    orderBy?: OrdenVideojuegoOrderByWithRelationInput | OrdenVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenVideojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenVideojuegos
    **/
    _count?: true | OrdenVideojuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenVideojuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenVideojuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenVideojuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenVideojuegoMaxAggregateInputType
  }

  export type GetOrdenVideojuegoAggregateType<T extends OrdenVideojuegoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenVideojuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenVideojuego[P]>
      : GetScalarType<T[P], AggregateOrdenVideojuego[P]>
  }




  export type OrdenVideojuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenVideojuegoWhereInput
    orderBy?: OrdenVideojuegoOrderByWithAggregationInput | OrdenVideojuegoOrderByWithAggregationInput[]
    by: OrdenVideojuegoScalarFieldEnum[] | OrdenVideojuegoScalarFieldEnum
    having?: OrdenVideojuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenVideojuegoCountAggregateInputType | true
    _avg?: OrdenVideojuegoAvgAggregateInputType
    _sum?: OrdenVideojuegoSumAggregateInputType
    _min?: OrdenVideojuegoMinAggregateInputType
    _max?: OrdenVideojuegoMaxAggregateInputType
  }

  export type OrdenVideojuegoGroupByOutputType = {
    ordenId: number
    videojuegoId: number
    cantidad: number
    updatedAt: Date
    _count: OrdenVideojuegoCountAggregateOutputType | null
    _avg: OrdenVideojuegoAvgAggregateOutputType | null
    _sum: OrdenVideojuegoSumAggregateOutputType | null
    _min: OrdenVideojuegoMinAggregateOutputType | null
    _max: OrdenVideojuegoMaxAggregateOutputType | null
  }

  type GetOrdenVideojuegoGroupByPayload<T extends OrdenVideojuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenVideojuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenVideojuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenVideojuegoGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenVideojuegoGroupByOutputType[P]>
        }
      >
    >


  export type OrdenVideojuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ordenId?: boolean
    videojuegoId?: boolean
    cantidad?: boolean
    updatedAt?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    videojuego?: boolean | VideojuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenVideojuego"]>



  export type OrdenVideojuegoSelectScalar = {
    ordenId?: boolean
    videojuegoId?: boolean
    cantidad?: boolean
    updatedAt?: boolean
  }

  export type OrdenVideojuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ordenId" | "videojuegoId" | "cantidad" | "updatedAt", ExtArgs["result"]["ordenVideojuego"]>
  export type OrdenVideojuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    videojuego?: boolean | VideojuegoDefaultArgs<ExtArgs>
  }

  export type $OrdenVideojuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenVideojuego"
    objects: {
      orden: Prisma.$OrdenPayload<ExtArgs>
      videojuego: Prisma.$VideojuegoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ordenId: number
      videojuegoId: number
      cantidad: number
      updatedAt: Date
    }, ExtArgs["result"]["ordenVideojuego"]>
    composites: {}
  }

  type OrdenVideojuegoGetPayload<S extends boolean | null | undefined | OrdenVideojuegoDefaultArgs> = $Result.GetResult<Prisma.$OrdenVideojuegoPayload, S>

  type OrdenVideojuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenVideojuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenVideojuegoCountAggregateInputType | true
    }

  export interface OrdenVideojuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenVideojuego'], meta: { name: 'OrdenVideojuego' } }
    /**
     * Find zero or one OrdenVideojuego that matches the filter.
     * @param {OrdenVideojuegoFindUniqueArgs} args - Arguments to find a OrdenVideojuego
     * @example
     * // Get one OrdenVideojuego
     * const ordenVideojuego = await prisma.ordenVideojuego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenVideojuegoFindUniqueArgs>(args: SelectSubset<T, OrdenVideojuegoFindUniqueArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenVideojuego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenVideojuegoFindUniqueOrThrowArgs} args - Arguments to find a OrdenVideojuego
     * @example
     * // Get one OrdenVideojuego
     * const ordenVideojuego = await prisma.ordenVideojuego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenVideojuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenVideojuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenVideojuego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoFindFirstArgs} args - Arguments to find a OrdenVideojuego
     * @example
     * // Get one OrdenVideojuego
     * const ordenVideojuego = await prisma.ordenVideojuego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenVideojuegoFindFirstArgs>(args?: SelectSubset<T, OrdenVideojuegoFindFirstArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenVideojuego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoFindFirstOrThrowArgs} args - Arguments to find a OrdenVideojuego
     * @example
     * // Get one OrdenVideojuego
     * const ordenVideojuego = await prisma.ordenVideojuego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenVideojuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenVideojuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenVideojuegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenVideojuegos
     * const ordenVideojuegos = await prisma.ordenVideojuego.findMany()
     * 
     * // Get first 10 OrdenVideojuegos
     * const ordenVideojuegos = await prisma.ordenVideojuego.findMany({ take: 10 })
     * 
     * // Only select the `ordenId`
     * const ordenVideojuegoWithOrdenIdOnly = await prisma.ordenVideojuego.findMany({ select: { ordenId: true } })
     * 
     */
    findMany<T extends OrdenVideojuegoFindManyArgs>(args?: SelectSubset<T, OrdenVideojuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenVideojuego.
     * @param {OrdenVideojuegoCreateArgs} args - Arguments to create a OrdenVideojuego.
     * @example
     * // Create one OrdenVideojuego
     * const OrdenVideojuego = await prisma.ordenVideojuego.create({
     *   data: {
     *     // ... data to create a OrdenVideojuego
     *   }
     * })
     * 
     */
    create<T extends OrdenVideojuegoCreateArgs>(args: SelectSubset<T, OrdenVideojuegoCreateArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenVideojuegos.
     * @param {OrdenVideojuegoCreateManyArgs} args - Arguments to create many OrdenVideojuegos.
     * @example
     * // Create many OrdenVideojuegos
     * const ordenVideojuego = await prisma.ordenVideojuego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenVideojuegoCreateManyArgs>(args?: SelectSubset<T, OrdenVideojuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrdenVideojuego.
     * @param {OrdenVideojuegoDeleteArgs} args - Arguments to delete one OrdenVideojuego.
     * @example
     * // Delete one OrdenVideojuego
     * const OrdenVideojuego = await prisma.ordenVideojuego.delete({
     *   where: {
     *     // ... filter to delete one OrdenVideojuego
     *   }
     * })
     * 
     */
    delete<T extends OrdenVideojuegoDeleteArgs>(args: SelectSubset<T, OrdenVideojuegoDeleteArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenVideojuego.
     * @param {OrdenVideojuegoUpdateArgs} args - Arguments to update one OrdenVideojuego.
     * @example
     * // Update one OrdenVideojuego
     * const ordenVideojuego = await prisma.ordenVideojuego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenVideojuegoUpdateArgs>(args: SelectSubset<T, OrdenVideojuegoUpdateArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenVideojuegos.
     * @param {OrdenVideojuegoDeleteManyArgs} args - Arguments to filter OrdenVideojuegos to delete.
     * @example
     * // Delete a few OrdenVideojuegos
     * const { count } = await prisma.ordenVideojuego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenVideojuegoDeleteManyArgs>(args?: SelectSubset<T, OrdenVideojuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenVideojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenVideojuegos
     * const ordenVideojuego = await prisma.ordenVideojuego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenVideojuegoUpdateManyArgs>(args: SelectSubset<T, OrdenVideojuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrdenVideojuego.
     * @param {OrdenVideojuegoUpsertArgs} args - Arguments to update or create a OrdenVideojuego.
     * @example
     * // Update or create a OrdenVideojuego
     * const ordenVideojuego = await prisma.ordenVideojuego.upsert({
     *   create: {
     *     // ... data to create a OrdenVideojuego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenVideojuego we want to update
     *   }
     * })
     */
    upsert<T extends OrdenVideojuegoUpsertArgs>(args: SelectSubset<T, OrdenVideojuegoUpsertArgs<ExtArgs>>): Prisma__OrdenVideojuegoClient<$Result.GetResult<Prisma.$OrdenVideojuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenVideojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoCountArgs} args - Arguments to filter OrdenVideojuegos to count.
     * @example
     * // Count the number of OrdenVideojuegos
     * const count = await prisma.ordenVideojuego.count({
     *   where: {
     *     // ... the filter for the OrdenVideojuegos we want to count
     *   }
     * })
    **/
    count<T extends OrdenVideojuegoCountArgs>(
      args?: Subset<T, OrdenVideojuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenVideojuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenVideojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenVideojuegoAggregateArgs>(args: Subset<T, OrdenVideojuegoAggregateArgs>): Prisma.PrismaPromise<GetOrdenVideojuegoAggregateType<T>>

    /**
     * Group by OrdenVideojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenVideojuegoGroupByArgs} args - Group by arguments.
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
      T extends OrdenVideojuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenVideojuegoGroupByArgs['orderBy'] }
        : { orderBy?: OrdenVideojuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenVideojuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenVideojuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenVideojuego model
   */
  readonly fields: OrdenVideojuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenVideojuego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenVideojuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden<T extends OrdenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenDefaultArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videojuego<T extends VideojuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideojuegoDefaultArgs<ExtArgs>>): Prisma__VideojuegoClient<$Result.GetResult<Prisma.$VideojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrdenVideojuego model
   */
  interface OrdenVideojuegoFieldRefs {
    readonly ordenId: FieldRef<"OrdenVideojuego", 'Int'>
    readonly videojuegoId: FieldRef<"OrdenVideojuego", 'Int'>
    readonly cantidad: FieldRef<"OrdenVideojuego", 'Int'>
    readonly updatedAt: FieldRef<"OrdenVideojuego", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrdenVideojuego findUnique
   */
  export type OrdenVideojuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenVideojuego to fetch.
     */
    where: OrdenVideojuegoWhereUniqueInput
  }

  /**
   * OrdenVideojuego findUniqueOrThrow
   */
  export type OrdenVideojuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenVideojuego to fetch.
     */
    where: OrdenVideojuegoWhereUniqueInput
  }

  /**
   * OrdenVideojuego findFirst
   */
  export type OrdenVideojuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenVideojuego to fetch.
     */
    where?: OrdenVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenVideojuegos to fetch.
     */
    orderBy?: OrdenVideojuegoOrderByWithRelationInput | OrdenVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenVideojuegos.
     */
    cursor?: OrdenVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenVideojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenVideojuegos.
     */
    distinct?: OrdenVideojuegoScalarFieldEnum | OrdenVideojuegoScalarFieldEnum[]
  }

  /**
   * OrdenVideojuego findFirstOrThrow
   */
  export type OrdenVideojuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenVideojuego to fetch.
     */
    where?: OrdenVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenVideojuegos to fetch.
     */
    orderBy?: OrdenVideojuegoOrderByWithRelationInput | OrdenVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenVideojuegos.
     */
    cursor?: OrdenVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenVideojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenVideojuegos.
     */
    distinct?: OrdenVideojuegoScalarFieldEnum | OrdenVideojuegoScalarFieldEnum[]
  }

  /**
   * OrdenVideojuego findMany
   */
  export type OrdenVideojuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenVideojuegos to fetch.
     */
    where?: OrdenVideojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenVideojuegos to fetch.
     */
    orderBy?: OrdenVideojuegoOrderByWithRelationInput | OrdenVideojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenVideojuegos.
     */
    cursor?: OrdenVideojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenVideojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenVideojuegos.
     */
    skip?: number
    distinct?: OrdenVideojuegoScalarFieldEnum | OrdenVideojuegoScalarFieldEnum[]
  }

  /**
   * OrdenVideojuego create
   */
  export type OrdenVideojuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenVideojuego.
     */
    data: XOR<OrdenVideojuegoCreateInput, OrdenVideojuegoUncheckedCreateInput>
  }

  /**
   * OrdenVideojuego createMany
   */
  export type OrdenVideojuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenVideojuegos.
     */
    data: OrdenVideojuegoCreateManyInput | OrdenVideojuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenVideojuego update
   */
  export type OrdenVideojuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenVideojuego.
     */
    data: XOR<OrdenVideojuegoUpdateInput, OrdenVideojuegoUncheckedUpdateInput>
    /**
     * Choose, which OrdenVideojuego to update.
     */
    where: OrdenVideojuegoWhereUniqueInput
  }

  /**
   * OrdenVideojuego updateMany
   */
  export type OrdenVideojuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenVideojuegos.
     */
    data: XOR<OrdenVideojuegoUpdateManyMutationInput, OrdenVideojuegoUncheckedUpdateManyInput>
    /**
     * Filter which OrdenVideojuegos to update
     */
    where?: OrdenVideojuegoWhereInput
    /**
     * Limit how many OrdenVideojuegos to update.
     */
    limit?: number
  }

  /**
   * OrdenVideojuego upsert
   */
  export type OrdenVideojuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenVideojuego to update in case it exists.
     */
    where: OrdenVideojuegoWhereUniqueInput
    /**
     * In case the OrdenVideojuego found by the `where` argument doesn't exist, create a new OrdenVideojuego with this data.
     */
    create: XOR<OrdenVideojuegoCreateInput, OrdenVideojuegoUncheckedCreateInput>
    /**
     * In case the OrdenVideojuego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenVideojuegoUpdateInput, OrdenVideojuegoUncheckedUpdateInput>
  }

  /**
   * OrdenVideojuego delete
   */
  export type OrdenVideojuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
    /**
     * Filter which OrdenVideojuego to delete.
     */
    where: OrdenVideojuegoWhereUniqueInput
  }

  /**
   * OrdenVideojuego deleteMany
   */
  export type OrdenVideojuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenVideojuegos to delete
     */
    where?: OrdenVideojuegoWhereInput
    /**
     * Limit how many OrdenVideojuegos to delete.
     */
    limit?: number
  }

  /**
   * OrdenVideojuego without action
   */
  export type OrdenVideojuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenVideojuego
     */
    select?: OrdenVideojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenVideojuego
     */
    omit?: OrdenVideojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenVideojuegoInclude<ExtArgs> | null
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
    email: 'email',
    nombre: 'nombre',
    role: 'role',
    password: 'password'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VideojuegoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    publicar: 'publicar',
    precio: 'precio',
    imagen: 'imagen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideojuegoScalarFieldEnum = (typeof VideojuegoScalarFieldEnum)[keyof typeof VideojuegoScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    updatedAt: 'updatedAt'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const PlataformaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    updatedAt: 'updatedAt'
  };

  export type PlataformaScalarFieldEnum = (typeof PlataformaScalarFieldEnum)[keyof typeof PlataformaScalarFieldEnum]


  export const PlataformaVideojuegoScalarFieldEnum: {
    plataformaId: 'plataformaId',
    videojuegoId: 'videojuegoId',
    anno_lanzamiento: 'anno_lanzamiento',
    updatedAt: 'updatedAt'
  };

  export type PlataformaVideojuegoScalarFieldEnum = (typeof PlataformaVideojuegoScalarFieldEnum)[keyof typeof PlataformaVideojuegoScalarFieldEnum]


  export const OrdenScalarFieldEnum: {
    id: 'id',
    fechaOrden: 'fechaOrden',
    usuarioId: 'usuarioId'
  };

  export type OrdenScalarFieldEnum = (typeof OrdenScalarFieldEnum)[keyof typeof OrdenScalarFieldEnum]


  export const OrdenVideojuegoScalarFieldEnum: {
    ordenId: 'ordenId',
    videojuegoId: 'videojuegoId',
    cantidad: 'cantidad',
    updatedAt: 'updatedAt'
  };

  export type OrdenVideojuegoScalarFieldEnum = (typeof OrdenVideojuegoScalarFieldEnum)[keyof typeof OrdenVideojuegoScalarFieldEnum]


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
    email: 'email',
    nombre: 'nombre',
    password: 'password'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const VideojuegoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type VideojuegoOrderByRelevanceFieldEnum = (typeof VideojuegoOrderByRelevanceFieldEnum)[keyof typeof VideojuegoOrderByRelevanceFieldEnum]


  export const GeneroOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type GeneroOrderByRelevanceFieldEnum = (typeof GeneroOrderByRelevanceFieldEnum)[keyof typeof GeneroOrderByRelevanceFieldEnum]


  export const PlataformaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type PlataformaOrderByRelevanceFieldEnum = (typeof PlataformaOrderByRelevanceFieldEnum)[keyof typeof PlataformaOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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
    email?: StringFilter<"Usuario"> | string
    nombre?: StringNullableFilter<"Usuario"> | string | null
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    password?: StringFilter<"Usuario"> | string
    ordenes?: OrdenListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    ordenes?: OrdenOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringNullableFilter<"Usuario"> | string | null
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    password?: StringFilter<"Usuario"> | string
    ordenes?: OrdenListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
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
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    password?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type VideojuegoWhereInput = {
    AND?: VideojuegoWhereInput | VideojuegoWhereInput[]
    OR?: VideojuegoWhereInput[]
    NOT?: VideojuegoWhereInput | VideojuegoWhereInput[]
    id?: IntFilter<"Videojuego"> | number
    nombre?: StringFilter<"Videojuego"> | string
    descripcion?: StringFilter<"Videojuego"> | string
    publicar?: BoolFilter<"Videojuego"> | boolean
    precio?: DecimalFilter<"Videojuego"> | Decimal | DecimalJsLike | number | string
    imagen?: StringFilter<"Videojuego"> | string
    createdAt?: DateTimeFilter<"Videojuego"> | Date | string
    updatedAt?: DateTimeFilter<"Videojuego"> | Date | string
    generos?: GeneroListRelationFilter
    ordenes?: OrdenVideojuegoListRelationFilter
    plataformas?: PlataformaVideojuegoListRelationFilter
  }

  export type VideojuegoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    publicar?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generos?: GeneroOrderByRelationAggregateInput
    ordenes?: OrdenVideojuegoOrderByRelationAggregateInput
    plataformas?: PlataformaVideojuegoOrderByRelationAggregateInput
    _relevance?: VideojuegoOrderByRelevanceInput
  }

  export type VideojuegoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideojuegoWhereInput | VideojuegoWhereInput[]
    OR?: VideojuegoWhereInput[]
    NOT?: VideojuegoWhereInput | VideojuegoWhereInput[]
    nombre?: StringFilter<"Videojuego"> | string
    descripcion?: StringFilter<"Videojuego"> | string
    publicar?: BoolFilter<"Videojuego"> | boolean
    precio?: DecimalFilter<"Videojuego"> | Decimal | DecimalJsLike | number | string
    imagen?: StringFilter<"Videojuego"> | string
    createdAt?: DateTimeFilter<"Videojuego"> | Date | string
    updatedAt?: DateTimeFilter<"Videojuego"> | Date | string
    generos?: GeneroListRelationFilter
    ordenes?: OrdenVideojuegoListRelationFilter
    plataformas?: PlataformaVideojuegoListRelationFilter
  }, "id">

  export type VideojuegoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    publicar?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideojuegoCountOrderByAggregateInput
    _avg?: VideojuegoAvgOrderByAggregateInput
    _max?: VideojuegoMaxOrderByAggregateInput
    _min?: VideojuegoMinOrderByAggregateInput
    _sum?: VideojuegoSumOrderByAggregateInput
  }

  export type VideojuegoScalarWhereWithAggregatesInput = {
    AND?: VideojuegoScalarWhereWithAggregatesInput | VideojuegoScalarWhereWithAggregatesInput[]
    OR?: VideojuegoScalarWhereWithAggregatesInput[]
    NOT?: VideojuegoScalarWhereWithAggregatesInput | VideojuegoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Videojuego"> | number
    nombre?: StringWithAggregatesFilter<"Videojuego"> | string
    descripcion?: StringWithAggregatesFilter<"Videojuego"> | string
    publicar?: BoolWithAggregatesFilter<"Videojuego"> | boolean
    precio?: DecimalWithAggregatesFilter<"Videojuego"> | Decimal | DecimalJsLike | number | string
    imagen?: StringWithAggregatesFilter<"Videojuego"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Videojuego"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Videojuego"> | Date | string
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id?: IntFilter<"Genero"> | number
    nombre?: StringFilter<"Genero"> | string
    updatedAt?: DateTimeFilter<"Genero"> | Date | string
    videojuegos?: VideojuegoListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
    videojuegos?: VideojuegoOrderByRelationAggregateInput
    _relevance?: GeneroOrderByRelevanceInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    nombre?: StringFilter<"Genero"> | string
    updatedAt?: DateTimeFilter<"Genero"> | Date | string
    videojuegos?: VideojuegoListRelationFilter
  }, "id">

  export type GeneroOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genero"> | number
    nombre?: StringWithAggregatesFilter<"Genero"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genero"> | Date | string
  }

  export type PlataformaWhereInput = {
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    id?: IntFilter<"Plataforma"> | number
    nombre?: StringFilter<"Plataforma"> | string
    updatedAt?: DateTimeFilter<"Plataforma"> | Date | string
    videojuegos?: PlataformaVideojuegoListRelationFilter
  }

  export type PlataformaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
    videojuegos?: PlataformaVideojuegoOrderByRelationAggregateInput
    _relevance?: PlataformaOrderByRelevanceInput
  }

  export type PlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    nombre?: StringFilter<"Plataforma"> | string
    updatedAt?: DateTimeFilter<"Plataforma"> | Date | string
    videojuegos?: PlataformaVideojuegoListRelationFilter
  }, "id">

  export type PlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
    _count?: PlataformaCountOrderByAggregateInput
    _avg?: PlataformaAvgOrderByAggregateInput
    _max?: PlataformaMaxOrderByAggregateInput
    _min?: PlataformaMinOrderByAggregateInput
    _sum?: PlataformaSumOrderByAggregateInput
  }

  export type PlataformaScalarWhereWithAggregatesInput = {
    AND?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    OR?: PlataformaScalarWhereWithAggregatesInput[]
    NOT?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plataforma"> | number
    nombre?: StringWithAggregatesFilter<"Plataforma"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plataforma"> | Date | string
  }

  export type PlataformaVideojuegoWhereInput = {
    AND?: PlataformaVideojuegoWhereInput | PlataformaVideojuegoWhereInput[]
    OR?: PlataformaVideojuegoWhereInput[]
    NOT?: PlataformaVideojuegoWhereInput | PlataformaVideojuegoWhereInput[]
    plataformaId?: IntFilter<"PlataformaVideojuego"> | number
    videojuegoId?: IntFilter<"PlataformaVideojuego"> | number
    anno_lanzamiento?: IntFilter<"PlataformaVideojuego"> | number
    updatedAt?: DateTimeFilter<"PlataformaVideojuego"> | Date | string
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    videojuego?: XOR<VideojuegoScalarRelationFilter, VideojuegoWhereInput>
  }

  export type PlataformaVideojuegoOrderByWithRelationInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
    updatedAt?: SortOrder
    plataforma?: PlataformaOrderByWithRelationInput
    videojuego?: VideojuegoOrderByWithRelationInput
  }

  export type PlataformaVideojuegoWhereUniqueInput = Prisma.AtLeast<{
    plataformaId_videojuegoId?: PlataformaVideojuegoPlataformaIdVideojuegoIdCompoundUniqueInput
    AND?: PlataformaVideojuegoWhereInput | PlataformaVideojuegoWhereInput[]
    OR?: PlataformaVideojuegoWhereInput[]
    NOT?: PlataformaVideojuegoWhereInput | PlataformaVideojuegoWhereInput[]
    plataformaId?: IntFilter<"PlataformaVideojuego"> | number
    videojuegoId?: IntFilter<"PlataformaVideojuego"> | number
    anno_lanzamiento?: IntFilter<"PlataformaVideojuego"> | number
    updatedAt?: DateTimeFilter<"PlataformaVideojuego"> | Date | string
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
    videojuego?: XOR<VideojuegoScalarRelationFilter, VideojuegoWhereInput>
  }, "plataformaId_videojuegoId">

  export type PlataformaVideojuegoOrderByWithAggregationInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
    updatedAt?: SortOrder
    _count?: PlataformaVideojuegoCountOrderByAggregateInput
    _avg?: PlataformaVideojuegoAvgOrderByAggregateInput
    _max?: PlataformaVideojuegoMaxOrderByAggregateInput
    _min?: PlataformaVideojuegoMinOrderByAggregateInput
    _sum?: PlataformaVideojuegoSumOrderByAggregateInput
  }

  export type PlataformaVideojuegoScalarWhereWithAggregatesInput = {
    AND?: PlataformaVideojuegoScalarWhereWithAggregatesInput | PlataformaVideojuegoScalarWhereWithAggregatesInput[]
    OR?: PlataformaVideojuegoScalarWhereWithAggregatesInput[]
    NOT?: PlataformaVideojuegoScalarWhereWithAggregatesInput | PlataformaVideojuegoScalarWhereWithAggregatesInput[]
    plataformaId?: IntWithAggregatesFilter<"PlataformaVideojuego"> | number
    videojuegoId?: IntWithAggregatesFilter<"PlataformaVideojuego"> | number
    anno_lanzamiento?: IntWithAggregatesFilter<"PlataformaVideojuego"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"PlataformaVideojuego"> | Date | string
  }

  export type OrdenWhereInput = {
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    id?: IntFilter<"Orden"> | number
    fechaOrden?: DateTimeFilter<"Orden"> | Date | string
    usuarioId?: IntFilter<"Orden"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    videojuegos?: OrdenVideojuegoListRelationFilter
  }

  export type OrdenOrderByWithRelationInput = {
    id?: SortOrder
    fechaOrden?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    videojuegos?: OrdenVideojuegoOrderByRelationAggregateInput
  }

  export type OrdenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    fechaOrden?: DateTimeFilter<"Orden"> | Date | string
    usuarioId?: IntFilter<"Orden"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    videojuegos?: OrdenVideojuegoListRelationFilter
  }, "id">

  export type OrdenOrderByWithAggregationInput = {
    id?: SortOrder
    fechaOrden?: SortOrder
    usuarioId?: SortOrder
    _count?: OrdenCountOrderByAggregateInput
    _avg?: OrdenAvgOrderByAggregateInput
    _max?: OrdenMaxOrderByAggregateInput
    _min?: OrdenMinOrderByAggregateInput
    _sum?: OrdenSumOrderByAggregateInput
  }

  export type OrdenScalarWhereWithAggregatesInput = {
    AND?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    OR?: OrdenScalarWhereWithAggregatesInput[]
    NOT?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orden"> | number
    fechaOrden?: DateTimeWithAggregatesFilter<"Orden"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Orden"> | number
  }

  export type OrdenVideojuegoWhereInput = {
    AND?: OrdenVideojuegoWhereInput | OrdenVideojuegoWhereInput[]
    OR?: OrdenVideojuegoWhereInput[]
    NOT?: OrdenVideojuegoWhereInput | OrdenVideojuegoWhereInput[]
    ordenId?: IntFilter<"OrdenVideojuego"> | number
    videojuegoId?: IntFilter<"OrdenVideojuego"> | number
    cantidad?: IntFilter<"OrdenVideojuego"> | number
    updatedAt?: DateTimeFilter<"OrdenVideojuego"> | Date | string
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    videojuego?: XOR<VideojuegoScalarRelationFilter, VideojuegoWhereInput>
  }

  export type OrdenVideojuegoOrderByWithRelationInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
    orden?: OrdenOrderByWithRelationInput
    videojuego?: VideojuegoOrderByWithRelationInput
  }

  export type OrdenVideojuegoWhereUniqueInput = Prisma.AtLeast<{
    ordenId_videojuegoId?: OrdenVideojuegoOrdenIdVideojuegoIdCompoundUniqueInput
    AND?: OrdenVideojuegoWhereInput | OrdenVideojuegoWhereInput[]
    OR?: OrdenVideojuegoWhereInput[]
    NOT?: OrdenVideojuegoWhereInput | OrdenVideojuegoWhereInput[]
    ordenId?: IntFilter<"OrdenVideojuego"> | number
    videojuegoId?: IntFilter<"OrdenVideojuego"> | number
    cantidad?: IntFilter<"OrdenVideojuego"> | number
    updatedAt?: DateTimeFilter<"OrdenVideojuego"> | Date | string
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    videojuego?: XOR<VideojuegoScalarRelationFilter, VideojuegoWhereInput>
  }, "ordenId_videojuegoId">

  export type OrdenVideojuegoOrderByWithAggregationInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdenVideojuegoCountOrderByAggregateInput
    _avg?: OrdenVideojuegoAvgOrderByAggregateInput
    _max?: OrdenVideojuegoMaxOrderByAggregateInput
    _min?: OrdenVideojuegoMinOrderByAggregateInput
    _sum?: OrdenVideojuegoSumOrderByAggregateInput
  }

  export type OrdenVideojuegoScalarWhereWithAggregatesInput = {
    AND?: OrdenVideojuegoScalarWhereWithAggregatesInput | OrdenVideojuegoScalarWhereWithAggregatesInput[]
    OR?: OrdenVideojuegoScalarWhereWithAggregatesInput[]
    NOT?: OrdenVideojuegoScalarWhereWithAggregatesInput | OrdenVideojuegoScalarWhereWithAggregatesInput[]
    ordenId?: IntWithAggregatesFilter<"OrdenVideojuego"> | number
    videojuegoId?: IntWithAggregatesFilter<"OrdenVideojuego"> | number
    cantidad?: IntWithAggregatesFilter<"OrdenVideojuego"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"OrdenVideojuego"> | Date | string
  }

  export type UsuarioCreateInput = {
    email: string
    nombre?: string | null
    role?: $Enums.Role
    password: string
    ordenes?: OrdenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    nombre?: string | null
    role?: $Enums.Role
    password: string
    ordenes?: OrdenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ordenes?: OrdenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    ordenes?: OrdenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    nombre?: string | null
    role?: $Enums.Role
    password: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VideojuegoCreateInput = {
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroCreateNestedManyWithoutVideojuegosInput
    ordenes?: OrdenVideojuegoCreateNestedManyWithoutVideojuegoInput
    plataformas?: PlataformaVideojuegoCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutVideojuegosInput
    ordenes?: OrdenVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput
    plataformas?: PlataformaVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUpdateManyWithoutVideojuegosNestedInput
    ordenes?: OrdenVideojuegoUpdateManyWithoutVideojuegoNestedInput
    plataformas?: PlataformaVideojuegoUpdateManyWithoutVideojuegoNestedInput
  }

  export type VideojuegoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutVideojuegosNestedInput
    ordenes?: OrdenVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput
    plataformas?: PlataformaVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput
  }

  export type VideojuegoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideojuegoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideojuegoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneroCreateInput = {
    nombre: string
    updatedAt?: Date | string
    videojuegos?: VideojuegoCreateNestedManyWithoutGenerosInput
  }

  export type GeneroUncheckedCreateInput = {
    id?: number
    nombre: string
    updatedAt?: Date | string
    videojuegos?: VideojuegoUncheckedCreateNestedManyWithoutGenerosInput
  }

  export type GeneroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuegos?: VideojuegoUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuegos?: VideojuegoUncheckedUpdateManyWithoutGenerosNestedInput
  }

  export type GeneroCreateManyInput = {
    id?: number
    nombre: string
    updatedAt?: Date | string
  }

  export type GeneroUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaCreateInput = {
    nombre: string
    updatedAt?: Date | string
    videojuegos?: PlataformaVideojuegoCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateInput = {
    id?: number
    nombre: string
    updatedAt?: Date | string
    videojuegos?: PlataformaVideojuegoUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuegos?: PlataformaVideojuegoUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuegos?: PlataformaVideojuegoUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaCreateManyInput = {
    id?: number
    nombre: string
    updatedAt?: Date | string
  }

  export type PlataformaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoCreateInput = {
    anno_lanzamiento: number
    updatedAt?: Date | string
    plataforma: PlataformaCreateNestedOneWithoutVideojuegosInput
    videojuego: VideojuegoCreateNestedOneWithoutPlataformasInput
  }

  export type PlataformaVideojuegoUncheckedCreateInput = {
    plataformaId: number
    videojuegoId: number
    anno_lanzamiento: number
    updatedAt?: Date | string
  }

  export type PlataformaVideojuegoUpdateInput = {
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plataforma?: PlataformaUpdateOneRequiredWithoutVideojuegosNestedInput
    videojuego?: VideojuegoUpdateOneRequiredWithoutPlataformasNestedInput
  }

  export type PlataformaVideojuegoUncheckedUpdateInput = {
    plataformaId?: IntFieldUpdateOperationsInput | number
    videojuegoId?: IntFieldUpdateOperationsInput | number
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoCreateManyInput = {
    plataformaId: number
    videojuegoId: number
    anno_lanzamiento: number
    updatedAt?: Date | string
  }

  export type PlataformaVideojuegoUpdateManyMutationInput = {
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoUncheckedUpdateManyInput = {
    plataformaId?: IntFieldUpdateOperationsInput | number
    videojuegoId?: IntFieldUpdateOperationsInput | number
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCreateInput = {
    fechaOrden?: Date | string
    usuario: UsuarioCreateNestedOneWithoutOrdenesInput
    videojuegos?: OrdenVideojuegoCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUncheckedCreateInput = {
    id?: number
    fechaOrden?: Date | string
    usuarioId: number
    videojuegos?: OrdenVideojuegoUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUpdateInput = {
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    videojuegos?: OrdenVideojuegoUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    videojuegos?: OrdenVideojuegoUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenCreateManyInput = {
    id?: number
    fechaOrden?: Date | string
    usuarioId: number
  }

  export type OrdenUpdateManyMutationInput = {
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdenVideojuegoCreateInput = {
    cantidad: number
    updatedAt?: Date | string
    orden: OrdenCreateNestedOneWithoutVideojuegosInput
    videojuego: VideojuegoCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenVideojuegoUncheckedCreateInput = {
    ordenId: number
    videojuegoId: number
    cantidad: number
    updatedAt?: Date | string
  }

  export type OrdenVideojuegoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orden?: OrdenUpdateOneRequiredWithoutVideojuegosNestedInput
    videojuego?: VideojuegoUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenVideojuegoUncheckedUpdateInput = {
    ordenId?: IntFieldUpdateOperationsInput | number
    videojuegoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoCreateManyInput = {
    ordenId: number
    videojuegoId: number
    cantidad: number
    updatedAt?: Date | string
  }

  export type OrdenVideojuegoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoUncheckedUpdateManyInput = {
    ordenId?: IntFieldUpdateOperationsInput | number
    videojuegoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrdenListRelationFilter = {
    every?: OrdenWhereInput
    some?: OrdenWhereInput
    none?: OrdenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrdenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    role?: SortOrder
    password?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type GeneroListRelationFilter = {
    every?: GeneroWhereInput
    some?: GeneroWhereInput
    none?: GeneroWhereInput
  }

  export type OrdenVideojuegoListRelationFilter = {
    every?: OrdenVideojuegoWhereInput
    some?: OrdenVideojuegoWhereInput
    none?: OrdenVideojuegoWhereInput
  }

  export type PlataformaVideojuegoListRelationFilter = {
    every?: PlataformaVideojuegoWhereInput
    some?: PlataformaVideojuegoWhereInput
    none?: PlataformaVideojuegoWhereInput
  }

  export type GeneroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdenVideojuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlataformaVideojuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideojuegoOrderByRelevanceInput = {
    fields: VideojuegoOrderByRelevanceFieldEnum | VideojuegoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VideojuegoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    publicar?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideojuegoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type VideojuegoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    publicar?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideojuegoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    publicar?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideojuegoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VideojuegoListRelationFilter = {
    every?: VideojuegoWhereInput
    some?: VideojuegoWhereInput
    none?: VideojuegoWhereInput
  }

  export type VideojuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneroOrderByRelevanceInput = {
    fields: GeneroOrderByRelevanceFieldEnum | GeneroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneroCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaOrderByRelevanceInput = {
    fields: PlataformaOrderByRelevanceFieldEnum | PlataformaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaScalarRelationFilter = {
    is?: PlataformaWhereInput
    isNot?: PlataformaWhereInput
  }

  export type VideojuegoScalarRelationFilter = {
    is?: VideojuegoWhereInput
    isNot?: VideojuegoWhereInput
  }

  export type PlataformaVideojuegoPlataformaIdVideojuegoIdCompoundUniqueInput = {
    plataformaId: number
    videojuegoId: number
  }

  export type PlataformaVideojuegoCountOrderByAggregateInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaVideojuegoAvgOrderByAggregateInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
  }

  export type PlataformaVideojuegoMaxOrderByAggregateInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaVideojuegoMinOrderByAggregateInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlataformaVideojuegoSumOrderByAggregateInput = {
    plataformaId?: SortOrder
    videojuegoId?: SortOrder
    anno_lanzamiento?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type OrdenCountOrderByAggregateInput = {
    id?: SortOrder
    fechaOrden?: SortOrder
    usuarioId?: SortOrder
  }

  export type OrdenAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type OrdenMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaOrden?: SortOrder
    usuarioId?: SortOrder
  }

  export type OrdenMinOrderByAggregateInput = {
    id?: SortOrder
    fechaOrden?: SortOrder
    usuarioId?: SortOrder
  }

  export type OrdenSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type OrdenScalarRelationFilter = {
    is?: OrdenWhereInput
    isNot?: OrdenWhereInput
  }

  export type OrdenVideojuegoOrdenIdVideojuegoIdCompoundUniqueInput = {
    ordenId: number
    videojuegoId: number
  }

  export type OrdenVideojuegoCountOrderByAggregateInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdenVideojuegoAvgOrderByAggregateInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
  }

  export type OrdenVideojuegoMaxOrderByAggregateInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdenVideojuegoMinOrderByAggregateInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdenVideojuegoSumOrderByAggregateInput = {
    ordenId?: SortOrder
    videojuegoId?: SortOrder
    cantidad?: SortOrder
  }

  export type OrdenCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrdenCreateWithoutUsuarioInput, OrdenUncheckedCreateWithoutUsuarioInput> | OrdenCreateWithoutUsuarioInput[] | OrdenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutUsuarioInput | OrdenCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrdenCreateManyUsuarioInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrdenCreateWithoutUsuarioInput, OrdenUncheckedCreateWithoutUsuarioInput> | OrdenCreateWithoutUsuarioInput[] | OrdenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutUsuarioInput | OrdenCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrdenCreateManyUsuarioInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type OrdenUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrdenCreateWithoutUsuarioInput, OrdenUncheckedCreateWithoutUsuarioInput> | OrdenCreateWithoutUsuarioInput[] | OrdenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutUsuarioInput | OrdenCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutUsuarioInput | OrdenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrdenCreateManyUsuarioInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutUsuarioInput | OrdenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutUsuarioInput | OrdenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdenUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrdenCreateWithoutUsuarioInput, OrdenUncheckedCreateWithoutUsuarioInput> | OrdenCreateWithoutUsuarioInput[] | OrdenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutUsuarioInput | OrdenCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutUsuarioInput | OrdenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrdenCreateManyUsuarioInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutUsuarioInput | OrdenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutUsuarioInput | OrdenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type GeneroCreateNestedManyWithoutVideojuegosInput = {
    create?: XOR<GeneroCreateWithoutVideojuegosInput, GeneroUncheckedCreateWithoutVideojuegosInput> | GeneroCreateWithoutVideojuegosInput[] | GeneroUncheckedCreateWithoutVideojuegosInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutVideojuegosInput | GeneroCreateOrConnectWithoutVideojuegosInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
  }

  export type OrdenVideojuegoCreateNestedManyWithoutVideojuegoInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutVideojuegoInput, OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput> | OrdenVideojuegoCreateWithoutVideojuegoInput[] | OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput | OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    createMany?: OrdenVideojuegoCreateManyVideojuegoInputEnvelope
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
  }

  export type PlataformaVideojuegoCreateNestedManyWithoutVideojuegoInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput> | PlataformaVideojuegoCreateWithoutVideojuegoInput[] | PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput | PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    createMany?: PlataformaVideojuegoCreateManyVideojuegoInputEnvelope
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
  }

  export type GeneroUncheckedCreateNestedManyWithoutVideojuegosInput = {
    create?: XOR<GeneroCreateWithoutVideojuegosInput, GeneroUncheckedCreateWithoutVideojuegosInput> | GeneroCreateWithoutVideojuegosInput[] | GeneroUncheckedCreateWithoutVideojuegosInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutVideojuegosInput | GeneroCreateOrConnectWithoutVideojuegosInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
  }

  export type OrdenVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutVideojuegoInput, OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput> | OrdenVideojuegoCreateWithoutVideojuegoInput[] | OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput | OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    createMany?: OrdenVideojuegoCreateManyVideojuegoInputEnvelope
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
  }

  export type PlataformaVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput> | PlataformaVideojuegoCreateWithoutVideojuegoInput[] | PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput | PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    createMany?: PlataformaVideojuegoCreateManyVideojuegoInputEnvelope
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type GeneroUpdateManyWithoutVideojuegosNestedInput = {
    create?: XOR<GeneroCreateWithoutVideojuegosInput, GeneroUncheckedCreateWithoutVideojuegosInput> | GeneroCreateWithoutVideojuegosInput[] | GeneroUncheckedCreateWithoutVideojuegosInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutVideojuegosInput | GeneroCreateOrConnectWithoutVideojuegosInput[]
    upsert?: GeneroUpsertWithWhereUniqueWithoutVideojuegosInput | GeneroUpsertWithWhereUniqueWithoutVideojuegosInput[]
    set?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    disconnect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    delete?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    update?: GeneroUpdateWithWhereUniqueWithoutVideojuegosInput | GeneroUpdateWithWhereUniqueWithoutVideojuegosInput[]
    updateMany?: GeneroUpdateManyWithWhereWithoutVideojuegosInput | GeneroUpdateManyWithWhereWithoutVideojuegosInput[]
    deleteMany?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
  }

  export type OrdenVideojuegoUpdateManyWithoutVideojuegoNestedInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutVideojuegoInput, OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput> | OrdenVideojuegoCreateWithoutVideojuegoInput[] | OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput | OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    upsert?: OrdenVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput | OrdenVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput[]
    createMany?: OrdenVideojuegoCreateManyVideojuegoInputEnvelope
    set?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    disconnect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    delete?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    update?: OrdenVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput | OrdenVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput[]
    updateMany?: OrdenVideojuegoUpdateManyWithWhereWithoutVideojuegoInput | OrdenVideojuegoUpdateManyWithWhereWithoutVideojuegoInput[]
    deleteMany?: OrdenVideojuegoScalarWhereInput | OrdenVideojuegoScalarWhereInput[]
  }

  export type PlataformaVideojuegoUpdateManyWithoutVideojuegoNestedInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput> | PlataformaVideojuegoCreateWithoutVideojuegoInput[] | PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput | PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    upsert?: PlataformaVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput | PlataformaVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput[]
    createMany?: PlataformaVideojuegoCreateManyVideojuegoInputEnvelope
    set?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    disconnect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    delete?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    update?: PlataformaVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput | PlataformaVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput[]
    updateMany?: PlataformaVideojuegoUpdateManyWithWhereWithoutVideojuegoInput | PlataformaVideojuegoUpdateManyWithWhereWithoutVideojuegoInput[]
    deleteMany?: PlataformaVideojuegoScalarWhereInput | PlataformaVideojuegoScalarWhereInput[]
  }

  export type GeneroUncheckedUpdateManyWithoutVideojuegosNestedInput = {
    create?: XOR<GeneroCreateWithoutVideojuegosInput, GeneroUncheckedCreateWithoutVideojuegosInput> | GeneroCreateWithoutVideojuegosInput[] | GeneroUncheckedCreateWithoutVideojuegosInput[]
    connectOrCreate?: GeneroCreateOrConnectWithoutVideojuegosInput | GeneroCreateOrConnectWithoutVideojuegosInput[]
    upsert?: GeneroUpsertWithWhereUniqueWithoutVideojuegosInput | GeneroUpsertWithWhereUniqueWithoutVideojuegosInput[]
    set?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    disconnect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    delete?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    connect?: GeneroWhereUniqueInput | GeneroWhereUniqueInput[]
    update?: GeneroUpdateWithWhereUniqueWithoutVideojuegosInput | GeneroUpdateWithWhereUniqueWithoutVideojuegosInput[]
    updateMany?: GeneroUpdateManyWithWhereWithoutVideojuegosInput | GeneroUpdateManyWithWhereWithoutVideojuegosInput[]
    deleteMany?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
  }

  export type OrdenVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutVideojuegoInput, OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput> | OrdenVideojuegoCreateWithoutVideojuegoInput[] | OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput | OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    upsert?: OrdenVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput | OrdenVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput[]
    createMany?: OrdenVideojuegoCreateManyVideojuegoInputEnvelope
    set?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    disconnect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    delete?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    update?: OrdenVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput | OrdenVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput[]
    updateMany?: OrdenVideojuegoUpdateManyWithWhereWithoutVideojuegoInput | OrdenVideojuegoUpdateManyWithWhereWithoutVideojuegoInput[]
    deleteMany?: OrdenVideojuegoScalarWhereInput | OrdenVideojuegoScalarWhereInput[]
  }

  export type PlataformaVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput> | PlataformaVideojuegoCreateWithoutVideojuegoInput[] | PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput | PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput[]
    upsert?: PlataformaVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput | PlataformaVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput[]
    createMany?: PlataformaVideojuegoCreateManyVideojuegoInputEnvelope
    set?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    disconnect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    delete?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    update?: PlataformaVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput | PlataformaVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput[]
    updateMany?: PlataformaVideojuegoUpdateManyWithWhereWithoutVideojuegoInput | PlataformaVideojuegoUpdateManyWithWhereWithoutVideojuegoInput[]
    deleteMany?: PlataformaVideojuegoScalarWhereInput | PlataformaVideojuegoScalarWhereInput[]
  }

  export type VideojuegoCreateNestedManyWithoutGenerosInput = {
    create?: XOR<VideojuegoCreateWithoutGenerosInput, VideojuegoUncheckedCreateWithoutGenerosInput> | VideojuegoCreateWithoutGenerosInput[] | VideojuegoUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: VideojuegoCreateOrConnectWithoutGenerosInput | VideojuegoCreateOrConnectWithoutGenerosInput[]
    connect?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
  }

  export type VideojuegoUncheckedCreateNestedManyWithoutGenerosInput = {
    create?: XOR<VideojuegoCreateWithoutGenerosInput, VideojuegoUncheckedCreateWithoutGenerosInput> | VideojuegoCreateWithoutGenerosInput[] | VideojuegoUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: VideojuegoCreateOrConnectWithoutGenerosInput | VideojuegoCreateOrConnectWithoutGenerosInput[]
    connect?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
  }

  export type VideojuegoUpdateManyWithoutGenerosNestedInput = {
    create?: XOR<VideojuegoCreateWithoutGenerosInput, VideojuegoUncheckedCreateWithoutGenerosInput> | VideojuegoCreateWithoutGenerosInput[] | VideojuegoUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: VideojuegoCreateOrConnectWithoutGenerosInput | VideojuegoCreateOrConnectWithoutGenerosInput[]
    upsert?: VideojuegoUpsertWithWhereUniqueWithoutGenerosInput | VideojuegoUpsertWithWhereUniqueWithoutGenerosInput[]
    set?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    disconnect?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    delete?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    connect?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    update?: VideojuegoUpdateWithWhereUniqueWithoutGenerosInput | VideojuegoUpdateWithWhereUniqueWithoutGenerosInput[]
    updateMany?: VideojuegoUpdateManyWithWhereWithoutGenerosInput | VideojuegoUpdateManyWithWhereWithoutGenerosInput[]
    deleteMany?: VideojuegoScalarWhereInput | VideojuegoScalarWhereInput[]
  }

  export type VideojuegoUncheckedUpdateManyWithoutGenerosNestedInput = {
    create?: XOR<VideojuegoCreateWithoutGenerosInput, VideojuegoUncheckedCreateWithoutGenerosInput> | VideojuegoCreateWithoutGenerosInput[] | VideojuegoUncheckedCreateWithoutGenerosInput[]
    connectOrCreate?: VideojuegoCreateOrConnectWithoutGenerosInput | VideojuegoCreateOrConnectWithoutGenerosInput[]
    upsert?: VideojuegoUpsertWithWhereUniqueWithoutGenerosInput | VideojuegoUpsertWithWhereUniqueWithoutGenerosInput[]
    set?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    disconnect?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    delete?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    connect?: VideojuegoWhereUniqueInput | VideojuegoWhereUniqueInput[]
    update?: VideojuegoUpdateWithWhereUniqueWithoutGenerosInput | VideojuegoUpdateWithWhereUniqueWithoutGenerosInput[]
    updateMany?: VideojuegoUpdateManyWithWhereWithoutGenerosInput | VideojuegoUpdateManyWithWhereWithoutGenerosInput[]
    deleteMany?: VideojuegoScalarWhereInput | VideojuegoScalarWhereInput[]
  }

  export type PlataformaVideojuegoCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutPlataformaInput, PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput> | PlataformaVideojuegoCreateWithoutPlataformaInput[] | PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput | PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput[]
    createMany?: PlataformaVideojuegoCreateManyPlataformaInputEnvelope
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
  }

  export type PlataformaVideojuegoUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutPlataformaInput, PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput> | PlataformaVideojuegoCreateWithoutPlataformaInput[] | PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput | PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput[]
    createMany?: PlataformaVideojuegoCreateManyPlataformaInputEnvelope
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
  }

  export type PlataformaVideojuegoUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutPlataformaInput, PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput> | PlataformaVideojuegoCreateWithoutPlataformaInput[] | PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput | PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput[]
    upsert?: PlataformaVideojuegoUpsertWithWhereUniqueWithoutPlataformaInput | PlataformaVideojuegoUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: PlataformaVideojuegoCreateManyPlataformaInputEnvelope
    set?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    disconnect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    delete?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    update?: PlataformaVideojuegoUpdateWithWhereUniqueWithoutPlataformaInput | PlataformaVideojuegoUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: PlataformaVideojuegoUpdateManyWithWhereWithoutPlataformaInput | PlataformaVideojuegoUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: PlataformaVideojuegoScalarWhereInput | PlataformaVideojuegoScalarWhereInput[]
  }

  export type PlataformaVideojuegoUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<PlataformaVideojuegoCreateWithoutPlataformaInput, PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput> | PlataformaVideojuegoCreateWithoutPlataformaInput[] | PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput | PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput[]
    upsert?: PlataformaVideojuegoUpsertWithWhereUniqueWithoutPlataformaInput | PlataformaVideojuegoUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: PlataformaVideojuegoCreateManyPlataformaInputEnvelope
    set?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    disconnect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    delete?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    connect?: PlataformaVideojuegoWhereUniqueInput | PlataformaVideojuegoWhereUniqueInput[]
    update?: PlataformaVideojuegoUpdateWithWhereUniqueWithoutPlataformaInput | PlataformaVideojuegoUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: PlataformaVideojuegoUpdateManyWithWhereWithoutPlataformaInput | PlataformaVideojuegoUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: PlataformaVideojuegoScalarWhereInput | PlataformaVideojuegoScalarWhereInput[]
  }

  export type PlataformaCreateNestedOneWithoutVideojuegosInput = {
    create?: XOR<PlataformaCreateWithoutVideojuegosInput, PlataformaUncheckedCreateWithoutVideojuegosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutVideojuegosInput
    connect?: PlataformaWhereUniqueInput
  }

  export type VideojuegoCreateNestedOneWithoutPlataformasInput = {
    create?: XOR<VideojuegoCreateWithoutPlataformasInput, VideojuegoUncheckedCreateWithoutPlataformasInput>
    connectOrCreate?: VideojuegoCreateOrConnectWithoutPlataformasInput
    connect?: VideojuegoWhereUniqueInput
  }

  export type PlataformaUpdateOneRequiredWithoutVideojuegosNestedInput = {
    create?: XOR<PlataformaCreateWithoutVideojuegosInput, PlataformaUncheckedCreateWithoutVideojuegosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutVideojuegosInput
    upsert?: PlataformaUpsertWithoutVideojuegosInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutVideojuegosInput, PlataformaUpdateWithoutVideojuegosInput>, PlataformaUncheckedUpdateWithoutVideojuegosInput>
  }

  export type VideojuegoUpdateOneRequiredWithoutPlataformasNestedInput = {
    create?: XOR<VideojuegoCreateWithoutPlataformasInput, VideojuegoUncheckedCreateWithoutPlataformasInput>
    connectOrCreate?: VideojuegoCreateOrConnectWithoutPlataformasInput
    upsert?: VideojuegoUpsertWithoutPlataformasInput
    connect?: VideojuegoWhereUniqueInput
    update?: XOR<XOR<VideojuegoUpdateToOneWithWhereWithoutPlataformasInput, VideojuegoUpdateWithoutPlataformasInput>, VideojuegoUncheckedUpdateWithoutPlataformasInput>
  }

  export type UsuarioCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type OrdenVideojuegoCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutOrdenInput, OrdenVideojuegoUncheckedCreateWithoutOrdenInput> | OrdenVideojuegoCreateWithoutOrdenInput[] | OrdenVideojuegoUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutOrdenInput | OrdenVideojuegoCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenVideojuegoCreateManyOrdenInputEnvelope
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
  }

  export type OrdenVideojuegoUncheckedCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutOrdenInput, OrdenVideojuegoUncheckedCreateWithoutOrdenInput> | OrdenVideojuegoCreateWithoutOrdenInput[] | OrdenVideojuegoUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutOrdenInput | OrdenVideojuegoCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenVideojuegoCreateManyOrdenInputEnvelope
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesInput
    upsert?: UsuarioUpsertWithoutOrdenesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOrdenesInput, UsuarioUpdateWithoutOrdenesInput>, UsuarioUncheckedUpdateWithoutOrdenesInput>
  }

  export type OrdenVideojuegoUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutOrdenInput, OrdenVideojuegoUncheckedCreateWithoutOrdenInput> | OrdenVideojuegoCreateWithoutOrdenInput[] | OrdenVideojuegoUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutOrdenInput | OrdenVideojuegoCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenVideojuegoUpsertWithWhereUniqueWithoutOrdenInput | OrdenVideojuegoUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenVideojuegoCreateManyOrdenInputEnvelope
    set?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    disconnect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    delete?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    update?: OrdenVideojuegoUpdateWithWhereUniqueWithoutOrdenInput | OrdenVideojuegoUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenVideojuegoUpdateManyWithWhereWithoutOrdenInput | OrdenVideojuegoUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenVideojuegoScalarWhereInput | OrdenVideojuegoScalarWhereInput[]
  }

  export type OrdenVideojuegoUncheckedUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenVideojuegoCreateWithoutOrdenInput, OrdenVideojuegoUncheckedCreateWithoutOrdenInput> | OrdenVideojuegoCreateWithoutOrdenInput[] | OrdenVideojuegoUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenVideojuegoCreateOrConnectWithoutOrdenInput | OrdenVideojuegoCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenVideojuegoUpsertWithWhereUniqueWithoutOrdenInput | OrdenVideojuegoUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenVideojuegoCreateManyOrdenInputEnvelope
    set?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    disconnect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    delete?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    connect?: OrdenVideojuegoWhereUniqueInput | OrdenVideojuegoWhereUniqueInput[]
    update?: OrdenVideojuegoUpdateWithWhereUniqueWithoutOrdenInput | OrdenVideojuegoUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenVideojuegoUpdateManyWithWhereWithoutOrdenInput | OrdenVideojuegoUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenVideojuegoScalarWhereInput | OrdenVideojuegoScalarWhereInput[]
  }

  export type OrdenCreateNestedOneWithoutVideojuegosInput = {
    create?: XOR<OrdenCreateWithoutVideojuegosInput, OrdenUncheckedCreateWithoutVideojuegosInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutVideojuegosInput
    connect?: OrdenWhereUniqueInput
  }

  export type VideojuegoCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<VideojuegoCreateWithoutOrdenesInput, VideojuegoUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: VideojuegoCreateOrConnectWithoutOrdenesInput
    connect?: VideojuegoWhereUniqueInput
  }

  export type OrdenUpdateOneRequiredWithoutVideojuegosNestedInput = {
    create?: XOR<OrdenCreateWithoutVideojuegosInput, OrdenUncheckedCreateWithoutVideojuegosInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutVideojuegosInput
    upsert?: OrdenUpsertWithoutVideojuegosInput
    connect?: OrdenWhereUniqueInput
    update?: XOR<XOR<OrdenUpdateToOneWithWhereWithoutVideojuegosInput, OrdenUpdateWithoutVideojuegosInput>, OrdenUncheckedUpdateWithoutVideojuegosInput>
  }

  export type VideojuegoUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<VideojuegoCreateWithoutOrdenesInput, VideojuegoUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: VideojuegoCreateOrConnectWithoutOrdenesInput
    upsert?: VideojuegoUpsertWithoutOrdenesInput
    connect?: VideojuegoWhereUniqueInput
    update?: XOR<XOR<VideojuegoUpdateToOneWithWhereWithoutOrdenesInput, VideojuegoUpdateWithoutOrdenesInput>, VideojuegoUncheckedUpdateWithoutOrdenesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type OrdenCreateWithoutUsuarioInput = {
    fechaOrden?: Date | string
    videojuegos?: OrdenVideojuegoCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fechaOrden?: Date | string
    videojuegos?: OrdenVideojuegoUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenCreateOrConnectWithoutUsuarioInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutUsuarioInput, OrdenUncheckedCreateWithoutUsuarioInput>
  }

  export type OrdenCreateManyUsuarioInputEnvelope = {
    data: OrdenCreateManyUsuarioInput | OrdenCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type OrdenUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: OrdenWhereUniqueInput
    update: XOR<OrdenUpdateWithoutUsuarioInput, OrdenUncheckedUpdateWithoutUsuarioInput>
    create: XOR<OrdenCreateWithoutUsuarioInput, OrdenUncheckedCreateWithoutUsuarioInput>
  }

  export type OrdenUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: OrdenWhereUniqueInput
    data: XOR<OrdenUpdateWithoutUsuarioInput, OrdenUncheckedUpdateWithoutUsuarioInput>
  }

  export type OrdenUpdateManyWithWhereWithoutUsuarioInput = {
    where: OrdenScalarWhereInput
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type OrdenScalarWhereInput = {
    AND?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    OR?: OrdenScalarWhereInput[]
    NOT?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    id?: IntFilter<"Orden"> | number
    fechaOrden?: DateTimeFilter<"Orden"> | Date | string
    usuarioId?: IntFilter<"Orden"> | number
  }

  export type GeneroCreateWithoutVideojuegosInput = {
    nombre: string
    updatedAt?: Date | string
  }

  export type GeneroUncheckedCreateWithoutVideojuegosInput = {
    id?: number
    nombre: string
    updatedAt?: Date | string
  }

  export type GeneroCreateOrConnectWithoutVideojuegosInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutVideojuegosInput, GeneroUncheckedCreateWithoutVideojuegosInput>
  }

  export type OrdenVideojuegoCreateWithoutVideojuegoInput = {
    cantidad: number
    updatedAt?: Date | string
    orden: OrdenCreateNestedOneWithoutVideojuegosInput
  }

  export type OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput = {
    ordenId: number
    cantidad: number
    updatedAt?: Date | string
  }

  export type OrdenVideojuegoCreateOrConnectWithoutVideojuegoInput = {
    where: OrdenVideojuegoWhereUniqueInput
    create: XOR<OrdenVideojuegoCreateWithoutVideojuegoInput, OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput>
  }

  export type OrdenVideojuegoCreateManyVideojuegoInputEnvelope = {
    data: OrdenVideojuegoCreateManyVideojuegoInput | OrdenVideojuegoCreateManyVideojuegoInput[]
    skipDuplicates?: boolean
  }

  export type PlataformaVideojuegoCreateWithoutVideojuegoInput = {
    anno_lanzamiento: number
    updatedAt?: Date | string
    plataforma: PlataformaCreateNestedOneWithoutVideojuegosInput
  }

  export type PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput = {
    plataformaId: number
    anno_lanzamiento: number
    updatedAt?: Date | string
  }

  export type PlataformaVideojuegoCreateOrConnectWithoutVideojuegoInput = {
    where: PlataformaVideojuegoWhereUniqueInput
    create: XOR<PlataformaVideojuegoCreateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput>
  }

  export type PlataformaVideojuegoCreateManyVideojuegoInputEnvelope = {
    data: PlataformaVideojuegoCreateManyVideojuegoInput | PlataformaVideojuegoCreateManyVideojuegoInput[]
    skipDuplicates?: boolean
  }

  export type GeneroUpsertWithWhereUniqueWithoutVideojuegosInput = {
    where: GeneroWhereUniqueInput
    update: XOR<GeneroUpdateWithoutVideojuegosInput, GeneroUncheckedUpdateWithoutVideojuegosInput>
    create: XOR<GeneroCreateWithoutVideojuegosInput, GeneroUncheckedCreateWithoutVideojuegosInput>
  }

  export type GeneroUpdateWithWhereUniqueWithoutVideojuegosInput = {
    where: GeneroWhereUniqueInput
    data: XOR<GeneroUpdateWithoutVideojuegosInput, GeneroUncheckedUpdateWithoutVideojuegosInput>
  }

  export type GeneroUpdateManyWithWhereWithoutVideojuegosInput = {
    where: GeneroScalarWhereInput
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyWithoutVideojuegosInput>
  }

  export type GeneroScalarWhereInput = {
    AND?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
    OR?: GeneroScalarWhereInput[]
    NOT?: GeneroScalarWhereInput | GeneroScalarWhereInput[]
    id?: IntFilter<"Genero"> | number
    nombre?: StringFilter<"Genero"> | string
    updatedAt?: DateTimeFilter<"Genero"> | Date | string
  }

  export type OrdenVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput = {
    where: OrdenVideojuegoWhereUniqueInput
    update: XOR<OrdenVideojuegoUpdateWithoutVideojuegoInput, OrdenVideojuegoUncheckedUpdateWithoutVideojuegoInput>
    create: XOR<OrdenVideojuegoCreateWithoutVideojuegoInput, OrdenVideojuegoUncheckedCreateWithoutVideojuegoInput>
  }

  export type OrdenVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput = {
    where: OrdenVideojuegoWhereUniqueInput
    data: XOR<OrdenVideojuegoUpdateWithoutVideojuegoInput, OrdenVideojuegoUncheckedUpdateWithoutVideojuegoInput>
  }

  export type OrdenVideojuegoUpdateManyWithWhereWithoutVideojuegoInput = {
    where: OrdenVideojuegoScalarWhereInput
    data: XOR<OrdenVideojuegoUpdateManyMutationInput, OrdenVideojuegoUncheckedUpdateManyWithoutVideojuegoInput>
  }

  export type OrdenVideojuegoScalarWhereInput = {
    AND?: OrdenVideojuegoScalarWhereInput | OrdenVideojuegoScalarWhereInput[]
    OR?: OrdenVideojuegoScalarWhereInput[]
    NOT?: OrdenVideojuegoScalarWhereInput | OrdenVideojuegoScalarWhereInput[]
    ordenId?: IntFilter<"OrdenVideojuego"> | number
    videojuegoId?: IntFilter<"OrdenVideojuego"> | number
    cantidad?: IntFilter<"OrdenVideojuego"> | number
    updatedAt?: DateTimeFilter<"OrdenVideojuego"> | Date | string
  }

  export type PlataformaVideojuegoUpsertWithWhereUniqueWithoutVideojuegoInput = {
    where: PlataformaVideojuegoWhereUniqueInput
    update: XOR<PlataformaVideojuegoUpdateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedUpdateWithoutVideojuegoInput>
    create: XOR<PlataformaVideojuegoCreateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedCreateWithoutVideojuegoInput>
  }

  export type PlataformaVideojuegoUpdateWithWhereUniqueWithoutVideojuegoInput = {
    where: PlataformaVideojuegoWhereUniqueInput
    data: XOR<PlataformaVideojuegoUpdateWithoutVideojuegoInput, PlataformaVideojuegoUncheckedUpdateWithoutVideojuegoInput>
  }

  export type PlataformaVideojuegoUpdateManyWithWhereWithoutVideojuegoInput = {
    where: PlataformaVideojuegoScalarWhereInput
    data: XOR<PlataformaVideojuegoUpdateManyMutationInput, PlataformaVideojuegoUncheckedUpdateManyWithoutVideojuegoInput>
  }

  export type PlataformaVideojuegoScalarWhereInput = {
    AND?: PlataformaVideojuegoScalarWhereInput | PlataformaVideojuegoScalarWhereInput[]
    OR?: PlataformaVideojuegoScalarWhereInput[]
    NOT?: PlataformaVideojuegoScalarWhereInput | PlataformaVideojuegoScalarWhereInput[]
    plataformaId?: IntFilter<"PlataformaVideojuego"> | number
    videojuegoId?: IntFilter<"PlataformaVideojuego"> | number
    anno_lanzamiento?: IntFilter<"PlataformaVideojuego"> | number
    updatedAt?: DateTimeFilter<"PlataformaVideojuego"> | Date | string
  }

  export type VideojuegoCreateWithoutGenerosInput = {
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordenes?: OrdenVideojuegoCreateNestedManyWithoutVideojuegoInput
    plataformas?: PlataformaVideojuegoCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoUncheckedCreateWithoutGenerosInput = {
    id?: number
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordenes?: OrdenVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput
    plataformas?: PlataformaVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoCreateOrConnectWithoutGenerosInput = {
    where: VideojuegoWhereUniqueInput
    create: XOR<VideojuegoCreateWithoutGenerosInput, VideojuegoUncheckedCreateWithoutGenerosInput>
  }

  export type VideojuegoUpsertWithWhereUniqueWithoutGenerosInput = {
    where: VideojuegoWhereUniqueInput
    update: XOR<VideojuegoUpdateWithoutGenerosInput, VideojuegoUncheckedUpdateWithoutGenerosInput>
    create: XOR<VideojuegoCreateWithoutGenerosInput, VideojuegoUncheckedCreateWithoutGenerosInput>
  }

  export type VideojuegoUpdateWithWhereUniqueWithoutGenerosInput = {
    where: VideojuegoWhereUniqueInput
    data: XOR<VideojuegoUpdateWithoutGenerosInput, VideojuegoUncheckedUpdateWithoutGenerosInput>
  }

  export type VideojuegoUpdateManyWithWhereWithoutGenerosInput = {
    where: VideojuegoScalarWhereInput
    data: XOR<VideojuegoUpdateManyMutationInput, VideojuegoUncheckedUpdateManyWithoutGenerosInput>
  }

  export type VideojuegoScalarWhereInput = {
    AND?: VideojuegoScalarWhereInput | VideojuegoScalarWhereInput[]
    OR?: VideojuegoScalarWhereInput[]
    NOT?: VideojuegoScalarWhereInput | VideojuegoScalarWhereInput[]
    id?: IntFilter<"Videojuego"> | number
    nombre?: StringFilter<"Videojuego"> | string
    descripcion?: StringFilter<"Videojuego"> | string
    publicar?: BoolFilter<"Videojuego"> | boolean
    precio?: DecimalFilter<"Videojuego"> | Decimal | DecimalJsLike | number | string
    imagen?: StringFilter<"Videojuego"> | string
    createdAt?: DateTimeFilter<"Videojuego"> | Date | string
    updatedAt?: DateTimeFilter<"Videojuego"> | Date | string
  }

  export type PlataformaVideojuegoCreateWithoutPlataformaInput = {
    anno_lanzamiento: number
    updatedAt?: Date | string
    videojuego: VideojuegoCreateNestedOneWithoutPlataformasInput
  }

  export type PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput = {
    videojuegoId: number
    anno_lanzamiento: number
    updatedAt?: Date | string
  }

  export type PlataformaVideojuegoCreateOrConnectWithoutPlataformaInput = {
    where: PlataformaVideojuegoWhereUniqueInput
    create: XOR<PlataformaVideojuegoCreateWithoutPlataformaInput, PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput>
  }

  export type PlataformaVideojuegoCreateManyPlataformaInputEnvelope = {
    data: PlataformaVideojuegoCreateManyPlataformaInput | PlataformaVideojuegoCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type PlataformaVideojuegoUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: PlataformaVideojuegoWhereUniqueInput
    update: XOR<PlataformaVideojuegoUpdateWithoutPlataformaInput, PlataformaVideojuegoUncheckedUpdateWithoutPlataformaInput>
    create: XOR<PlataformaVideojuegoCreateWithoutPlataformaInput, PlataformaVideojuegoUncheckedCreateWithoutPlataformaInput>
  }

  export type PlataformaVideojuegoUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: PlataformaVideojuegoWhereUniqueInput
    data: XOR<PlataformaVideojuegoUpdateWithoutPlataformaInput, PlataformaVideojuegoUncheckedUpdateWithoutPlataformaInput>
  }

  export type PlataformaVideojuegoUpdateManyWithWhereWithoutPlataformaInput = {
    where: PlataformaVideojuegoScalarWhereInput
    data: XOR<PlataformaVideojuegoUpdateManyMutationInput, PlataformaVideojuegoUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type PlataformaCreateWithoutVideojuegosInput = {
    nombre: string
    updatedAt?: Date | string
  }

  export type PlataformaUncheckedCreateWithoutVideojuegosInput = {
    id?: number
    nombre: string
    updatedAt?: Date | string
  }

  export type PlataformaCreateOrConnectWithoutVideojuegosInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutVideojuegosInput, PlataformaUncheckedCreateWithoutVideojuegosInput>
  }

  export type VideojuegoCreateWithoutPlataformasInput = {
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroCreateNestedManyWithoutVideojuegosInput
    ordenes?: OrdenVideojuegoCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoUncheckedCreateWithoutPlataformasInput = {
    id?: number
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutVideojuegosInput
    ordenes?: OrdenVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoCreateOrConnectWithoutPlataformasInput = {
    where: VideojuegoWhereUniqueInput
    create: XOR<VideojuegoCreateWithoutPlataformasInput, VideojuegoUncheckedCreateWithoutPlataformasInput>
  }

  export type PlataformaUpsertWithoutVideojuegosInput = {
    update: XOR<PlataformaUpdateWithoutVideojuegosInput, PlataformaUncheckedUpdateWithoutVideojuegosInput>
    create: XOR<PlataformaCreateWithoutVideojuegosInput, PlataformaUncheckedCreateWithoutVideojuegosInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutVideojuegosInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutVideojuegosInput, PlataformaUncheckedUpdateWithoutVideojuegosInput>
  }

  export type PlataformaUpdateWithoutVideojuegosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaUncheckedUpdateWithoutVideojuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideojuegoUpsertWithoutPlataformasInput = {
    update: XOR<VideojuegoUpdateWithoutPlataformasInput, VideojuegoUncheckedUpdateWithoutPlataformasInput>
    create: XOR<VideojuegoCreateWithoutPlataformasInput, VideojuegoUncheckedCreateWithoutPlataformasInput>
    where?: VideojuegoWhereInput
  }

  export type VideojuegoUpdateToOneWithWhereWithoutPlataformasInput = {
    where?: VideojuegoWhereInput
    data: XOR<VideojuegoUpdateWithoutPlataformasInput, VideojuegoUncheckedUpdateWithoutPlataformasInput>
  }

  export type VideojuegoUpdateWithoutPlataformasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUpdateManyWithoutVideojuegosNestedInput
    ordenes?: OrdenVideojuegoUpdateManyWithoutVideojuegoNestedInput
  }

  export type VideojuegoUncheckedUpdateWithoutPlataformasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutVideojuegosNestedInput
    ordenes?: OrdenVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput
  }

  export type UsuarioCreateWithoutOrdenesInput = {
    email: string
    nombre?: string | null
    role?: $Enums.Role
    password: string
  }

  export type UsuarioUncheckedCreateWithoutOrdenesInput = {
    id?: number
    email: string
    nombre?: string | null
    role?: $Enums.Role
    password: string
  }

  export type UsuarioCreateOrConnectWithoutOrdenesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
  }

  export type OrdenVideojuegoCreateWithoutOrdenInput = {
    cantidad: number
    updatedAt?: Date | string
    videojuego: VideojuegoCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenVideojuegoUncheckedCreateWithoutOrdenInput = {
    videojuegoId: number
    cantidad: number
    updatedAt?: Date | string
  }

  export type OrdenVideojuegoCreateOrConnectWithoutOrdenInput = {
    where: OrdenVideojuegoWhereUniqueInput
    create: XOR<OrdenVideojuegoCreateWithoutOrdenInput, OrdenVideojuegoUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenVideojuegoCreateManyOrdenInputEnvelope = {
    data: OrdenVideojuegoCreateManyOrdenInput | OrdenVideojuegoCreateManyOrdenInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutOrdenesInput = {
    update: XOR<UsuarioUpdateWithoutOrdenesInput, UsuarioUncheckedUpdateWithoutOrdenesInput>
    create: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOrdenesInput, UsuarioUncheckedUpdateWithoutOrdenesInput>
  }

  export type UsuarioUpdateWithoutOrdenesInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutOrdenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenVideojuegoUpsertWithWhereUniqueWithoutOrdenInput = {
    where: OrdenVideojuegoWhereUniqueInput
    update: XOR<OrdenVideojuegoUpdateWithoutOrdenInput, OrdenVideojuegoUncheckedUpdateWithoutOrdenInput>
    create: XOR<OrdenVideojuegoCreateWithoutOrdenInput, OrdenVideojuegoUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenVideojuegoUpdateWithWhereUniqueWithoutOrdenInput = {
    where: OrdenVideojuegoWhereUniqueInput
    data: XOR<OrdenVideojuegoUpdateWithoutOrdenInput, OrdenVideojuegoUncheckedUpdateWithoutOrdenInput>
  }

  export type OrdenVideojuegoUpdateManyWithWhereWithoutOrdenInput = {
    where: OrdenVideojuegoScalarWhereInput
    data: XOR<OrdenVideojuegoUpdateManyMutationInput, OrdenVideojuegoUncheckedUpdateManyWithoutOrdenInput>
  }

  export type OrdenCreateWithoutVideojuegosInput = {
    fechaOrden?: Date | string
    usuario: UsuarioCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenUncheckedCreateWithoutVideojuegosInput = {
    id?: number
    fechaOrden?: Date | string
    usuarioId: number
  }

  export type OrdenCreateOrConnectWithoutVideojuegosInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutVideojuegosInput, OrdenUncheckedCreateWithoutVideojuegosInput>
  }

  export type VideojuegoCreateWithoutOrdenesInput = {
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroCreateNestedManyWithoutVideojuegosInput
    plataformas?: PlataformaVideojuegoCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoUncheckedCreateWithoutOrdenesInput = {
    id?: number
    nombre: string
    descripcion: string
    publicar?: boolean
    precio: Decimal | DecimalJsLike | number | string
    imagen?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    generos?: GeneroUncheckedCreateNestedManyWithoutVideojuegosInput
    plataformas?: PlataformaVideojuegoUncheckedCreateNestedManyWithoutVideojuegoInput
  }

  export type VideojuegoCreateOrConnectWithoutOrdenesInput = {
    where: VideojuegoWhereUniqueInput
    create: XOR<VideojuegoCreateWithoutOrdenesInput, VideojuegoUncheckedCreateWithoutOrdenesInput>
  }

  export type OrdenUpsertWithoutVideojuegosInput = {
    update: XOR<OrdenUpdateWithoutVideojuegosInput, OrdenUncheckedUpdateWithoutVideojuegosInput>
    create: XOR<OrdenCreateWithoutVideojuegosInput, OrdenUncheckedCreateWithoutVideojuegosInput>
    where?: OrdenWhereInput
  }

  export type OrdenUpdateToOneWithWhereWithoutVideojuegosInput = {
    where?: OrdenWhereInput
    data: XOR<OrdenUpdateWithoutVideojuegosInput, OrdenUncheckedUpdateWithoutVideojuegosInput>
  }

  export type OrdenUpdateWithoutVideojuegosInput = {
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenUncheckedUpdateWithoutVideojuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type VideojuegoUpsertWithoutOrdenesInput = {
    update: XOR<VideojuegoUpdateWithoutOrdenesInput, VideojuegoUncheckedUpdateWithoutOrdenesInput>
    create: XOR<VideojuegoCreateWithoutOrdenesInput, VideojuegoUncheckedCreateWithoutOrdenesInput>
    where?: VideojuegoWhereInput
  }

  export type VideojuegoUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: VideojuegoWhereInput
    data: XOR<VideojuegoUpdateWithoutOrdenesInput, VideojuegoUncheckedUpdateWithoutOrdenesInput>
  }

  export type VideojuegoUpdateWithoutOrdenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUpdateManyWithoutVideojuegosNestedInput
    plataformas?: PlataformaVideojuegoUpdateManyWithoutVideojuegoNestedInput
  }

  export type VideojuegoUncheckedUpdateWithoutOrdenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generos?: GeneroUncheckedUpdateManyWithoutVideojuegosNestedInput
    plataformas?: PlataformaVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput
  }

  export type OrdenCreateManyUsuarioInput = {
    id?: number
    fechaOrden?: Date | string
  }

  export type OrdenUpdateWithoutUsuarioInput = {
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuegos?: OrdenVideojuegoUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuegos?: OrdenVideojuegoUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaOrden?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoCreateManyVideojuegoInput = {
    ordenId: number
    cantidad: number
    updatedAt?: Date | string
  }

  export type PlataformaVideojuegoCreateManyVideojuegoInput = {
    plataformaId: number
    anno_lanzamiento: number
    updatedAt?: Date | string
  }

  export type GeneroUpdateWithoutVideojuegosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneroUncheckedUpdateWithoutVideojuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneroUncheckedUpdateManyWithoutVideojuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoUpdateWithoutVideojuegoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orden?: OrdenUpdateOneRequiredWithoutVideojuegosNestedInput
  }

  export type OrdenVideojuegoUncheckedUpdateWithoutVideojuegoInput = {
    ordenId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoUncheckedUpdateManyWithoutVideojuegoInput = {
    ordenId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoUpdateWithoutVideojuegoInput = {
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plataforma?: PlataformaUpdateOneRequiredWithoutVideojuegosNestedInput
  }

  export type PlataformaVideojuegoUncheckedUpdateWithoutVideojuegoInput = {
    plataformaId?: IntFieldUpdateOperationsInput | number
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoUncheckedUpdateManyWithoutVideojuegoInput = {
    plataformaId?: IntFieldUpdateOperationsInput | number
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideojuegoUpdateWithoutGenerosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordenes?: OrdenVideojuegoUpdateManyWithoutVideojuegoNestedInput
    plataformas?: PlataformaVideojuegoUpdateManyWithoutVideojuegoNestedInput
  }

  export type VideojuegoUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordenes?: OrdenVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput
    plataformas?: PlataformaVideojuegoUncheckedUpdateManyWithoutVideojuegoNestedInput
  }

  export type VideojuegoUncheckedUpdateManyWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    publicar?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoCreateManyPlataformaInput = {
    videojuegoId: number
    anno_lanzamiento: number
    updatedAt?: Date | string
  }

  export type PlataformaVideojuegoUpdateWithoutPlataformaInput = {
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuego?: VideojuegoUpdateOneRequiredWithoutPlataformasNestedInput
  }

  export type PlataformaVideojuegoUncheckedUpdateWithoutPlataformaInput = {
    videojuegoId?: IntFieldUpdateOperationsInput | number
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlataformaVideojuegoUncheckedUpdateManyWithoutPlataformaInput = {
    videojuegoId?: IntFieldUpdateOperationsInput | number
    anno_lanzamiento?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoCreateManyOrdenInput = {
    videojuegoId: number
    cantidad: number
    updatedAt?: Date | string
  }

  export type OrdenVideojuegoUpdateWithoutOrdenInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videojuego?: VideojuegoUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenVideojuegoUncheckedUpdateWithoutOrdenInput = {
    videojuegoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenVideojuegoUncheckedUpdateManyWithoutOrdenInput = {
    videojuegoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
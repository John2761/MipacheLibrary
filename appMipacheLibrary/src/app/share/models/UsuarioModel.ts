import { PedidoModel } from "./PedidoModel";
import { RoleModel } from "./RolModel";

export interface UsuarioModel {
    id: number;
    email: string;
    nombre?: string;
    role: RoleModel;
    password: string;
    ordenes: PedidoModel[];
  }
import { PedidoModel } from "./PedidoModel";
import { RoleModel } from "./EnumModel";

export interface UsuarioModel {
    id: number;
    email: string;
    nombre?: string;
    role: RoleModel;
    password: string;
    ordenes: PedidoModel[];
  }
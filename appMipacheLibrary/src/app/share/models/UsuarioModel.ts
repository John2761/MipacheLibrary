import { PedidoModel } from "./PedidoModel";
import { RoleModel } from "./EnumModel";

export interface UsuarioModel {
    id: number;
    correo: string;
    nombre?: string;
    role: RoleModel;
    password: string;
    ordenes: PedidoModel[];
  }
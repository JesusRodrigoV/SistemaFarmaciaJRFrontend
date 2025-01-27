import { Routes } from "@angular/router";
import { InventarioComponent } from "./src/inventario";
import { ClientesComponent } from "./src/gestion/clientes";

export const routes: Routes = [
	{
		path: "gestion",
		children: [
			{ path: "inventario", component: InventarioComponent },
			{ path: "cliente", component: ClientesComponent },
		],
	},
];

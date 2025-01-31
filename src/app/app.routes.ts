import { Routes } from "@angular/router";
import { InventarioComponent } from "./src/inventario";
import { ClientesComponent } from "./src/gestion/clientes";
import { BienvenidaComponent } from "./src/bienvenida";

export const routes: Routes = [
	{ path: "", component: BienvenidaComponent },
	{
		path: "gestion",
		children: [
			{ path: "inventario", component: InventarioComponent },
			{ path: "cliente", component: ClientesComponent },
		],
	},
];

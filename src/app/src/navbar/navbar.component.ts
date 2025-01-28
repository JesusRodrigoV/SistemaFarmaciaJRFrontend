import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Option } from "../models";
import { RouterLink } from "@angular/router";
import { NavbarElementComponent } from "./navbar-element";

@Component({
	selector: "app-navbar",
	imports: [RouterLink, NavbarElementComponent],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	options: Array<Option> = [
		{
			name: "Inventario",
			route: "/gestion/inventario",
			icon: "bx-clipboard",
		},
		{
			name: "Gestion Clientes",
			route: "/gestion/cliente",
			icon: "bxs-user-detail",
		},
		{
			name: "Gestion Categoria",
			route: "/gestion/categoria",
			icon: "bx-purchase-tag",
		},
		{
			name: "Gestion Laboratorio",
			route: "/gestion/laboratorio",
			icon: "bx-test-tube",
		},
		{
			name: "Gestion de Ventas",
			route: "/gestion/venta",
			icon: "bx-cart-alt",
		},
		{
			name: "Reportes",
			route: "/gestion/reporte",
			icon: "bxs-bar-chart-alt-2",
		},
		{
			name: "Gestion Usuario",
			route: "/gestion/usuario",
			icon: "bxs-user-plus",
		},
	];
}

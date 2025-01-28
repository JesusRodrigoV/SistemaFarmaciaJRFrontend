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
			route: "/gestion/clientes",
			icon: " bxs-user-detail",
		},
		{
			name: "Gestion Laboratorio",
			route: "",
			icon: "",
		},
	];
}

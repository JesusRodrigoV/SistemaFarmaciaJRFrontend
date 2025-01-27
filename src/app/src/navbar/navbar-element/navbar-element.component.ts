import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Option } from "@app/src/models";

@Component({
	selector: "app-navbar-element",
	imports: [RouterLink],
	templateUrl: "./navbar-element.component.html",
	styleUrl: "./navbar-element.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarElementComponent {
	@Input({ alias: "datos" }) opcion: Option = {
		name: "",
		route: "",
		icon: "",
	};

	get iconClasses(): string {
		return `bx ${this.opcion.icon}`;
	}
}

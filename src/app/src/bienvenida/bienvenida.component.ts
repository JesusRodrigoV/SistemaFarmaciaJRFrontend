import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-bienvenida",
	imports: [RouterLink],
	templateUrl: "./bienvenida.component.html",
	styleUrl: "./bienvenida.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BienvenidaComponent {}

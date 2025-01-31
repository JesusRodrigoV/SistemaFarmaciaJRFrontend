import { Component, Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./src/navbar";
import { FooterComponent } from "./src/footer";
import { HeaderComponent } from "./src/header";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, NavbarComponent, FooterComponent, HeaderComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "FarmaciaFrontend";
}

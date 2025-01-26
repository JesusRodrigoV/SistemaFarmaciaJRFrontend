import { Component, Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./src/navbar";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, NavbarComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "FarmaciaFrontend";
	isDarkTheme = false;

	constructor(private renderer: Renderer2) {}

	toggleTheme() {
		const currentTheme = this.isDarkTheme ? "theme-dark" : "theme-light";
		const newTheme = this.isDarkTheme ? "theme-light" : "theme-dark";

		this.renderer.removeClass(document.body, currentTheme);
		this.renderer.addClass(document.body, newTheme);

		this.isDarkTheme = !this.isDarkTheme;
	}
}

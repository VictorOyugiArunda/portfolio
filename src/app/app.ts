import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { Hero } from "./sections/hero/hero";
import { About } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Contact } from "./sections/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}

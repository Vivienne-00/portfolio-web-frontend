import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactComponent} from "./contact/contact.component";
import {SkillsComponent} from "./skills/skills.component";
import {EducationTimelineComponent} from "./education-timeline/education-timeline.component";
import {ExperiencesTimelineComponent} from "./experiences-timeline/experiences-timeline.component";
import {AboutMeComponent} from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent, ContactComponent, SkillsComponent, EducationTimelineComponent, ExperiencesTimelineComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-web-frontend';
}

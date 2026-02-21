import { Component } from '@angular/core';
import { ProjectCard } from "../../shared/project-card/project-card";

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects = [
  {
    title: 'Quiz App',
    description:
      'I engineered a high-performance mobile application designed to gamify learning through an interactive quiz interface. The application is built with a Mobile-First Interface , ensuring seamless navigation and fast response times even on standard mobile networks',
    tech: ['Java', 'Android', 'SQLite', 'WebSocket'],
    github: 'https://github.com/ArundaVictor/QuizApp'
  },
  {
  title: 'Twende',
  description:
    'A location-aware Android application that connects users to live events happening around them. Users search any location and instantly discover curated events at that spot, powered by the EventBrite API. Built with OkHttp for efficient network calls and Firebase for real-time data management, Twende bridges the gap between people and experiences in their city.',
  tech: ['Java', 'Android', 'Firebase', 'OkHttp', 'RESTful API'],
  github: 'https://github.com/ArundaVictor/twende'
},
{
  title: 'Hair Salon',
  description:
    'A full-stack appointment management platform built for hair stylists to streamline their day-to-day client bookings. Stylists can add clients, assign them to specific stylists, and manage appointments — all through a clean, intuitive interface. Built with Spark, a lightweight Java web framework, and backed by PostgreSQL for reliable, structured data management.',
  tech: ['Java', 'Spark', 'PostgreSQL', 'HTML5', 'CSS'],
  github: 'https://github.com/ArundaVictor/salon'
},
];

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatter-box';

  constructor(private router: Router) { }
  
  goToChat() {
    this.router.navigate(['chat']);
  }

  goToHome() {
    this.router.navigate(['']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import Components ของโปรเจกต์
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,        // ต้อง import เพื่อใช้ <router-outlet> และ [routerLink]
    SidebarComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
}














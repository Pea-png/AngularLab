import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mt-20">
      <h1 class="text-4xl font-bold">404</h1>
      <p>Page not found</p>
    </div>
  `,
})
export class NotFoundComponent {}


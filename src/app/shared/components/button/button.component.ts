import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true, // ✅ ต้องมีบรรทัดนี้
  imports: [CommonModule],
  template: `
    <button
      [ngStyle]="{ 'background-color': color, 'color': textColor }"
      class="px-4 py-2 rounded-md text-sm font-medium transition duration-200"
      [ngClass]="hoverClass"
    >
      {{ label }}
    </button>
  `
})
export class ButtonComponent {
  @Input() label = '';
  @Input() color = '#4E54A3';
  @Input() textColor = '#efebebff';
  @Input() hover = '';

  get hoverClass() {
    return this.hover ? `hover:[background-color:${this.hover}]` : 'hover:opacity-50';
  }
}


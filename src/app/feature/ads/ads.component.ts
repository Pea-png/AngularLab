import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {}





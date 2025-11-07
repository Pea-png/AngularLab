import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/components/table/table.component';
import { FormatDatePipe } from '../../shared/pipes/format-date.pipe';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    ReactiveFormsModule,
    FormatDatePipe
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  // 🧾 ข้อมูล Order
  orders = [
    {
      id: 1,
      customer: 'Pea',
      phone: '064-792-2287',
      product: 'เสื้อยืด Oversized ลายมินิมอล',
      delivery: 'THAIPOST',
      status: 'delivered',
      total: 334,
      payment: 'paid',
      date: '15/10/2025'
    }
  ];

  // 🟣 Dropdown & Date Control
  channelControl = new FormControl('', Validators.required);
  dateControl = new FormControl({ value: '', disabled: true }, Validators.required);

  isDropdownOpen = false;
  selectedOption = 'ช่องทางที่จะแสดง';

  constructor(private eRef: ElementRef) {}

  // 🧩 toggle dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // ✅ เมื่อเลือก dropdown แล้วเปิด date picker ได้
  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.channelControl.setValue(option);
    this.dateControl.enable(); // เปิด input date หลังเลือก dropdown แล้ว
  }

  // ❌ ปิด dropdown เมื่อคลิกนอกพื้นที่
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}




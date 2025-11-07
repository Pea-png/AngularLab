import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  form = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    position: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    note: new FormControl('', [Validators.maxLength(200)]),
  });

 onReset() {
  this.form.reset(); // รีเซ็ตค่าทั้งหมดในฟอร์ม
}


  onSubmit() {
    if (this.form.invalid) {
      // ถ้าไม่ครบ -> mark ทุกช่องให้ touched เพื่อแสดงคำเตือน
      this.form.markAllAsTouched();
      alert('กรุณากรอกข้อมูลให้ครบถ้วนก่อนบันทึกค่ะ ✋');
      return;
    }

    alert('บันทึกข้อมูลเรียบร้อย ✅');
    console.log(this.form.value);
  }
}






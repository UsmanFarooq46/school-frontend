import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.scss']
})
export class CreateWalletComponent {
  formGroup: any;
  isMatched: boolean = true;
  innerHeight: number = window.innerHeight;

  constructor(private fb: FormBuilder,private router:Router) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required]
    })
  }

  get form() {
    return this.formGroup.controls;
  }

  submit() {
    console.log("value: ", this.formGroup.value);
    this.router.navigateByUrl('/recovery-phase')
  }
}

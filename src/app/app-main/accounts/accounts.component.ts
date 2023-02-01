import { ToasterService } from './../../shared-services/toaster.service';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal-config';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  @ViewChild('successModalContent') successModalContent!: ElementRef;
  loginForm: any;
  loading: boolean = false;
  isMatched: boolean = true;
  innerHeight: number = 600;
  constructor(
    // private snackBar: MatSnackBar,
    private toaster: ToasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AccountService,
    private ngModal: NgbModal
  ) {
    // super();
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.initForm();
    this.innerHeight = window.innerHeight - 20;
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    // this.loading = true;
    this.service.Login(this.loginForm.value).subscribe(
      (resp) => {
        this.isMatched = true;
        this.localStorageSet(resp);
      },
      (err) => {
        console.log('error L', err);
        this.toaster.openSnackBar(err.error.message || 'Connnection Error');
        this.isMatched = false;
      }
    );
  }

  localStorageSet(respData: any) {
    localStorage.setItem('token', respData.token);
    localStorage.setItem('user', JSON.stringify(respData.userData));
    if (respData.userData.role == 'admin') {
      this.router.navigate(['/admin']);
    } else if (respData.userData.role == 'teacher') {
      this.router.navigate(['/teacher']);
    } else if (respData.userData.role == 'student') {
      this.router.navigate(['/student']);
    }
  }

  OpenForgotPasswordPopup() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
    };
    this.ngModal.open(this.successModalContent, ngbModalOptions);
  }
}

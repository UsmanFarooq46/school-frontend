import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  createWallet: boolean = false;

  isImportWalletClicked(event: boolean) {
    console.log("isImportWalletClicked: ", event);
    if (event == false) this.createWallet = true;
    else this.createWallet = false;
  }
}

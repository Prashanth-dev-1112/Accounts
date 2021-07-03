import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  accounts: any = [];
  totalBalance: number = 0;
  maxLimit: number = 500;
  amount: number = 0;
  obj: object = {};
  balanceAmount: number = 0;

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    // Fetching the data from API.
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
      for (var i = 0; i < this.accounts.length; i++) {
        this.totalBalance += Number(this.accounts[i].balance);
      }
    })
  }

  // Fetching the account details.
  calculateWithdrawl = ($event: MouseEvent) => {
    this.obj = $event as object;
    this.balanceAmount = Number(this.obj["balance"]);
  }
  // Performing withdrawl functionality.
  withdrawlAmount(value: number) {
    this.amount = value;
    if (this.obj["account_type"] == "savings") {
      // Checking the balance amount before withdrawl.
      this.balanceAmount -= this.amount;
      if (this.balanceAmount <= 0) {
        alert("Not enough balance to withdrawl");
      }
      else {
        // Calculating total balance amount after withdrawl.
        this.totalBalance -= this.amount;
        // Updating accounts manually
        for (var i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i].account_number == Number(this.obj["account_number"])) {
            this.accounts[i].balance = this.balanceAmount;
          }
        }
        alert("Success!");
        //Here we call the service to update the data in the server.
      }

    }
    if (this.obj["account_type"] == "cheque") {
      //checking the withdrawl overdraft limit.
      if (this.amount > 500) {
          alert("Overdraft Max Limit allowed is R500.00");
        }
      else {
        // Calculating total balance amount after withdrawl.
        this.totalBalance -= this.amount;
        // Updating accounts manually
        for (var i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i].account_number == Number(this.obj["account_number"])) {
            this.accounts[i].balance = this.balanceAmount - this.amount;
          }
        }
        alert("Success!");
        //Here we call the service to update the data in the server.
      }
    }
    
  }

}


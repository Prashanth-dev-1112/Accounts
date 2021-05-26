import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  accounts: any = [];
  totalBalance: number = 0;
  maxLimit: number = 500;

  constructor(private accountService:AccountsService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
      for(var i=0; i<this.accounts.length; i++) {
        this.totalBalance += Number(this.accounts[i].balance);
      }
    })
  }
  // Calling getAccounts service.
  setAccounts = () => {
    this.accountService.getAccounts().subscribe(data => this.accounts = data);
  }
  
      //Checking the calculations on withdrawl amount on button click.
  withdrawlAmount = ($event: MouseEvent) => {
    var obj = $event as object;
    var balanceAmount = Number(obj["balance"]);
    if(obj["account_type"]  == "savings") {
      //checking the balance amount negative or positive in savings account and the calculating total balance amount after withdrawl.
      if(balanceAmount <= 0) {
        alert("No Balance to withdrawl");
      }
      else {
        this.totalBalance -= balanceAmount;
        console.log(balanceAmount);
        alert("Success!");
        //Here we call the service to update the data in the server.
      }
      
    } 
    if(obj["account_type"]  == "cheque") {
      //checking the withdrawl overdraft limit.
      if(balanceAmount > this.maxLimit || balanceAmount < -this.maxLimit) {
        alert("Overdraft Max Limit allowed is R500.00");
      }
      else {
        //checking the balance amount negative or positive in credit account and the calculating total balance amount after withdrawl.
        if(balanceAmount <= 0) {
          this.totalBalance += balanceAmount;
        }
        else {
          this.totalBalance -= balanceAmount;
        }
        alert("Success!");
        //Here we call the service to update the data in the server.
      }
    }
    this.setAccounts();
  }


}

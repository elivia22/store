import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  template: '<ejs-datetimepicker></ejs-datetimepicker>',
  styleUrls: ['./add-order.component.css'],
  // styleUrls: ['../styles.css'],
})
export class AddOrderComponent {


  constructor(private orderService: OrderService, private router: Router){}

  data: any
  stocks: any 
  msg: any
  order_created_by: any
  order_balance: any

  ngOnInit(): void {

    // this.orderService.getOrders().subscribe(data=>{
    //   this.stocks = data;
    //   // console.log(this.stocks);
    // })

    this.orderService.getUserProfile().subscribe(data=>{
      this.msg = data;
      console.log(this.msg['username']);
      this.order_created_by = this.msg['username'];
    })
;
  }

  onSelect(e: any){
    console.log(e.target.value)//you will get the id  
    // this.selected =e //if you want to bind it to your model
  }  

  setBalance(e: any){
    console.log(e.target.value)//you will get the id  
    this.order_balance = e.target.value;
  }


  form = new FormGroup ({
    order_name: new FormControl('', Validators.required),
    order_price: new FormControl('', Validators.required),
    order_unit: new FormControl('', Validators.required),
    order_balance: new FormControl('', Validators.required),
    order_description: new FormControl('', Validators.required),
    order_created_date: new FormControl('', Validators.required),
    order_created_by: new FormControl('', Validators.required),
  })


  addOrder(){
    this.data = this.form.value
    // console.log(this.data)
    this.orderService.addOrder(this.data).subscribe(data=>{
      this.router.navigate(['/order/view']) //to redirect to homepage
    })
  }

}

import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';;

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent {

 
  constructor(private orderService: OrderService, private route:ActivatedRoute, private router: Router){}

  data: any
  order: any 

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.orderService.getOrderByID(id).subscribe(data=>{
      this.order = data
      console.log(data)
    })
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

  submit(){
    this.data = this.form.value

    this.order.order_name =  this.data.order_name
    this.order.order_price = this.data.order_price
    this.order.order_unit = this.data.order_unit
    this.order.order_balance = this.data.order_balance
    this.order.order_description = this.data.order_description
    this.order.order_created_date = this.data.order_created_date
    this.order.order_created_by = this.data.order_created_by
    console.log(this.data)

    this.orderService.updateOrder(this.order?.id, this.order).subscribe(data=>{
      console.log(data)
    })

    this.router.navigate(['/']) //to redirect to homepage
  }

}



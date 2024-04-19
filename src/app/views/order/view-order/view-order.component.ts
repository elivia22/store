import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})

export class ViewOrderComponent {
   
  orders: any | undefined

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data=>{
      this.orders = data
      console.log(data)
    })
  }

  deleteOrder(id: number){
    this.orderService.deleteOrderByID(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit()
    })
  }


  name = 'kabigumila';
  handleClick(){
    alert('im working');
  }
  myname: string ='';
  // handleInput(event: any){
  //   // console.log(event);
  //   this.myname = event.target.value;
  //   console.log(this.myname);
  // }
}

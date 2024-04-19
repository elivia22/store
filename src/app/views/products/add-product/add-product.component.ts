import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  template: '<ejs-datetimepicker></ejs-datetimepicker>',
  styleUrls: ['./add-product.component.css'],
  // styleUrls: ['../styles.css'],
})
export class AddProductComponent {


  constructor(private productService: ProductService, private router: Router){}

  data: any
  stocks: any 
  msg: any
  product_created_by: any
  product_balance: any

  ngOnInit(): void {

    // this.productService.getProducts().subscribe(data=>{
    //   this.stocks = data;
    //   // console.log(this.stocks);
    // })

    this.productService.getUserProfile().subscribe(data=>{
      this.msg = data;
      console.log(this.msg['username']);
      this.product_created_by = this.msg['username'];
    })
;
  }

  onSelect(e: any){
    console.log(e.target.value)//you will get the id  
    // this.selected =e //if you want to bind it to your model
  }  

  setBalance(e: any){
    console.log(e.target.value)//you will get the id  
    this.product_balance = e.target.value;
  }


  form = new FormGroup ({
    product_name: new FormControl('', Validators.required),
    product_price: new FormControl('', Validators.required),
    product_unit: new FormControl('', Validators.required),
    product_balance: new FormControl('', Validators.required),
    product_description: new FormControl('', Validators.required),
    product_created_date: new FormControl('', Validators.required),
    product_created_by: new FormControl('', Validators.required),
  })


  addProduct(){
    this.data = this.form.value
    // console.log(this.data)
    this.productService.addProduct(this.data).subscribe(data=>{
      this.router.navigate(['/products/view']) //to redirect to homepage
    })
  }

}

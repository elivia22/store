import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';;

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

 
  constructor(private productService: ProductService, private route:ActivatedRoute, private router: Router){}

  data: any
  product: any 

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.productService.getProductByID(id).subscribe(data=>{
      this.product = data
      console.log(data)
    })
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

  submit(){
    this.data = this.form.value

    this.product.product_name =  this.data.product_name
    this.product.product_price = this.data.product_price
    this.product.product_unit = this.data.product_unit
    this.product.product_balance = this.data.product_balance
    this.product.product_description = this.data.product_description
    this.product.product_created_date = this.data.product_created_date
    this.product.product_created_by = this.data.product_created_by
    console.log(this.data)

    this.productService.updateProduct(this.product?.id, this.product).subscribe(data=>{
      console.log(data)
    })

    this.router.navigate(['/']) //to redirect to homepage
  }

}



import { Component } from '@angular/core';
import { ProductService } from '../product.service';
// import Product from 'src/app/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent {
   
  products: any | undefined

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data
      console.log(data)
    })
  }

  deleteProduct(id: number){
    this.productService.deleteProductByID(id).subscribe(data=>{
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

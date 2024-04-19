import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ProductService } from '../../products/product.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // form: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private productService: ProductService,
     private router: Router
    ) { }
  data: any

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   username:'',
    //   password:''
    // });
  }
  
  form = new FormGroup ({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  submit(): void{

    this.data = this.form.value
    // console.log(this.form.getRawValue);
    console.log(this.data);
    // this.data = this.form.value
    this.productService.login(this.data).subscribe(data=>{
      this.router.navigate(['/products/view']) //to redirect to homepage
    })
  }
}

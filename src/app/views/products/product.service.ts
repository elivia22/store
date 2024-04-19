import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './Product';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = "http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      // 'username': "test",
      // 'password':'secret',
      'Authorization': "token 1ec4486fc778ac215671cf375094cfe0288d6731"
    })
  }
  
  // getProfile(){
  //   return this.http.get(`${this.url}user/profile/`);
  // }

  login(cred: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}user/login/`, cred);
  }

  getUserProfile(): Observable<Product[]>{
    return this.http.get<Product[]>(
      `${this.url}user/profile/`, 
      this.httpOptions
      );
  }


getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(
    `${this.url}product/all/`, 
    this.httpOptions
  ); 
}
  
  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(
      `${this.url}product/create/`,
      product, 
      this.httpOptions
      );
  }

  getProductByID(id: number): Observable<Product>{
    return this.http.get<Product>(
      `${this.url}product/id/${id}`,
      this.httpOptions
    );
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(
      `${this.url}product/id/${id}`,
      product,
      this.httpOptions
    );
  }

  deleteProductByID(id: number): Observable<Product>{
    return this.http.delete<Product>(
      `${this.url}product/id/${id}`,
      this.httpOptions
    );
  }

  // login(username: string, password: string): Observable<Product>{
  //   return this.http.get<Product>(`${this.url}login/${id}`);
  // }
}


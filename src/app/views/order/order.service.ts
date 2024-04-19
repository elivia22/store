import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Order from './Order';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url:string = "http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'username': "test",
      'password':'secret',
      'Authorization': "token 1ec4486fc778ac215671cf375094cfe0288d6731"
    })
  }
  
  // getProfile(){
  //   return this.http.get(`${this.url}user/profile/`);
  // }

  login(cred: Order): Observable<Order>{
    return this.http.post<Order>(`${this.url}user/login/`, cred);
  }

  getUserProfile(): Observable<Order[]>{
    return this.http.get<Order[]>(
      `${this.url}user/profile/`, 
      this.httpOptions
      );
  }


getOrders(): Observable<Order[]>{
  return this.http.get<Order[]>(
    `${this.url}order/`, 
    this.httpOptions
  ); 
}
  
  addOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(
      `${this.url}order/create/`,
      order, 
      this.httpOptions
      );
  }

  getOrderByID(id: number): Observable<Order>{
    return this.http.get<Order>(
      `${this.url}order/id/${id}`,
      this.httpOptions
    );
  }

  updateOrder(id: number, order: Order): Observable<Order>{
    return this.http.put<Order>(
      `${this.url}order/id/${id}`,
      order,
      this.httpOptions
    );
  }

  deleteOrderByID(id: number): Observable<Order>{
    return this.http.delete<Order>(
      `${this.url}order/id/${id}`,
      this.httpOptions
    );
  }

  // login(username: string, password: string): Observable<Order>{
  //   return this.http.get<Order>(`${this.url}login/${id}`);
  // }
}


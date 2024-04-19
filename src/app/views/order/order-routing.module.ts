import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateOrderComponent } from './update-order/update-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Order'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'update/:id',
        component: UpdateOrderComponent,
        data: {
          title: 'update'
        }
      },
      {
        path: 'view',
        component: ViewOrderComponent,
        data: {
          title: 'view'
        }
      },
      {
        path: 'add',
        component: AddOrderComponent,
        data: {
          title: 'add'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}

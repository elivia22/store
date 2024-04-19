import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Products'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'update/:id',
        component: UpdateProductComponent,
        data: {
          title: 'update'
        }
      },
      {
        path: 'view',
        component: ViewProductComponent,
        data: {
          title: 'view'
        }
      },
      {
        path: 'add',
        component: AddProductComponent,
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
export class ProductsRoutingModule {
}

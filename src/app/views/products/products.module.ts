import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({ 
  declarations: [
    UpdateProductComponent,
    AddProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    HttpClientModule,
    DateTimePickerModule
  ]
})


export class ProductsModule { }


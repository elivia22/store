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
import { OrderRoutingModule } from './order-routing.module';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({ 
  declarations: [
    AddOrderComponent,
    ViewOrderComponent,
    UpdateOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
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


export class OrderModule { }


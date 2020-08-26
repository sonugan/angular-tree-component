import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesComponent } from './nodes/nodes.component';
import { CodeExampleModule } from '../custom-elements/code/code-example.module';



@NgModule({
  declarations: [NodesComponent],
  imports: [
    CommonModule,
    CodeExampleModule
  ]
})
export class FundamentalsModule { }

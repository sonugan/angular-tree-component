import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { BasicUsageComponent } from './examples/basic-usage/basic-usage.component';
import { NodesComponent } from './fundamentals/nodes/nodes.component';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
    pathMatch: 'full',
  },
  {
    path: 'examples',
    children: [
      { path: 'basic', component: BasicUsageComponent }
    ]
  },
  {
    path: 'fundamentals',
    children: [
      { path: 'nodes', component: NodesComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}

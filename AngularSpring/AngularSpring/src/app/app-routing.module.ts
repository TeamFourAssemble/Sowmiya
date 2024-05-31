import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'projectmanager',
    loadChildren:()=>import('./projectmanager/projectmanager.module').then(m=>m.ProjectmanagerModule)
  },
  {
    path: '', 
      redirectTo: 'admin/alogin',
      pathMatch: 'full'
     }, // Default route
      { path: '**',
       redirectTo: 'admin/alogin' 
      }
    ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

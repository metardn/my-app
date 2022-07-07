import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
},
{
  path: 'profile', loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule )
},
{
  path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryModule )
},
{
  path: 'stars', loadChildren: () => import('./stars/stars.module').then( m => m.StarsModule )
},
{
  path: 'login', loadChildren: () => import('./user/login/login.module').then( m => m.LoginModule )
},
{
  path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
},
{
  path: '',redirectTo:'home', pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

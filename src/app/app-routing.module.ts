import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriveComponent } from './drive/drive.component';
import { DistrictComponent } from './district/district.component';
import { MarkersComponent } from './markers/markers.component';

const routes: Routes = [
  { path: '', component: DriveComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'yelo', component: MarkersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

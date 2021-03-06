import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DataService} from './service/data.service';


const routes: Routes = [
  {
    path: '', component: ListViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

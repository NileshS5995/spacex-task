import { Component, OnInit } from '@angular/core';
import { DataService} from './../../service/data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  public missions: Object;
  public loading = true;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.dataService.getList().subscribe(
      (response: any) => {
       this.missions = response;
       this.loading = false;
      },
      (error) => {
        console.log('Something went wrong......')
      }
    );
  }

}

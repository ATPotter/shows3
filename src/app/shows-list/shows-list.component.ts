import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

import { ShowDataService } from '../show-data/show-data.service';
import { showListEntry } from '../show-data/DataStructures/showListEntry';


@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

  version: string = environment.version;
  myShows: showListEntry[];



  constructor(private dataService: ShowDataService) { }

  ngOnInit() {
    // Retrieve the shows list
    // this.myShows = this.dataService.getAllShows2();
    // console.log(this.myShows);

    this.dataService.getAllShows3(this.showDataReceived.bind(this) );
  }

  showDataReceived(shows :showListEntry[]) {
    console.log("In main, shows is ", shows);
    this.myShows = shows;
  }


}

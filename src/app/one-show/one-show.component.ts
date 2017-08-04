import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShowDataService } from '../show-data/show-data.service';

import { oneShowInfo } from '../show-data/DataStructures/oneShowInfo';
import { oneShowHtml } from '../show-data/DataStructures/oneShowHtml';
import { photoBlock } from '../show-data/DataStructures/oneShowPhotoblock';

@Component({
  selector: 'app-one-show',
  templateUrl: './one-show.component.html',
  styleUrls: ['./one-show.component.scss']
})
export class OneShowComponent implements OnInit {

  message: string;
  showNumber: number;

  showInfo :oneShowInfo;
  showHtml :oneShowHtml;
  showPhotos : photoBlock[];


  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: ShowDataService ) { 
      this.showInfo = new oneShowInfo(null);
      this.showHtml = new oneShowHtml(null);
      this.showPhotos = [];
    }

  ngOnInit() {
    console.log("OneShow component");

    this.message = 'This is a meaningless message';

    // Make sure we can pick up the route information
    this.sub = this.route.params.subscribe(params => {
      this.showNumber = +params['showNumber'];   // The + converts the string to a number
    })

    this.dataService.getOneShowPhotoblocks(this.showNumber, 
    this.infoReceived.bind(this),
    this.htmlReceived.bind(this),
    this.photoblocksReceived.bind(this));
  };

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // Completion handlers
  infoReceived(info :oneShowInfo) {
    console.log("Info received ", info);
    this.showInfo = info;
  }

  htmlReceived(html :oneShowHtml) {
    console.log("HTML received ", html);
    this.showHtml = html;
  }

  photoblocksReceived(photoblocks : photoBlock[]) {
    console.log("Photblocks received ", photoblocks);
    this.showPhotos = photoblocks;
  }

}

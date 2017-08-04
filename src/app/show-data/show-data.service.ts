import { Injectable } from '@angular/core';

//import { Http, Response, Headers, URLSearchParams  } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { ShowDataConfiguration } from './show-data.constants';
import { showListEntry } from './DataStructures/showListEntry';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { oneShowInfo } from './DataStructures/oneShowInfo';
import { oneShowHtml } from './DataStructures/oneShowHtml';
import { photoBlock } from './DataStructures/oneShowPhotoblock';


@Injectable()
export class ShowDataService {

  private ListAllShowsUrl  :string = 'http://data.thepotters.org.uk/alanshows/getAllShows.php';
  private OneShowInfoUrl   :string = 'http://data.thepotters.org.uk/alanshows/getOneShowInfo.php?showNumber=';
  private OneShowHtmlUrl   :string = 'http://data.thepotters.org.uk/alanshows/getOneShowHtml.php?showNumber=';
  private OneShowPhotosUrl :string = 'http://data.thepotters.org.uk/alanshows/getAllPhotoblocks.php?showNumber=';

  private shows :showListEntry[];

  constructor( private _http: HttpClient ) { 
  }

  

  // Get a list of all shows that I've been in
  public getAllShows3(callback :any) {

    let resp = this._http.get<showListEntry[]>(this.ListAllShowsUrl)
    .subscribe(success => {
      console.log("Data is ", success);
      callback(success);
    });
  }

  public getOneShowPhotoblocks(showNumber :number, 
     infoCallback  :any,
     htmlCallback  :any,
    photoCallback :any
    ) {
      this._http.get<oneShowInfo[]>(this.OneShowInfoUrl + showNumber)
        .subscribe(success => { infoCallback(success); });
      
      this._http.get<oneShowHtml[]>(this.OneShowHtmlUrl + showNumber)
        .subscribe(success => { htmlCallback(success); });
      
      this._http.get<photoBlock[]>(this.OneShowPhotosUrl + showNumber)
        .subscribe(success => { photoCallback(success); });
  }
}

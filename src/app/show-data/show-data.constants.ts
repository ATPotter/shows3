import { Injectable } from '@angular/core';

@Injectable()
export class ShowDataConfiguration {
    private server: string = 'http://data.thepotters.org.uk/';
    private api: string = 'alanshows/';
    
    private allShows: string = 'getAllShows.php';


    public ListAllShowsUrl = this.server + this.api + this.allShows;
}
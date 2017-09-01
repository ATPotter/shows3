import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() title: string = '';
  @Input() thumbnail: string = '';
  @Input() fullsize: string = '';
  @Input() height: number = 0;
  @Input() width: number = 0;
  @Input() photoNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

}

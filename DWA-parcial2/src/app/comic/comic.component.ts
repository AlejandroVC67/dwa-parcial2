import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service'

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
  providers: [RetrieveService]

})
export class ComicComponent implements OnInit {
  public data = [];
  public date;
  public regExp = /(?<=\()\d+(?:\.\d+)?(?=\))/;
  public comicsRating:any;
  constructor(private _retrieveService: RetrieveService) { }

  ngOnInit() {
    this._retrieveService.getComicData().subscribe(
      result => {
        this.data = result.data.results;
        this.comicsRating = new Array(this.data.length).fill(0);
        this.date = this.data.map(element =>
          element.title.match(this.regExp) + ""
        )
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

  public rateComicUp (index) {
    this.comicsRating[index]++;
  }

  public rateComicDown (index) {
    this.comicsRating[index]--;
  }

}

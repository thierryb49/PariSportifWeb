import { Component, OnInit } from '@angular/core';
import { RencontresService } from '../shared/rencontres/rencontres.service';

@Component({
  selector: 'app-rencontres',
  templateUrl: './rencontres.component.html',
  styleUrls: ['./rencontres.component.css']
})
export class RencontresComponent implements OnInit {
  public rencontres;
  constructor(private rencontreService: RencontresService) { }

  ngOnInit() {
    this.rencontreService.getAll().subscribe(data => {
      this.rencontres = data;
      console.log('data: ', data);
    }, err => {
      console.log(err);
    }
    );
  }

}

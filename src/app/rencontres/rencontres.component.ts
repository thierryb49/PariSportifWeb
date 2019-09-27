import { Component, OnInit } from '@angular/core';
import { RencontresService } from '../shared/rencontres/rencontres.service';

@Component({
  selector: 'app-rencontres',
  templateUrl: './rencontres.component.html',
  styleUrls: ['./rencontres.component.css'],
  providers: [ RencontresService ]
})
export class RencontresComponent implements OnInit {
  private rencontres;
  constructor(private rencontreService: RencontresService) { }

  ngOnInit() {
    this.rencontreService.getAll().subscribe(data => {
      this.rencontres = data;
    }, err => {
      console.log(err);
    }
    );
  }

}

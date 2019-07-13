import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TipdataService } from '../../services/tipdata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private tipIndex: number;

  title = '';
  content = '';
  constructor(private router: Router, private tipdataService: TipdataService) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        this.tipIndex = this.tipdataService.getTipProgress();
        const data = this.tipdataService.getDataOfTip(this.tipIndex);

        this.title = this.tipIndex + '. ' + data.title;
        this.content = data.quote;
      }
    });
  }

  openTip() {
    this.router.navigateByUrl('/tip');
  }

}

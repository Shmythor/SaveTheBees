import { Component, OnInit } from '@angular/core';
import { TipdataService } from '../../services/tipdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.page.html',
  styleUrls: ['./tip.page.scss'],
})
export class TipPage implements OnInit {
  tipTitle = '';
  tipImage = '';
  paragraphs = [];

  index = -1;

  constructor(private tipdataProvider: TipdataService, private router: Router) {

  }

  ngOnInit() {
    this.updateData();
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

  nextTip() {
    this.tipdataProvider.updateTipProgress();
    this.updateData();
  }

  private updateData() {
    this.index = this.tipdataProvider.getTipProgress();
    const data = this.tipdataProvider.getDataOfTip(this.index);

    this.tipTitle = data.title;
    this.tipImage = data.img;
    this.paragraphs = data.content;
  }
}

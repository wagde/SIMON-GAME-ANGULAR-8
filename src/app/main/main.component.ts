import { Component, OnInit } from '@angular/core';
import { ServService } from '../service/serv.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fade', [
      state('small', style({
        opacity: '0.1',
      })),
      state('large', style({
        opacity: '1',
      })),
      transition('small <=> large', animate(500))])]
})
export class MainComponent implements OnInit {
  colorBlock: Array<Object>;
  colorSeries: Array<number> = [];
  clickMulti: boolean = true;
  constructor(public ServService: ServService) {
    this.ServService = ServService;
    this.colorBlock = ServService.colorBlock;
    this.colorSeries = ServService.colorSeries;
  }
  ngOnInit() {
  }

}

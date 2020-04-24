import { Component, OnInit } from '@angular/core';
import { ServService } from '../service/serv.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(public ServService: ServService) {
    this.ServService = ServService;

  }

  ngOnInit() {
  }


}

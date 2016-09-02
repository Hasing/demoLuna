import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  show:boolean = true;

  ngOnInit() {
  }

  test(){
    this.show = !this.show;
  }

  showText(){
    return "Tim";
  }
}

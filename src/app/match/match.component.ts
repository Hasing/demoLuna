import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}

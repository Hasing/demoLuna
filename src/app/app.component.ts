import { Component } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  providers:[DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data: any;

  constructor(private dataService: DataService) {
  }

  getMatchData(){
    return this.dataService.result;
  }
}

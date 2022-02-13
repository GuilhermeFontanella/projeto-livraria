import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'livraria';

  token: boolean = false;

  ngOnInit(): void {
    this.changeToken();
  }

  changeToken(event?: any) {
    console.log(event);
    
    this.token = event
  }

}

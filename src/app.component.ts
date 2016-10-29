import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
	styleUrls: ['app.component.css'],
  template: `<h1>{{title}}</h1>`,
})
export class AppComponent implements OnInit {
  title: string = 'Hello Angular2!';

  ngOnInit(): void {
   console.log ('init');
  }
}
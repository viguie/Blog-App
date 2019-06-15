import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date1 = new Date();
  date2 = new Date();
  date3 = new Date();

  postItems = [
    {
      title: 'Mon premier post',
      content: 'Ceci est mon premier post',
      loveIts: 1,
      created_at: this.date1
    },
    {
      title: 'Mon second post',
      content: 'Ceci est mon second post',
      loveIts: -1,
      created_at: this.date2
    },
    {
      title: 'Mon dernier post',
      content: 'Ceci est mon dernier post',
      loveIts: 2,
      created_at: this.date3
    }

  ];
}


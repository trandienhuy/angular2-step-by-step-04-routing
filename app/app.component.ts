import { Component } from '@angular/core';
import { PeopleListComponent } from './people-list.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <people-list>
    `,
    directives: [PeopleListComponent]
})
export class AppComponent { 
    title: string = 'Star Wars Pplz!!!';
}

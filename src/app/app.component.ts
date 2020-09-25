import { Component } from '@angular/core';
import { Subject, from, of } from 'rxjs'
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitten Booty';
  files = new Subject<[]>();

}

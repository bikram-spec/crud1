import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Branch', cols: 4, rows: 1, color: 'light-blue', number:0, logo_name:'content_copy', link:'/branch'},
          { title: 'Subjects', cols: 4, rows: 1, color:'light-red', number:0, logo_name:'library_books', link:'/subjects' },
          { title: 'Questions', cols: 4, rows: 1, color:'light-yellow',number:0, logo_name:'live_help', link:'/questions' },
          { title: 'Papers', cols: 4, rows: 1, color:'light-green', number:1500, logo_name:'note', link:'/papers'}
        ];
      }

      return [
        { title: 'Branch', cols: 1, rows: 1, color: 'light-blue', number:0, logo_name:'content_copy', link:'/branch' },
        { title: 'Subjects', cols: 1, rows: 1, color: 'light-red', number:0, logo_name:'library_books', link:'/subjects' },
        { title: 'Questions', cols: 1, rows: 1, color: 'light-yellow', number:0, logo_name:'live_help', link:'/questions' },
        { title: 'Papers', cols: 1, rows: 1, color:'light-green', number:150, logo_name:'note', link:'/papers' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

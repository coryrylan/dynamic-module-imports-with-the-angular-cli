import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Cory Rylan';

  reverse() {
    import('./string-helpers').then(module => {
      this.name = module.reverseString(this.name);
    });
  }
}

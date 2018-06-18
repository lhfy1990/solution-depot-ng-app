import fa from '@fortawesome/fontawesome';
import fas from '@fortawesome/fontawesome-free-solid';
import far from '@fortawesome/fontawesome-free-regular';
import fab from '@fortawesome/fontawesome-free-brands';
import { Component } from '@angular/core';

fa.library.add(fas);
fa.library.add(far);
fa.library.add(fab);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

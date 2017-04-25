import { Component } from '@angular/core';
import { DragulaDirective, DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onDrop(data: any) {
    console.log('droped', data);
  }
}

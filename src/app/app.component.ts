import { Component, OnInit } from '@angular/core';
import { DragulaDirective, DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private dragService: DragulaService) {
    dragService.drop.subscribe((value) => {
      console.log(value);
      this.onDrop(value.slice(1));
    });
  }

  ngOnInit() {
    // dragService.drop.subscribe((value) => {
    //   this.onDrop(value.slice(1));
    // });
    console.log('want dragula to initiate here')
  }

  private onDrop(args) {  //dragula
    console.log('args', args);
  }

  onDrop2(data: any) { // html drag and drop
    console.log('droped', data);
  }




}

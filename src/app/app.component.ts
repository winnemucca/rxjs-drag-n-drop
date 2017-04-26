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
      this.onDrop(value.slice(1));
    });
    dragService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });

    dragService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  ngOnInit() {
    // dragService.drop.subscribe((value) => {
    //   this.onDrop(value.slice(1));
    // });
    console.log('want dragula to initiate here')
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }
  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {  //dragula
    console.log('args', args);
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }


  onDrop2(data: any) { // html drag and drop
    console.log('droped', data);
  }




}

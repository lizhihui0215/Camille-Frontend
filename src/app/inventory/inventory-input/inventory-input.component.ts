import {Component, OnInit, HostListener, ElementRef, Renderer, ViewChild,} from '@angular/core';

@Component({
  selector: 'app-inventory-input',
  templateUrl: './inventory-input.component.html',
  styleUrls: ['./inventory-input.component.css']
})
export class InventoryInputComponent implements OnInit {
  @ViewChild('tableBody') tableBody: ElementRef;
  constructor(private renderer : Renderer) { }
  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    let trs = this.tableBody.nativeElement.children;
    let lastTR = trs.item(trs.length - 1);
    let lastTH = lastTR.children.item(lastTR.children.length - 1);
    if (lastTH.getElementsByTagName('input').item(0) === event.target) {
      this.addRow(this.tableBody.nativeElement);
    }
  }

  addRow(table: ElementRef): void {
    let tr = this.renderer.createElement(table, 'tr');
    for (let i = 0; i < 3; i++) {
      let th = this.renderer.createElement(tr, 'th');
      let div = this.renderer.createElement(th, 'div');
      this.renderer.setElementClass(div, 'ui', true);
      this.renderer.setElementClass(div, 'fluid', true);
      this.renderer.setElementClass(div, 'transparent', true);
      this.renderer.setElementClass(div, 'input', true);
      let input = this.renderer.createElement(div, 'input');
      this.renderer.setElementAttribute(input, 'type', 'text');
      this.renderer.setElementAttribute(input, 'placeholder', '请输入货号');
    }
  }

  ngOnInit() {
  }

}

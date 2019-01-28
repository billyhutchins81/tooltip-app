import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.sass']
})

export class TooltipsComponent implements OnInit {
  clickedButton: number;
  constructor() { }

  ngOnInit() {
    this.clickedButton = 0;
  }
  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.clickedButton = 0;
    }
  }
  showToolTipForButton(button: number) {
    this.clickedButton = button;
  }
}

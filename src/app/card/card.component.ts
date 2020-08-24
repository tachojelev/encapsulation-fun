import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'awesome-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardComponent {
  @Input() description: string;
  @Input() buttonText: string;
}

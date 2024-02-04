import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-precing',
  templateUrl: './card-precing.component.html',
  styleUrls: ['./card-precing.component.css']
})
export class CardPrecingComponent implements OnInit {
 @Input()
  label_pricing : String = "";
 @Input()
  pricing : String = "";
  @Input()
  type_game : String = "";
constructor(){}

ngOnInit(): void {
  
}
}

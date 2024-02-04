import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()
photo : String = "";
@Input()
label_pricing : String = "";
@Input()
pricing : String = "";
@Input()
type_game : String = "";
@Input()
label_tag : string = "";

constructor(){}

ngOnInit(): void {
  
}
}

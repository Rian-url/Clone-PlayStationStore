import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusive-icon',
  templateUrl: './exclusive-icon.component.html',
  styleUrls: ['./exclusive-icon.component.css']
})
export class ExclusiveIconComponent implements OnInit {
  
  @Input()
  label_tag : string = "";
  
  constructor(){}

  ngOnInit(): void {
    
  }
}

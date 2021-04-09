import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khion',
  templateUrl: './khion.component.html',
  styleUrls: ['./khion.component.css']
})
export class KhionComponent implements OnInit {
lexiques=true;
grades=false;
  constructor() { }

  ngOnInit() {
    this.grade();
    this.lexique();
  }

  grade() {
    this.grades = true;
    this.lexiques=false;
  }
  lexique() {
    this.grades=false;
    this.lexiques=true;
  }
}

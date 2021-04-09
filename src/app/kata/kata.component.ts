import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kata',
  templateUrl: './kata.component.html',
  styleUrls: ['./kata.component.css']
})
export class KataComponent implements OnInit {
karates=true;
shotokans = false;
aikis = false;
armes = false;
shinjus = false;
  constructor() { }

  ngOnInit() {
    this.aiki();
    this.karate();
    this.shotokan();
    this.arme();
    this.shinju();
  }

  karate() {
    this.karates = true;
    this.shotokans = false;
    this.aikis = false;
    this.armes = false;
    this.shinjus = false;

  }
  shotokan() {
    this.karates = false;
    this.shotokans = true;
    this.aikis = false;
    this.armes = false;
    this.shinjus = false;
  }
  aiki() {
    this.karates = false;
    this.shotokans = false;
    this.aikis = true;
    this.armes = false;
    this.shinjus = false;
  }
  arme() {
    this.karates = false;
    this.shotokans = false;
    this.aikis = false;
    this.armes = true;
    this.shinjus = false;
  }
  shinju() {
    this.karates = false;
    this.shotokans = false;
    this.aikis = false;
    this.armes = false;
    this.shinjus = true;
  }
}

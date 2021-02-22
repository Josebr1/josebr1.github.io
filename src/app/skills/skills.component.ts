import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Linguagens e Tecnologias';
  showYAxisLabel = true;
  yAxisLabel = 'Experiência';

  colorScheme = {
    domain: ['#F0EE00', '#5BD866', '#BC0029', '#6474FA', '#60B560']
  };

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

  onResize(event) { this.view = [event.target.innerWidth - 200, 280 ]; }
}

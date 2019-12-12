import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-horizontal-graph',
  templateUrl: './horizontal-graph.component.html',
  styleUrls: ['./horizontal-graph.component.scss']
})
export class HorizontalGraphComponent implements OnDestroy {
  
  results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 30
    }
  ];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    
  }
}

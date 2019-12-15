import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-graph',
  templateUrl: './horizontal-graph.component.html',
  styleUrls: ['./horizontal-graph.component.scss']
})
export class HorizontalGraphComponent {
 
  @Input() results: any[] = [];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Games';
  colorScheme = 'nightLights';
}

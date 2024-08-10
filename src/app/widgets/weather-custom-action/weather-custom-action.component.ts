import {Component, inject} from '@angular/core';
import {WeatherWidgetComponent} from "../weather-widget/weather-widget.component";

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  template: `
    <div>
      <button (click)="onClick()">
        Reloaaaaddd2
      </button>
<!--      <button (click)="actions.copyData()">
        COPY 2
      </button>-->
    </div>
  `,
  styles: [
  ]
})
export class WeatherCustomActionComponent {
  
  weatherWidget = inject(WeatherWidgetComponent);
  onClick( ) {
    this.weatherWidget.actions.reload();
  }

}

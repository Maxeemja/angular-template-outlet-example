import {Component} from '@angular/core';
import {WeatherWidgetComponent} from './widgets/weather-widget/weather-widget.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WeatherWidgetComponent],
    template: `
        <weather-widget [headerTemplate]="altWidgetHeader"></weather-widget>
        <ng-template #altWidgetHeader>
            <div class="alt-header">Today's weather</div>
        </ng-template>
    `,
    styles: [`
        :host {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .alt-header {
            font-size: 24px;
            font-weight: 300;
            margin-bottom: -6px;
        }
    `]
})
export class AppComponent {
}

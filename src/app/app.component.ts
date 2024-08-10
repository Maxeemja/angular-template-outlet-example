import {Component} from '@angular/core';
import {WeatherWidgetComponent} from './widgets/weather-widget/weather-widget.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WeatherWidgetComponent],
    template: `
        <weather-widget [headerTemplate]="altWidgetHeader" [contentTemplate]="altWidgetContent" [actionTemplate]="altWidgetActions"></weather-widget>
        <ng-template #altWidgetHeader>
            <div class="alt-header">Today's weather</div>
        </ng-template>

        <ng-template #altWidgetContent let-state>
            <div>
                <span>
                    {{ state.data.temperature }}
                </span>
                -
                <span>
                    {{ state.data.skyCondition }}
                </span>
                -
                <span>
                    {{ state.data.windspeed }}
                </span>
            </div>
        </ng-template>

        <ng-template #altWidgetActions let-actions>
            <div>
                <button (click)="actions.reload()">
                    Reloaaaaddd2
                </button>
                <button (click)="actions.copyData()">
                    COPY 2
                </button>
            </div>
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

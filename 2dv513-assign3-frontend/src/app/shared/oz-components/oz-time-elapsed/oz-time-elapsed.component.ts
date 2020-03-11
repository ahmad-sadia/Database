import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'oz-time-elapsed',
    templateUrl: './oz-time-elapsed.component.html',
    styleUrls: ['./oz-time-elapsed.component.css'],
})
export class OzTimeElapsedComponent implements OnInit, OnDestroy {


    currentValue = 0;
    text = '';

    @Input()
    set value(value: any) {
        this.update(value);
    }

    @Input() autoIncrease = false;

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.timerStop()
    }

    update(value) {
        this.currentValue = value;
        if (value == 0) {
            this.text == '';
            return;
        }

        let d = Math.floor(value / (3600 * 24));
        let h = Math.floor((value % (3600 * 24)) / 3600);
        let m = Math.floor((value % 3600) / 60);
        let s = value % 60;

        let str = '';
        if (d > 0) {
            str += d + ' days'
        }
        if (h > 0) {
            str += ' ' + h + ' hours'
        }
        if (m > 0) {
            str += ' ' + m + ' minutes'
        }
        if (d === 0 && s > 0) {
            str += ' ' + s + ' seconds'
        }
        this.text = str;
    }

    timerStart() {

    }

    timerStop() {

    }
}



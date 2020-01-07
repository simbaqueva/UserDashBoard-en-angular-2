import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'status-content',
    templateUrl: 'status-content.component.html',
    styleUrls: ['status-content.component.css']

})

export class StatusContentComponent implements OnInit {
    @Input() accounts:any
    private balance:any;
    ngOnInit() {
        if(this.accounts[0].product_type === '1') {
            this.balance = {
                total : this.accounts[1].total_balance.toLocaleString(),
                avaliable : this.accounts[1].avaliable_balance.toLocaleString(),
                exchange : this.accounts[1].exchange_balance.toLocaleString()
            };
        } else if(this.accounts[0].product_type === '5') {
            this.balance = {
                total_quota: this.accounts[1].total_quota.toLocaleString(),
                disponible: this.accounts[1].disponible_quota.toLocaleString(),
                total: this.accounts[1].total_balance.toLocaleString(),
                minimum: this.accounts[1].minimum_payment.toLocaleString(),
                overdue: this.accounts[1].overdue_balance.toLocaleString()
            };
        }
    }
}

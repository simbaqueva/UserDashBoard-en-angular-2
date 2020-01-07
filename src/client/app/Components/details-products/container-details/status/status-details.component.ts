import { Component, Input } from "@angular/core"

@Component(
    {
        moduleId: module.id,
        selector: 'status-details',
        templateUrl: 'status-details.component.html',
        styleUrls: ['status-details.component.css']
    }
)

export class StatusDetailsComponent{
    @Input() accounts:any

    private balance:any;

    ngOnInit(){
        if(this.accounts[0].product_type == '3'){
            let penalty = this.accounts[1].avaliable_penalty;
            let without_penalty = this.accounts[1].avaliable_without_penalty;
            if(penalty === 0){
                penalty = "000.000"
            } 
            if(without_penalty === 0) {
                without_penalty= "000.000"
            }
            this.balance = {
                penalty: penalty.toLocaleString(),
                without_penalty: without_penalty.toLocaleString()
            }
        }
    }
}
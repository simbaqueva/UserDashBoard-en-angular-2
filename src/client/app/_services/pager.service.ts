import { Injectable } from '@angular/core'


@Injectable()
export class PagerService{
    public page:number = 0;
    public nodes:any = [];
    getArrayNumbers(data:any, filter_number:number):any{
        let counter:number = 0;
        let array:any = [];
        for(let data_group in data){
            counter++;
            if(counter<filter_number){
                array.push(data[data_group])
                if(+data_group == data.length-1){
                    this.nodes.push(array);
                }
            }
            else{
                array.push(data[data_group])
                this.nodes.push(array);
                array=[];
                counter=0;
            }
        }
        return this.nodes
    }
}
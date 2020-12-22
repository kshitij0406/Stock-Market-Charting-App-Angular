import { Time } from "@angular/common";

export class Stock {

    id!:number;
    companyCode!:string;
    date!:Date;
    pricePerShare!:number;
    stockExchange!:string;
    time!:Time;
}

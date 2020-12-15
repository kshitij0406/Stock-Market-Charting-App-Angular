import { Time } from "@angular/common";

export class IPODetails {
    id!:number;
    companyName!: string;
    stockExchange!:string;
    date!:Date;
    time!:Time;
    totalNumberOfShares!:number;
    pricePerShare!: number;
}

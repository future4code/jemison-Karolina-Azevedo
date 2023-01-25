export class Product {
   
    constructor (private name: string, private price: string){
        this.name = name;
        this.price = price;
    }
    public getName(): string {
        return this.name;
    }
    public getPrice(): string {
        return this.price;
    }
    public setName(newName: string){
        this.name = newName;
    }
    public setPrice(newPrice: string){
        this.price = newPrice;
    }
}
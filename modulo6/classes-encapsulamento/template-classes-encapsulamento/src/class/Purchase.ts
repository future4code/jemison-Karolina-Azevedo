export class PurchaseDB {
   
    constructor (private userId: string, private productId: string, private quantity: number, private totalPrice: number ){
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    public getUserId(): string {
        return this.userId;
    }
    public getProductId(): string {
        return this.productId;
    }
    public getQuantity(): number {
        return this.quantity;
    }
    public getTotalPrice(): number {
        return this.totalPrice;
    }
    public setUserId(newUserId: string){
        this.userId = newUserId;
    }
    public setProductId(newProductId: string){
        this.productId = newProductId;
    }
    public setQuantity(newQuantity: number){
        this.quantity = newQuantity;
    }
    public setTotalPrice(newTotalPrice: number){
        this.totalPrice = newTotalPrice;
    }
}

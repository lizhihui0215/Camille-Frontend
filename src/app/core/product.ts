export enum Season{
  None,
  Spring,
  Summer,
  Autumn,
  Winter,
}

export class Product {
  constructor(
    public serialNumber: string,
    public name: string,
    public brand: string,
    public unit: string,
    public count: number,
    public price: number,
    public money: number,
    public inventory: string,
    public season: Season,
    public inDate: Date,
  ) {
  }

  static emptyProduct(): Product{
    return new Product('','','','',0,0,0,'',Season.Spring,new Date())
  }

  isEmpty(): boolean {
    console.log(this.count);
    return this.serialNumber == ''
      && this.name == ''
      && this.brand == ''
      && this.unit == ''
      && this.count == 0
      && this.price == 0
      && this.money == 0
      && this.inventory
      && this.season == Season.None;
  }
}


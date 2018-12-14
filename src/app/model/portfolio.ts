export interface Portfolio {

    assetId: string;
    currency: string;
    price: number;
    priceDate: Date;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
import { Component } from '@angular/core';


const MOCK_DATA = {
  portfolio1: [
    {
      'assetId': '1',
      'currency': '2',
      'price': '3',
      'priceDate': '4'

    },
    {
      'assetId': '5',
      'currency': '6',
      'price': '7',
      'priceDate': '8'

    },
    {
      'assetId': '9',
      'currency': '10',
      'price': '11',
      'priceDate': '12'

    },
    {
      'assetId': '13',
      'currency': '14',
      'price': '15',
      'priceDate': '16'

    },
    {
      'assetId': '17',
      'currency': '18',
      'price': '19',
      'priceDate': '20'

    },
    {
      'assetId': '21',
      'currency': '22',
      'price': '23',
      'priceDate': '24'

    }
  ], portfolio2: [
    {
      'assetId': '25',
      'currency': '26',
      'price': '27',
      'priceDate': '28'

    },
    {
      'assetId': '29',
      'currency': '30',
      'price': '31',
      'priceDate': '32'

    },
    {
      'assetId': '33',
      'currency': '34',
      'price': '35',
      'priceDate': '36'

    },
    {
      'assetId': '37',
      'currency': '38',
      'price': '39',
      'priceDate': '40'

    },
    {
      'assetId': '41',
      'currency': '42',
      'price': '43',
      'priceDate': '44'

    }



  ]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['assetId', 'currency', 'price', 'priceDate'];
  dataSource = undefined;
  buttonClicked = false;
  getData(keyword: string) {
    this.buttonClicked = true;
    this.dataSource = MOCK_DATA[keyword];
  }


}


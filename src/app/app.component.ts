import { Component } from '@angular/core';


const MOCK_DATA = {
  portfolio1: [
    {
      'assetId': '1',
      'currency': 'USD',
      'price': '3',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '5',
      'currency': 'USD',
      'price': '7',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '9',
      'currency': 'USD',
      'price': '11',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '13',
      'currency': 'USD',
      'price': '15',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '17',
      'currency': 'INR',
      'price': '19',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '21',
      'currency': 'CAD',
      'price': '23',
      'priceDate': '12-13-2018'

    }
  ], portfolio2: [
    {
      'assetId': '25',
      'currency': 'USD',
      'price': '27',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '29',
      'currency': 'USD',
      'price': '31',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '33',
      'currency': 'USD',
      'price': '35',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '37',
      'currency': 'USD',
      'price': '39',
      'priceDate': '12-13-2018'

    },
    {
      'assetId': '41',
      'currency': 'CAD',
      'price': '43',
      'priceDate': '12-13-2018'

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


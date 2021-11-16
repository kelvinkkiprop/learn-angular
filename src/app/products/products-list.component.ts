//Imports
import { Component, OnInit } from '@angular/core';

//Import Interface
import { IProduct } from './products';

//Decorators
@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'] //imports our css, you can add more in the array
})


//Export
export class ProductListComponent implements OnInit {
  //Component name
  pageTitle: string = 'Products';
  showImage: boolean = false;
  //Getters&Setters
  private _listFilter: string = '';
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log("In setter ", value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  // products: any[] = [
  //   {
  //     "id": 1,
  //     "name": "Jen Looper",
  //     "image": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
  //     "code": "e65393",
  //     "release_date": "March 18,2021",
  //     "description": "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
  //     "ratings":  5,
  //     "price":  55.89,
  //   },
  //   {
  //     "id": 2,
  //     "name": "Ken Looper",
  //     "image": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
  //     "code": "e65393",
  //     "release_date": "March 22,2021",
  //     "description": "Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!.",
  //     "ratings":  4.2,
  //     "price":  105.25,
  //     }
  // ];
  products: IProduct[] = [
  {
      "id": 1,
      "name": "Jen Looper",
      "image": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
      "code": "f+65393",
      "release_date": "March 18,2021",
      "description": "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
      "ratings":  5,
      "price":  55.89,
    },
    {
      "id": 2,
      "name": "Ken Looper",
      "image": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
      "code": "e+65393",
      "release_date": "March 22,2021",
      "description": "Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!.",
      "ratings":  4.2,
      "price":  105.25,
      }
  ];

  //Methods
  ngOnInit(): void{//Default called function
    console.log('In Onit');
    this.listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  //products filter
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.name.toLocaleLowerCase().includes(filterBy))
  }

}

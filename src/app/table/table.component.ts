import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  test8: string;
  test9: string;
  test10: string;
  test11: string;
}

interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', test1: "test", test2: "test", test3: "test", test4: "test", test5: "test", test6: "test", test7: "test", test8: "test", test9: "test", test10: "test", test11: "test"},
  
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9']; // <-- (un)comment for weird behavior (with gap)
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; // <-- (un)comment for normal behavior
  dataSource = ELEMENT_DATA;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}

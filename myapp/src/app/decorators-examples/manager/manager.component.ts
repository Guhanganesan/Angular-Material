import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit, AfterViewInit {

//   manager = {name:'Guhan Ganesan',
//   age:31,
//   mobile:88888
// }

  manager_data = [{
    name:'Guhan Ganesan',
    age:31,
    mobile:88888
  },
  {
    name:'Anbarasan Ganesan',
    age:28,
    mobile:84493
  },
  {
    name:'Arivu Ganesan',
    age:35,
    mobile:34874
  }
]

  @ViewChild(ManagerDetailsComponent, {static:true}) child_comp: ManagerDetailsComponent;

  @ViewChildren(ManagerDetailsComponent) child_comp_list: QueryList<ManagerDetailsComponent>;

  public products = [];
  public title = 'Products';
  productToUpdate: any;

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  ngAfterViewInit(){
    // call child component's method
    //this.child_comp.showDetails();
    // get child component's properties
    //console.log(this.child_comp.area_name);
    //console.log(this.child_comp.pin_code)
    this.child_comp_list.toArray().forEach((item)=>{
      console.log(item.manager_details)
    })
  }

  displayEmittedValue(event:any){
    console.log(event)
  }

  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }

  changeStockValue(p) {
      this.productToUpdate = this.products.find(this.findProducts, [p.id]);
      this.productToUpdate.stock = this.productToUpdate.stock + p.updatdstockvalue;
  }
  findProducts(p) {
      return p.id === this[0];
  }
  
}

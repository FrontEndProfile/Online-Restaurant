import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc } from "firebase/firestore";




@Component({
  selector: 'app-remove-products',
  templateUrl: './remove-products.component.html',
  styleUrls: ['./remove-products.component.scss']
})
export class RemoveProductsComponent implements OnInit {


  productListing!: Observable<any>;

  constructor(private firestore: Firestore) { }
  // READ DATA FROM DATABASE FIREBASE 
  GetHeroData() {
    const collectionInstance = collection(this.firestore, 'products_listing');
    collectionData(collectionInstance, { idField: 'id' })
      .subscribe(val => {
        console.log(val);
      })
    this.productListing = collectionData(collectionInstance, { idField: 'id' });
  }
  // END 
  deleteProduct(){
  //  deleteDoc(doc(this.firestore, "products_listing"));
  //  console.log('delete');
   
  }


  ngOnInit(): void {
    this.GetHeroData();

  }
}

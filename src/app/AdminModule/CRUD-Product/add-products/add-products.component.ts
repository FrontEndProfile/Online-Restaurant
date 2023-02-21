import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Firestore, collection, addDoc, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  uploadedImage: any;
  form: any;

  live_link:any;

  constructor(private firestore: Firestore, private router: Router, private fireStorage: AngularFireStorageModule) { }
  ProductsCreate = new FormGroup({
    ProductsName: new FormControl(''),
    ProductsImage: new FormControl(''),
    ProductsPrize: new FormControl(''),
    ProductsDescription: new FormControl(''),
    ProductsImagePath : new FormControl('')
  });
  onSubmit() {
    // CREATE DATA FROM FORM REACTIVE
    console.warn(this.ProductsCreate.value);
    const collectionInstance = collection(this.firestore, 'products_listing');
    addDoc(collectionInstance, this.ProductsCreate.value)
      .then(() => {
        console.log('Data Saved Success');
        this.router.navigate(['/DashBoard'])
      })
      .catch((err) => {
        console.warn(err);
        console.log('wronged');
      })
    // END 

  }



  onFileChange(event: any) {
    const file = event.target.files[0];

    const storage = getStorage();

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'media/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          // this.uploadedImage=downloadURL;
          this.ProductsCreate.controls['ProductsImagePath'].setValue(downloadURL);
        });
      }
    );


  }

  ngOnInit(): void {

  }
}

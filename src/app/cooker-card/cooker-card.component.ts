import { Component } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cooker-card',
  templateUrl: './cooker-card.component.html',
  styleUrls: ['./cooker-card.component.css']
})

export class CookerCardComponent {
 constructor(private fs: Firestore){}

 ngOnInit(){

  this.get()
 }
  get(){
    let x= doc(collection(this.fs,"cookers"))
    
  }
}

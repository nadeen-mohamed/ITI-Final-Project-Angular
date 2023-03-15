import { Component } from '@angular/core';
import { collectionData, deleteDoc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Component({
  selector: 'app-cooker-card',
  templateUrl: './cooker-card.component.html',
  styleUrls: ['./cooker-card.component.css']
})

export class CookerCardComponent {
  mycookers:any=[] // array of all cookers


  constructor(private fs: Firestore){}


  ngOnInit(){ // useEffect
  this.getCookersData().subscribe((res:Note[])=>{
   this.mycookers=res  // array of data
  });
 }





  getCookersData():Observable<Note[]>{
    let x= collection(this.fs,"cookers") //(db,'cookers)
    return collectionData(x ,{idField:"f"}) as Observable<Note[]> // getDoc(q,)
  }


  removeCooker(cooker:Note){
    let x2= doc(this.fs,'cookers',`${cooker.userid}`) //(db,'cookers',id)
    return deleteDoc(x2)
  }
}







// 1- npm firbase
// 2- firebase.js => configartion / firbase.ts 
// 3 - provierfirabseapp(intialize(firabse.config)) // ربط بين مشرووعي والاانجوالار
// 4 - firstore => firsbase= getfirstore() / providerfirstor ( firstore())

// firstor 
// cooker.ts =>  constructor(fs:Firstore){} =>  










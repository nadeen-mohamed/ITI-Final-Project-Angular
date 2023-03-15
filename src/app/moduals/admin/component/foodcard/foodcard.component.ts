import { Component } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.css']
})
export class FoodcardComponent {
  myfoods:any=[] // array of all cookers


  constructor(private fs: Firestore){}


  ngOnInit(){ // useEffect
  this.getAllFoodssData().subscribe((res:Note[])=>{
   this.myfoods=res  // array of data
   console.log(res);
   
  });
 }





  getAllFoodssData():Observable<Note[]>{
    let x= collection(this.fs,"foods") //(db,'cookers)
    return collectionData(x ,{idField:"f"}) as Observable<Note[]> // getDoc(q,)
  }


  removefoods(food:Note){
    let x2= doc(this.fs,'foods',`${food}`) //(db,'cookers',id)
    return deleteDoc(x2)
  }
}
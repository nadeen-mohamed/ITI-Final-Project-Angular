import { Component } from '@angular/core';
import { collectionData, deleteDoc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Note } from 'src/app/note';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  myUsers:any=[] // array of all cookers


  constructor(private fs: Firestore){}


  ngOnInit(){ // useEffect
  this.getUsersData().subscribe((res:Note[])=>{
   this.myUsers=res  // array of data
  });
 }






  getUsersData():Observable<Note[]>{
    let x= collection(this.fs,"users") //(db,'cookers)
    return collectionData(x ,{idField:"f"}) as Observable<Note[]> // getDoc(q,)
  }


  removeUser(cooker:Note){
    let x2= doc(this.fs,'users',`${cooker.userid}`) //(db,'cookers',id)
    return deleteDoc(x2)
  }

}
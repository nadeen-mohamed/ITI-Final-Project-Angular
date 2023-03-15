import { Component } from '@angular/core';
import { collectionData, deleteDoc, Firestore, getDoc, onSnapshot } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { from, Observable } from 'rxjs';
import { Note } from '../../../../note';


@Component({
  selector: 'app-orders-card',
  templateUrl: './orders-card.component.html',
  styleUrls: ['./orders-card.component.css']
})
export class OrdersCardComponent {

  myOrder:any=[] // array of all cookers
  userOrder:any=[]



  constructor(private fs: Firestore){}


  ngOnInit(){ // useEffect
  this.getOrdersData().subscribe((res:Note[])=>{
   this.myOrder=res  // array of data
   console.log(res)
   console.log(res[0].userid)
   console.log(res.length)
  });

  this.getUsersData().subscribe((user:Note[])=>{
    // this.myOrder=user  // array of data
    console.log(user)
    console.log(this.myOrder)
    console.log(this.myOrder[0].userid)
    // console.log(this.myOrder[0].userid==user[0].userid)
    // console.log(res[0].userid)
    // console.log(res.length)
    this.myOrder.map((ele:any)=>{
    //  console.log( user.find(ele.userid))
      // && this.userOrder.push(ele)
      console.log(ele.userid)
      // console.log(ele.userid.find((e:any)=>user(e))

    })


   });


 }







  getOrdersData():Observable<Note[]>{
    let x= collection(this.fs,"orders") //(db,'cookers)
    return collectionData(x ,{idField:"userid"}) as Observable<Note[]> // getDoc(q,)
  }

  getUsersData():Observable<Note[]>{
    let x= collection(this.fs,"users") //(db,'cookers)
    return collectionData(x ,{idField:"f"}) as Observable<Note[]> // getDoc(q,)
  }


//   checkId(id: string): Observable<any> {
//     return getDoc(doc(this.fs, 'users', id));
// }

  // getUserData(users:Note){
  //   let x2= doc(this.fs,'users',`${users.userid}`) //(db,'cookers',id)
  //   return getDoc(x2)
  // }


  // removeUser(cooker:Note){
  //   let x2= doc(this.fs,'users',`${cooker.userid}`) //(db,'cookers',id)
  //   return deleteDoc(x2)
  // }


}

import { Component } from '@angular/core';

import { collectionData, deleteDoc, Firestore, getDoc, onSnapshot } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { from, Observable } from 'rxjs';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  myOrder:any=[] // array of all cookers
  userOrder:any=[]



  constructor(private fs: Firestore){}


  ngOnInit(){ // useEffect
  this.getOrdersData().subscribe((res)=>{
  
  this.myOrder=res
 // array of data
   console.log(this.myOrder)
  //  console.log(res[0].userid)
  //  console.log(res.length)
  //  this.getUsersData().subscribe((user:Note[])=>{

  //  });

  });

  // this.getUserData(this.myOrder).subscribe((user:Note[])=>{})

  // this.getUsersData().subscribe((user:Note[])=>{
  
  // // for (let s =0;s<this.myOrder.length;s++){user.indexOf(this.myOrder[s])>=0?console.log():console.log("nmf")}


  // console.log(this.myOrder,user);
  //  });


 }







  getOrdersData():Observable<Note[]>{
    let x= collection(this.fs,"orders") //(db,'cookers)
    return collectionData(x ,{idField:"userid"}) as Observable<Note[]> // getDoc(q,)
  }

//   getUsersData():Observable<Note[]>{
// // [{id:''},{id:'',}]
//      //res.map(ele => doc(user,ele.id)) 
//     let x= collection(this.fs,"users") //(db,'cookers)
//     return collectionData(x ,{idField:"f"}) as Observable<Note[]> // getDoc(q,)
//   }


//   checkId(id: string): Observable<any> {
//     return getDoc(doc(this.fs, 'users', id));
// }

  getUserData(users:Note){
    let x2= doc(this.fs,'users',`${users.userid}`) //(db,'cookers',id)
    return getDoc(x2)
  }


  // removeOrder(order:Note){
  //   // console.log(order.userOrderId);
    
  //   let x2= doc(this.fs,'orders',`${order.userOrderId}`) //(db,'cookers',id)
  //   return deleteDoc(x2)
  // }
}

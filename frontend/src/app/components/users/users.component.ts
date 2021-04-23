import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  the_users : any ;
  user :any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAllUsers(); 
  }

 getAllUsers(){
   this.api.getUsers().subscribe((data)=>{
     this.the_users = data;
   })
 }

 getUser(id){
   this.api.getSpecificUser(id).subscribe(data=>{
    this.user = data;
    console.log(this.user);
    
   });
   
 }

}

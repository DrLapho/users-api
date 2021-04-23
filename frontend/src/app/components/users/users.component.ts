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
    //Call get users on load
    this.getAllUsers(); 
  }
//Get all users from the service 
 getAllUsers(){
   this.api.getUsers().subscribe((data)=>{
     this.the_users = data;
   })
 }
//Request user data from the service
 getUser(id){
   this.api.getSpecificUser(id).subscribe(data=>{
    this.user = data;
   });
   
 }

}

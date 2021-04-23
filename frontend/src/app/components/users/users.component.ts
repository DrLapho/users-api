import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  the_users : any ;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getAllUsers(); 
  }

 getAllUsers(){
   this.api.getUsers().subscribe((data)=>{
     this.the_users = data;
   })
 }

}

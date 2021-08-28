import { PeopleService } from '../services/people.service';
import { Component, OnInit } from '@angular/core';
import { APIResponse } from '../models/response';
import { People } from '../models/people';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peopleService:PeopleService,private route:ActivatedRoute) { }

  peoples:People[]=[];
  isLoaded:boolean=false;
  searchByName:string=""
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
   
  ngOnInit(): void {

  let people:People= new People();

    this.peopleService.get().subscribe((response:APIResponse)=>{
      this.peoples=response.results;
      this.isLoaded=true;
      console.log(this.peoples);
      people.Name=response.results[0].name;
      people.Url=response.results[0].url;
      people.Height=response.results[0].height;
      people.Homeworld=response.results[0].homeworld;
    },
    error=>{
      console.log("An Error Occured");
    } 
    
  );
}
}

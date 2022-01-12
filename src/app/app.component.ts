import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './core/models/user';
import { UserService } from './core/services/user.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  peoples: User[] = [];
  isLoaded: boolean = true;
  searchByName: string = "";

  userData: User[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  async ngOnInit() {

    ///   first successful trail ///

    // let res = await fetch("https://swapi.dev/api/people/");
    // let data = await res.json();
    // let counter = 1
    // for (let j = 0; j < 8; j++) {
    //   const restOfThepages = await Promise.all(
    //     Array(data)
    //       .fill(0)
    //       .map(i =>
    //         fetch(`https://swapi.dev/api/people/?page=${i + counter}`).then(res => res.json()).then(d => d.results)
    //       )
    //   );
    //   const flattenedData = restOfThepages.reduce((acc, d) => [...acc, ...d], []);
    //   this.userData.push(...flattenedData)
    //   console.log(this.userData)
    //   counter++
    // }

    ///   second successful trail ///

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < arr.length; i++) {
      this.userService.get(arr[i]).subscribe((res: any) => {
        this.peoples.push(...res.results);
      })
    }

  }
}
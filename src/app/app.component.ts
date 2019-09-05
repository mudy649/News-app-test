import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { Comments } from './classes/comments'
import { HttpClient } from '@angular/common/http';
import {ArticleDetailsComponent} from './article-details/article-details.component'


// export interface Comments{
//   postId: number;
//   id: number;
//   name: string;
//   email: string ;
//   body: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   displayName = true ;
  lstcomments: Comments[];
  title = 'news-app';
  constructor(private _newsAPI:NewsApiService){
    console.log('app component constructor called');         
  }


  logData(row){
    
    // this.displayName = false
    // console.log(this.displayName)
    // row = this.displayName;
  }

  ngOnInit(){
    
    
    console.log("api call")
    this._newsAPI.getcomments()
    .subscribe(
      data=>{
        this.lstcomments = data;
        
      }
    );
  }
 
}

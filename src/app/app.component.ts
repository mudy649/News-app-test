import { Component, OnInit , Input} from '@angular/core';
import { NewsApiService } from './news-api.service';
import { Comments } from './classes/comments'
import { HttpClient } from '@angular/common/http';
import { MatDialog , MatTable , MatPaginator ,MatTableDataSource } from '@angular/material';
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
  public selectedRow : Number;
  public check = 0  ;
  public Totalprice = 0 ;
  
//  public  setClickedRow : Function;
  

  lstcomments: Comments[];
  title = 'news-app';
  constructor(private _newsAPI:NewsApiService,public dialog: MatDialog){
    console.log('app component constructor called');         
  }


  setClickedRow(index)
  { this.selectedRow = index}
  
  data($event: any) {
    this.check = $event -1  ;
  }
 

  calculateRowTotal(i: number) {
    this.lstcomments[i].calculateValue = +this.lstcomments[i].unitCost* +this.lstcomments[i].quantity;
    this.Totalprice = this.lstcomments[i].calculateValue;

}

  openDialog(action,obj){
    obj.action = action;
    let dialogRef = this.dialog.open(ArticleDetailsComponent);

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

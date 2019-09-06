import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import for Material things
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; 
import { MatDialogModule,MatButtonModule,MatTableModule, MatTabsModule ,MatCardModule, MatGridListModule ,MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import for API or fatech online Data
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { Comments } from './classes/comments'

import { FormsModule } from '@angular/forms';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule ,
    MatTabsModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents: [ArticleDetailsComponent],
  exports: [
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule ,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }

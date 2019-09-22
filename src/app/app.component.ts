import { Component, getDebugNode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Lab 8 App';

  bookTitle = '';
  pubDate = '';
  bookType = '';
  bookSummary = '';

  DB = [];
 

  //SaveBook will get exectued when the user hits the save teacher button line23@app.component.html 
  saveBook() {
    console.log("Here");
    
    this.DB.push({
      bookTitle: this.bookTitle,
      pubDate: new Date (this.pubDate),
      bookType: this.bookType,
      bookSummary: this.bookSummary
    });
    //reset the input feilds
    this.bookTitle = '';
    this.pubDate = '';
    this.bookType = '';
    this.bookSummary = '';
  }

  // GET NO OF BOOKS
  getNo():number{
    let number = this.DB.length;
    return number;
  }

  // GET NO HARD COVER
  getHardCover():number{
    let hardNo = 0;
    for (let i=0; i<this.DB.length; i+=1){
      if (this.DB[i].bookType === "Hard Cover"){
        hardNo++;
      }
      else {
      }
    }
    return hardNo;
  }

  //DELETE HARD COVER
  // Note: The for loop for deleting goes backwards because as you splice an array the array is being re-indexed
  // meaning you'll skip over an index when one is removed, and your cached .length is obsolete.
  deleteHardCover():void{
    for (let i=this.DB.length -1; i>=0; i--){
      if (this.DB[i].bookType === "Hard Cover"){
        this.DB.splice(i,1)
      }
    }
  }

  // DELETE CURRENT ROW
  deleteBook(book:string) {
    const index: number = this.DB.indexOf(book);
    if (index !== -1) {
      this.DB.splice(index, 1);
    }        
  }
}


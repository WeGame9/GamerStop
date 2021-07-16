import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(gameslist:any[],searchTerm:string): any[] {
    
    if(!gameslist||!searchTerm)
    {
      return gameslist;
    }
    else
    {
       return gameslist.filter((gameObj)=>gameObj.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }


  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredString:string)  {
   if(!value || !filteredString){
     return value;
   }

   const childMsg=[];
   //const users=[];
   for(const note of value)
   {
     if(note.title.toLocaleLowerCase().includes(filteredString) || note.description.toLocaleLowerCase().includes(filteredString))
     {
      childMsg.push(note);
     // return note.title.toLocaleLowerCase().includes(arguments);
     }
   }
   return childMsg;
  }

}

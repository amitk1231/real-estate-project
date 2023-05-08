import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  // Now add Get , Post, Put, Delete

  //add property using Post method
  addListing(data: any) {
    return this.http.post('http://localhost:3000/properties', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //get All property using Get method
  getAllProp() {
    return this.http.get('http://localhost:3000/properties').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Update property using Put method
  updateProp(data: any, id: number) {
    return this.http.put('http://localhost:3000/properties/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Delete property using delete method
  deleteProp(id: number) {
    return this.http.delete('http://localhost:3000/properties/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //service part done
}

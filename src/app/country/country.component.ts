import { Component, OnInit } from '@angular/core';
import { APIDataService } from '../common/service/apidata.service';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  index: Number =0;
  universityList: [];
  apiUrl: string;
  constructor(private apiService: APIDataService){}
ngOnInit(): void {
this.apiUrl = "http://universities.hipolabs.com/searchcountry=India";
this.getUniversityList();
}
public getUniversityList(){
const subscription = this.apiService.Get(this.apiUrl).subscribe(data =>{
try{
if(data){
  this.universityList = data;
}
}catch(e){

}
})
}
}

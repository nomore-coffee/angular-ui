import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public searchForm !: FormGroup;
  dataweather:any;

  constructor(private formbuilder:FormBuilder , private http:HttpClient) { }
  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      city:['']
    })
  
  }
  searchWeather(){
    this.http.post<any>("http://localhost:3001/getcurrentweather" , this.searchForm.value).subscribe((data)=>{
      console.log(data.data)
      this.dataweather=data.data
      this.searchForm.reset()
    })
    }

    saveWeatherdata(){
      this.http.post<any>("http://localhost:3001/saveweatherdata" , {'cityname':this.dataweather.name}).subscribe((res)=>{
        alert("save")
      })
  }

}
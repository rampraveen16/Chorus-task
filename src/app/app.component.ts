import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private route:ActivatedRoute,private router:Router, private http : HttpClient){}
  title = 'chours-demo';
  ngOnInit(){
  }
  ngAfterViewInit() {
    
  }
  load() {
    /*this.router.navigate(['/'],{
      queryParams:{
        id:'4d79041e-f25f-421d-9e5f-3462459b9934'
       }
       });*/
    window.location.href = 'http://localhost:4200/?id=4d79041e-f25f-421d-9e5f-3462459b9934'
      }
}

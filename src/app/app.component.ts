import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'MultiplicationApp';

  q1= Math.ceil(Math.random()*10)
  q2= Math.ceil(Math.random()*10)

num1:any;
sayac:number=0;

form:any;


answer(){

  if(this.num1 == this.q1*this.q2){
    this.sayac++;
    alert("Correct Answer");
    this.q1= Math.ceil(Math.random()*10)
    this.q2= Math.ceil(Math.random()*10)
    this.num1="";
  }
  else{
    this.sayac--;
    alert("Wrong Answer");
    this.num1="";
  }
}






  // onSubmit(): void {
  //   console.log(this.checkanswer);
  // }

  
}

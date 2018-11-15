import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
import { dateSortValue } from "ionic-angular/umd/util/datetime-util";

@Injectable()
export class ApiRest {
  public alumnos: any;
  public materias: any;
  //recibe el parametro y crea el atributo
  constructor(private http: Http) {
    this.getUsers();
    this.getMaterias();
  }
  getMaterias() {
    this.http.get("/assets/data/materias/materias.json")
      .subscribe(
        (res) => { //Todo Ok
          this.materias = res.json();
          console.log("TODO OK");
        },
        function (err) { //Error
          console.log("TODO ERROR");
        }
      );
  }

  getUsers() {
    this.http.get("/assets/data/users/users.json")
    //this.http.get("C:/Users/JoseSantiago/Documents/Repositorios de GitHub/YirisREPO/restServer/users.json")
      .subscribe(
        (res) => { //Todo Ok
          this.alumnos = res.json();
          console.log("TODO OK");
          console.log(this.alumnos);
        },
        function (err) { //Error
          console.log("TODO ERROR");
          console.log(err);
        }
      );
  }
}
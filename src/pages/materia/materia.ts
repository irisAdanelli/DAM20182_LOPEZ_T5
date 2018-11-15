import { MateriasRest } from './../../services/materiasrest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiRest } from '../../services/apirest';

/**
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materia',
  templateUrl: 'materia.html',
})
export class MateriaPage {

  nombre_user:any;
  photo_user:any;
  nc:any;
  materias: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public materiasrest: MateriasRest,
    public apirest: ApiRest,
    public storage:Storage) {
      this.nombre_user=navParams.get("user");
      this.photo_user=navParams.get("photo");
      this.storage.get('nc').then((val) => {
      this.nc=val;
      this.materiasrest.getMaterias(this.nc);
      
      this.materias = this.apirest.materias;
    });
  }

  goMat(): void {
    this.navCtrl.push(MateriaPage, {
     /*  nc: element.nc,*/
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaPage');
  }

}

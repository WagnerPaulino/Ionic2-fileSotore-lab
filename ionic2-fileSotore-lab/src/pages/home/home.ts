import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public existe:boolean = false;
  public feito='';
  constructor(public navCtrl: NavController, private file: File) {
    this.file.checkDir(this.file.dataDirectory, 'mydir')
      .then(_ => {
        this.existe = _;
      })
      .catch(err =>{
        this.existe = false;
      });
    this.file.createDir(this.file.dataDirectory,"ionicTeste",true)
      .then(data =>{
        this.feito = 'Diretorio criado com sucesso';
      })
      .catch(err => {
        this.feito = 'erro '+err;
      });
  }

}

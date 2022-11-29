import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
    nombre: 'Checkbox',
    seleccionado: false
    },
    {
    nombre: 'Checkbox 2',
    seleccionado: false
    },
    {
    nombre: 'Checkbox 3',
    seleccionado: false
    },
    {
    nombre: 'Checkbox 4',
    seleccionado: false
    },
    {
    nombre: 'Checkbox 5',
    seleccionado: false
    },
    {
    nombre: 'Checkbox 6',
    seleccionado: false
    },
]

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }



  onClick( item : any){
    if( item.seleccionado == true ){
      this.presentAlert1();
    }
    else{
      this.presentAlert2();
    }
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Ahora esta seteado',
      buttons: ['OK'],
    });
    alert.present();
}

async presentAlert2() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Ahora esta reseteado',
    buttons: ['OK'],
  });
  alert.present();
}


}

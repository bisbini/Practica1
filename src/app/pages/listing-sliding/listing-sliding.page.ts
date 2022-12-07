import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { userInfo } from 'os';

@Component({
  selector: 'app-listing-sliding',
  templateUrl: './listing-sliding.page.html',
  styleUrls: ['./listing-sliding.page.scss'],
})
export class ListingSlidingPage implements OnInit {

  personas : string[] =[
    "Pedro", "Juan", "Carolina", "Miguel", "Lionel", "Julieta"
  ]

  constructor( private DataService: DataService, private alertController: AlertController) { }

  

  ngOnInit() {

  }

  eliminar(user:any){
    console.log(user)
    this.presentAlert(user)
      return user
}

  compartir (user:any){
    console.log('Se ha Presionado compartir' , user)
  }




  async presentAlert(user:any) {
    const alert = await this.alertController.create({
      header: 'Esta seguro que desea elminar la lista?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            (console.log('Se ha cancelado la accion'));
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            for (let i = 0; i < this.personas.length; i++){
              if (this.personas[i]==user)
                //delete this.personas[i]
                this.personas.splice(i,1)}
            console.log(this.personas)
          
          
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  
  }

}

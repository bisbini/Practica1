import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet()
  }



  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.presentAlert()},
        },
        {
          text: 'Share',
          handler: () => {
            location.href="/grilla"
            }
          
            
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Se ha presionado Eliminar',
      buttons: ['OK'],
    });
    alert.present();
}

redirect(){

}
}




import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HReader';
  image ='';

  async takepic(){
    const photo = await Camera.getPhoto({
      quality:100,
      allowEditing:true,
      source: CameraSource.Prompt,
      resultType:CameraResultType.Base64

    });
  
    if (photo){
      this.image=`data:image/jpeg;base64,${photo.base64String}`!;
    }

  }


}

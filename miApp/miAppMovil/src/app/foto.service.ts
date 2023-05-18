import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(
    private platform: Platform
  ) { }

  public foto: UserFoto[] = [];

  public async addNewToGallery() {
    // Take a photo  
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100  });

      const fotoGuardada = await this.savePhoto(capturedPhoto);
  }
  private async savePhoto(foto: Photo){
  }
}

  export interface UserFoto {
    filepath: string;
    webviewPath: string;
  }
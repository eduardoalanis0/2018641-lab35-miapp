import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { fileURLToPath } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public fotos:

  public async addNewToGallery() {
    // Take a photo  
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100  });
  }
}

  export inteface UserFoto {
    filepath: string;
    webviewPath: string;
  }

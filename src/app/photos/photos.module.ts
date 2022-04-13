import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[PhotoComponent],
    imports:[
        HttpClientModule
    ],
    exports:[PhotoComponent]
})
export class PhotosModule{}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageSldierComponent } from "./components/imageSlider.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ImageSldierComponent],
    exports: [ImageSldierComponent],
})

export class ImageSliderModule {}
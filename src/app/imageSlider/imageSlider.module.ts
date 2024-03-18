import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageSldierComponent } from "./components/imageSlider.component";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
    imports: [CommonModule, LazyLoadImageModule],
    declarations: [ImageSldierComponent],
    exports: [ImageSldierComponent],
})

export class ImageSliderModule {}
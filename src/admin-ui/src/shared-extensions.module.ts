import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterSharedModule } from './extensions/a7b47a757d66acda007407cf84298e8d33e482005aa4d4293e79a8f4b3083365/greeter-shared.module';
import { SharedExtensionModule } from './extensions/a7b47a757d66acda007407cf84298e8d33e482005aa4d4293e79a8f4b3083365/product-reviews.module';


@NgModule({
    imports: [CommonModule, GreeterSharedModule, SharedExtensionModule],
})
export class SharedExtensionsModule {}

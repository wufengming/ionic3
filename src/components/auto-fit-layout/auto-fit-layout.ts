import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

/**
 * Generated class for the AutoFitLayout directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[my-auto-fit-layout]' // Attribute selector
})
export class AutoFitLayout {

  /**
   * 
   * 注入 ElementRef 的目的在于让指令可以引用到真实的 DOM 元素。
   * ElementRef这个类可以用来在宿主标签内注入其它标签的应用，这些应用并不仅仅局限于 DOM 元素。
   * Renderer 可以让我们在 AutoFitLayout 类里面的逻辑代码能够正确的渲染 DOM 元素的样式
  */

  private _domElem: ElementRef;
  private _renderer: Renderer;

  constructor(public element: ElementRef, public renderer: Renderer) {
    this._domElem = element.nativeElement
    this._renderer = renderer;
    console.log('Hello AutoFitLayout Directive');
    //因为ionic的默认padding宽度是16
    renderer.setElementStyle(element.nativeElement, 'width', `${(document.body.clientWidth - 32).toString()}px`);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this._renderer.setElementStyle(this._domElem, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._renderer.setElementStyle(this._domElem, 'backgroundColor', null);
  }

}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMesage();
  }


  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {

    // this.htmlElement.nativeElement.innerHTML ='Hola Mundo';
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement.nativeElement!.style.color = this._color;
  }

  setErrorMesage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    let result = '';

    if (errors.includes('required')) {
      result = 'Este campo es requerido';
    } else if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
       result = `Mínimo ${current}/${min} caracteres.`;
    } else if (errors.includes('email')) {
       result = 'No tiene formato de correo.';
    }
    this.htmlElement.nativeElement.innerText = result;
  }

}

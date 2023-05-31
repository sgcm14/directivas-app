import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  private fb = inject(FormBuilder);
  public color: string = 'green';

  public miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.minLength(6), Validators.email]]
  })

  constructor(
    // private fb: FormBuilder
  ) { }

  tieneError(campo: string):boolean {
    return this.miFormulario?.get(campo)?.invalid || false;
  }

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}

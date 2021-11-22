import { AbstractControl } from '@angular/forms';

export function cssValidator(control: AbstractControl) {
  if (control.invalid && control.touched) {
    return 'is-invalid';
  } else if (control.touched) {
    return 'is-valid';
  }
  return '';
}

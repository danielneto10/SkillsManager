import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.scss'],
})
export class SearchSkillComponent implements OnInit {
  @Input() value = '';
  @Output() sendFilter = new EventEmitter<string>();
  debouce = new Subject<string>();

  get filterValue() {
    return this.value;
  }

  set filterValue(v: string) {
    this.value = v;
    this.sendFilter.emit(this.value);
  }

  constructor() {}

  ngOnInit(): void {
    // this.debouce.subscribe((filter) => this.sendFilter.emit(filter));
  }
}

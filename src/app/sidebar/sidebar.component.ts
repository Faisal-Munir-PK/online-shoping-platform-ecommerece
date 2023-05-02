import { Component } from '@angular/core';
import { MockList } from 'mocks/list';
import type { IList } from '../Interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class Sidebar {
  items: IList[] = MockList;
}

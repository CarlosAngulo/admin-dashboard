import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Section 1',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Progress', url: '/progress' },
        { title: 'Graphics', url: '/graphics1' },
        { title: 'RxJS', url: '/rxjs' },
        { title: 'Observables', url: '/observables' },
      ]
    }
  ];

  constructor() { }
}

import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    // this.router.navigateByUrl('/navigation/(navigation:inventory)');
    this.router.navigate(['navigation', { outlets: { navigation: 'inventory' } }]);
  }

  constructor(public router: Router) { }

  ngOnInit() {
    // this.router.navigate(['inventory', {outlets: 'navigation'}]);
  }

}

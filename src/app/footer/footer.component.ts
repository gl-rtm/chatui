import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container">
      <span class="text-muted mx-auto">
          Powered by @SmartComm
      </span>
    </div>
  </nav>
  `
})
export class FooterComponent { }

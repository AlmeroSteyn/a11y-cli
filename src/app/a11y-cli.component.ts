import { Component } from '@angular/core';
import {WikiSearchComponent} from "./wiki-search/wiki-search.component";
import {WikiServiceService} from "./services/wiki-service.service";
import {JSONP_PROVIDERS} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'a11y-cli-app',
  templateUrl: 'a11y-cli.component.html',
  styleUrls: ['a11y-cli.component.css'],
  directives: [WikiSearchComponent],
  providers: [WikiServiceService, JSONP_PROVIDERS]
})
export class A11yCliAppComponent {
  title = 'a11y-cli works!';
}

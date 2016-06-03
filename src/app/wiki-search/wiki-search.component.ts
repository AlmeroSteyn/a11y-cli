import { Component, OnInit } from '@angular/core';
import {WikiServiceService} from "../services/wiki-service.service";
import {Observable} from "rxjs/Rx";
import {Control} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'a11y-wiki-search',
  templateUrl: 'wiki-search.component.html',
  styleUrls: ['wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {

  items : Observable<Array<string>>;
  term = new Control();

  constructor(private wikiService: WikiServiceService) {
    this.items = this.wikiService.search(this.term.valueChanges);
  }

  ngOnInit() {
  }

}

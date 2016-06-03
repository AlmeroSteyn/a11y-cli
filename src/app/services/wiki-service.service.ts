import {Injectable} from "@angular/core";
import {URLSearchParams, Jsonp} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";


@Injectable()
export class WikiServiceService {

  constructor(private jsonp: Jsonp) {}

  search(terms: Observable<string>, debounceDuration = 400){
    return terms.debounceTime(debounceDuration)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term));
  }

  rawsearch(term: string){
    var search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map(response => response.json()[1]);
  }

}

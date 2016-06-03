import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WikiSearchComponent } from './wiki-search.component';

describe('Component: WikiSearch', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WikiSearchComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WikiSearchComponent],
      (component: WikiSearchComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WikiSearchComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WikiSearchComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <a11y-wiki-search></a11y-wiki-search>
  `,
  directives: [WikiSearchComponent]
})
class WikiSearchComponentTestController {
}


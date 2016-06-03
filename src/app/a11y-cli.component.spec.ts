import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { A11yCliAppComponent } from '../app/a11y-cli.component';

beforeEachProviders(() => [A11yCliAppComponent]);

describe('App: A11yCli', () => {
  it('should create the app',
      inject([A11yCliAppComponent], (app: A11yCliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'a11y-cli works!\'',
      inject([A11yCliAppComponent], (app: A11yCliAppComponent) => {
    expect(app.title).toEqual('a11y-cli works!');
  }));
});

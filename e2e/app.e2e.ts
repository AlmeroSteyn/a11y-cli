import { A11yCliPage } from './app.po';

describe('a11y-cli App', function() {
  let page: A11yCliPage;

  beforeEach(() => {
    page = new A11yCliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('a11y-cli works!');
  });
});

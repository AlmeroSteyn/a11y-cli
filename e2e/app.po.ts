export class A11yCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a11y-cli-app h1')).getText();
  }
}

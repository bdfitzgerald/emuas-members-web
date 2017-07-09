import { browser, by, element } from 'protractor';

export class EmuasMembersWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('emuas-root h1')).getText();
  }
}

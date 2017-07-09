import { EmuasMembersWebPage } from './app.po';

describe('emuas-members-web App', () => {
  let page: EmuasMembersWebPage;

  beforeEach(() => {
    page = new EmuasMembersWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to emuas!!');
  });
});

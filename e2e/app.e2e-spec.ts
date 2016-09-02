import { LunaPage } from './app.po';

describe('luna App', function() {
  let page: LunaPage;

  beforeEach(() => {
    page = new LunaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

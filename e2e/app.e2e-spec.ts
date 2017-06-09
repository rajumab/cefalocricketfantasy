import { CefaloCricketFantasyPage } from './app.po';

describe('cefalo-cricket-fantasy App', function() {
  let page: CefaloCricketFantasyPage;

  beforeEach(() => {
    page = new CefaloCricketFantasyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

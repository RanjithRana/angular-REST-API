import { RanaPage } from './app.po';

describe('rana App', function() {
  let page: RanaPage;

  beforeEach(() => {
    page = new RanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

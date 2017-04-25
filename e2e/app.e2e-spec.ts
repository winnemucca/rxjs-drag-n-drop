import { DropBoxPage } from './app.po';

describe('drop-box App', () => {
  let page: DropBoxPage;

  beforeEach(() => {
    page = new DropBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

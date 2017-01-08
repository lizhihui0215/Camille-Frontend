import { CamillePage } from './app.po';

describe('camille App', function() {
  let page: CamillePage;

  beforeEach(() => {
    page = new CamillePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

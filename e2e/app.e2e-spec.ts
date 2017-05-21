import { AnguLearninPage } from './app.po';

describe('angu-learnin App', () => {
  let page: AnguLearninPage;

  beforeEach(() => {
    page = new AnguLearninPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

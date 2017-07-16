import { GeneByGeneTemplatePage } from './app.po';

describe('Gene by Gene App', function() {
  let page: GeneByGeneTemplatePage;

  beforeEach(() => {
    page = new GeneByGeneTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

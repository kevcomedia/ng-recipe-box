import { NgRecipeBoxPage } from './app.po';

describe('ng-recipe-box App', () => {
  let page: NgRecipeBoxPage;

  beforeEach(() => {
    page = new NgRecipeBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

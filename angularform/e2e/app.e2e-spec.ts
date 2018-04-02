import { AngularformPage } from './app.po';

describe('angularform App', () => {
  let page: AngularformPage;

  beforeEach(() => {
    page = new AngularformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

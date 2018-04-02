import { HttpServiceProjectPage } from './app.po';

describe('http-service-project App', () => {
  let page: HttpServiceProjectPage;

  beforeEach(() => {
    page = new HttpServiceProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

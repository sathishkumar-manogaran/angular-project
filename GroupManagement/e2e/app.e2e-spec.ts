import { GroupManagementPage } from './app.po';

describe('group-management App', () => {
  let page: GroupManagementPage;

  beforeEach(() => {
    page = new GroupManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('app-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-profile></app-profile>');

    const element = await page.find('app-profile');
    expect(element).toHaveClass('hydrated');
  });
  
  it('should not render any content if there is not a match', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-profile></app-profile>');

    const element = await page.find('app-profile');
    expect(element.textContent).toEqual('');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-profile></app-profile>');
    await page.$eval('app-profile', (elm: any) => {
      elm.match = {
        path: '',
        url: '',
        isExact: false,
        params: {
          name: 'stencil'
        }
      };
    });

    const element = await page.find('app-profile >>> p');
    expect(element.textContent).toEqual('Hello! My name is stencil. My name was passed in through a route param!');
  });
});

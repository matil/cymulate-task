import {test as base} from '@playwright/test';
import {LoginPage} from './login-page';

type LoginPageFixture = {
	loginPage: LoginPage;
};

export const test = base.extend<LoginPageFixture>({
	loginPage: async ({page}, use) => {
		const loginPage = new LoginPage(page);

		await loginPage.gotoAndLogin(process.env.USER_NAME!, process.env.PASSWORD!);

		await use(loginPage);
	}
});

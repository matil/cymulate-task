import {Page, Locator} from '@playwright/test';

export class LoginPage {
	readonly page: Page;
	readonly fieldEmail: Locator;
	readonly fieldPassword: Locator;
	readonly btnSignIn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.fieldEmail = this.page.getByTestId('email');
		this.fieldPassword = this.page.getByTestId('password');
		this.btnSignIn = this.page.getByTestId('sign-in');
	}

	getFieldEmail() {
		return this.fieldEmail;
	}

	getFieldPass() {
		return this.fieldPassword;
	}

	getBtnSignIn() {
		return this.btnSignIn;
	}

	async goto(): Promise<void> {
		await this.page.goto('login');
	}

	async login(email: string, password: string): Promise<void> {
		await this.fieldEmail.fill(email);
		await this.fieldPassword.fill(password);
		await this.btnSignIn.click();
	}

	async gotoAndLogin(email: string, password: string): Promise<void> {
		await this.goto();
		await this.login(email, password);
	}
}

import {expect, Page} from '@playwright/test';

export async function reportValidate(page: Page): Promise<void> {
	await page.locator('[data-testid="link-button-Reports"]').click();
	const dashboardCard = page.locator('.dashboard-card').filter({hasText: 'Web Application Firewall'});
	const btnHistory = dashboardCard.locator('.btn-cymulate').filter({hasText: 'History'});
	await btnHistory.click();

	const labelCompleted = page.locator('.attack-status').filter({hasText: 'Completed'})[0];
	await labelCompleted.click();
}

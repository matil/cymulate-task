import {expect, Page} from '@playwright/test';

export async function reportValidate(page: Page): Promise<void> {
	await page.locator('[data-testid="link-button-Reports"]').click();
	const dashboardCard = page.locator('.dashboard-card').filter({hasText: 'Web Application Firewall'});
	const btnHistory = dashboardCard.locator('.btn-cymulate').filter({hasText: 'History'});
	await btnHistory.click();

	const firstReport = page.locator('[data-tip="Full Report"]').first();
	await firstReport.click({timeout: 20_000});

	const score = page.locator('.score-text').textContent();
	const urlBox = page.locator('.summary-data').filter({hasText: 'URL'});
	const url = urlBox.locator('.report-summary-data');
	const status = page.locator('.assessment-status-report');

	if (!score) {
		const scoreNumber = parseInt(score);
		expect(scoreNumber).toBeGreaterThan(20);
	}
	await expect(url).toHaveText('https://ekslabs.cymulatedev.com');
	await expect(status).toHaveText('Completed');

	const btnGenerate = page.locator('.btn-cymulate').filter({hasText: 'Generate Report'});
	await btnGenerate.click();

	const generateReportBox = page.locator('.generate-report-dropdown-popup');
	const btnCSV = generateReportBox.locator('.cymulate-green').filter({hasText: 'CSV'});
	await btnCSV.click();

	const result = page.locator('.cym-legacy-heading');
	await expect(result).toHaveText('Success');
}

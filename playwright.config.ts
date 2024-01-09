import { devices } from '@playwright/test';

export default ({
    testDir: './spec',
    timeout: 30_000,
    expect: {
        timeout: 10000,
    },

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 1 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['line'],
        ['html'], ['./playwright-report.ts'],
        ['html', { open: 'never' }],
        ['@serenity-js/playwright-test', {
            crew: [
                '@serenity-js/console-reporter',
                '@serenity-js/serenity-bdd',
                ['@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' }],
            ],
        }],
    ],
    use: {
        trace: 'on',
        headless: true,
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});

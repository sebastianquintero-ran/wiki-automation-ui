import { describe, it } from '@serenity-js/playwright-test';
import { validateSearchPositiveResult, validateSearchNegativeResult } from "../../src/tasks/search"
import config from "../../config/config"

describe('Navigate to Wikipedia web site', () => {

    describe('Search by a specific term @search', () => {

        it('Should see a result from the search', async ({ actor }) => {
            await actor.attemptsTo(
                validateSearchPositiveResult(),
                validateSearchNegativeResult());
        });
    })
});

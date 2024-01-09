import 'mocha';

import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver, configure } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import * as playwright from 'playwright';
import { Actors } from '../../src';

/**
 * @desc
 *  Set up Serenity/JS reporting services before any scenarios are executed
 *
 * @see https://serenity-js.org/handbook/reporting/index.html
 */

async function createInstanceForPlaywright(){
    const browser = await playwright['chromium'].launch();
    const options: playwright.BrowserContextOptions = {};
    const baseApiUrl = process.env.URL_BASE || 'https://es.wikipedia.org/wiki/Wikipedia:Portada';

    return new Actors(browser, options, baseApiUrl)
}

(async () => {
    configure({
        actors: await createInstanceForPlaywright(),
        crew: [
            ConsoleReporter.withDefaultColourSupport(),
            new SerenityBDDReporter(),
            ArtifactArchiver.storingArtifactsAt(__dirname, '../../target/site/serenity'),
        ]
    });
})();

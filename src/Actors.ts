import { BrowseTheWebWithPlaywright, PlaywrightOptions} from "@serenity-js/playwright";
import * as playwright from 'playwright';
import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { ensure, isNotBlank } from 'tiny-types';

export class Actors implements Cast {
    constructor(
        private readonly browser: playwright.Browser,
        private readonly options: PlaywrightOptions,
        private readonly baseApiUrl: string
    ) {
        ensure('apiUrl', baseApiUrl, isNotBlank());
    }

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.at(this.baseApiUrl),
            TakeNotes.usingAnEmptyNotepad(),
            BrowseTheWebWithPlaywright.using(this.browser, this.options)
        );
    }
}
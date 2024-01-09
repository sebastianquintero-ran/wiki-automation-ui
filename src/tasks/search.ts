import { Ensure, equals } from '@serenity-js/assertions';
import {Answerable, d, Duration, Task, Wait} from '@serenity-js/core';
import { Click, Enter, Navigate } from '@serenity-js/web';
import config from "../../config/config"
import { titleResultVisible } from "../questions/common-questions"
import { inputSearchBox, inputType, searchButton, searchResult } from '../ui';

export const validateSearchFunction = (): Task =>
    Task.where(d`#actor serch a term to validate the functionality`,
        Navigate.to(config.URL_BASE),
        Click.on(inputSearchBox()),
        Enter.theValue("Círculos de quintas").into(inputType()),
        Click.on(searchButton()),
        Click.on(searchResult()),
        Ensure.that(titleResultVisible(),equals('Círculo de quintas'))
    )

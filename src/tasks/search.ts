import { Ensure, contain, equals, startsWith } from '@serenity-js/assertions';
import {Answerable, d, Duration, Task, Wait} from '@serenity-js/core';
import { Click, Enter, Navigate, isVisible } from '@serenity-js/web';
import config from "../../config/config"
import { titleResultNotVisible, titleResultVisible } from "../questions/common-questions"
import { inputSearchBox, inputType, searchButton, searchResult } from '../ui';


export const validateSearchPositiveResult = (): Task =>
    Task.where(d`#actor serch a term to validate the functionality`,
        Navigate.to(config.URL_BASE),
        Click.on(inputSearchBox()),
        Enter.theValue("Círculos de quintas").into(inputType()),
        Click.on(searchButton()),
        Click.on(searchResult()),
        Ensure.that(titleResultVisible(),equals('Círculo de quintas'))
    )

export const validateSearchNegativeResult = (): Task =>
    Task.where(d`#actor search a term to validate the functionality`,
        Click.on(inputSearchBox()),
        Enter.theValue("El progreso del arconte").into(inputType()),
        Click.on(searchButton()),
        Ensure.that(titleResultNotVisible(), startsWith('Si consideras que este artículo debería existir, conoces nuestros pilares, dispones de fuentes fiables y sabes indicarlas como referencias, puedes crearlo, opcionalmente usando nuestro asistente.'))
    )
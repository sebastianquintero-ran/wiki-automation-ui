import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const titleResultVisible = () =>
    Text.of(
        PageElement.located(By.xpath('//*[@id="firstHeading"]/span'))
    ).describedAs('Título del artículo')


export const titleResultNotVisible = () =>
    Text.of(
        PageElement.located(By.xpath('//*[@id="mw-content-text"]/div[4]/div[1]/p'))
    ).describedAs('Sugerencia de creación de artículo')

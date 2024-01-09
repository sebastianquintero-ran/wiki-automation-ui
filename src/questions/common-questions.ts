import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const titleResultVisible = () =>
    Text.of(
        PageElement.located(By.xpath('//*[@id="firstHeading"]/span'))
    ).describedAs('Título del artículo')

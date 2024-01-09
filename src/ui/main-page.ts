import { By, PageElement } from '@serenity-js/web';

export const inputSearchBox = () =>
    PageElement
        .located(By.id('searchInput').describedAs('Input del buscador, se activa con un clic antes de escribir'));

export const inputType = () =>
    PageElement
        .located(By.xpath('//input[@name="search"]').describedAs('Type del buscador, para ingresar el texto'))

export const searchButton = () =>
    PageElement
        .located(By.xpath('//form[@id="searchform"]/div/button').describedAs('Botón buscar'))

export const searchResult = () =>
    PageElement
        .located(By.xpath('//body[1]/div[2]/div[1]/div[3]/main[1]/div[3]/div[3]/div[3]/div[4]/ul[1]/li[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/a[1]/span[2]'))



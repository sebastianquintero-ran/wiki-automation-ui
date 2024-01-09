export function phoneGen():number {
    const numberGen = Math.floor(Math.random() * 1000000000)
    return Number(`3${numberGen.toString().padStart(9, '0')}`)
}

export function identificationGen(): number{
    const numberGen = Math.floor(Math.random() * 1000000000)
    return Number(numberGen.toString().padStart(9, '0'))
}
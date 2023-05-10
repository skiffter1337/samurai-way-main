


export const required = (value: string) => {
    if(value) return undefined

    return "field is required"
}
export const maxLengthCreator = (maxLength: number) => (value: string) => value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined

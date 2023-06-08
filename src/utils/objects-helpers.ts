export const updateObjectsInArray = (items: any[], itemId: number, objPropName: string, newObjProps: object) => {
    return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}

export type SidebarType = {
    sidebarData: SidebarDataType[]
}
export type SidebarDataType = {
    name: string
}

let initialState: SidebarType = {
    sidebarData: [
        {name: "Egor"},
        {name: "Pavel"},
        {name: "Ilya"}
    ]
}


const sideBarReducer = (state = initialState, action: any): SidebarType => {
     if(action) {

     }
     return state
}

export default sideBarReducer;
export const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: { type: 'SET_THEME_ID', id: number }): typeof initState => { 
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number } => ({ type: 'SET_THEME_ID', id }) 
export default (state = {menuOpen: false}, action) => {
  switch (action.type) {
    case 'TOGGLEMENU':
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    default:
      return state
  }
}

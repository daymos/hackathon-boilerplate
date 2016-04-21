const initialState = {
  title: 'Hello Home!',
  auth: false,
  userDetails: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGETITLE':
      return {...state, title: action.payload}
    default:
      return state
  }
}

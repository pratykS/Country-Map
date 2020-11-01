const initialState = {
  theme: "streets-v11",
  center: [72.805,19.1593],
  zoomLevel:10
}

const mapData = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      	return {
        	...state,
        	theme:action.theme
      	}
    case 'SET_CENTER':
      	return {
        	...state,
        	center:action.center
        }
    default:
      return state
  }
}

export default mapData
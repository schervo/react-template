// @flow
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import vars from './variables'
import { lime } from 'material-ui/colors';


// http://www.material-ui.com/#/customization/themes
const getMuiThemeConfig = (userAgent: ?string): Object => createMuiTheme({
  palette: {
    primary: lime
  }
})


export default getMuiThemeConfig

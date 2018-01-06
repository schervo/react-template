// @flow
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Cn from 'classnames'

import RequireAuth from '../../shared/RequireAuth'
import css from './Home.style.css'
import type { ReduxProps } from './'

import { withStyles } from 'material-ui/styles';


import Button from 'material-ui/Button';



type Props = ReduxProps & {
  history: Object,
  classes: Object
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary['A200']
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Home extends PureComponent<Props> {

  // TODO: watch for resolution of
  // https://github.com/yannickcr/eslint-plugin-react/issues/1376
  props: Props

  handleLogout = () => {

    const {
      logout,
      history,
    } = this.props

    logout(history)

  }

  render () {
    const {classes}=this.props

    return (
      <div className={css.home}>
        <Helmet title="Home" />
        This is the app...
        <ul>
          <li>This is a test item</li>
        </ul>
        <Button className={classes.button} raised color="primary">
          Delete
        </Button>
        <Link to="/profile">
        </Link>
        <Link to="/todos">
        </Link>
        <RequireAuth>
          <button onClick={this.handleLogout}>Logout</button>
        </RequireAuth>
      </div>
    )

  }

}



export default withStyles(styles)(Home);

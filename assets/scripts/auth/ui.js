'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('sign in success ran', data)
  store.user = data.user
  console.log(store)
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  console.log('sign out success ran with no returns')
}

const signOutFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}

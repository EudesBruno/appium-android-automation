import userData from '../data/userData.json' with {type:"json"}


import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import menuScreen from '../screen/menu.screen.js'
import loginScreen from '../screen/login.screen.js'


describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
      await menuScreen.accessorLoginScreen()  
      await loginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password)
      await expect($(loginScreen.errorMessage)).toHaveText('Provided credentials do not match any user in this service.')
    })

    it('should login with valid credentials', async () => {
      await menuScreen.accessorLoginScreen()  
      await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
      await expect($(loginScreen.errorMessage)).toHaveText('Provided credentials do not match any user in this service.')
    })
})


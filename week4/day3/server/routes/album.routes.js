const AccountController = require('../controllers/account.controller')


module.exports = app => {
    app.get('/api/showAllAccounts',AccountController.allAccounts),
    app.get('/api/account/:id', AccountController.getOneAccount),
    app.post('/api/accounts/new', AccountController.newAccount),
    app.put('/api/updateAccount/:id', AccountController.updateAccount),
    app.delete('/api/delete/account/:id', AccountController.deleteAccount)
}
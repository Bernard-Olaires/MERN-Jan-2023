const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

let accounts = [
    {id:1, nameOnAccount:'Ashley', accountNumber:'123-456-789', checking:500, savings:4000},
    {id:2, nameOnAccount:'Robert', accountNumber:'234-567-891', checking:300, savings:200}
]

// * Get all accounts  
app.get('/api/showAllAccounts', (req, res) => {
    // console.log(res);
    res.json(accounts)
})

// * Get one account by id
app.get('/api/account/:id', (req, res) => {
    // console.log(req);
    let id = req.params.id
    let accountToShow = accounts.filter((account) => account.id == id)
    if(accountToShow.length > 0){
        res.json(accountToShow)
    }else{
        res.json({message:'That account doesnt exist'})
    }
})


// * Create a new account
app.post('/api/accounts/new', (req, res) => {
    console.log("********REQ.BODY********===>", req.body);
    const newAccount = req.body
    // accounts = [...accounts, newAccount]
    accounts.push(newAccount)
    res.json(accounts)
})

// * Update account by id
app.put('/api/updateAccount/:id', (req, res) => {
    let id = req.params.id
    let newAccountList = accounts.map((account) => {
        if(account.id == id){
            account = req.body
        }
        return account
    })
    accounts = newAccountList
    res.json(accounts)
})

// * Delete account by id
app.delete('/api/delete/account/:id', (req,res) => {
    let id = req.params.id
    let updatedAccountList = accounts.filter((account) => account.id != id)
    accounts = updatedAccountList
    res.json(accounts)
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
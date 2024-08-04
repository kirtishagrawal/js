const accountId = 123456 //defining constant//
let accountEmail = "kirtsh@gmail.com" //define variable (good to use)//
var password = "abcdef" //define variable (dont use because of block scope issue)//
accountCity = "patna" //define varibale (worst way to use) //

//accountId = 4 (not allowed)// 

accountEmail = "abcd@gmail.com" 
password = "12345"
accountCity = "delhi"
/*
multiline comment
*/


console.log(accountId) //normal print//

console.table([accountId, accountEmail, password, accountCity]) //print in table format//
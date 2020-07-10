# Installation

```bash
$ npm i unique-password
```

## Options

 - import the package in the project

 - first argument will specify the type of password and second argument will specify the length of password

 - type should be : ` "alphabets" / "number" / "all" / "" `

 - length should be a `number`


## Usage

var passowrd = require("unique-password")

```bash
let numberPassword = passowrd("number",10)
 # console.log(numberPassword) // a 10 digit random password contaning integer values

let alphabetsPassword = passowrd("alphabets",18) 
# console.log(alphabetsPassword) // a 18 characters long random password contaning alphabets


let randomPassword = passowrd("all",5)
 # console.log(randomPassword) // a password contaning alphanumeric chars and symbols of length 5


let numberPassword = passowrd("",8) 
# console.log(numberPassword) // a password contaning alphanumeric chars and symbols of length 8

```

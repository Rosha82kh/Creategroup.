function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
//https://localhost:8080/api/Auth/Register
/*
async function get(){
    const response= await fetch("https://localhost:8080/swagger/index.html")
    const data=await response.json()
    console.log(data)
}
get()

*/
/*
// use https://www.postman.com/ to try the code and recieve token
//download packages => nodemon +express+jsonwebtoken


const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const fs=require('fs')
//create file secret.key with our secret word

let secret=fs.readFileSync('secret.key')

//http://localhost:5000/api
app.get('/api', (req,res)=>{
    res.json({
        message:'hello world'
    })
})


app.post('/api/posts', verifyingtoken,(req,res)=>{
    jwt.verify(req.token,secret,(err,data)=>{
        if(err){res.sendStatus(403)}
    }
    res.json({
        message:'post created'
        data
    })
})
//login form
app.post('/api/login', (req,res)=>{
    const user={
        id:1,
        username:'meme',
        password:'imankhayat'
    }
    jwt.sign({user}, secret,(err,token)=>{
        if(err){
            res.json({
                message:'username or password not valid/correct'
            })
        }
        res.json({token})

    })


    Function verifyingtoken(req,res,next){
//format of token =>Authorization:Bearer<token>
        const bearerHeader=req.headers['authorization']
        if(typeof bearerHeader!=='undefined'){
//split at space
            const bearer=bearerHeader.split('')
//get token from Array
            const token =bearer[1]
//set the token
            req.token=token
            next()
        }else{
            res.sendStatus(403)
        }

    }




    app.listen('5000',()=> console.log('server started on port 5000'));


*/

//login form
app.post('https://localhost:8080/api/Auth/Login', (req,res)=>{
    const user={
        email:'admin',
        password:'admin'
    }
    jwt.sign({user}, secret,(err,token)=>{
        if(err){
            res.json({
                message:'username or password not valid/correct'
            })
        }
        res.json({token})

    })
    }


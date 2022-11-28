

let Name=document.getElementById("userName");
let Owed=document.getElementById("userOwed");
let Paid=document.getElementById("userPaid");
let btnNewUser=document.getElementById("btnNewUser")
let showTable=document.getElementById("tbodyU")


//create User
let userData;
if(localStorage.User != null){
    userData=JSON.parse(localStorage.User)
}
else{
    userData=[];
}



btnNewUser.onclick=function(){
    let newUser={
        Name:Name.value,
        Owed:Owed.value,
        Paid:Paid.value,
     }
    if (Array.isArray(userData)) {
        userData.push(newUser);

    }
    //save local storage
    localStorage.setItem("User",JSON.stringify(userData))
    ShowUserData()
}
ShowUserData()
  function ShowUserData(){
    let MyTable=""
    for(let i=0;i<userData.length;i++) {
        MyTable += `

           <tr>
                                <td>${userData[i].Name}</td>
                                <td>${userData[i].Owed}</td>
                                <td>${userData[i].Paid}</td>
                                <td>${userData[i].total}</td>
                                <td><button id="update">update</button></td>
                                <td><button onclick="deleteData(i)" id="delete">delete</button></td>
           </tr>
               `
    }
     document.getElementById("tbody").innerHTML=MyTable
}
 //get total

function getUserTotal(){
    if(userPaid.value != null && userOwed !=null){
     total=userPaid-userOwed.value;
    }return total;
}
let result=getUserTotal();
console.log(result)

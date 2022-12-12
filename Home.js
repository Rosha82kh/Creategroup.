
let Name=document.getElementById("userName");
let Owed=document.getElementById("userOwed");
let Paid=document.getElementById("userPaid");
let btnNewUser=document.getElementById("btnNewUser")
let showTable=document.getElementById("tbodyU")
let result=0;
let mood="Add new member"
let temp;

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
      if(mood ==="Add new member"){
          if (Array.isArray(userData)) {
              userData.push(newUser);
               ShowUserData()

          }else {
              userData[temp]=newUser;
              mood="Add new member"
              btnNewUser.innerHTML="Add new member";
               ShowUserData()
          }
      }}

    //save local storage
    localStorage.setItem("User",JSON.stringify(userData))
    clearData()
    ShowUserData()


   function ShowUserData(){
    let MyTable=""
    for(let i=0;i<userData.length;i++) {
        MyTable += `

           <tr>
                                <td>${userData[i].Name}</td>
                                <td>${userData[i].Owed}</td>
                                <td>${userData[i].Paid}</td>
                                <td>${userData[i].result}</td>
                                <td><button onclick="update(${i})" id="update">update</button></td>
                                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
           </tr>
               `
    }
     document.getElementById("tbody").innerHTML=MyTable
}
 //get total
/*
function getUserTotal(){
    if(userPaid.value != null && userOwed !=null){
     total=userPaid-userOwed.value;
    }return total;
}
*/

//delete All
let btndeleteUserAll=document.getElementById("deleteAll")
if(userData.length>0){
    btndeleteUserAll.innerHTML=  " <button onClick={deleteAll()} id='deleteAll'>deleteAll</button>"
}else{
    btndeleteUserAll.innerHTML=""
}

//delete
function deleteData(i){
    userData.splice(i,1)
    localStorage.User=JSON.stringify(userData)
    ShowUserData()
  //  getUserTotal()
 }
function deleteAll(){
    localStorage.clear()
    userData.splice(0)
    ShowUserData()
 }
ShowUserData()

/*
var sumVal=0
let i;
let table=document.getElementsByTagName('table')

  for(let i=1;i < table.length;i++){
        sumVal=sumVal + parseInt(table.rows[i].cells[2].innerHTML);
     let res1=table.rows.length-1;
     let res2=sumVal/res1;
     for(let j=1;j < table.rows.length;j++){
         result=parseInt(table.rows[j].cells[1].innerHTML)-res2
         table.rows[0].cells[3].innerHTML=result
 }
}*/
  /*
 let pro= new Promise((resolve,reject))=>{
      if (isSuccess){
          resolve()
      }else{
          reject
      }).then(()=>{
          console.log("the promise is done")
    }).catch(()=>{
        console.log("error")
    })
}*/
/*
fetch("https://localhost:8080/")
    .then(function(response){
    return response.json();

})
    .then(function(data){
    console.log(data)
})

async function get(){
    const response= await fetch("https://localhost:8080/create")
    const data=await response.json()
    console.log(data)
}
get()

 */

//update
function update(i){
    Name.value=userData[i].Name;
    Owed.value=userData[i].Owed;
    Paid.value=userData[i].Paid;
     temp=i;
    btnNewUser.innerHTML="update";
    mood="update"
     scroll({
        top:0,
        behavior: "smooth"
    })
    ShowUserData()
}

//clear input
function clearData(){
    name.value="";
    Owed.value="";
    Paid.value="";
}
ShowUserData()

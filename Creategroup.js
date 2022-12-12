 let name=document.getElementById("Ngroup")
 let category=document.getElementById("category")
 let search=document.getElementById("search")
 let balance=document.getElementById("balance")
 let participantsNumber=document.getElementById("participantsNumber")
 let total=document.getElementById("total")
 let btnCreate=document.getElementById("btnCreate")
 let mood="create group";
let temp;
// btnCreate.addEventListener("click",createGroup)

 //get total
 function getTotal(){
    if(balance.value != null){
        let result = +balance.value;
        total.innerHTML="Total :"+""+result;
        total.style.background="darksalmon";

    }else{
        total.innerHTML="Total :"+"";
        total.style.background="red"
    }
  }



 //create group
 let groupData;
 if(localStorage.Group != null){
     groupData=JSON.parse(localStorage.Group)
     console.log(groupData)
 }else{
     groupData=[];
 }

 btnCreate.onclick=function(){
     let newGroup={
         name:name.value,
         participantsNumber:participantsNumber.value,
         category:category.value,
         balance:balance.value,
         total:total.innerHTML}
     if(mood ==="create group"){
         if (Array.isArray(groupData)) {
             groupData.push(newGroup);
             showData()

         }
     }else {
         groupData[temp]=newGroup;
         mood="create group";
         btnCreate.innerHTML="create group";
         showData()

     }
 }
     //save local storage
     localStorage.setItem("Group",JSON.stringify(groupData))
     clearData()
     showData()



 //clear input
 function clearData(){
  name.value="";
  participantsNumber.value="";
  category.value="";
  balance.value="";
  total.innerHTMl="";
 }
 showData();

//read

 function showData(){
     let Mytable="";
   for( let i=0;i<groupData.length;i++) {
       Mytable += `

           <tr>
                                <td>${i}</td>
                                <td>${groupData[i].name}</td>
                                <td>${groupData[i].category}</td>
                                <td>${groupData[i].balance}</td>
                                <td>${groupData[i].participantsNumber}</td>
                                <td>${groupData[i].total}</td>
                                <td><button id="update" onclick="update(${i})">update</button></td>
                                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
           </tr>
               `
   }
 document.getElementById("tbody").innerHTML=Mytable
 }
    let btndeleteAll=document.getElementById("deleteAll")
   if(groupData.length>0){
       btndeleteAll.innerHTML=  " <button onClick={deleteAll()}>deleteAll</button>"
    }else{
       btndeleteAll.innerHTML=""
   }
 showData()
//count
//delete
 function deleteData(i){
     groupData.splice(i,1)
     localStorage.Group=JSON.stringify(groupData)
     showData()
  }
 function deleteAll(){
     localStorage.clear()
     groupData.splice(0)
     showData()
 }
//update
 function update(i){
     name.value=groupData[i].name;
     participantsNumber.value=groupData[i].participantsNumber;
     category.value=groupData[i].category;
     balance.value=groupData[i].balance;
     getTotal()
     temp=i;
     btnCreate.innerHTML="update";
     mood="update"
      scroll({
         top:0,
         behavior: "smooth"
     })
     showData()
 }
//search
//clean data

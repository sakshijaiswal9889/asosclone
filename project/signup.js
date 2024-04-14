let form=document.querySelector("form")
function handleFormSubmit(e){
e.preventDefault()
// console.log(e)
// let value=e.target
// console.log(value)

let targetElement=e.target
let username=targetElement[0].value
let email=targetElement[1].value
let password=targetElement[2].value
let confirm=targetElement[3].value
let data=[]


function saveData(key,arr){
localStorage.setItem(key,JSON.stringify(arr))
}
function loadData(){
let saveData=JSON.parse(localStorage.getItem("data")) 

if(saveData) {
    data=saveData
}  
}

if(password==confirm){
    let obj={
        user:username,
        email:email,
        password:password
    }
    data.push(obj)
    saveData()
    console.log(data)
    alert("Resistrationsuceessful")
    window.location.href="login.html"

}else{
    alert("passwords not matching")
}
}


form.addEventListener("submit",function(event){
    handleFormSubmit(event)
})
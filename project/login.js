let form=document.querySelector("form")
let data;
function loadData(){
    
    let saveData=JSON.parse(localStorage.getItem("data"))
    if(saveData){
        data=saveData
    }
    console.log(data)
}



function handleClick(event){
    event.preventDefault()
    let targetElement=event.target
    let email=targetElement[0].value
    let password=targetElement[1].value
console.log(data)
}
form.addEventListener("submit",function(event){

})
loadData()
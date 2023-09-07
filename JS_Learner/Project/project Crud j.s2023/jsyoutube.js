// global variables
let UserAllData = [];

let Name1 = document.querySelector('#Name');
let Email1 = document.querySelector('#Email');
let Mobile1 = document.querySelector('#Mobile');

let submit = document.querySelector('#submit');

let FormUK1 = document.querySelector('#FormUK');

// End of global variables

submit.addEventListener('click', (event) => {
    event.preventDefault()
    SubmitData()
    FormUK1.reset("");
    GetDataFormLocal()
})
function SubmitData() {

    UserAllData.push({
        Name: Name1.value,
        Email: Email1.value,
        Mobile: Mobile1.value
    })
//////////// Data set on LocalStorge //////////
    let vk1 = JSON.stringify(UserAllData);
    localStorage.setItem('UserAllData', vk1);
    GetDataFormLocal()
}
/// Data get ///
if (localStorage.getItem("UserAllData") != null) {
    UserAllData = JSON.parse(localStorage.getItem("UserAllData"));

}
///////////// Data get on HTML page ////////////
const GetDataFormLocal = () => { /// use of this function other place or miltiple time
    let table = ``;
    UserAllData.map((Data,index) =>{ /// this is Loop
        table +=
        `<tr key={${index}}>
               <td class="td1">${index + 1}</td>
               <td class="td1">${Data.Name}</td>
               <td class="td1">${Data.Email}</td>
               <td class="td1">${Data.Mobile}</td>
               <td class="td1"><span class="material-symbols-outlined">sync_alt</span></td>
               <td class="td1 DELETE"><i class="fa-solid fa-rectangle-xmark"></i></td>
       </tr>`
        document.getElementById('tbody').innerHTML = table;
})
///////// Delete Button ////////////
    let dLen ;
    let DeleteButton = document.querySelector(".DELETE");
    for(dLen = 0; dLen<DeleteButton.lenght; dLen++ ){
        DeleteButton[dLen].onlick = () =>{
           
            UserAllData.splice(dLen,1)
        }
    }
}
GetDataFormLocal()


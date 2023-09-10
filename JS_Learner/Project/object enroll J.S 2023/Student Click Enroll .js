let Object_Student = [{
    Id: 1,
    Name: "Vishal Kumar",
    Marks: 70,
},
{
    Id: 2,
    Name: "Vishal1 Kumar",
    Marks: 60,
},
{
    Id: 3,
    Name: "Vishal2 Kumar",
    Marks: 50,
},
{
    Id: 4,
    Name: "Vishal3 Kumar",
    Marks: 70,
},
{
    Id: 5,
    Name: "Vishal4 Kumar",
    Marks: 80,
},
{
    Id: 6,
    Name: "Vishal5 Kumar",
    Marks: 40,
},
{
    Id: 7,
    Name: "Vishal6 Kumar",
    Marks: 20,
},
{
    Id: 8,
    Name: "Vishal7 Kumar",
    Marks: 100,
},
{
    Id: 9,
    Name: "Vishal8 Kumar",
    Marks: 95,
},
{
    Id: 10,
    Name: "Vishal9 Kumar",
    Marks: 10,
}]

let AllStudent_data_map = ""; // ("") string store

Object_Student.map((data1, index) => {
    AllStudent_data_map +=
        `
            &nbsp;<h2 class="namejs"> ${data1.Id}</h2> ;
            &nbsp;<h2 class="namejs"> ${data1.Name}</h2>;
            &nbsp;<h2 onclick="vk(${index})"class="namejs"> ${data1.Marks} </h2> <br>`;
    document.querySelector('.student_data').innerHTML = AllStudent_data_map;

    // console.log(AllStudent_data_map)
});

let Click_Data_Store = []; // ([]) array store

function vk(index) {
    Click_Data_Store.push(Object_Student[index])
    // console.log(Click_Data_Store)
let student_Enroll_data_map = "" ;

    Click_Data_Store.map( (enroll ,index) =>{
        student_Enroll_data_map +=
            `
            &nbsp;<h2 class="namejs"> ${enroll.Name}</h2> &nbsp;
            &nbsp;<h2 class="namejs" > ${enroll.Marks}</h2> `;
            document.querySelector(".student_Enroll").innerHTML = student_Enroll_data_map;
    })
}
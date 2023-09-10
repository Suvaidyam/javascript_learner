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
}];
////// [ Star ] Data Show in "All Student Data" //////
let student_map_data = "";
Object_Student.map((data, index) => {
    student_map_data +=
        `<h2 class="namejs"> ${data.Id}</h2> 
        <h2 class="namejs"> ${data.Name}</h2> 
        <h2 onclick="vk(${index})"class="namejs" > ${data.Marks}</h2> <br>`;
    document.querySelector(".student_data").innerHTML = student_map_data;
    // console.log(student_map_data)
})
////// Data Show in "All Student Data"  [ Close ] //////
let data_Id_here = [];

// let Enroll_Click_aToz_data = []; // vk click = data in => student
function vk(index) {
    const Enroll_Click_aToz_data = Object_Student[index];
    // console.log(Enroll_Click_aToz_data)

    if (!data_Id_here.includes(Enroll_Click_aToz_data.Id)) {
        data_Id_here.push(Enroll_Click_aToz_data.Id)
        let Enroll_N = "";
        let Enroll_Student = [];

        data_Id_here.forEach((data_Id_here) => {
            Enroll_Student = Object_Student.find((Enroll_Click_aToz_data) => (
                Enroll_Click_aToz_data.Id === data_Id_here


            ))
            console.log(Enroll_Student); // Enroll Student format is Object 


            if (Enroll_Student) {
                Enroll_N +=
                    `<h2> ${Enroll_Student.Name}</h2>
                     <h2> ${Enroll_Student.Marks}</h2>`;
            }
        });
        document.querySelector(".student_Enroll").innerHTML = Enroll_N;
        console.log(typeof Enroll_N); // Enroll N format is string 
    }
}


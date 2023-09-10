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

let DataAll = "";
Object_Student.map(function (e, index) {
    DataAll +=
        `&nbsp;<h2 class="namejs"> ${e.Id}</h2> &nbsp;
        &nbsp;<h2 class="namejs"> ${e.Name}</h2> &nbsp;
        &nbsp;<h2 onclick="vk(${index})"class="namejs" > ${e.Marks}</h2> <br>`;
    document.querySelector(".student_data").innerHTML = DataAll;
});

let enrolledIds = []; // Track enrolled student IDs

function vk(index) {
    const student = Object_Student[index]; // vk click = data in => student

    if (!enrolledIds.includes(student.Id)) {
        enrolledIds.push(student.Id);

        let Enroll_N = "";
        enrolledIds.forEach((enrolledId) => {
            const enrolledStudent = Object_Student.find((student) =>( student.Id === enrolledId));
            if (enrolledStudent) {
                Enroll_N +=
                    `<h2> ${enrolledStudent.Name}</h2>
                     <h2> ${enrolledStudent.Marks}</h2>`;
            }
        });

        document.querySelector(".student_Enroll").innerHTML = Enroll_N;
    }
}






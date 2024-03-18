//EX1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let newArray=colors.forEach((currentValue,i)=>{console.log(`${i+1}# choice is ${currentValue}`) })
colors.some(color=>color==="Violet") ? console.log("Yeah") : console.log("No...");

//EX2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
let newColor2= colors2.forEach((color,i)=>{
    
    if (i==0){
        console.log(`${i+1}${ordinal[1]} choice is ${color}`)
    }
    else if (i==1){
        console.log(`${i+1}${ordinal[2]} choice is ${color}`)
    }
    else if (i==2){
        console.log(`${i+1}${ordinal[3]} choice is ${color}`)
    }
    else{
        console.log(`${i+1}${ordinal[0]} choice is ${color}`)
    }
})
//EX3
//this "...<arrayName>" extends the array starting from every element before the "...<arrayName>"
//ie output: ['bread','carrot','potato','apple','orange']
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//------2------
const country = "USA";
console.log([...country]);

//------Bonus------
let newArr = [...[,,]];
console.log(newArr);
//EX4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const welcomeStudents =users.map(arr=>`Hello ${arr.firstName}`)
fullStackStudent=[]
users.filter(val=>{val.role==='Full Stack Resident'? fullStackStudent.push(val.firstName): null })
const lastNameStudents =users.map(arr=>`Hello ${arr.firstName}`)
console.log(welcomeStudents)
console.log(fullStackStudent)
//EX5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let reducedEpic=epic.reduce((acc,val)=>{return `${acc} ${val}`})
console.log(reducedEpic)
//EX6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
passedStudent=[]
let filteredArray=students.filter(arr=>{
    if(arr.isPassed){
        passedStudent.push(arr.name);

        passedStudent.forEach(name=>{
            if(name==arr.name){
                console.log( `Good job ${arr.name}, you passed the course in ${arr.course}`)
            }
        })
    }
})
console.log(passedStudent)
console.log(filteredArray)
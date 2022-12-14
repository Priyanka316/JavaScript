// "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] "

const studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ];
console.log(studentRecords);

//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
const StudCaps = ['JOHN', 'BABA', 'YAGA', 'WICK'];
console.log(StudCaps);

//Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
let TotalMarks = [];
for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
        TotalMarks.push(Object.assign(studentRecords[i]));
    }
}
console.log(TotalMarks);

// Ques 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let students = [];
for (let i = 0; i < studentRecords[i]; i++) {
    if (studentRecords[i].id > 120 && studentRecords[i].marks > 50) {
         students.push(Object.assign(studentRecords[i])) ;
    };    
}
console.log(students);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let Total = 0;
for (let i=0; i<studentRecords.length; i++){
    Total = Total + studentRecords[i].marks;
}
console.log(Total);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let names = [];

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    names.push(studentRecords[i].name);
  }
}

console.log(names);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let print = 0;

for(let i=0; i<studentRecords.length; i++) {
    if(studentRecords[i].id > 120){
        print = print + studentRecords[i].marks;
    }
}
console.log(print);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let grace = 0;

for(let i=0; i<studentRecords.length; i++){
    if(50 > studentRecords[i].marks){
        grace = grace + studentRecords[i].marks + 15;
    }
}
console.log(grace);

//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

const stud1 = {
    name : "John",
    class : 10,
    RollNo : 201,
}

const stud2 = {
    name : "Baby",
    class : 10,
    RollNo : 202,
}

const stud3 = {
    name : "Riya",
    class : 10,
    RollNo : 203,
}

const stud4 = {
    name : "Wiky",
    class : 10,
    RollNo : 204,
}

const stud5 = {
    name : "Niku",
    class : 10,
    RollNo : 205,
}

const stud6 = {
    name : "Mona",
    class : 10,
    RollNo : 206,
}

let Students = [];

const StudentRecords = (Student) => {
    Students.push(Student);
};
StudentRecords(stud1);
StudentRecords(stud2);
StudentRecords(stud3);
StudentRecords(stud4);
StudentRecords(stud5);
StudentRecords(stud6);

console.log(Students);
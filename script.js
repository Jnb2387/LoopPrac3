var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

//Problem 1
for(var i=0;i<students.length; i++) {
    console.log(students[i].age);
}

//Problem 2
for(var j=0; j<students.length; j++){
    console.log(students[j].name + ", " + students[j].city);
    
}

//Problem 3
for(var n=0; n<students.length;n++){
  if(students[n].city==="Boulder"){
       console.log(students[n].name + ' is from ' + students[n].city);
  }
}

// Problem 4
for(var o=0; o<students.length; o++){
 if (students[o].age > 25){
   console.log(students[o].name + ' is older than 25');
 }
}

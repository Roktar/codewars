function mostMoney(students) {
  return Student.findMostMoney(students);
}

Student.type = {};

Student.addMoneyType = function(typeName, typeValue) {
  this.type[typeName] = typeValue;
}

Student.findMostMoney = function(students) {
  let max = {totalMoney: -1};
  let cnt = 1;

  if(students.length === 1)
    return students[0].name;
  
  for(let student of students) {
    if(!(student instanceof Student))
      throw new Exception("Contains objects other than 'Student' type.");
      
    let calculatedStudent = student.calculate();
    
    if(max.totalMoney == calculatedStudent.totalMoney)
      cnt++;
    if(max.totalMoney < calculatedStudent.totalMoney)
      max = calculatedStudent;
  }
  
  if(cnt == students.length)
    return "all";
  else
    return max.name;
}

Student.prototype.calculate = function() {  
  let obj = {name: this['name'], totalMoney: 0};
  
  for(let type of Object.keys(Student.type))
    obj.totalMoney += Student.type[type] * this[type];
  
  return obj;
}

Student.addMoneyType('fives', 5);
Student.addMoneyType('tens', 10);
Student.addMoneyType('twenties', 20);
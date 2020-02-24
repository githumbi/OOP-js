
//constructor functions
function StudentDetails(_reg, _course){
    this.reg = _reg,
    this.course = _course,
    //object
    this.display = function(){
        console.log("my registration  is", this.reg)
    }
  }
  
  //object instance
  
  var student = new StudentDetails("abi", 34)
  
  console.log(student.reg)
  console.log(student.course)
  student.display()
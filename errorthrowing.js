const userHeight = 180

  try{
    if (isNaN(userHeight)) {
      throw "error1"
    }
   
    
    else if (userHeight > 200) {
      throw "error2"
    }
  
    
    else if (userHeight < 40) {
      throw "error3"
    }
    else if(userHeight<=200){
      throw "error4"
    }
  }
  catch (error){
    if(error== "error1"){
      console.log("notANumberError: notANumberError.")
    }
    else if(error=="error2"){
      console.log("HugeHeightError: Height must be less than or equal to 200 cm.")
    }
    else if(error== "error3"){
      console.log("TinyHeightError: Height must be greater than or equal to 40 cm.")
    }
    else if(error=="error4"){
      console.log("Valid")
    }
  }


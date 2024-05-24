
                     // question 1             

// let num=[21,4,32,90,56];
// let num2=num.map(num=>num*num);     
// console.log(num2);


                     //question 2

// function grade(num){return num>=90?'A':num>=80?'B':num>=70?'C':num>=60?'D':'F'; }         
// console.log(grade(95));



                     //Question 3

// const car={
//     company_name:"Toyota",
//     model:"LC V8",
//     year:"2018"
// }
//                                                                          
// function car_year(O_car,NY){O_car.year=NY;}
// function display(O_car){ const {model,year}=O_car;
//                          console.log(`Model:${model},Year:${year}`)
//                         }

//                          console.log(car_year(car,2010));
//                          console.log(display(car));



                       //question 4


//   function isPrime(num) {
//       if (num <= 1) return false;
//       if (num === 2) return true; 
//       if (num % 2 === 0) return false; 
                    
//        for (let i = 3; i <= Math.sqrt(num); i += 2) {
//                             if (num % i === 0) return false;
//                              }
//                         return true;
//                     }
                    
                   
// function filterPrimes(numbers) {
//                         return numbers.filter(isPrime);
//                     }
                    
                    
// const number = [11,32,56,89,71,45];
// const primeNumbersArray = filterPrimes(number);
                    
// console.log(primeNumbersArray);

                       

                          //question 5


                        //   map =>Used for transforming data and extracting properties.
                        //   filter=> Used for selecting elements based on conditions and filtering out unwanted elements.
                        //   reduce=>Used for aggregating data, performing calculations, and transforming arrays into other data structures.

                       //question 6

//  async function fetchdata(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicde.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error){console.log("Error Fetching data",error) }
//    }                      

// fetchdata();

                    //question 7

// const person={
//     name:"rahul",
//     Address:{
//         city:"Lucknow",
//         Pincode:220012    },

//     contact:{
//         email:"rahul001@gmail.com",
//         Phone:9999999999
//     }
// }

// const phonenumber=person.contact?.Phone;
// console.log(phonenumber);

// const person2={
//     name:"rahul",
//     Address:{
//         city:"Lucknow",
//         Pincode:220012    }
// }

// const contactnumber=person2.contact?.Phone;
// console.log(contactnumber);

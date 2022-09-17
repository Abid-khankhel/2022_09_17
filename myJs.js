
// const items = `{"name":"tv","price":"21222","model":"2019"}`

// console.log(items[0])


// const itemsobj = JSON.parse(items)


// console.log(itemsobj)
// console.log(itemsobj.name)


// for(let key in itemsobj){


// console.log(key + ':'+ itemsobj[key])


// }








// const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
// const textobj = JSON.parse(text);



// console.log(textobj)



// const items = `["TV","PC","REMOTE","PEN","something"]`

// console.log(items)


// const itemsobj = JSON.parse(items);


// // console.log(itemsobj[1,2,3,4])
// for(let key in itemsobj){


// console.log(itemsobj[key])


// }



// for(let i =0; i<itemsobj.length; i++){

// console.log(itemsobj[i])


// }

// =============================================================================



// const text = `[
//     {
//       "userId": 1,
//       "firstName": "Krish",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-2.jpeg"
//     },
//     {
//       "userId": 2,
//       "firstName": "fayaz",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-2.jpeg"
//     },
//     {
//       "userId": 2,
//       "firstName": "asee",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-2.jpeg"
//     },
//     {
//       "userId": 2,
//       "firstName": "narati",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "bike-3.jpeg"
//     },
//     {
//       "userId": 3,
//       "firstName": "rabin ",
//       "lastName": "Lee",
//       "phoneNumber": "123456",
//       "emailAddress": "krish.lee@learningcontainer.com",
//       "photo": "guitar-2.png"
//     } 
//   ]`;
  
//   // ===========================================
  
// const textobj = JSON.parse(text)
//   const plc = document.getElementById('data_out');
  
  
//   var out = '';
  
  
//   var i = 0;
  
  
  
//   while(i<textobj.length){
  
//   out += `<tr>
      
//       <td>${textobj[i].userId}</td>
//       <td>${textobj[i].firstName}</td>
//       <td>${textobj[i].lastName}</td>
//       <td>${textobj[i].phoneNumber}</td>
//       <td>${textobj[i].emailAddress}</td>
//       <td><img src="${textobj[i].photo}" alt="" style='height:100px;widht:100px;'> </td>
      
//       </tr>
//       `
  
//   i++
  
  
//   plc.innerHTML=out;
  
  
//   }
  
  
// fetch("myproduct.json")

// .then(function(Response){

// return Response.json();
// })

// .then(function(myproduct){

// var plc = document.querySelector('#data_out');

// var out = '';


// for(let pro of myproduct){

//     out += `<tr>
    
//     <td>${pro.id}</td>
//     <td><img src='${pro.image}' style="height:100px;width:150px"/> </td>
//     <td>${pro.name}</td>
//     <td>${pro.price}</td>
//     <td>${pro.inventory}</td>
//     <td>${pro.productioncode}</td>
// `
// }

// plc.innerHTML = out;

// })




var ourrequest = new XMLHttpRequest()

 ourrequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')

ourrequest.onload = function(){

console.log(ourrequest.responseText)

}








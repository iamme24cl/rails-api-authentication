// POST / LOGIN

const data = { email: "cool@mail.com", password: "secret" }

// fetch('http://localhost:3000/api-keys', {
// 	method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   body: JSON.stringify(data)
// })
// .then(res => res.json())
// .then(data => {
//   console.log(data);
//   localStorage.setItem("token", data.token);
//   localStorage.setItem("tokenID", data.id)
// })

/************************************************************ */

let token = localStorage.getItem("token");
let tokenID = localStorage.getItem("tokenID") 
// console.log(token);

// GET / CHECK LOGIN STATUS

fetch('http://localhost:3000/api-keys', {
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  },
})
.then(res => res.json())
.then(data => console.log(data))

/*************************************************************** */

// // DELETE / LOG OUT
// fetch(`http://localhost:3000/api-keys/${tokenID}`, {
//   method: 'DELETE',
//   headers: {
//     'Accept': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
// })
// .then(res => res.json())
// .then(data => console.log(data))


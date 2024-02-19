// function get_element_by_id(elementID) { 
//     return document.getElementById(elementID);
// }


// function set_element_by_id(elementID, value) { 
//     document.getElementById(elementID).innerText = value;
// }

// // create items
// function createItems(seatInner, ticketPrice) {
//     let li = document.createElement("li");

//     let p1 = document.createElement("p");
//     p1.innerText = seatInner;

//     let p2 = document.createElement("p");
//     p2.innerText = "Economy";

//     let p3 = document.createElement("p");
//     p3.innerText = ticketPrice;

//     li.appendChild(p1)
//     li.appendChild(p2)
//     li.appendChild(p3)
//     get_element_by_id('select-ticket').appendChild(li)
// }


// // const seatItem = document.getElementsByClassName("seat-button");
// let counter = 0;
// let totalTicket = 0;
// let seatAdd = [];
// let condi_arr = [];
// let seatItem = document.getElementsByClassName('seat-button');

// for (const seat of seatItem){
//     seat.addEventListener('click', function(e){
//         if(counter < 4 ){
//             if(seatAdd.includes(seat)){
//                 alert("You can't select one seat more time")
//                 return;
//             }
//             else{
//                 counter =+ 1;
//                 totalTicket += parseInt(get_element_by_id("seat-price").innerText);
//                 let availableSeat = parseInt(get_element_by_id("available-seat").innerText);
//                 set_element_by_id("available-seat", availableSeat - 1);

//                 // set total price & grand price
//                 set_element_by_id("total-price", totalTicket);
//                 set_element_by_id("grand-total", totalTicket);

//                 // set background color for seat
//                 e.target.classList.add("bg-[#1DD100]");

//                 // seat selected
//                 set_element_by_id("seat-selected", counter);

//                 // create reception 
//                 createItems(seat.innerText, get_element_by_id('seat-price').innerText);          

//             }            
//         }
//         else{
//             alert("You can't select more than 4 tickets");
//         }

//         seatAdd.push(seat);

//     })
// }


// get_element_by_id('coupon-input').addEventListener("keyup", function(){
//     let userInput = get_element_by_id('coupon-input').value;
//     if (userInput !== '') {
//         get_element_by_id('apply-btn').removeAttribute('disabled');

//     }
// })


// function couponApply(){
//     let userInput = get_element_by_id('coupon-input').value;
//     const coupon1 = get_element_by_id("coupon-1").innerText;
//     const coupon2 = get_element_by_id("coupon-2").innerText;

//     if(userInput === coupon1){
//         let discount1 = totalTicket * 0.15;
//         set_element_by_id("grand-total", totalTicket - discount1);
//         set_element_by_id("discount-price", discount1);
//         get_element_by_id("input-filed").classList.add("hidden");
//         get_element_by_id("discount").classList.remove("hidden");
//     }
//     else if(userInput === coupon2){
//         let discount2 = totalTicket * 0.20;
//         set_element_by_id("grand-total", totalTicket - discount2);
//         set_element_by_id("discount-price", discount2);
//         get_element_by_id("input-field").classList.add("hidden");
//         get_element_by_id("discount").classList.remove("hidden");
//     }
//     else {
//         alert("Your coupon is Invalid");
//     }
// }


// get_element_by_id('submit-info').addEventListener('keyup', function () {
//     get_element_by_id('modal-button').removeAttribute("disabled");
// })
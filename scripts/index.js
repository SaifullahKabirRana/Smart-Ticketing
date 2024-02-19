const seatItem = document.getElementsByClassName("seat-button");
let counter = 0;
let totalTicket = 0;
let seatAdd = [];

for (const seat of seatItem){
    seat.addEventListener("click", function(e){
        if(counter < 4 ){
            if(seatAdd.includes(seat)){
                alert("You can't select one seat more time")
                return;
            }
            else{
                counter = counter + 1;
                

            }
        }
    })
}
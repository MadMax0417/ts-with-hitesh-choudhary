const AISLE = 0
const MIDDLE = 1
const WINDOW = 2


let seat;

if(seat === 0) {

}
//it is more simple here => 

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
}

const hcSeat = SeatChoice.WINDOW; 

//enums gets turned into IIFE while compilation
// to avoid it use const before enum.

const enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
}


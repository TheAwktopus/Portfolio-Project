function makeMysteryFunc() {
    const rand = Math.random(){
        if(rand > 0.5) {
            return function() {
                console.log("CONGRATS,I AM A GOOD FUNCTION")
            }
         } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
        }
    } 
    
}
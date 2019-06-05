



    const hourHand = document.querySelector("#hour");
    const minuteHand = document.querySelector("#minute");
    const secondsHand = document.querySelector("#second");
    // could not get these to work
    //setInterval(runClock, 60000 * 60);
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    //setInterval(runClock, 60000);
    //setInterval(runClock, 1000);
    // function runClock(){
    // var now = new Date();
    // let hr = date.getHours();
    // let min = date.getMinutes();
    // let sec = date.getSeconds();
    // let hrPosition = hr*360/12 + ((min *360/60)/12);
    // let minPosition = (min * 360/60) + (sec * 360/60)/60;
    // let secPosition = sec * 360/60;
    
    function secondRotation(seconds){
        return(seconds / 60)
    }

    

}

// make arms move

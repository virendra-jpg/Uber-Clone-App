import React from 'react'

const Times = (props) => {
    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return  rhours + " hr  " + rminutes + " min";
        }



    var t = (props.duration)/60;
    var m = (props.A)
    var ti = ((t*.95)/(m/1.9)).toFixed(0)
    if(ti>60){
        return(
            <>{timeConvert(ti)}  </>
        )
    }
    else{
        return(
            <>
             {(ti)} min
            </>
        )
    }
}

export default Times


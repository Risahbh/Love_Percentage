function isLeap(leapYear){

if (leapYear % 4 === 0){
    if(leapYear % 100 === 0){
        if (leapYear % 400 === 0){
            return "Leap year";
        }

    }else {
        return "Not a leap year";
    }

}else {
   return "Not a leap year";
}
}
console.log (isLeap(4000))
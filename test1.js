let number = "3123123.00";



// variant 1 
function formatNumber(n) {
   let a = n.split('.'); 
   return `${new Intl.NumberFormat('ru-RU').format(a[0])}.${a[1]}`
   
}

// variant 2
function formatNumberRegexp(n) {
return n.replace(/^\$?\-?\d+(\,\d{3})*(\.\d\d)?$/gm, n)
}
console.log(formatNumberRegexp(number))

// variant 3
function format (n) {
    return n.split( /(?=(?:\d{3})+(?:\.|$))/g ).join( " " );
}

 console.log(format(number))





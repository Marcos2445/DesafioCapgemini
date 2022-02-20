var Anagrama = function (strin1, strin2) {
    var p1 = strin1.split('').sort().join('').toLowerCase();
    var p2 = strin2.split('').sort().join('').toLowerCase();
    return (p1 === p2)
}

var numAnag = 0
var entrada = "ovo"
var x = entrada.length
var y = x * x
var subs = []
var a = 0;

for (var cont = 0; cont <= x; cont++) {
    for (var c = 0; c <= x; c++) {
        if (entrada.substring(cont, c) != "") {

            subs[a] = entrada.substring(cont, c)
            a++
        }
    }
}

var subsNr = [... new Set(subs)]
var numSubsNr = subsNr.length



for (var i = 0; i <= numSubsNr; i++) {

    for (var y = 0; y <= numSubsNr; y++) {
       if( console.log(Anagrama(subsNr[i], subsNr[y]))=true){
           numAnag++
       }
    }

}

console.log(numAnag)


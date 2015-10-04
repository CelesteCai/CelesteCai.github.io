var myNumber = "1945";
var yourNumver = "1234";
var countA = 0;
var countB = 0;


for (var i = 0; i < myNumber.lengh; i++) {
    for (var j = 0; j < yourNumver.lengh; j++) {
        if (myNumber[i] == yourNumver[j]) {
            countA++;
        } else {
            countB++;
        }

    }
}

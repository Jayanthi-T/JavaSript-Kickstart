// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Sample Input 0

// javascriptloops

// Sample Output 0

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

function vowelsAndConsonants(str) {
    let vow=[],cons=[];
     for(let i in str){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vow.push(str[i]);
        }
        else{
            cons.push(str[i]);
        }
    }
    let j,k;
    for(j in vow){
        console.log(vow[j]);
    }
    for(k in cons){
        console.log(cons[k]);
    }
    // console.log(vow);
    // console.log(cons);
}

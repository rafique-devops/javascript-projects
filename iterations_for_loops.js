// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 1; i < 5; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j < 5; j++) {
        // console.log(`Inner Loop Value: ${j}, Inner Loop is ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let superHeroes = ["Ironman","Spiderman","Batman","Superman","Aquaman"]
for (let index = 0; index < superHeroes.length; index++) {
    const element = superHeroes[index];
    console.log(element);
    
}

for (let k = 1; k <= 10; k++) {
    if(k == 5)
    {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of k is ${k}`);
}


for (let k = 1; k <= 10; k++) {
if(k == 5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of k is ${k}`);
}
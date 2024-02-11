user = {
    name: "Rafique Khan",
    repoCount: 50
}
console.log(`Hello My Name is ${user.name} & repo count is ${user.repoCount}`);
console.log(user);
anotherUser = user
anotherUser.name = "Wasima Khan"
console.log(anotherUser)
console.log(`Another User Name: ${user.name}`);
console.log(`Hello My Name is ${user.name} & repo count is ${user.repoCount}`);

const gameName =  new String("Ra-fi-que Kh-an")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(anotherUser.name.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('K'));

console.log(gameName.substring(0,4));

console.log(gameName.slice(-12,6));

console.log(gameName.trim());

console.log(gameName.includes('-an'));

console.log(`endWith Function: ${gameName.endsWith('-an')}`);

console.log(`split string function: ${gameName.split((['-',' ']))}`);

console.log(gameName.replaceAll('-',''));
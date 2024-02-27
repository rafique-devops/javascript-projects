async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();

console.log(`----------------Another Method-----------------`);
fetch('https://api.github.com/users/rafique-devops')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})

.catch((error)=> {
    console.log(error);
})
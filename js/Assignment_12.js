async function search(i)
{
let myData= await fetch(`https://api.weatherapi.com/v1/search.json?key=4c4a2c473f69483da97143719241806&q=${i}&days=3`);
let i=await myData.json();

}
document.getElementById('search').addEventListener('keyup',i=>{
    search(i.target.value)
});

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayData(i,myData)
{

}

function displayAnother()
{
    let myData='';

    for(let e=0;e<myData.length;e++)
        {

myData+=

        }
}
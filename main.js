const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var select1 = document.getElementById('select1')
var select2 = document.getElementById('select2')
var select2 = document.getElementById('select2')


var index = []
var index2 = []
var index3 = []



for(var i = 1 ; i <= 30 ; i++)
{
    index += `  <option value="${i}">${i}</option>`
}
document.getElementById('select1').innerHTML = index





for(var i = 0 ; i < months.length ; i++)
{
    index2 += `<option value="${months[i]}">${months[i]}</option>`
}
document.getElementById('select2').innerHTML = index2



for(var i = 1950 ; i < 2024 ; i++)
    {
        index3 += `<option value="${i}">${i}</option>`
    }
    document.getElementById('select3').innerHTML = index3


var gender = document.getElementById('gender')
function custom(){
    gender.classList.remove('hidden')
}

function genderHide(){
    gender.classList.add('hidden')

}
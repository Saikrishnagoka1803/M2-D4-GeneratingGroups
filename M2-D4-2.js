const collect = function(){
    let listofnames = document.getElementById('text-input').value
    let numberOfGroups = document.getElementById('group-input').value
    let numberOfListItems = document.getElementById('List-input').value
    modifideListOfNames = listofnames.split(',')
    
const shuffledListOfNames = []
let randomArray = []
let count = modifideListOfNames.length
while((shuffledListOfNames.length) < (modifideListOfNames.length))
{
    let randomIndex = Math.floor(Math.random()* modifideListOfNames.length)
    if(randomArray.includes(randomIndex) === true){
       
       count+=1
      
    }
    else{
        shuffledListOfNames.push(modifideListOfNames[randomIndex])
    randomArray.push(randomIndex)
    }

}

for(let i=1;i<=numberOfGroups;i++)
{
    let group = []
    for(let J=0;J<=numberOfListItems-1;J++)
    {
        group[J] = shuffledListOfNames.shift()
    }
    console.log('Group ' + ' ' + i +' ' + 'is ' + group)
let groupdiv = document.createElement('div')
groupdiv.innerText = 'Group' + ' ' + i +' is' + ' ' + group
groupdiv.style.color = 'white'
groupdiv.style.backgroundColor = 'blue'
document.body.appendChild(groupdiv)
}
}
arrays = [ 'dkf ' , 'dkf df' , 'ddfkd ' ,'dkfd ' , 'e39r' ];
for(let arr of arrays){
    const div = document.getElementById('div1');
    div.classList.add('flex', 'space-x-3')
    const newDiv = document.createElement('div');
    newDiv.classList.add('w-40', 'h-40' , 'bg-green-100' );
         newDiv.innerText = 'My name is Dhruba Biswas';

 const new2 = document.createElement('div');
 new2.innerHTML = `
 <div class=" w-20 h-20 bg-orange-50">${arr}</div>

 `
 new2.classList.add('w-40' , 'h-40', 'bg-yellow-100');

    div.appendChild(new2);
    div.appendChild(newDiv);
}
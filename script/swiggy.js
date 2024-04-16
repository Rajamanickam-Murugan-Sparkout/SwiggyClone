const increment = document.querySelectorAll('.increment');
const decrement = document.querySelectorAll('.decrement');
const counter = document.querySelectorAll('.counter');
const addBtn = document.querySelectorAll('.inc-dec-btn');
const itemAddBtn = document.querySelectorAll('.item-add-btn')

let count = Array(counter.length).fill(0);

for(let i=0;i<decrement.length;i++){
    decrement[i].addEventListener('click', ()=>{
        count[i]--;
        counter[i].innerHTML = count[i];
        setQuantity(i)
})
}

for(let i=0;i<increment.length;i++){
    increment[i].addEventListener('click', ()=>{
        count[i]++;
        counter[i].innerHTML = count[i];
    })
}

for(let i=0;i<itemAddBtn.length;i++){
    itemAddBtn[i].addEventListener('click', ()=>{
        decrement[i].classList.remove('hidden')
        counter[i].classList.remove('hidden')
        increment[i].classList.remove('hidden')
        itemAddBtn[i].classList.add('hidden')
        counter[i].innerHTML = 1;
    })
}



function setQuantity(i){
    if (count[i] <= 0) {
        decrement[i].classList.add('hidden')
        counter[i].classList.add('hidden')
        increment[i].classList.add('hidden')
        itemAddBtn[i].classList.remove('hidden')
    }
}

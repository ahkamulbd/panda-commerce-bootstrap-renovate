// Query 1:
//console.log('This is script file.');

// Query 2: 

const h2Tag = document.querySelectorAll('h2');
//h2Tag.style.color = 'blue';
//console.log(h2Tag);
for (let h2 of h2Tag) {
    //console.log(h2.innerText);
    h2.style.color = 'lightblue';
}
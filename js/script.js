// Query 1:নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে Index.Html এর সাথে কানেক্ট করতে পারো কিনা?
//console.log('This is script file.');

// Query 2: যতগুলা ইলিমেন্টে H2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার Lightblue করেদিতে পারো কিনা। 

const h2Tag = document.querySelectorAll('h2');
//h2Tag.style.color = 'blue';
//console.log(h2Tag);
for (let h2 of h2Tag) {
    //console.log(h2.innerText);
    h2.style.color = 'lightblue';
}

// Query 3: ওই ওয়েবসাইট এ Backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার Tomato করে দিতে পারো কিনা। 

const backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = 'tomato';

// Query 4: ওই ওয়েবসাইট এ Backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার Tomato করে দিতে পারো কিনা। 

const cards = document.getElementsByClassName('card');
for (let card of cards) {
    card.style.borderRadius = '30px';
}
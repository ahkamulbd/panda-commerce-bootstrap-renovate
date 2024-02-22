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

// Query 5: কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

function redLaltuBagButton() {
    console.log('Red Laltu Bag Button Clicked');
}

// Query 6: এইবার নতুন করে সবগুলা Buy Now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা Buy Now বাটনে চাপ দিলে Card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।


// Query 7: একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি Submit বাটনটা Disable করে ফেলবে। তারপর কেউ যদি উপরে Input ফিল্ডে যদি একজাক্টলি Email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    //console.log(event.target.value);
    const submitInputText = event.target.value;
    const submitButton = document.getElementById('submit-btn');

    if (submitInputText === 'Email') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
})
var food = document.getElementById('food'),
    drink = document.getElementById('drink'),
    name = document.getElementById('name'),
    email = document.getElementById('email'),
    button = document.getElementById('but'),
    faya = new Firebase('https://craze.firebaseio.com/'),
    currentEntry = faya.child('currentsubmission');

button.addEventListener('click', function () {
    currentEntry.push(email.value);
});

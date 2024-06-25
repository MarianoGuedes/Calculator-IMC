const form = document.getElementById('calculatorForm');

form.addEventListener('submit', function(event) {
  // Prevents the default behavior of the form submission event in JS, i.e.,
  // prevents the page from reloading
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const bmi = (weight / (height * height)).toFixed(2);

  if (!isNaN(bmi)) {
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
      description = 'Careful! You are underweight!';
    }

    else if (bmi >= 18.5 && bmi <= 25) {
      description = "You are at ideal weight!";
      value.classList.remove('attention');
      value.classList.add('normal');
    }

    else if (bmi > 25 && bmi <= 30) {
      description = "Careful! You are overweight!";
    }

    else if (bmi > 30 && bmi <= 35) {
      description = "Careful! You have moderate obesity!";
    }

    else if (bmi > 35 && bmi <= 40) {
      description = "Careful! You have severe obesity!";
    }

    else {
      description = "Careful! You have morbid obesity!";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
  }
});

form.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('calculate').click();
  }
});

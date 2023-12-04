function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI = weight / ((height / 100) * (height / 100));
  alert(`your BMI is" ${BMI}`);
  if (BMI < 18.5) {
    alert(`Underweight`);
  } else if (BMI < 24.9 || BMI > 18.5) alert(`Healthy Weigh`);
  else if (BMI < 29.9 || BMI > 25.0) {
    alert(`Overweight`);
  } else if (BMI > 30) {
    alert(`Obesity`);
  }
}

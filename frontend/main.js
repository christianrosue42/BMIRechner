Array.from(document.getElementsByTagName('input')).forEach
    (element => {
        element.addEventListener('change', updateUI);
    });
function updateUI() {
    // Logik zur Aktualisierung des UI hier
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result');
    const bmi = calculateBMI(weight, height);
    console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);
    result.innerHTML = `Ihr BMI beträgt: ${bmi}`;
}
function calculateBMI(weight, height) {
    // Logik zur Berechnung des BMI hier

    const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;
}

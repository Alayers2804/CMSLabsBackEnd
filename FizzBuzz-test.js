// // Task 1 - FizzBuzz
// Buat loop yang mencetak angka 1-100, JIKA kelipatan 3 maka outputnya "Fizz" , JIKA kelipatan 5 outputnya "Buzz" dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz'

const arrayNumber = [];
for (let i = 1; i <= 100; i++) {
  arrayNumber.push(i);
  for (let j = 0; j < arrayNumber.length; j++) {
    if (arrayNumber[j] % 3 === 0 && arrayNumber[j] % 5 === 0) {
      console.log("FizzBuzz");
    } else if (arrayNumber[j] % 3 === 0) {
      console.log("Fizz");
    } else if (arrayNumber[j] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(arrayNumber[j]);
    }
  }
}

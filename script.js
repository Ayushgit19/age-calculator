let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result")

// new Date(): This creates a new Date object representing the current date and time.

// .toISOString(): This converts the Date object to a string in ISO 8601 format, which looks like "2023-07-19T14:35:22.123Z".

// .split("T"): This splits the ISO string into an array of two parts: the date part ("2023-07-19") and the time part ("14:35:22.123Z").

// [0]: This selects the first part of the array, which is the date part ("2023-07-19").

// userInput.max: This sets the max attribute of the input element, which restricts the maximum value the user can select in the date picker to the current date.

function calculateAge(){
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date()

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days old`

}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
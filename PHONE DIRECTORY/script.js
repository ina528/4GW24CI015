// Data (same as Java arrays)
const names = ["Amit", "Ravi", "Zara"];
const phones = ["1111", "2222", "3333"];

// Binary Search function
function searchContact() {
    const key = document.getElementById("name").value.trim();

    if (key === "") {
        alert("Please enter a name");
        return;
    }

    let low = 0;
    let high = names.length - 1;
    let result = "Not Found";

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (names[mid].toLowerCase() === key.toLowerCase()) {
            result = phones[mid];
            break;
        } else if (names[mid].toLowerCase() < key.toLowerCase()) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    alert("Result: " + result);
}

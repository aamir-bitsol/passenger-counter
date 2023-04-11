var count = 0;
var count_value = document.getElementById("counter");
var record_count = document.getElementById("previous-count");
function increment_counter() {
    if (count_value) {
        count_value.textContent = (++count).toString();
    }
}
function save_count_info() {
    if (count_value !== null && record_count !== null) {
        record_count.textContent += count + " - ";
        count_value.textContent = "0";
        count = 0;
    }
}

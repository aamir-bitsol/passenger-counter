let count = 0;
let count_value = document.getElementById("counter");
let record_count = document.getElementById("previous-count"); 

function increment_counter(){
    count_value.textContent = ++count;
}

function save_count_info(){
    record_count.textContent += count + " - ";
    count_value.textContent = 0;
    count = 0;
}

let count: number = 0;
let count_value: HTMLElement | null = document.getElementById("counter");
let record_count: HTMLElement | null = document.getElementById("previous-count"); 

function increment_counter(): void{
    if(count_value){
        count_value.textContent = (++count).toString();
    }
}

function save_count_info(): void{
    if(count_value !== null && record_count !== null){
        record_count.textContent += count + " - ";
        count_value.textContent = "0";
        count = 0;
    }
}


function showPrompt() {
    const userResponse = prompt("сколько заказов вы хотите зделать");
    if (userResponse !== null) {
        alert("ждите заказ: " + userResponse);
    } else {
        alert("Вы не вили количество тоовара.");
        
    }
    
}
function focused() {
    let selectedInputElement = document.querySelectorAll("input")

    for (const el of selectedInputElement) {
        el.addEventListener('focus', onFocus); 
        el.addEventListener('blur', onBlur);
    }
    function onFocus(e){
        e.target.parentNode.className = 'focused';
    }
    
    function onBlur(e){
        e.target.parentNode.className = '';
    }
    
}
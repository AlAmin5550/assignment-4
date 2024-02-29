function getElementById(id){
    const element = document.getElementById(id);
    return element;

}
function getConvertedValue(id){
    const elementText = document.getElementById(id);
    const element = parseInt(elementText.innerText);
    return element;

}

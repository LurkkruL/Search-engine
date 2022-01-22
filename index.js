function dict() {
    var x = document.getElementById("search").value;
    const url = "https://dictionary.cambridge.org/dictionary/english/";
    var url1 = url + x;
    var win = window.open(url1, '_blank')
    win.focus;
}

function scholar() {
    var x = document.getElementById("search").value;
    const url = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=";
    var url1 = url + x;
    var win = window.open(url1, '_blank')
    win.focus;
}
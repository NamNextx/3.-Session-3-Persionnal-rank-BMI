function listenEvent(even) {
    if (even.keyCode==13) {
        {
            var weight = parseInt(document.getElementById('idweight').value);
            var height = parseInt(document.getElementById('idheight').value);

            var BMI = weight / Math.pow(height, 2);
            alert(BMI);
           // alert(weight+''+height+' '+weight/(height*heigh)+'  '+BMI);
            if (BMI < 18.5) {
                alert("Underweight");
            } else if (BMI < 25) {
                alert("Nomal");
            } else if (BMI < 30) {
                alert("Over Weight")
            } else alert('Obase');
        }

    }
}

function eventPress() {
    window.addEventListener('keydown', listenEvent)
}
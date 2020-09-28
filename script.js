document.getElementById('output').style.visibility = 'hidden';

document.getElementById('weight-box').addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible';
    
    let kiloGrams = e.target.value;
    
    document.getElementById('gramsOutput').innerHTML = kiloGrams*1000;

    document.getElementById('poundOutput').innerHTML = kiloGrams*2.20462;
    
    document.getElementById('ouncesOutput').innerHTML = kiloGrams*35.274;
})
function somar(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById("inp2").value;
    var soma = parseInt(inp1) + parseInt(inp2);
    var result = document.getElementById("resultado");
    result.innerHTML = soma;
    
    
}
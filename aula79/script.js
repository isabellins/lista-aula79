var n1,n2,n3,n4
var alunos=[]
function enter(){
    n1=document.getElementById("name1").value;
    n2=document.getElementById("name2").value;
    n3=document.getElementById("name3").value;
    n4=document.getElementById("name4").value;

    alunos.push(n1)
    alunos.push(n2)
    alunos.push(n3)
    alunos.push(n4)

    document.getElementById("ABCalunos").innerHTML=alunos
    document.getElementById("send").style.display="none"
    document.getElementById("orgABCD").style.display="inline-block"
} 

function orgABC(){
    alunos.sort()
    document.getElementById("ABCalunos").innerHTML=alunos
}
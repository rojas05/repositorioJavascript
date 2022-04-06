

function calculo () {
    var n1=Number(document.getElementById('s').value)
    var n2=Number(document.getElementById('a').value)
    
    if (n2==0 && n2<1){
        var res1=n1/100*5+n1
        document.getElementById('resp').value=res1 
    }else if (n2==1 && n2<2){
        var res2=n1/100*7+n1
        document.getElementById('resp').value=res2
    }else if (n2==2 && n2<5 ){
        var res3=n1/100*10+n1
        document.getElementById('resp').value=res3
    }else if  (n2==5 && n2<10){
        var res5=n1/100*15+n1
        document.getElementById('resp').value=res5
    }else{
        var re=n1/100*20+n1
        document.getElementById('resp').value=re
    }
    
    }
    
    
    function suma (){
        var num1=Number(document.getElementById('n1').value) 
        var num2=Number(document.getElementById('n2').value) 
        var res=num1+num2;
        document.getElementById('res').value=res;
    }
    
    function horas () {
        var ser1=Number(document.getElementById('ser1').value)
        var reser=ser1*800
        document.getElementById('reser').value=reser
    }
    
    function cilindro () {
        var al=Number (document.getElementById('al').value)
        var diame=Number(document.getElementById('diametro').value)
        var r=diame/2
        var r1=r*r
        var al1=al*3.14
        var tot=al1*r1;
        document.getElementById('rec').value=tot
    }
    function resutado () {
        var nota1=Number(document.getElementById('no1').value)
        var nota2=Number(document.getElementById('no2').value)
        var nota3=Number(document.getElementById('no3').value)
        var respuest=(nota1+nota2+nota3)/3
        document.getElementById('pr').value=respuest
    }
    function precio () {
        var pre1=Number(document.getElementById('pe1').value)
        var pre2=Number(document.getElementById('pe2').value)
        var pre3=Number(document.getElementById('pe3').value)
        var sol=(pre1+pre2+pre3)/3
        document.getElementById('pre').value=sol
    }
    
    function capital () {
        var c=Number(document.getElementById('cap1').value)
        var toc=(c*100)/2
        document.getElementById('tc').value=toc
    }
    
    function dig (){
        var numero=parseInt(document.getElementById('numero').value)
        var contador=0
        while(numero>=1) {
        }
        document.getElementById('digitos').value=contador
    }
    function velmax (){
        var to=Number(document.getElementById('vel').value)
        var sol=(to*1000)/3600
        document.getElementById('tvel').value=sol
    }
    function pos (){
        var numero=Number(document.getElementById('num').value)
        if (numero==0)
        document.getElementById('snum').value="neutro"
        else if (numero<0)
        document.getElementById('snum').value="negativo"
        else
        document.getElementById('snum').value="positivo"
    }
    function votar (){
        var name=(document.getElementById('name').value)
        var age=Number(document.getElementById('age').value)
        if (age>=18)
        document.getElementById('v').value=name +"usted puede votar :)"
        else 
        document.getElementById('v').value=name +"usted NO puede votar :("
    }
    function menor (){
        var uno=Number(document.getElementById('numer1').value)
        var dos=Number(document.getElementById('numer2').value)
        if (uno<dos)
        document.getElementById('numenor').value=uno
        else 
        document.getElementById('numenor').value=dos
    }
    function orden (){
        var uno1=Number(document.getElementById('uno').value)
        var dos2=Number(document.getElementById('dos').value)
        if (uno1<dos2)
        document.getElementById('orden').value=uno1+" "+dos2
        else 
        document.getElementById('orden').value=dos2+" "+uno1
    }
    function dr (){
        var un=Number(document.getElementById('un').value)
        var doss=Number(document.getElementById('do').value)
        if (doss==0)
        document.getElementById('divi').value="la divicion no es posible"
        else 
        var r=un/doss
        document.getElementById('divi').value=r
    }
    function suma (){
        var n1=Number(document.getElementById('numero1').value) 
        var n2=Number(document.getElementById('numero2').value) 
        var res=n1+n2;
        document.getElementById('pantalla').value=res;
    }
    function resta (){
        var n1=Number(document.getElementById('numero1').value) 
        var n2=Number(document.getElementById('numero2').value) 
        var res=n1-n2;
        document.getElementById('pantalla').value=res;
    }
    function divicion(){
        var n1=Number(document.getElementById('numero1').value) 
        var n2=Number(document.getElementById('numero2').value) 
        if (n1==0){
            document.getElementById('pantalla').value='la operacion no es posible';
        }else if (n2==0){
            document.getElementById('pantalla').value='la operacion no es posible';
        }else{
        var res=n1/n2
        document.getElementById('pantalla').value=res}
        }
    function multiplicacion (){
        var n1=Number(document.getElementById('numero1').value) 
        var n2=Number(document.getElementById('numero2').value) 
        var res=n1*n2;
        document.getElementById('pantalla').value=res;
    } 
    function promedio (){
        var n1=Number(document.getElementById('numero1').value) 
        var n2=Number(document.getElementById('numero2').value) 
        var res=(n1+n2)/2
        document.getElementById('pantalla').value=res;
    }  
    function raiz (){
        var n1=Number(document.getElementById('numero1').value)
        var res=Number(Math.sqrt(n1))
        if (n1<0){
        document.getElementById('pantalla').value="la operacion no es posible";
        }else{
            var res=(Math.sqrt(n1)) 
            document.getElementById('pantalla').value=res;  
        }
        alert('el proceso se hace con el numero del primer campo')
    } 
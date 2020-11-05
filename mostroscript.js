// https://dantezunino.github.io/mostros/mostros.xml

// CORS avoid: https://cors-anywhere.herokuapp.com/
// xml-link working: https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/dantezunino/mostros/master/mostros.xml

//Var to find Monster
var monster = null;

//Load monster static info
function loadDoc1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "https://dantezunino.github.io/mostros/mostros.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("BICHO")[monster];
  //take XML values, put them in the HTML
  //Stats
    document.getElementById("str_mostro").innerHTML = "STR<br>" + x.getElementsByTagName("STR")[0].childNodes[0].nodeValue;
    document.getElementById("dex_mostro").innerHTML = "DEX<br>" + x.getElementsByTagName("DEX")[0].childNodes[0].nodeValue;
    document.getElementById("con_mostro").innerHTML = "CON<br>" + x.getElementsByTagName("CON")[0].childNodes[0].nodeValue;
    document.getElementById("int_mostro").innerHTML = "INT<br>" + x.getElementsByTagName("INT")[0].childNodes[0].nodeValue;
    document.getElementById("wis_mostro").innerHTML = "WIS<br>" + x.getElementsByTagName("WIS")[0].childNodes[0].nodeValue;
    document.getElementById("chr_mostro").innerHTML = "CHR<br>" + x.getElementsByTagName("CHR")[0].childNodes[0].nodeValue;
  //Stats Mods
    document.getElementById("str_mod").innerHTML = x.getElementsByTagName("STRMOD")[0].childNodes[0].nodeValue;
    document.getElementById("dex_mod").innerHTML = x.getElementsByTagName("DEXMOD")[0].childNodes[0].nodeValue;
    document.getElementById("con_mod").innerHTML = x.getElementsByTagName("CONMOD")[0].childNodes[0].nodeValue;
    document.getElementById("int_mod").innerHTML = x.getElementsByTagName("INTMOD")[0].childNodes[0].nodeValue;
    document.getElementById("wis_mod").innerHTML = x.getElementsByTagName("WISMOD")[0].childNodes[0].nodeValue;
    document.getElementById("chr_mod").innerHTML = x.getElementsByTagName("CHRMOD")[0].childNodes[0].nodeValue;    
  //Name, AC and HP and so and so
    document.getElementById("nombre_mostro").innerHTML = x.getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
    document.getElementById("align_mostro").innerHTML = x.getElementsByTagName("ALIGNMENT")[0].childNodes[0].nodeValue;
    document.getElementById("ac_mostro").innerHTML = "AC: " + x.getElementsByTagName("AC")[0].childNodes[0].nodeValue;
    document.getElementById("hp_mostro").innerHTML = "HP: " + x.getElementsByTagName("HP")[0].childNodes[0].nodeValue;
    document.getElementById("speed_mostro").innerHTML = "Speed: " + x.getElementsByTagName("SPEED")[0].childNodes[0].nodeValue;
    document.getElementById("size_mostro").innerHTML = "Size: " + x.getElementsByTagName("SIZE")[0].childNodes[0].nodeValue;
    document.getElementById("height_mostro").innerHTML = "Height: " + x.getElementsByTagName("HEIGHT")[0].childNodes[0].nodeValue;
    document.getElementById("weight_mostro").innerHTML = "Weight: " + x.getElementsByTagName("WEIGHT")[0].childNodes[0].nodeValue;
    document.getElementById("challenge_mostro").innerHTML = "CR: " + x.getElementsByTagName("CHALLENGE")[0].childNodes[0].nodeValue; 
  //Habilities and Attacks
  document.getElementById("attack1_mostro").innerHTML = x.getElementsByTagName("ACTION_1")[0].childNodes[0].nodeValue;
  document.getElementById("attack2_mostro").innerHTML = x.getElementsByTagName("ACTION_2")[0].childNodes[0].nodeValue;
  document.getElementById("attack3_mostro").innerHTML = x.getElementsByTagName("ACTION_3")[0].childNodes[0].nodeValue;
  document.getElementById("attack4_mostro").innerHTML = x.getElementsByTagName("ACTION_4")[0].childNodes[0].nodeValue;
  document.getElementById("skill1_mostro").innerHTML = x.getElementsByTagName("POWER_1")[0].childNodes[0].nodeValue;
  document.getElementById("skill2_mostro").innerHTML = x.getElementsByTagName("POWER_2")[0].childNodes[0].nodeValue;
  document.getElementById("skill3_mostro").innerHTML = x.getElementsByTagName("POWER_3")[0].childNodes[0].nodeValue;
  document.getElementById("skill4_mostro").innerHTML = x.getElementsByTagName("POWER_4")[0].childNodes[0].nodeValue;
  document.getElementById("attackDes_mostro").innerHTML = x.getElementsByTagName("ACTION_DES")[0].childNodes[0].nodeValue;
  //Attacking Dice
  document.getElementById("rollMod").innerHTML = x.getElementsByTagName("ATTACK")[0].childNodes[0].nodeValue;
  document.getElementById("dado_attack_1").innerHTML = x.getElementsByTagName("ACTIONDADOS_1")[0].childNodes[0].nodeValue;
  document.getElementById("dado_attack_2").innerHTML = x.getElementsByTagName("ACTIONDADOS_2")[0].childNodes[0].nodeValue;
  document.getElementById("dado_attack_3").innerHTML = x.getElementsByTagName("ACTIONDADOS_3")[0].childNodes[0].nodeValue;
  document.getElementById("dado_attack_4").innerHTML = x.getElementsByTagName("ACTIONDADOS_4")[0].childNodes[0].nodeValue;
  document.getElementById("valor_attack_1").innerHTML = x.getElementsByTagName("ACTIONVALOR_1")[0].childNodes[0].nodeValue;
  document.getElementById("valor_attack_2").innerHTML = x.getElementsByTagName("ACTIONVALOR_2")[0].childNodes[0].nodeValue;
  document.getElementById("valor_attack_3").innerHTML = x.getElementsByTagName("ACTIONVALOR_3")[0].childNodes[0].nodeValue;
  document.getElementById("valor_attack_4").innerHTML = x.getElementsByTagName("ACTIONVALOR_4")[0].childNodes[0].nodeValue;
  document.getElementById("modi_attack_1").innerHTML = x.getElementsByTagName("ACTIONMODI_1")[0].childNodes[0].nodeValue;
  document.getElementById("modi_attack_2").innerHTML = x.getElementsByTagName("ACTIONMODI_2")[0].childNodes[0].nodeValue;
  document.getElementById("modi_attack_3").innerHTML = x.getElementsByTagName("ACTIONMODI_3")[0].childNodes[0].nodeValue;
  document.getElementById("modi_attack_4").innerHTML = x.getElementsByTagName("ACTIONMODI_4")[0].childNodes[0].nodeValue;

}
//Saving rolls

function str() {
    var numero = document.getElementById("str_mod").innerHTML;
    var numeroNum = numero*1;
    var roll = Math.floor((Math.random()*20)+1);
    document.getElementById("strSave").innerHTML = numeroNum + roll;
}

function dex() {
  var numero = document.getElementById("dex_mod").innerHTML;
  var numeroNum = numero*1;
  var roll = Math.floor((Math.random()*20)+1);
  document.getElementById("dexSave").innerHTML = numeroNum + roll;
}

function con() {
  var numero = document.getElementById("con_mod").innerHTML;
  var numeroNum = numero*1;
  var roll = Math.floor((Math.random()*20)+1);
  document.getElementById("conSave").innerHTML = numeroNum + roll;
}

function int() {
  var numero = document.getElementById("int_mod").innerHTML;
  var numeroNum = numero*1;
  var roll = Math.floor((Math.random()*20)+1);
  document.getElementById("intSave").innerHTML = numeroNum + roll;
}

function wis() {
  var numero = document.getElementById("wis_mod").innerHTML;
  var numeroNum = numero*1;
  var roll = Math.floor((Math.random()*20)+1);
  document.getElementById("wisSave").innerHTML = numeroNum + roll;
}

function chr() {
  var numero = document.getElementById("chr_mod").innerHTML;
  var numeroNum = numero*1;
  var roll = Math.floor((Math.random()*20)+1);
  document.getElementById("chrSave").innerHTML = numeroNum + roll;
}

//Attack Rolls
function rollAttack(){
  var numero = document.getElementById("rollMod").innerHTML;
  var numeroNum = numero*1;
  var roll = Math.floor((Math.random()*20)+1);
  document.getElementById("rolly").innerHTML = numeroNum + roll;
}

function atk1(){
  var htdados = document.getElementById("dado_attack_1").innerHTML;
  var htvalor = document.getElementById("valor_attack_1").innerHTML;
  var htmodi = document.getElementById("modi_attack_1").innerHTML;
  var dados = htdados*1;
  var valor = htvalor*1;
  var modi = htmodi*1;
  var subtotal = 0;
  for(var i=0; i<dados; i++){
    var roll = Math.floor((Math.random()*valor)+1);
    subtotal += roll;
  }
  var total = subtotal + modi;
  document.getElementById("tk1").innerHTML = total;
  if(document.getElementById("tk1").innerHTML === "NaN"){document.getElementById("tk1").innerHTML = "*";}
}

function atk2(){
  var htdados = document.getElementById("dado_attack_2").innerHTML;
  var htvalor = document.getElementById("valor_attack_2").innerHTML;
  var htmodi = document.getElementById("modi_attack_2").innerHTML;
  var dados = htdados*1;
  var valor = htvalor*1;
  var modi = htmodi*1;
  var subtotal = 0;
  for(var i=0; i<dados; i++){
    var roll = Math.floor((Math.random()*valor)+1);
    subtotal += roll;
  }
  var total = subtotal + modi;
  document.getElementById("tk2").innerHTML = total;
  if(document.getElementById("tk2").innerHTML === "NaN"){document.getElementById("tk2").innerHTML = "*";}
}

function atk3(){
  var htdados = document.getElementById("dado_attack_3").innerHTML;
  var htvalor = document.getElementById("valor_attack_3").innerHTML;
  var htmodi = document.getElementById("modi_attack_3").innerHTML;
  var dados = htdados*1;
  var valor = htvalor*1;
  var modi = htmodi*1;
  var subtotal = 0;
  for(var i=0; i<dados; i++){
    var roll = Math.floor((Math.random()*valor)+1);
    subtotal += roll;
  }
  var total = subtotal + modi;
  document.getElementById("tk3").innerHTML = total;
  if(document.getElementById("tk3").innerHTML === "NaN"){document.getElementById("tk3").innerHTML = "*";}
}

function atk4(){
  var htdados = document.getElementById("dado_attack_4").innerHTML;
  var htvalor = document.getElementById("valor_attack_4").innerHTML;
  var htmodi = document.getElementById("modi_attack_4").innerHTML;
  var dados = htdados*1;
  var valor = htvalor*1;
  var modi = htmodi*1;
  var subtotal = 0;
  for(var i=0; i<dados; i++){
    var roll = Math.floor((Math.random()*valor)+1);
    subtotal += roll;
  }
  var total = subtotal + modi;
  document.getElementById("tk4").innerHTML = total;
  if(document.getElementById("tk4").innerHTML === "NaN"){document.getElementById("tk4").innerHTML = "*";}
}

//Search Engine
function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      nave(this);
    }
  };
  xhttp.open("GET", "https://dantezunino.github.io/mostros/mostros.xml", true);
  xhttp.send();
}

function nave(xml){
  var xmlDoc = xml.responseXML;
  var inputo = document.getElementById("select_monster").value;
    for(var i=0; i<14; i++)    {
      if(xmlDoc.getElementsByTagName("BICHO")[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue === inputo){
        monster = i;
      };
    };
  esconder();
  loadDoc1();
  
}

//Search bar with sugestions!
function sugestions(){
  var input, filter, a, i;
  input = document.getElementById("select_monster");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//Show/Hide list
function desplegar() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function mostrar(){
  document.getElementById("myDropdown").classList.add("show");
}

function esconder(){
  document.getElementById("myDropdown").classList.remove("show");
}

//Declare list element as input value
function replace(h){
  document.getElementById("select_monster").value = h.innerHTML;
}
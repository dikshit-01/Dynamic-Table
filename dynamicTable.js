
function fun1() {
  let cols = document.forms["frm"]["columns"].value;
  let rows = document.forms["frm"]["rows"].value;

  

  if (Number(cols) <= 0 || Number(cols) > 10) {
    let validTxt = "Input is not valid";
    document.getElementById("valid1").innerHTML = validTxt;
    document.getElementById("valid1").style.color = "red";
  } else {
    let fields = document.getElementById("inputFields");
    document.getElementById("valid1").innerHTML = "";

    for (let i = 1; i <= cols; i++) {
      let f = document.createElement("input");
      f.type = "text";
      f.placeholder = "Enter Heading";
      f.style.padding = "10px";
      fields.appendChild(f);
    }
  

    document.getElementById("frm").appendChild(fields);
    let btn = document.createElement("button");
    btn.innerHTML = "Create Table";
    btn.id="btn2";
    btnStyling(btn);
    btn.addEventListener("click", fun2);
    fields.appendChild(btn);

   document.forms["frm"]["columns"].disabled=true;
  document.forms["frm"]["rows"].disabled=true;
  document.getElementById("btn1").disabled=true;
  }
}

function btnStyling(btn) {
  btn.type = "button";
  btn.style.display = "block";
  btn.style.margin = "20px auto";
  btn.style.padding = "10px";
  btn.style.fontSize = "20px";
  btn.style.borderRadius = "10px";
}

function fun2() {
  let cols = document.forms["frm"]["columns"].value;
  let rows = document.forms["frm"]["rows"].value;
  
  

  let headingArry = [];
  let fields = document.getElementById("inputFields");
  for (let i = 0; i < cols; i++) {
    headingArry.push(fields.childNodes[i].value);
  }

  console.log(headingArry);
  let flag = false;
  let tbl = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let bodyRow = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      if(isValid(headingArry[j])){
        alert("plz enter input")
        flag=true;
        break;
      }
     else{
      if (i == 0) {
        let h = document.createElement("th");
        let hVal = document.createTextNode(headingArry[j]);
        h.appendChild(hVal);
        bodyRow.appendChild(h);
      } else {
        let bodyData = document.createElement("td");
        bodyRow.appendChild(bodyData);
      }
     tbl.appendChild(bodyRow);
    }
    }
    if(flag) break;
    else{
      document.getElementById("demo").appendChild(tbl);
      document.getElementById("btn2").disabled=true;
    }
  }
}

function isValid(val){
  if(val=="") return true;
  else return false;
}

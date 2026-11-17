function channel() {
    var a = document.getElementsByName("checkboxs");
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            counter++;
            
        }
        if (counter > 3) {
            document.getElementsByName("checkboxes").disabled = true;
            a[i].checked = false;
            counter--;
        }
    }
};
//not used
//function value_f() {
//document.getElementById("nav1").style.visibility = "hidden"; document.getElementById("nav1").style.position = "absolute"; document.getElementById("nav2").style.visibility = "visible"; document.getElementById("nav2").style.position = "unset";
//var imun = document.getElementById('1name').value + document.getElementById("droga").value;
//var level = document.getElementsByTagName('poziom').value;
//var inlang = document.getElementsByName('html').value;
//};

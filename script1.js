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
//new(idk)
//<input type="submit" value="Submit"> <-   remember 1225

const name = document.getElementById('1name')
const kierunek = document.getElementById('droga')
const from1 = document.getElementById('an')
const errorEl = document.getElementById('error')
const infer = document.getElementById('info') 
const original_post = document.getElementById('option')
const op_body = document.getElementById('option_part')
var osu_1 = document.querySelector('input[name = "html"].checked')
const osu_1_1 = document.getElementsByName('html')

//--funkcje --////////
function when_er() {


    infer.style.visibility = 'visible';
    infer.style.position = 'relative';
    errorEl.style.visibility = 'visible';
    errorEl.style.position = 'relative';


}
function when_no_er() {

    infer.style.visibility = 'hidden';
    infer.style.position = 'absolute';
    errorEl.style.visibility = 'hidden';
    errorEl.style.position = 'absolute';

}
//--
an.addEventListener('submit', (e) => {
    //--1_section--//
    let messages = [];
    let messages2 = [];
    if (name.value === '' || name.value == null) {
        messages.push('Please put your name here')

    }
    if (name.value.length <= 2) {
        messages.push('Your name has to be at least 3 characters long')
        messages2.push('Błąd w imieniu')
        name.style.boxShadow = "0 0 5px 5px red";
    }
    if (name.value.length >= 61) {
        messages.push("Your name can't be longer then 60 character")
        messages2.push('Błąd w imieniu')
        name.style.boxShadow = "0 0 5px 5px red";
    }
    if (kierunek.value.length >= 101) {
        messages.push("Text in 'Kierunek' cell can't be longer then 100 characters")
        messages2.push('Błąd w kierunku')
        kierunek.style.boxShadow = "0 0 5px 5px red";
    }
    if (kierunek.value.length <= 0) {
        messages.push("Please fill 'kierunek' or fill it with 'brak'")
        messages2.push('Błąd w kierunku')
        kierunek.style.boxShadow = "0 0 5px 5px red";
    }
    if (messages.length > 0) { 
        when_er();
        e.preventDefault()
        errorEl.innerText = messages.join(', ')
        infer.innerText = messages2.join(', ')
        
    }
    if (kierunek.value.length > 0 && kierunek.value.length < 101) {
        kierunek.style.boxShadow = "0 0 2px 1px #00ff4d";
    }
    if (name.value.length > 2 && name.value.length < 61) {
        name.style.boxShadow = "0 0 2px 1px #00ff4d";
    }
    if (name.value.length > 2 && name.value.length < 61 && kierunek.value.length > 0 && kierunek.value.length < 101) {
        when_no_er();
    }
    //--end_of_section_2--//
    //--2_section--//
    if (original_post.value === 'brak') {
        op_body.style.boxShadow = "0 0 5px 5px red";
        e.preventDefault()
    } else { op_body.style.boxShadow = "0 0 0 0 red" }
    //--end_of_section_2

    for (var w = 0; w < osu_1_1.length;w++)
    {
        if (osu_1_1[w].checked == true) {
            the_html.style.boxShadow = "0 0 0 0 #00ff4d"
            break;
        }
        if (osu_1_1[w].checked == false) {
            the_html.style.boxShadow = "0 0 5px 5px red"
            e.preventDefault()
        }
    }
    

})
//
//--------------------notatka 
//dodać email
//
//
//
//
//
//
//
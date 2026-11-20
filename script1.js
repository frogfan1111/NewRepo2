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
const porject = document.getElementById('projekt')
const dream = document.getElementById('dreams')

// osu
const osu_1_1 = document.getElementsByName('html')
const osu_2 = document.getElementsByName('css')
const osu_3 = document.getElementsByName('javascript')
const osu_4 = document.getElementsByName('type-script')
const osu_5 = document.getElementsByName('react')
const osu_6 = document.getElementsByName('vue_ang')
const osu_7 = document.getElementsByName('node')
const osu_8 = document.getElementsByName('php_p')
const osu_9 = document.getElementsByName('baza_dan')
const osu_a = document.getElementsByName('git')
const osu_b = document.getElementsByName('rest_api')
const osu_c = document.getElementsByName('desing')
const osu_d = document.getElementsByName('debug')

//--funkcje --////////
function when_er() {


    infer.style.visibility = 'visible';
    infer.style.position = 'relative';
    

}
function when_no_er() {

    infer.style.visibility = 'hidden';
    infer.style.position = 'absolute';
    

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
   
    
    if (kierunek.value.length > 0 && kierunek.value.length < 101) {
        kierunek.style.boxShadow = "0 0 2px 1px #00ff4d";
    }
    if (name.value.length > 2 && name.value.length < 61) {
        name.style.boxShadow = "0 0 2px 1px #00ff4d";
    }
    if (name.value.length > 2 && name.value.length < 61 && kierunek.value.length > 0 && kierunek.value.length < 101) {
        errorEl.style.visibility = 'hidden';
        errorEl.style.position = 'absolute';
    } else {
        errorEl.style.visibility = 'visible';
        errorEl.style.position = 'relative';
    }
    //--end_of_section_1--//
    //--2_section--//
    if (original_post.value === 'brak') {
        op_body.style.boxShadow = "0 0 5px 5px red";
        e.preventDefault()
        messages2.push('Błąd w doświadczeniach')
    } else { op_body.style.boxShadow = "0 0 2px 1px #00ff4d" }
    //--end_of_section_2
    //__options__//
    for (var tab=0;tab <1 ;tab++) {
        var one = false;
        var one_2 = false;
        var one_3 = false;
        var one_4 = false;
        var one_5 = false;
        var one_6 = false;
        var one_7 = false;
        var one_8 = false;
        var one_9 = false;
        var one_0 = false;
        var one_11 = false;
        var one_12 = false;
        var one_13 = false;
        for (var w = 0; w < osu_2.length; w++) {
            if (osu_2[w].checked == true) {
                
                one_2 = true
            }
        }
        for (var w = 0; w < osu_1_1.length; w++) {
            if (osu_1_1[w].checked == true) {
                
                one = true
            }
        }
        for (var w = 0; w < osu_3.length; w++) {
            if (osu_3[w].checked == true) {
                
                one_3 = true
            }
        }
        for (var w = 0; w < osu_4.length; w++) {
            if (osu_4[w].checked == true) {
                
                one_4 = true
            }
        }
        for (var w = 0; w < osu_5.length; w++) {
            if (osu_5[w].checked == true) {
                
                one_5 = true
            }
        }
        for (var w = 0; w < osu_6.length; w++) {
            if (osu_6[w].checked == true) {
                
                one_6 = true
            }
        }
        for (var w = 0; w < osu_7.length; w++) {
            if (osu_7[w].checked == true) {
                
                one_7 = true
            }
        }
        for (var w = 0; w < osu_8.length; w++) {
            if (osu_8[w].checked == true) {
                
                one_8 = true
            }
        }
        for (var w = 0; w < osu_9.length; w++) {
            if (osu_9[w].checked == true) {
                
                one_9 = true
            }
        }
        for (var w = 0; w < osu_a.length; w++) {
            if (osu_a[w].checked == true) {
                
                one_0 = true
            }
        }
        for (var w = 0; w < osu_b.length; w++) {
            if (osu_b[w].checked == true) {
                
                one_11 = true
            }
        }
        for (var w = 0; w < osu_c.length; w++) {
            if (osu_c[w].checked == true) {
                
                one_12 = true
            }
        }
        for (var w = 0; w < osu_d.length; w++) {
            if (osu_d[w].checked == true) {
                
                one_13 = true
            }
        }
                   
        if (one == true && one_2 == true && one_3 == true && one_4 == true && one_5 == true && one_6 == true && one_7 == true && one_8 == true && one_9 == true && one_0 == true && one_11 == true && one_12 == true && one_13 == true)
        {
            the_html.style.boxShadow = "0 0 2px 1px #00ff4d"
            break;
        } 
        else
        {
            e.preventDefault()
            the_html.style.boxShadow = "0 0 5px 5px red"
            messages2.push('Błąd w ocenie swojich umiejętnościach')
            break;
            
        }
    }
    //__end_of_options__//
    //text arena
    if (projekt.value == '//type here//')
    {
        document.getElementById('projekt').style.boxShadow = "0 0 5px 5px red";
        messages2.push('Błąd w Dotychczasowych projektach')
        e.preventDefault()
    }else {
        document.getElementById('projekt').style.boxShadow = "0 0 2px 1px #00ff4d";
    }
    if (dream.value == '//type here// ')
    {
        dream.style.boxShadow = "0 0 5px 5px red";
        messages2.push('Błąd w ostatnim okienku')
        e.preventDefault()

    }else {
        dream.style.boxShadow = "0 0 2px 1px #00ff4d";
    }
    //text
    if (messages2.length > 0) {
        when_er();
        e.preventDefault()
        errorEl.innerText = messages.join(', ')
        infer.innerText = messages2.join(', ')
    } else { when_no_er();}
})
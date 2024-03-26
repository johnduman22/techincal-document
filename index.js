var lastScrollTop = 0;
    mainBar = document.getElementById("mainBar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        mainBar.style.top="-80px";
    } else {
        mainBar.style.top="0"
    }
    lastScrollTop = scrollTop;
})

function activeButton(){
    document.getElementById("unactive").style.display="block";
    document.getElementById("active").style.display = "none";
    document.getElementById("body").style.background = "#f8fafc"; /* smokegray */
    document.getElementById("navBar").style.background = "#e2e8f0"; /* NAVBAR */
    document.getElementById("navBar").style.color = "#000"; /* NAVBAR */
    document.getElementById("header").style.background = "#cbd5e1"; /* NAVBAR */
    document.getElementById("header").style.color = "#000"; /* NAVBAR */
    document.getElementById("mainBar").style.background = "#64748b"; /* MAINBAR */
    document.getElementById("mainBar").style.color = "#64b087"; /* MAINBAR */
    
    // document.getElementById("section1").style.color = "#000";
    // document.getElementById("section2").style.color = "#000";
    // document.getElementById("section3").style.color = "#000";
    // document.getElementById("section4").style.color = "#000";
    // document.getElementById("section5").style.color = "#000";
    // document.getElementById("section6").style.color = "#000";
    // document.getElementById("section7").style.color = "#000";
    // document.getElementById("section8").style.color = "#000";
    // document.getElementById("section9").style.color = "#000";
    // document.getElementById("section10").style.color = "#000";
    // document.getElementById("section11").style.color = "#000";
    // document.getElementById("section12").style.color = "#000";
    // document.getElementById("section13").style.color = "#000";
    // document.getElementById("section14").style.color = "#000";
    // Introduction
    document.getElementById("section1").style.color = "#525252";

    // What you should already know
    document.getElementById("section2").style.color = "#525252";

    // JavaScript and Java
    document.getElementById("section3").style.color = "#525252";

    // Hello World
    document.getElementById("section4").style.color = "#525252";
    document.getElementById("code1").style.backgroundColor = "#e2e8f0";
    document.getElementById("code1").style.color = "#525252";

    // Variables
    document.getElementById("section5").style.color = "#525252";
    
    // Declaring variables
    document.getElementById("section6").style.color = "#525252";
    document.getElementById("code2").style.backgroundColor = "#e2e8f0";
    document.getElementById("code2").style.color = "#525252";
    document.getElementById("code3").style.backgroundColor = "#e2e8f0";
    document.getElementById("code3").style.color = "#525252";
    document.getElementById("code4").style.backgroundColor = "#e2e8f0";
    document.getElementById("code4").style.color = "#525252";

    // Variable scope
    document.getElementById("section7").style.color = "#525252";
    document.getElementById("code5").style.backgroundColor = "#e2e8f0";
    document.getElementById("code5").style.color = "#525252";
    document.getElementById("code6").style.backgroundColor = "#e2e8f0";
    document.getElementById("code6").style.color = "#525252";

    // Global Variables
    document.getElementById("section8").style.color = "#525252";
    
    // Constants
    document.getElementById("section9").style.color = "#525252"; 3
    document.getElementById("code7").style.backgroundColor = "#e2e8f0";
    document.getElementById("code7").style.color = "#525252";
    document.getElementById("code8").style.backgroundColor = "#e2e8f0";
    document.getElementById("code8").style.color = "#525252";
    document.getElementById("code9").style.backgroundColor = "#e2e8f0";
    document.getElementById("code9").style.color = "#525252";

    // Data types
    document.getElementById("section10").style.color = "#525252";

    // if...else statement
    document.getElementById("section11").style.color = "#525252";
    document.getElementById("code10").style.backgroundColor = "#e2e8f0";
    document.getElementById("code10").style.color = "#525252";
    document.getElementById("code11").style.backgroundColor = "#e2e8f0";
    document.getElementById("code11").style.color = "#525252";
    document.getElementById("code12").style.backgroundColor = "#e2e8f0";
    document.getElementById("code12").style.color = "#525252";
    document.getElementById("code13").style.backgroundColor = "#e2e8f0";
    document.getElementById("code13").style.color = "#525252";
    document.getElementById("code14").style.backgroundColor = "#e2e8f0";
    document.getElementById("code14").style.color = "#525252";

    // while statement
    document.getElementById("section12").style.color = "#525252";
    document.getElementById("code15").style.backgroundColor = "#e2e8f0";
    document.getElementById("code15").style.color = "#525252";
    document.getElementById("code16").style.backgroundColor = "#e2e8f0";
    document.getElementById("code16").style.color = "#525252";

    // Function declarations
    document.getElementById("section13").style.color = "#525252";
    document.getElementById("section12").style.color = "#525252";
    document.getElementById("code17").style.backgroundColor = "#e2e8f0";
    document.getElementById("code17").style.color = "#525252";
    document.getElementById("code18").style.backgroundColor = "#e2e8f0";
    document.getElementById("code18").style.color = "#525252";
    document.getElementById("code19").style.backgroundColor = "#e2e8f0";
    document.getElementById("code19").style.color = "#525252";

    // Reference
    document.getElementById("section14").style.color = "#525252";
}

function unactiveButton(){
    document.getElementById("active").style.display="block";
    document.getElementById("unactive").style.display = "none";
    document.getElementById("body").style.background = "#11182e"; /* darkmode */
    document.getElementById("navBar").style.background = "#11182e"; /* NAVBAR */
    document.getElementById("navBar").style.color = "#64b087"; /* NAVBAR */
    document.getElementById("header").style.background = "#05113b"; /* NAVBAR */
    document.getElementById("header").style.color = "#f5f5f4"; /* NAVBAR */
    document.getElementById("mainBar").style.background = "#05113b"; /* MAINBAR */
    document.getElementById("mainBar").style.color = "#64b087"; /* MAINBAR */

    // Introduction
    document.getElementById("section1").style.color = "#64b087";

    // What you should already know
    document.getElementById("section2").style.color = "#64b087";

    // JavaScript and Java
    document.getElementById("section3").style.color = "#64b087";

    // Hello World
    document.getElementById("section4").style.color = "#64b087";
    document.getElementById("code1").style.backgroundColor = "#182140";
    document.getElementById("code1").style.color = "#3a5dcf";

    // Variables
    document.getElementById("section5").style.color = "#64b087";
    
    // Declaring variables
    document.getElementById("section6").style.color = "#64b087";
    document.getElementById("code2").style.backgroundColor = "#182140";
    document.getElementById("code2").style.color = "#3a5dcf";
    document.getElementById("code3").style.backgroundColor = "#182140";
    document.getElementById("code3").style.color = "#3a5dcf";
    document.getElementById("code4").style.backgroundColor = "#182140";
    document.getElementById("code4").style.color = "#3a5dcf";

    // Variable scope
    document.getElementById("section7").style.color = "#64b087";
    document.getElementById("code5").style.backgroundColor = "#182140";
    document.getElementById("code5").style.color = "#3a5dcf";
    document.getElementById("code6").style.backgroundColor = "#182140";
    document.getElementById("code6").style.color = "#3a5dcf";

    // Global Variables
    document.getElementById("section8").style.color = "#64b087";

    // Constants
    document.getElementById("section9").style.color = "#64b087"; 3
    document.getElementById("code7").style.backgroundColor = "#182140";
    document.getElementById("code7").style.color = "#3a5dcf";
    document.getElementById("code8").style.backgroundColor = "#182140";
    document.getElementById("code8").style.color = "#3a5dcf";
    document.getElementById("code9").style.backgroundColor = "#182140";
    document.getElementById("code9").style.color = "#3a5dcf";

    // Data types
    document.getElementById("section10").style.color = "#64b087";

    // if...else statement
    document.getElementById("section11").style.color = "#64b087";
    document.getElementById("code10").style.backgroundColor = "#182140";
    document.getElementById("code10").style.color = "#3a5dcf";
    document.getElementById("code11").style.backgroundColor = "#182140";
    document.getElementById("code11").style.color = "#3a5dcf";
    document.getElementById("code12").style.backgroundColor = "#182140";
    document.getElementById("code12").style.color = "#3a5dcf";
    document.getElementById("code13").style.backgroundColor = "#182140";
    document.getElementById("code13").style.color = "#3a5dcf";
    document.getElementById("code14").style.backgroundColor = "#182140";
    document.getElementById("code14").style.color = "#3a5dcf";

    // while statement
    document.getElementById("section12").style.color = "#64b087";
    document.getElementById("code15").style.backgroundColor = "#182140";
    document.getElementById("code15").style.color = "#3a5dcf";
    document.getElementById("code16").style.backgroundColor = "#182140";
    document.getElementById("code16").style.color = "#3a5dcf";

    // Function declarations
    document.getElementById("section13").style.color = "#64b087";
    document.getElementById("section12").style.color = "#64b087";
    document.getElementById("code17").style.backgroundColor = "#182140";
    document.getElementById("code17").style.color = "#3a5dcf";
    document.getElementById("code18").style.backgroundColor = "#182140";
    document.getElementById("code18").style.color = "#3a5dcf";
    document.getElementById("code19").style.backgroundColor = "#182140";
    document.getElementById("code19").style.color = "#3a5dcf";

    // Reference
    document.getElementById("section14").style.color = "#64b087";
}




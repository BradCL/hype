let total = 0
let isStart = false
let hasRefreshed = true

const lilHype = document.querySelector('.hype1text')
const moreHype = document.querySelector('.hype2text')
const lotsHype = document.querySelector('.hype3text')
const maxHype = document.querySelector('.hype4text')
const wrongButton = document.querySelector('.pressBegin')
const displayLink = document.querySelector('.hypeLink')
const displayLinkText = document.querySelector('.clickHypeText')
const query = window.matchMedia("(max-width: 501px)")


document.querySelector('.nesController').addEventListener('click', pressStart)
document.querySelector('.start').addEventListener('click', begin)
document.querySelector('.horizontal .arrowlf').addEventListener('click', goRight)
document.querySelector('.horizontal .arrowlf').addEventListener('click', selectRight)
document.querySelector('.horizontal .arrowrh').addEventListener('click', goLeft)
document.querySelector('.horizontal .arrowrh').addEventListener('click', selectLeft)
document.querySelector('.vertical .arrowlf').addEventListener('click', goDown)
document.querySelector('.vertical .arrowrh').addEventListener('click', goUp)
document.querySelector('.a').addEventListener('click', showLink)
document.querySelector('.b').addEventListener('click', decreaseTotal5)
window.addEventListener('resize', resizeMobile)
    

function resizeMobile(){
    if (window.innerWidth > 501 && hasRefreshed === false){
        location.reload();
    } else if (window.innerWidth < 501 && hasRefreshed === true){
        location.reload();
    }
}

/* ======================================
d Pad
=======================================*/
function goRight(){
    total = total + 1;
    displayLink.classList.add('hidden')
}
function goLeft(){
    total = total - 1;
    displayLink.classList.add('hidden')
}
function goUp(){
    total = total + 100;
    displayLink.classList.add('hidden')
}
function goDown(){
    total = total - 5;
    displayLink.classList.add('hidden')
}

/* ======================================
Button
=======================================*/
function decreaseTotal5(){
    if (true){
        isStart = false;
        maxHype.classList.remove('highlight', 'highlight4');        
        lotsHype.classList.remove('highlight', 'highlight3');        
        lilHype.classList.remove('highlight');        
        moreHype.classList.remove('highlight', 'highlight2');
        displayLinkText.classList.remove('easterEgg');
        document.querySelector('.clickHypeText p').innerText = 'Press for HYPE'
        displayLink.classList.add('hidden');
        displayLinkText.classList.add('hidden');
    }
}
function pressStart(){
    if (total === 0 && isStart === false){
        wrongButton.classList.add('larger')
    }
}

function begin(){
    if (isStart === false){
        lilHype.classList.add('highlight');
        wrongButton.classList.remove('larger')
        document.querySelector('.pressBegin').innerText = 'Press A to choose'        
        displayLink.classList.add('hidden');
        displayLinkText.classList.add('hidden');
        displayLinkText.classList.remove('easterEgg');

        total = 1;
        isStart = true
    }
}
function selectRight (){
    if (total === 2 && isStart === true){
        lilHype.classList.remove('highlight');        
        moreHype.classList.add('highlight');
        displayLinkText.classList.add('hidden');        
    } else if (total === 3 && isStart === true){
        lotsHype.classList.add('highlight');        
        lilHype.classList.remove('highlight');        
        moreHype.classList.remove('highlight');
        displayLinkText.classList.add('hidden');
    }else if (total >= 4 && isStart === true){
        total = 4
        maxHype.classList.add('highlight');        
        lotsHype.classList.remove('highlight');        
        lilHype.classList.remove('highlight');        
        moreHype.classList.remove('highlight');
        displayLinkText.classList.add('hidden');        
    }   
}
function selectLeft (){
    if (total <= 1 && isStart === true){
        lilHype.classList.add('highlight');        
        moreHype.classList.remove('highlight');
        lotsHype.classList.remove('highlight');
        maxHype.classList.remove('highlight')
        displayLinkText.classList.add('hidden');
        total = 1 
    }
    if (total === 2 && isStart === true){
        moreHype.classList.add('highlight');
        lilHype.classList.remove('highlight');        
        lotsHype.classList.remove('highlight');
        maxHype.classList.remove('highlight');
        displayLinkText.classList.add('hidden');        
    } else if (total === 3 && isStart === true){
        lotsHype.classList.add('highlight');
        lilHype.classList.remove('highlight');        
        moreHype.classList.remove('highlight');
        maxHype.classList.remove('highlight');
        displayLinkText.classList.add('hidden');    
    }else if (total >= 4 && isStart === true){
        total = 4
        maxHype.classList.add('highlight');        
        lotsHype.classList.remove('highlight');        
        lilHype.classList.remove('highlight');        
        moreHype.classList.remove('highlight');
        displayLinkText.classList.add('hidden');        
    }   
}
function showLink(){
    if  (total === 1 && isStart === true){
        displayLink.classList.remove('hidden');
        displayLinkText.classList.remove('hidden')
        document.getElementById('insertLink').setAttribute('href', 'https://www.youtube.com/watch?v=9jK-NcRmVcw');
    }else if (total === 2 && isStart === true){
        displayLink.classList.remove('hidden');
        displayLinkText.classList.remove('hidden')
        document.getElementById('insertLink').setAttribute('href', 'https://www.youtube.com/watch?v=_Yhyp-_hX2s&t=3s');
    }else if (total === 3 && isStart === true){
        displayLink.classList.remove('hidden');
        displayLinkText.classList.remove('hidden')
        document.getElementById('insertLink').setAttribute('href', 'https://www.youtube.com/watch?v=btPJPFnesV4');
    }else if (total >= 4 && isStart === true){
        displayLink.classList.remove('hidden');
        displayLinkText.classList.remove('hidden')
        document.getElementById('insertLink').setAttribute('href', 'https://www.youtube.com/watch?v=Ga2yEP4goKc');
    }else if (total === 190 && isStart === false){
        displayLink.classList.remove('hidden');
        displayLinkText.classList.remove('hidden');
        displayLinkText.classList.add('easterEgg');
        document.querySelector('.clickHypeText p').innerText = 'Well done Gamer'
        document.getElementById('insertLink').setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}
/*==================================
Media Query
==================================*/
    if (window.matchMedia("(max-width: 501px)").matches){
        hasRefreshed = false
        document.querySelector('.horizontal .arrowlf').addEventListener('click', altSelectRight)
        document.querySelector('.start').addEventListener('click', altBegin)
        document.querySelector('.horizontal .arrowrh').addEventListener('click', altSelectLeft)
        document.querySelector('.b').addEventListener('click', altDecreaseTotal5)
        document.querySelector(".hype2text").style.display = "none";
        document.querySelector(".hype3text").style.display = "none";
        document.querySelector(".hype4text").style.display = "none";
    
        function altBegin(){
            if (isStart === false){
                lilHype.classList.add('highlight');
                wrongButton.classList.remove('larger')
                document.querySelector('.pressBegin').innerText = 'Press A to choose'        
                displayLink.classList.add('hidden');
                displayLinkText.classList.add('hidden');
                displayLinkText.classList.remove('easterEgg');
                document.querySelector(".hype1text").style.display = "flex";
                document.querySelector(".hype2text").style.display = "none";
                document.querySelector(".hype3text").style.display = "none";
                document.querySelector(".hype4text").style.display = "none";
                total = 1;
                isStart = true
            }
        }
        function altDecreaseTotal5(){
            isStart = false;
            displayLinkText.classList.remove('easterEgg');
            document.querySelector('.clickHypeText p').innerText = 'Press for HYPE'
            displayLink.classList.add('hidden');
            displayLinkText.classList.add('hidden');
            document.querySelector(".hype1text").style.display = "flex";
            document.querySelector(".hype2text").style.display = "none";
            document.querySelector(".hype3text").style.display = "none";
            document.querySelector(".hype4text").style.display = "none";
        }
        function altSelectRight(){
            if (total === 2 && isStart === true){
                document.querySelector(".hype1text").style.display = "none";
                document.querySelector(".hype2text").style.display = "flex";
                moreHype.classList.add('highlight2');
                displayLinkText.classList.add('hidden');        
            } else if (total === 3 && isStart === true){
                document.querySelector(".hype2text").style.display = "none";
                document.querySelector(".hype3text").style.display = "flex";
                lotsHype.classList.add('highlight3');        
                displayLinkText.classList.add('hidden');
            }else if (total >= 4 && isStart === true){
                total = 4
                document.querySelector(".hype3text").style.display = "none";
                document.querySelector(".hype4text").style.display = "flex";
                maxHype.classList.add('highlight4');        
                displayLinkText.classList.add('hidden');        
            }   
        }
        function altSelectLeft (){
            if (total <= 1 && isStart === true){
                document.querySelector(".hype1text").style.display = "flex";
                lilHype.classList.add('highlight');
                document.querySelector(".hype2text").style.display = "none";
                document.querySelector(".hype3text").style.display = "none";
                document.querySelector(".hype4text").style.display = "none";
                displayLinkText.classList.add('hidden');
                total = 1 
            }else if (total === 2 && isStart === true){
                document.querySelector(".hype2text").style.display = "flex";
                moreHype.classList.add('highlight');
                document.querySelector(".hype1text").style.display = "none";
                document.querySelector(".hype3text").style.display = "none";
                document.querySelector(".hype4text").style.display = "none";
                displayLinkText.classList.add('hidden');        
            } else if (total === 3 && isStart === true){
                document.querySelector(".hype3text").style.display = "flex";
                lotsHype.classList.add('highlight');
                document.querySelector(".hype1text").style.display = "none";
                document.querySelector(".hype2text").style.display = "none";
                document.querySelector(".hype4text").style.display = "none";
                displayLinkText.classList.add('hidden');    
            }else if (total >= 4 && isStart === true){
                total = 4
                document.querySelector(".hype4text").style.display = "flex";
                maxHype.classList.add('highlight');        
                document.querySelector(".hype1text").style.display = "none";
                document.querySelector(".hype2text").style.display = "none";
                document.querySelector(".hype3text").style.display = "none";
                displayLinkText.classList.add('hidden');        
            }   
        }
    }
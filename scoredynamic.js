let score1 = 0;
let score2 = 0;
let winPts = 0;
let gameDecision = false;

const pt1 = document.querySelector('#score-1');
const pt2 = document.querySelector('#score-2');
const pts1 = document.querySelector('#btn-1');
const pts2 = document.querySelector('#btn-2');
const reset = document.querySelector('#btn-3');
const points = document.querySelector('#Pointer');

pts1.addEventListener('click' , function() {
    score1 += 1;
    pt1.innerText = score1;
    if(score1 === winPts){
        pts1.disabled = true;
        pts2.disabled = true;
        pt1.style.color = 'GREEN';
        pt2.style.color = 'RED';
    }
});

pts2.addEventListener('click' , function() {
    score2 += 1;
    pt2.innerText = score2;
    if(score2 === winPts){
        pts1.disabled = true;
        pts2.disabled = true;
        pt1.style.color = 'RED';
        pt2.style.color = 'GREEN';
    }

});

reset.addEventListener('click' , resets);

points.addEventListener('change' , function(){
    winPts = parseInt(this.value);
});

function resets()
{
    score1 = 0;
    score2 = 0;
    pt1.innerText = score1;
    pt2.innerText = score2;
    pts1.disabled = false;
    pts2.disabled = false;
    pt1.style.color = 'BLACK';
    pt2.style.color = 'BLACK';
};
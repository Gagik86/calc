const textarea = document.getElementById('textarea');
const calculator = document.getElementById('calculator')
const reset = document.getElementById('reset')
const result = document.getElementById('result')
const readingLevel = document.getElementById('readingLevel');
const averageWords = document.getElementById('averageWords');
const averageSyllables = document.getElementById('averageSyllables');
const sentences = document.getElementById('sentences');
const words = document.getElementById('words');
const fleshLevel = document.getElementById('fleshLevel');
const fleshScore = document.getElementById('fleshScore');
const resultDiv = document.getElementById('resultDiv')
const ex1 = document.getElementById("ex1")
const ex2 = document.getElementById("ex2")
const ex3 = document.getElementById("ex3")
const ex4 = document.getElementById("ex4")
const ex5 = document.getElementById("ex5")
const ex6 = document.getElementById("ex6")
const ex7 = document.getElementById("ex7")
const trElements = document.getElementsByTagName('tr')

textarea.value = '';
resultDiv.style.display = 'none'

textarea.addEventListener('click', (event) => {
    textarea.style.background = '#D9ECFF'
})

textarea.addEventListener('blur', () => {
    textarea.style.background = '#FEF7D2';
})

function Calcul() {
    if (textarea.value === "") {
        alert('Error!')
    }

    const vowels = "aeiouAEIOU";
    let mijinQanak = 0;

    if (textarea.value.length > 0) {
        resultDiv.style.display = "flex"

        let wordsCount = textarea.value.split(/\s+/);
        wordsCount = wordsCount.filter(function (word) {
            return word.trim() !== '';
        });

        words.innerText = wordsCount.length;

        let sentencesCount = textarea.value.split(/[.!?]+/);
        sentencesCount = sentencesCount.filter(function (sentence) {
            return sentence.trim() !== '';
        });
        sentences.innerText = sentencesCount.length;

        textarea.value.split('').map((letter) => {
            if (vowels.includes(letter)) {
                console.log(letter)
                mijinQanak++;
            }
        });
        averageSyllables.innerText = mijinQanak / words.innerText;
        averageWords.innerText = words.innerText / sentences.innerText;
    }
    // FKGL = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59 

    fleshLevel.innerText = 0.39 * (words.innerText / sentences.innerText) + 11.8 * (mijinQanak / words.innerText) - 15.59;

    // FKSL = 206.835 - (1.015 * (total words / total sentences)) - (84.6 * (total syllables / total words))
    fleshScore.innerText = 206.835 - (1.015 * (words.innerText / sentences.innerText)) - (84.6 * (mijinQanak / words.innerText))

    if (fleshScore.innerText < 30) {
        readingLevel.innerText = 'College graduate';
        onRemoveStyle();
        ex7.classList.add('style-dashd')
    } else if (fleshScore.innerText >= 30 && fleshScore.innerText < 50) {
        readingLevel.innerText = 'College';
        onRemoveStyle();
        ex6.classList.add('style-dashd')
    } else if (fleshScore.innerText >= 50 && fleshScore.innerText < 60) {
        readingLevel.innerText = '10th to 12th grade (high school)';
        onRemoveStyle();
        ex5.classList.add('style-dashd')
    } else if (fleshScore.innerText >= 60 && fleshScore.innerText < 70) {
        readingLevel.innerText = '8th and 9th grade';
        onRemoveStyle();
        ex4.classList.add('style-dashd')
    } else if (fleshScore.innerText >= 70 && fleshScore.innerText < 80) {
        readingLevel.innerText = '7th grade';
        onRemoveStyle();
        ex3.classList.add('style-dashd')
    } else if (fleshScore.innerText >= 80 && fleshScore.innerText < 90) {
        readingLevel.innerText = '6th grade';
        onRemoveStyle();
        ex2.classList.add('style-dashd')
    } else if (fleshScore.innerText >= 90 && fleshScore.innerText < 100) {
        readingLevel.innerText = '5th grade';
        onRemoveStyle();
        ex1.classList.add('style-dashd')
    }
}

function Reset() {
    textarea.value = "";
    resultDiv.style.display = 'none';
}

function onRemoveStyle() {
    for (let i = 0; i < trElements.length; i++) {
        trElements[i].classList.remove('style-dashd')
    }
}
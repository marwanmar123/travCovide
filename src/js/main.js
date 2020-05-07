const testBtn = document.querySelector('.start-btn')
const questionnaire = document.querySelector('.questionnaire')
const Préambule = document.querySelector('.Préambule')
const stepper = document.querySelectorAll('.stepper h1')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const currentquestion = document.querySelector('.question')
const answerInputs = document.querySelector('.answer-inputs')
const progressBar = document.querySelector('.bar')
const questionNumber = document.querySelector('.question-number')
const animateBox = document.querySelector('.animation')
const result = document.querySelector('.Préambule h1')
const resultMessage = document.querySelectorAll('.Préambule p')
const popup = document.querySelector(".informations__inforthree");

const questions = [{
        question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, su' +
            'eurs) ?',

        input: {
            type: 'radio',
            qNumber: 'Q1',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Quelle est votre température corporelle ?',

        input: {
            type: 'number',
            qNumber: 'Q2',
            name: 'degrés',
            min: 35,
            max: 40
        }
    }, {
        question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habit' +
            'uelle ?',

        input: {
            type: 'radio',
            qNumber: 'Q3',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',

        input: {
            type: 'radio',
            qNumber: 'Q4',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Ces derniers jours, avez-vous un mal de gorge ?',

        input: {
            type: 'radio',
            qNumber: 'Q5',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles mol' +
            'les.',

        input: {
            type: 'radio',
            qNumber: 'Q6',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vou' +
            's reposer plus de la moitié de la journée ?',

        input: {
            type: 'radio',
            qNumber: 'Q7',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus' +
            ' de 24h ?',

        input: {
            type: 'radio',
            qNumber: 'Q8',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel l' +
            'orsque vous parlez ou faites un petit effort ?',

        input: {
            type: 'radio',
            qNumber: 'Q9',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Actuellement, comment vous vous sentez ?',

        input: {
            type: 'radio',
            qNumber: 'Q10',
            answer: [{
                text: 'Bien',

            }, {
                text: 'Assez bien',

            }, {
                text: 'Fatigué(e)',

            }, {
                text: 'Très fatigué',

            }]
        }
    }, {
        question: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',

        input: {

            type: 'number',
            qNumber: 'Q11',
            name: 'ans',
            min: 10,
            max: 100
        }
    }, {
        question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est u' +
            'n facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            qNumber: 'Q12',
            name: 'kg',
            min: 40,
            max: 150
        }
    }, {
        question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui es' +
            't un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            qNumber: 'Q13',
            name: 'cm',
            min: 50,
            max: 100
        }
    }, {
        question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une malad' +
            'ie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologiqu' +
            'e ?',

        input: {
            type: 'radio',
            qNumber: 'Q14',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Êtes-vous diabétique ?',

        input: {
            type: 'radio',
            qNumber: 'Q15',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Avez-vous ou avez-vous eu un cancer ?',

        input: {
            type: 'radio',
            qNumber: 'Q16',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',

        input: {
            type: 'radio',
            qNumber: 'Q17',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Avez-vous une insuffisance rénale chronique dialysée ?',

        input: {
            type: 'radio',
            qNumber: 'Q18',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Avez-vous une maladie chronique du foie ?',

        input: {
            type: 'radio',
            qNumber: 'Q19',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Êtes-vous enceinte ?',

        input: {
            type: 'radio',
            qNumber: 'Q20',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }, {
                text: 'Homme',


            }]
        }
    }, {
        question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',

        input: {
            type: 'radio',
            qNumber: 'Q21',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }, {
        question: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue ' +
            'vos défenses contre les infections. Voici quelques exemples : corticoïdes, mét' +
            'hotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non' +
            ' exhaustive).',

        input: {
            type: 'radio',
            qNumber: 'Q22',
            answer: [{
                text: 'Oui',

            }, {
                text: 'Non',

            }]
        }
    }

]
testBtn.addEventListener('click', startTest);

animateBox.addEventListener('change', (e) => {

    const input = e.target

    // console.log(e);
    if (input.type === 'number') {

        const number = parseFloat(input.value)

        if (number >= input.min && number <= input.max) {

            answers[input.name] = input.value;
            console.log(answers);

            nextBtn.disabled = false;
        }

    } else {

        answers[input.name] = input.id
        console.log(answers);
        nextBtn.disabled = false;
    }

})

let position = 0

function hideprevious() {

    if (position === 0) {
        previousBtn.classList.add('hide')
    } else {
        previousBtn.classList.remove('hide')
    }
}


function startTest() {
    stepper[0].classList.remove('select')
    stepper[1].classList.add('select')
    testBtn.style.display = 'none'
    Préambule.style.display = 'none'
    questionnaire.style.display = 'block'
    hideprevious()
    nextBtn.disabled = true
    showQuestion(questions[position])

}

nextBtn.addEventListener('click', () => {
    if (position < 21) {
        position++
        showQuestion(questions[position])
        folowProgress(position)
        hideprevious()
        // nextBtn.disabled = true
        if (position === 21) {
            nextBtn.innerText = 'Terminer le test'
            nextBtn.classList.add('result')
            const resultBtn = document.querySelector('.result')
            resultBtn.addEventListener('click', Results)

        } else {
            nextBtn.innerText = 'Suivant'
        }
    }
})

previousBtn.addEventListener('click', () => {
    position--
    showQuestion(questions[position])
    folowProgress(position)
    hideprevious()
    nextBtn.disabled = true
    if (position === 21) {
        nextBtn.innerText = 'Terminer le test'

    } else {
        nextBtn.innerText = 'Suivant'
        nextBtn.classList.remove('result')
    }
})

function showQuestion(question) {
    if (answers['Q11'] < 15) {
        // alert('dsdd')
        // questionnaire.innerHTML = " Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ";
        // questionnaire.style.color = 'gray';
        // questionnaire.style.fontSize = '25px';
        Préambule.style.display = 'block';
        questionnaire.style.display = "none";
        resultMessage[0].innerHTML = "";
        result.innerHTML = " Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.";
    }

    currentquestion.innerText = question.question
    answerInputs.innerHTML = ''
    const inputAnswer = question.input.answer
    const input = question.input

    if (question.input.type === 'radio') {

        inputAnswer.forEach(answer => {

            answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="${input.qNumber}" id="${answer.text}">
                        <label for="${answer.text}">
                        <span>${answer.text}</span> </label>
                        </div>`
        })

    } else {

        answerInputs.innerHTML += `<input type="number" name="${input.qNumber}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`
    }

}

function folowProgress(number) {

    const currentNmber = number + 1

    questionNumber.innerText = currentNmber
    progressBar.style.width = `calc(${currentNmber} * calc(100% / 22))`

}

let answers = {}

let severity = 0

function Results() {

    if (answers['Q1'] === 'Oui') {

        severity++
    }

    if (answers['Q8'] === 'Oui' || answers['Q9'] === 'Oui') {

        severity++
    }

    if (answers['Q10'] === 'Fatigué(e)' || answers['Q10'] === 'Très fatigué') {
        severity++
    }

    if (answers['Q14'] === 'Oui' || answers['Q15'] === 'Oui') {

        severity++
    }

    showResult(severity)

}

function showResult(severity) {

    stepper[1].classList.remove('select')
    stepper[2].classList.add('select')
    testBtn.style.display = 'block'
    Préambule.style.display = 'block'
    questionnaire.style.display = 'none'
    testBtn.textContent = ' Recommencer le test'
    testBtn.setAttribute('style', 'text-align:center');
    testBtn.addEventListener('click', () => {

        window.location.reload()
    })

    result.innerText = 'Résultats'

    if (severity === 0) {

        resultMessage[0].innerText = 'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contac' +
            'ter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouve' +
            'au symptôme pour réévaluer la situation. Pour toute information concernant le ' +
            'Covid-19, consulter la page Conseils'
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
            'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultMessage[0].style.fontWeight = 'bold'
        resultMessage[0].style.color = '#369D53'
    } else if (severity === 1) {

        resultMessage[0].innerText = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin' +
            ' en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouv' +
            'eau l’application pour réévaluer vos symptômes'
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
            'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultMessage[0].style.fontWeight = 'bold'
        resultMessage[0].style.color = '#369D53'

    } else if (severity === 2) {
        resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
            "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
            "our s’alimenter ou boire pendant plus de 24h apparaissent."
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
            'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultMessage[0].style.fontWeight = 'bold'
        resultMessage[0].style.color = '#369D53'
    } else {
        resultMessage[0].innerText = "Appelez le 141"
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
            'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultMessage[0].style.color = '#FF0000'
        resultMessage[0].style.fontSize = '48px'
        resultMessage[0].style.fontWeight = 'bold'

    }

}
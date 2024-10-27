const questions = [
    {
        question: "주변에서 쉽게 찾을 수 있는 인공지능의 활용에는 ChatGPT, 감마, 고객 서비스 자동 응답 기능, 자율주행 자동차, 애플 시리, 아마존 알렉사 등이 있다.",
        answers: ["yes", "no"],
        correctAnswer: "no",
        explanation: "정해진 키워드에 반응하는 고객 서비스 ‘자동 응답 기능’은 대부분 인공지능이 접목된 기능이 아닙니다."
    },
    {
        question: "지도 학습(supervised learning)과 비지도 학습(unsupervised learning)의 차이는 ㅁㅁㅁ의 유무입니다.",
        answers: ["레이블", "데이터"],
        correctAnswer: "레이블",
        explanation: "지도 학습은 레이블이 있는 데이터를 사용하고, 비지도 학습은 레이블이 없는 데이터를 사용합니다."
    },
    {
        question: "대표적인 이미지 생성 AI인 Stable Diffusion의 어원이자, 이 기술의 이름은 무엇인가요?",
        answers: ["Diffusion", "Transformation"],
        correctAnswer: "Diffusion",
        explanation: "Stable Diffusion은 이미지 생성을 위해 '확산'이라는 기술을 사용합니다."
    },
    {
        question: "딥 러닝은 특정한 신경망 구조를 사용해 문제를 해결합니다. 이 신경망은 어떤 기관을 모방한 것인가요?",
        answers: ["뇌", "심장"],
        correctAnswer: "뇌",
        explanation: "딥 러닝의 신경망 구조는 인간의 뇌를 모방하여 만들어졌습니다."
    },
    {
        question: "ChatGPT는 샘 알트만과 ㅁㅁ ㅁㅁㅁ가 공동개발을 하였습니다.",
        answers: ["일론 머스크", "빌 게이츠"],
        correctAnswer: "일론 머스크",
        explanation: "OpenAI의 초기 설립자 중 하나는 일론 머스크였습니다."
    },
    {
        question: "컴퓨터에 데이터를 줘서 학습하게 하는 분야는 무엇인가요?",
        answers: ["머신러닝", "하드웨어"],
        correctAnswer: "머신러닝",
        explanation: "머신러닝은 컴퓨터에 데이터를 제공해 학습하는 AI 기술 중 하나입니다."
    },
    {
        question: "이미지를 인식하고 분석하는 기술은 무엇이라 하나요?",
        answers: ["컴퓨터 비전", "음성 인식"],
        correctAnswer: "컴퓨터 비전",
        explanation: "컴퓨터 비전은 이미지 데이터를 이해하고 해석하는 기술입니다."
    },
    {
        question: "CPU는 ㄱㅇ, ㅎㅅ, ㅇㅅ, ㅈㅇ라는 4대 주요기능을 관할하는 부분 중 하나이다. 초성에 해당하는 답은 무엇인가요?",
        answers: ["기억, 해석, 연산, 제어", "보관, 해석, 실행, 분배"],
        correctAnswer: "기억, 해석, 연산, 제어",
        explanation: "CPU는 기억, 해석, 연산, 제어의 4가지 주요 기능을 담당합니다."
    },
    {
        question: "존 홉필드와 제프리 힌턴은 노벨 물리학상을 수상했다.",
        answers: ["yes", "no"],
        correctAnswer: "yes",
        explanation: "두 사람은 인공지능 연구에 크게 기여한 과학자들입니다."
    },
    {
        question: "현대 인공지능 개념을 확립한 인물의 성함은?",
        answers: ["앨런 튜링", "스티브 잡스"],
        correctAnswer: "앨런 튜링",
        explanation: "앨런 튜링은 현대 컴퓨터 과학의 아버지로 불리는 중요한 인물입니다."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const inputContainer = document.getElementById('input-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const explanationElement = document.getElementById('explanation');
const scoreElement = document.getElementById('score');

startBtn.addEventListener('click', () => {
    inputContainer.style.display = 'none';
    startQuiz();
});

function startQuiz() {
    questionContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';
    explanationElement.innerText = ''; // 이전 해설 초기화
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-btn');
        button.style.marginBottom = '15px'; // 버튼 간격 추가
        button.onclick = () => selectAnswer(answer);
        answersElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = questions[currentQuestionIndex].correctAnswer;
    if (answer === correct) {
        score++;
        alert("딩동댕동! 맞았습니다!");
    } else {
        alert("펑! 틀렸습니다!");
    }

    // 바로 옳은 답과 해설을 보여줌
    explanationElement.innerHTML = `
        <p><strong>정답:</strong> ${correct}</p>
        <p>${questions[currentQuestionIndex].explanation}</p>
    `;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 4000); // 4초 후 다음 문제로 이동
    } else {
        setTimeout(endQuiz, 4000); // 모든 문제가 끝나면 결과 페이지로
    }
}

function endQuiz() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `점수: ${score} / ${questions.length}`;
}

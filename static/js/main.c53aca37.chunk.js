(this["webpackJsonpmonsterlessons-academy"]=this["webpackJsonpmonsterlessons-academy"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(7),o=r.n(c),i=(r(13),r(5)),a=r(0),u=function(e){var t=e.answerText,r=e.index,n=e.onSelectAnswer,s=e.currentAnswer,c=e.correctAnswer,o=s&&t===c?"correct-answer":"",i=s===t&&s!==c?"wrong-answer":"",u=s?"disabled-answer":"";return Object(a.jsxs)("div",{className:"answer ".concat(o," ").concat(i," ").concat(u),onClick:function(){return n(t)},children:[Object(a.jsx)("div",{className:"answer-letter",children:["A","B","C","D"][r]}),Object(a.jsx)("div",{className:"answer-text",children:t})]})},l=r(3),d=[{question:"What does CSS stand for?",incorrectAnswers:["Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"],correctAnswer:"Cascading Style Sheets"},{question:"Where in an HTML document is the correct place to refer to an external style sheet?",incorrectAnswers:["In the <body> section","At the end of the document","You can't refer to an external style sheet"],correctAnswer:"In the <head> section"},{question:"Which HTML tag is used to define an internal style sheet?",incorrectAnswers:["<script>","<headStyle>","<css>"],correctAnswer:"<style>"},{question:"Which HTML attribute is used to define inline styles?",incorrectAnswers:["class","font","styles"],correctAnswer:"style"},{question:"Which is the correct CSS syntax?",incorrectAnswers:["{body:color=black;}","{body;color:black;}","body:color=black;"],correctAnswer:"body {color: black;}"},{question:"How do you insert a comment in a CSS file?",incorrectAnswers:["' this is a comment","// this is a comment","// this is a comment //"],correctAnswer:"/* this is a comment */"},{question:"Which property is used to change the background color?",incorrectAnswers:["color","bgcolor","bgColor"],correctAnswer:"background-color"},{question:"How do you add a background color for all <h1> elements?",incorrectAnswers:["all.h1 {background-color:#FFFFFF;}","h1.setAll {background-color:#FFFFFF;}","h1.all {background-color:#FFFFFF;}"],correctAnswer:"h1 {background-color:#FFFFFF;}"}],h=r(8),w=function(e){return e?[e.correctAnswer].concat(Object(h.a)(e.incorrectAnswers)).map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})):[]},b={questions:d,currentQuestionIndex:0,currentAnswer:"",answers:w(d[0]),showResults:!1,correctAnswersCount:0},j=function(e,t){switch(t.type){case"SELECT_ANSWER":var r=t.payload===e.questions[e.currentQuestionIndex].correctAnswer?e.correctAnswersCount+1:e.correctAnswersCount;return Object(l.a)(Object(l.a)({},e),{},{currentAnswer:t.payload,correctAnswersCount:r});case"NEXT_QUESTION":var n=e.currentQuestionIndex===e.questions.length-1,s=n?e.currentQuestionIndex:e.currentQuestionIndex+1,c=n?[]:w(e.questions[s]);return Object(l.a)(Object(l.a)({},e),{},{currentAnswer:"",showResults:n,currentQuestionIndex:s,answers:c});case"RESTART":return b;default:return e}},x=Object(n.createContext)(),A=function(e){var t=e.children,r=Object(n.useReducer)(j,b);return Object(a.jsx)(x.Provider,{value:r,children:t})},m=function(){var e=Object(n.useContext)(x),t=Object(i.a)(e,2),r=t[0],s=t[1],c=r.questions[r.currentQuestionIndex];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"question",children:c.question}),Object(a.jsx)("div",{className:"answers",children:r.answers.map((function(e,t){return Object(a.jsx)(u,{answerText:e,currentAnswer:r.currentAnswer,correctAnswer:c.correctAnswer,index:t,onSelectAnswer:function(e){return s({type:"SELECT_ANSWER",payload:e})}},t)}))})]})},O=function(){var e=Object(n.useContext)(x),t=Object(i.a)(e,2),r=t[0],s=t[1];return Object(a.jsxs)("div",{className:"quiz",children:[r.showResults&&Object(a.jsxs)("div",{className:"results",children:[Object(a.jsx)("div",{className:"congratulations",children:"Congratulations!"}),Object(a.jsxs)("div",{className:"results-info",children:[Object(a.jsx)("div",{children:"You have completed the quiz."}),Object(a.jsxs)("div",{children:["You've got ",r.correctAnswersCount," of \xa0",r.questions.length," right."]})]}),Object(a.jsx)("div",{onClick:function(){return s({type:"RESTART"})},className:"next-button",children:"Restart"})]}),!r.showResults&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"score",children:["Question ",r.currentQuestionIndex+1,"/",r.questions.length]}),Object(a.jsx)(m,{}),r.currentAnswer&&Object(a.jsx)("div",{onClick:function(){return s({type:"NEXT_QUESTION"})},className:"next-button",children:"Next question"})]})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(A,{children:Object(a.jsx)(O,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c53aca37.chunk.js.map
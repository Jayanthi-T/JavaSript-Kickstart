Name variations Project
In this project, you will practice your newly acquired string skills!

Complete the given functions as described in the comments and try the app that you just built in the BROWSER tab.

Take your time, make as many mistakes as possible and learn from them!
  
Enter your name :
jayanTHI

Variation	Result :
Number of characters	8
First character	      J
Last character	      i
Lower case	          jayanthi
Upper case	          JAYANTHI
Capitalize	          Jayanthi


variation.js: //This is the answer part.

/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    let f = name.substring(0,1)
    return f;//.toUpperCase();
}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
    let l = name.substring(name.length-1,name.length);
    return l;//.toLowerCase();
}


/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    let f = name.substring(0,1);
    let l = name.substring(1,name.length);
    return f.toUpperCase()+l.toLowerCase();
}
//Answer ends.


index.html:
<nav class="navbar">
    <h1 class="nav-brand">Name variations</h1>
</nav>

<main class="container">
    <div>
        <label class="label" for="component-name">Enter your name</label>
        <input type="text" class="input" placeholder="Your name" id="your-name" autocomplete="off">
    </div>

    <table class="table" border="1">
        <thead>
            <tr>
                <th width="200px">Variation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td>Number of characters</td>
                    <td id="answer1"></td>
                </tr>
                <tr>
                    <td>First character</td>
                    <td id="answer2"></td>
                </tr>
                <tr>
                    <td>Last character</td>
                    <td id="answer3"></td>
                </tr>
                <tr>
                    <td>Lower case</td>
                    <td id="answer4"></td>
                </tr>
                <tr>
                    <td>Upper case</td>
                    <td id="answer5"></td>
                </tr>
                <tr>
                    <td>Capitalize</td>
                    <td id="answer6"></td>
                </tr>
            </tbody>
    </table>
</main>

index.js:
import {getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized} from "./variations.js";

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
});

index.css:
:root {
  --white: #fff;
  --black: #000;

  /* Primary colors*/
  --primary-1: #2b8379;
  --primary-2: #19a596;
  --primary-3: #7fd1c7;
  --primary-4: #7fd1c7;
  --primary-5: #d0f3ef;

  /* Neutral colors */
  --neutral-1: #2c2c2c;
  --neutral-2: #434343;
  --neutral-3: #94868b;
  --neutral-4: #d9cfd3;
  --neutral-5: #f2ecee;

  /* Accent-blue colors */
  --accent-1: #970e3d;
  --accent-2: #c43464;
  --accent-3: #de7699;
  --accent-4: #e6c3ce;
  --accent-5: #fff2f7;
}

body {
  background-color: var(--neutral-5);
  margin: 0;
}

h1 {
  font-size: 36px;
  font-weight: 600;
}

h2 {
  font-size: 28px;
  font-weight: 500;
}

h3 {
  font-size: 24px;
  font-weight: normal;
}

p {
  line-height: 30px;
  font-size: 18px;
}

a {
  color: var(--primary-2);
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.rounded {
  border-radius: 30px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* BUTTONS */
.btn {
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 13px 40px;
  border: 0;
  transition: background-color 200ms, color 200ms;
}

.btn-default {
  color: var(--white);
  background-color: var(--primary-1);
}

.btn-default:hover,
.btn-outline:hover {
  color: var(--white);
  background-color: var(--primary-2);
  text-decoration: none;
}

.btn-default:active,
.btn-outline:active {
  color: var(--primary-1);
  background-color: var(--primary-4);
}

.btn-default[disabled],
.btn-outline[disabled] {
  color: var(--primary-4);
  background-color: var(--primary-5);
  cursor: default;
}

.btn-accent {
  color: var(--white);
  background-color: var(--accent-1);
}

.btn-accent:hover {
  color: var(--white);
  background-color: var(--accent-2);
  text-decoration: none;
}

.btn-accent:active {
  color: var(--accent-1);
  background-color: var(--accent-4);
}

.btn-accent[disabled] {
  color: var(--accent-4);
  background-color: var(--accent-5);
  cursor: default;
}

.btn-outline {
  color: var(--primary-1);
  background-color: var(--primary-4);
  border: var(--primary-1) 2px solid;
  box-shadow: 1px 1px 7px #c4c4c4;
  padding: 8px 25px;
  border-radius: 10px;
}

/* FORMS */
.form h2 {
  font-size: 24px;
  font-weight: 400;
}

.form h3 {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 15px;
}

.form-section {
  border-bottom: var(--neutral-4) solid 1px;
  margin-bottom: 20px;
}

.input-required {
  color: var(--primary-2);
  text-decoration: none;
  font-weight: bold;
  padding: 0 1px;
}

.label {
  display: block;
  font-weight: 500;
}

.input {
  font-size: 16px;
  margin-top: 1em;
  margin-bottom: 1.5em;
  padding: 0.75em 0.5em;
  min-width: 200px;
  border: none;
  border-left: 7px solid var(--neutral-4);
  transition: border-left-color 160ms;
  background-color: white;
}

::placeholder {
  color: var(--neutral-3);
}

input:not(.btn):focus {
  outline: none;
  border-left: 7px solid var(--primary-1);
}

/* NAVBAR */
.navbar {
  background-color: white;
  padding: 10px;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.07),
    0px -3px 7px 1px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-brand {
  font-weight: 450;
  text-decoration: none;
  padding-left: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: initial;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead {
  background-color: var(--primary-1);
  color: white;
  border: 1px solid white;
}

.table th {
  padding: 15px;
}
.table td {
  padding: 10px;
}

.table tbody {
  font-size: 18px;
  border: 1px solid white;
}
.table tbody tr:nth-child(2n) {
  background-color: white;
}

.table tbody tr:nth-child(2n + 1) {
  background-color: var(--neutral-5);
}

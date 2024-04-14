window.addEventListener("load", initIndex)
window.addEventListener("load", callDisplayTime)

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const hour = currentDate.getHours();
const minute = String(currentDate.getMinutes()).padStart(2, '0');
const second = String(currentDate.getSeconds()).padStart(2, '0');


function initIndex(){
    document.getElementById('engineeringbutton').setAttribute('style', 'background-color: white')
    document.getElementById('engineering').setAttribute('style', 'display: block')
    document.getElementById('science').setAttribute('style', 'display: none')
    document.getElementById('interdisciplinary').setAttribute('style', 'display: none')
}
function show(index){
    if(index === 1){
        document.getElementById('engineeringbutton').setAttribute('style', 'background-color: white')
        document.getElementById('sciencebutton').setAttribute('style', 'background-color: rgb(195, 140, 195)')
        document.getElementById('interdisciplinarybutton').setAttribute('style', 'background-color: rgb(195, 140, 195)')
        document.getElementById('engineering').setAttribute('style', 'display: block')
        document.getElementById('science').setAttribute('style', 'display: none')
        document.getElementById('interdisciplinary').setAttribute('style', 'display: none')
    } else if(index === 2){
        document.getElementById('engineeringbutton').setAttribute('style', 'background-color: rgb(195, 140, 195)')
        document.getElementById('sciencebutton').setAttribute('style', 'background-color: white')
        document.getElementById('interdisciplinarybutton').setAttribute('style', 'background-color: rgb(195, 140, 195)')
        document.getElementById('engineering').setAttribute('style', 'display: none')
        document.getElementById('science').setAttribute('style', 'display: block')
        document.getElementById('interdisciplinary').setAttribute('style', 'display: none')
    }else{
        document.getElementById('engineeringbutton').setAttribute('style', 'background-color: rgb(195, 140, 195)')
        document.getElementById('sciencebutton').setAttribute('style', 'background-color: rgb(195, 140, 195)')
        document.getElementById('interdisciplinarybutton').setAttribute('style', 'background-color: white')
        document.getElementById('engineering').setAttribute('style', 'display: none')
        document.getElementById('science').setAttribute('style', 'display: none')
        document.getElementById('interdisciplinary').setAttribute('style', 'display: block')
    }
}

// function isIntegerInput(num){
//     if(!isNaN(num)){
//         return true;
//     }else{
//         return false;
//     }
// }

// function checkDuplicateMajor(){

// }

// function checkDuplicateRank(){

// }


const majors = new Map([
    ['cs', {
      majorName: "BSc in Computer Science and Technology",
      collegeName: "College of Engineering"
    }],
    ['ei', {
      majorName: "BEng in Electronic Information",
      collegeName: "College of Engineering"
    }],
    ['mse', {
      majorName: "BEng in Materials Science and Engineering",
      collegeName: "College of Engineering"
    }],
    ['mc', {
      majorName: "BEng in Materials and Chemicals",
      collegeName: "College of Engineering"
    }],
    ['est', {
      majorName: "BSc in Electronic Science and Technology",
      collegeName: "College of Engineering"
    }],
    ['phy', {
      majorName: "BSc in Physics",
      collegeName: "College of Science"
    }],
    ['chem', {
      majorName: "BSc in Chemistry",
      collegeName: "College of Science"
    }],
    ['bio', {
      majorName: "BSc in Biology",
      collegeName: "College of Science"
    }],
    ['cogs', {
      majorName: "BSc in Cognitive Science",
      collegeName: "College of Interdisciplinary"
    }],
    ['be', {
      majorName: "BEng in Biomedical Engineering",
      collegeName: "College of Interdisciplinary"
    }],
    ['bm', {
      majorName: "BSc in Biology and Medicine",
      collegeName: "College of Interdisciplinary"
    }]
  ]);

let chosenMajors =[]
let chosenRanks = []

const majorBox1 = document.getElementById('major-1')
const majorBox2 = document.getElementById('major-2')
const majorBox3 = document.getElementById('major-3')
const majorBox4 = document.getElementById('major-4')
const majorBox5 = document.getElementById('major-5')
const majorBox6 = document.getElementById('major-6')
const majorBox7 = document.getElementById('major-7')
const majorBox8 = document.getElementById('major-8')
const majorBox9 = document.getElementById('major-9')
const majorBox10 = document.getElementById('major-10')
const majorBoxes = [majorBox1, majorBox2, majorBox3, majorBox4, majorBox5, majorBox6, majorBox7, majorBox8, majorBox9, majorBox10]

const collegeBox1 = document.getElementById('college-1')
const collegeBox2 = document.getElementById('college-2')
const collegeBox3 = document.getElementById('college-3')
const collegeBox4 = document.getElementById('college-4')
const collegeBox5 = document.getElementById('college-5')
const collegeBox6 = document.getElementById('college-6')
const collegeBox7 = document.getElementById('college-7')
const collegeBox8 = document.getElementById('college-8')
const collegeBox9 = document.getElementById('college-9')
const collegeBox10 = document.getElementById('college-10')

var tableCount = 0;
var tableResult = 0 ;
var majorCount = 0;
var tableTextContainer = document.getElementById('appliedMajorsContainer')
// var changeTimeContainer = document.getElementById('changeTimeContainer')

const form = document.getElementById("last-form");

const errorContainer = document.getElementById("errorDiv");

const noMajor = document.createElement("p");
noMajor.style.textAlign = "center";
noMajor.textContent = "You have not chosen any major";
noMajor.setAttribute('style', 'color: red');

const doneMajor = document.createElement("p");
doneMajor.style.textAlign = "center";
doneMajor.setAttribute('style', 'color: red');

var gapCount = 0;


function majorRank(major){

    const majorInput = document.getElementById(major)


     if(majorInput.value === '1'){
        let isValid = true
        for(var i = 0; i < 10; i++){
            if (chosenMajors[i] === majors.get(major).majorName){
                alert('You have already chosen this major')
                isValid = false
                break;
            }
        }if(isValid){
            if (majorBoxes[0].innerHTML !== ''){
                alert('You have already chosen this rank')
                } else{
                 alert(`You have chosen ${majors.get(major).majorName} as your 1st major in ${majors.get(major).collegeName} successfully`);
                majorBox1.innerHTML = majors.get(major).majorName;
                collegeBox1.innerHTML = majors.get(major).collegeName;
                chosenMajors.push(majors.get(major).majorName)
                chosenRanks.push('1')
                majorCount += 1;
                emptyBoxesIndex = [];
                }
            }
        }
        else if(majorInput.value === '2'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[1].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 2nd major in ${majors.get(major).collegeName} successfully`);
                    majorBox2.innerHTML = majors.get(major).majorName;
                    collegeBox2.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('2')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '3'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[2].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 3rd major in ${majors.get(major).collegeName} successfully`);
                    majorBox3.innerHTML = majors.get(major).majorName;
                    collegeBox3.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('3')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '4'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[3].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 4th major in ${majors.get(major).collegeName} successfully`);
                    majorBox4.innerHTML = majors.get(major).majorName;
                    collegeBox4.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('4')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '5'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[4].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 5th major in ${majors.get(major).collegeName} successfully`);
                    majorBox5.innerHTML = majors.get(major).majorName;
                    collegeBox5.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('5')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '6'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[5].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 6th major in ${majors.get(major).collegeName} successfully`);
                    majorBox6.innerHTML = majors.get(major).majorName;
                    collegeBox6.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('6')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '7'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[6].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 7th major in ${majors.get(major).collegeName} successfully`);
                    majorBox7.innerHTML = majors.get(major).majorName;
                    collegeBox7.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('7')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '8'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[7].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 8th major in ${majors.get(major).collegeName} successfully`);
                    majorBox8.innerHTML = majors.get(major).majorName;
                    collegeBox8.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('8')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '9'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[8].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 9th major in ${majors.get(major).collegeName} successfully`);
                    majorBox9.innerHTML = majors.get(major).majorName;
                    collegeBox9.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('9')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if(majorInput.value === '10'){
            let isValid = true
            for(var i = 0; i < 10; i++){
                if (chosenMajors[i] === majors.get(major).majorName){
                    alert('You have already chosen this major')
                    isValid = false
                    break;
                }
            }if(isValid){
                if (majorBoxes[9].innerHTML !== ''){
                    alert('You have already chosen this rank')
                    } else{
                     alert(`You have chosen ${majors.get(major).majorName} as your 10th major in ${majors.get(major).collegeName} successfully`);
                    majorBox10.innerHTML = majors.get(major).majorName;
                    collegeBox10.innerHTML = majors.get(major).collegeName;
                    chosenMajors.push(majors.get(major).majorName)
                    chosenRanks.push('10')
                    majorCount += 1;
                    emptyBoxesIndex = [];
                    }
                }
            }
        else if (!Number.isInteger(parseFloat(majorInput.value))){
            alert('Please enter the rank of chosen major')
        }
        else if(parseInt(majorInput.value) < 1 || parseInt(majorInput.value) > 10){
            alert('Please enter the rank of chosen major between 1 and 10')
        }

    }

    function updateTable(){
    
        for(i = 0; i<10; i++){
            if(majorBoxes[i].innerHTML !== ''){
                tableCount += 1
                tableTextContainer.innerHTML = `Total Number of Majors Applied: ${tableCount}`
                tableTextContainer.setAttribute('style', 'font-family: Montserrat; margin-top: 13px; font-size: 1.2em; font-weight: bold')
                
            }
        
        }
        console.log(tableCount);
        tableCount = 0;
        
    }
     
    class TimeDisplay {
        constructor(changeTimeContainer) {
          this.changeTimeContainer = changeTimeContainer;
        }
      
        displayTime() {
          const currentDate = new Date();
          const day = currentDate.getDate();
          const month = currentDate.getMonth() + 1;
          const year = currentDate.getFullYear();
          const hour = currentDate.getHours();
          const minute = String(currentDate.getMinutes()).padStart(2, '0');
          const second = String(currentDate.getSeconds()).padStart(2, '0');
      
          console.log(`You have successfully submitted your application at time ${year}/${month}/${day} ${hour}:${minute}:${second}`);
          this.changeTimeContainer.innerHTML = `Last change time: ${year}/${month}/${day} ${hour}:${minute}:${second}`;
          this.changeTimeContainer.setAttribute('style', 'font-family: Montserrat; margin-top: 13px; font-size: 1.2em; font-weight: bold');
        }
      }
      
      const changeTimeContainer = document.getElementById('changeTimeContainer');
      const timeDisplay = new TimeDisplay(changeTimeContainer);
      
      function callDisplayTime() {
        timeDisplay.displayTime();
      }

let collegeBoxesIndex = [];
let emptyMajor = [];
let emptyBoxesIndex = [];


    function formSubmit(x){
        x.preventDefault();
        let collegeBoxes = document.querySelectorAll('.td-college');
        gapCount = 0;
        collegeBoxesIndex = [];
        emptyMajor = [];
        emptyBoxesIndex = [];
        errorContainer.innerHTML = ''
        if(majorCount < 1){
            errorContainer.innerHTML = '';
            errorContainer.append(noMajor);
            return;
        }
        else{
            let hasError = false;
            for(let i = 0; i<10; i++){
                if(collegeBoxes[i].innerHTML !== ''){
                    collegeBoxesIndex.push(i)
                }
            }
            const maximumIndex = Math.max(...collegeBoxesIndex);

                for (let j = 0; j <= maximumIndex; j++){
                    if (collegeBoxes[j].innerHTML === '') {
                    emptyBoxesIndex.push(j)
                    gapCount = maximumIndex + 1 - majorCount;
                    console.log("maximumIndex:" + maximumIndex);

                    if (j === 0) {
                        emptyMajor.push(`${j+1}st`)
                    }
                    else if (j === 1) {
                        emptyMajor.push(`${j+1}nd`)
                    } 
                    else if (j === 2) {
                        emptyMajor.push(`${j+1}rd`)
                    } 
                    else {
                        emptyMajor.push(`${j+1}th`)
                    }
                        hasError = true;
                    } 
                }

                if(hasError === true){
  
                    var emptyMajorSet = new Set(emptyMajor)
                    const gapMajor = document.createElement("p");
                    gapMajor.style.textAlign = "center";
                    gapMajor.style.color = "red";
                    const errorContainer = document.getElementById("errorDiv");
                    errorContainer.innerHTML = '';
                    if(gapCount === 1){
                         gapMajor.innerHTML = 'You have not chosen your' + ' ' + Array.from(emptyMajorSet).join(', ') + ' ' + 'chosen major, you can not leave any gap between your majors.'
                    } else if(gapCount === 2){
                        gapMajor.innerHTML = 'You have not chosen your' + ' ' + Array.from(emptyMajorSet).join(' and ') + ' ' + 'chosen major, you can not leave any gap between your majors.'
                    } else if (gapCount > 2){
                        gapMajor.innerHTML = 'You have not chosen your' + ' ' + Array.from(emptyMajorSet).slice(0, emptyMajor.length - 1).join(', ') + ' and ' + Array.from(emptyMajorSet).slice(-1) + ' ' + 'chosen major, you can not leave any gap between your majors.'
                    }
                    console.log("emptyboxesindex: " + emptyBoxesIndex);
                    console.log("emptyMajorSet: " + emptyMajorSet);
                    console.log("gapcount is" + gapCount);
                    console.log("majorCount: " + majorCount);
                    errorContainer.append(gapMajor);
                    majorCount = 0;
                }else{
                    console.log("emptyboxesindex: " + emptyBoxesIndex);
                    console.log("emptyMajorSet: " + emptyMajorSet);
                    console.log("gapcount is" + gapCount);
                    console.log("majorCount: " + majorCount);
                    const currentDate = new Date();
                    const day = currentDate.getDate();
                    const month = currentDate.getMonth() + 1;
                    const year = currentDate.getFullYear();
                    const hour = currentDate.getHours();
                    const minute = String(currentDate.getMinutes()).padStart(2, '0');
                    const second = String(currentDate.getSeconds()).padStart(2, '0');

                    console.log(`You have successfully submited your application at time ${year}/${month}/${day} ${hour}:${minute}:${second}`);
                    doneMajor.innerHTML = `You have successfully submitted your application at time ${year}/${month}/${day} ${hour}:${minute}:${second}`
                    errorContainer.innerHTML = '';
                    errorContainer.append(doneMajor);
                    console.log(emptyMajor);
                    majorCount = 0;
                }
            } 
        }

    function formClear(){
        const collegeBoxes = document.querySelectorAll('.td-college');
        for(let i =0; i<10; i++){
            majorBoxes[i].innerHTML = '';
            collegeBoxes[i].innerHTML = '';
        }

        chosenMajors = [];
        chosenRanks = [];
        tableCount = 0;
        errorContainer.innerHTML = '';
        tableTextContainer.innerHTML = `Total Number of Majors Applied: ${tableCount}`
        tableTextContainer.setAttribute('style', 'font-family: Montserrat; margin-top: 13px; font-size: 1.2em; font-weight: bold')

        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const hour = currentDate.getHours();
        const minute = String(currentDate.getMinutes()).padStart(2, '0');
        const second = String(currentDate.getSeconds()).padStart(2, '0');

        changeTimeContainer.innerHTML = `Last change time: ${year}/${month}/${day} ${hour}:${minute}:${second}`
       
    }
form.addEventListener('submit', formSubmit)
    







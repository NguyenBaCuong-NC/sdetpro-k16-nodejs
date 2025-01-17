// CREATE
const teo = {
    name: "Teo",
    grades: [9, 8, 6]
}

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [8, 9, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [8, 7, 8];

const bestStudentInfo = findBestStudent([teo, ti, tun]);
const { bestStudent, averageHighestScore } = bestStudentInfo;
console.log(`The best student is: ${JSON.stringify(bestStudent)} with average score: ${averageHighestScore} `)

function findBestStudent(students) {
    let bestStudent = students[0];
    console.log(bestStudent);
    
    let currentHighestScore = 0;
    for (const student of students) {
        const averageScore = calculateAverageScore(student);
        if (averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    return {
        bestStudent: bestStudent,                      // return 1 object
        // === bestStudent,  : Khi keys === value
        averageHighestScore: currentHighestScore

    }
}

function calculateAverageScore({ grades }) {
    let totalScore = 0;
    for (const grade of grades) {
        totalScore = totalScore + grade;
        // totalScore += grade;  
    }
    return (totalScore / grades.length).toFixed(1);
}

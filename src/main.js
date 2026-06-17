

// export function isValidPassword(password) {
//     if (password.length == 0) {
//         return false;
//     }

//     if (password.length < 8) {
//         return false;
//     }

//     if (!/[A-Z]/.test(password)) {
//         return false;
//     }

//     return true;
// }

// export function calculateGrade(prelim, midterm, finals, lab) {
//     const total = prelim + midterm + finals + lab;

//     if (total >= 95) {
//         return 1.0;
//     } else if (total >= 90) {
//         return 1.25;
//     } else if (total >= 85) {
//         return 1.5;
//     } else if (total >= 80) {
//         return 1.75;
//     } else if (total >= 75) {
//         return 2.0;
//     } else {
//         return 5.0; // Failed
//     }
// }

export function login(email, password){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const correctEmail = "juandelacruz@email.com";
    const correctPass = "Str0ngp@ssword";

    if(!emailPattern.test(email)) throw new Error('Invalid email');

    if(!passPattern.test(password)) throw new Error('Weak Password');

    if(email !== correctEmail || password !== correctPass) return 'Incorrect email or password';

    return 'Login Successful';

}
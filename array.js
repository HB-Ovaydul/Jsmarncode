/**
 *  Data Stacture With Data fatech & search
 */
const devs = [
    ['Ovaydul', 26, 'b.barira', 'PHP', '$'+700], 
    ['Tofazzol', 25, 'b.barira', 'JAVA', '$'+650], 
    ['Ashraf', 27, 'dakha', 'LARAVEL', '$'+800], 
    ['Shorif', 30, 'rongpur', 'RECT', '$'+900], 
    ['Sujon', 35, 'sylet', 'MARN', '$'+750], 
    ['Mobark', 50, 'dakha', 'PHP', '$'+550], 
    ['Syful', 20, 'rongpur', 'JAVA', '$'+800], 
    ['Roman', 80, 'chitagong', 'RECT', '$'+1000], 
    ['Khan', 60, 'sylet', 'WARDPRESS', '$'+750], 
    ['Arif', 45, 'khulna', 'LARAVEL', '$'+780], 
];

for(let i = 0; i < devs.length; i++){   
    if(devs[i][3] == 'JAVA' && devs[i][1] < 30 || devs[i][2] == 'dakha'){
        devs[i].forEach(single => console.log(single));
    }
    console.log(`=====================`);
}









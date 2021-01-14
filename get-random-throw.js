export function getRandomThrow(){
    let cpuChoice;
    const input = Math.round(Math.random() * 2);
    switch (input){
        case 0:
            cpuChoice = 'rock';
            break;
        case 1:
            cpuChoice = 'paper';
            break;
        case 2:
            cpuChoice = 'scissor';
            break;
        default:
            cpuChoice = 'honestly, this shouldn\'t be happening';
            break;
    }
    return cpuChoice;
}

export function didUserWin(player, computer){
    let userResult;
    if (player === computer){
        userResult = 'draw';
        return userResult ;
    } else if (player === 'rock' && computer === 'scissor') {
        userResult = 'win';
        return userResult ;
    } else if (player === 'paper' && computer === 'rock') {
        userResult = 'win';
        return userResult ;
    } else if (player === 'scissor' && computer === 'paper') {
        userResult = 'win';
        return userResult ;
    } else {
        userResult = 'lose';
        return userResult ;
    }
}
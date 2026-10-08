function toggleInvitation() {
    const content = document.getElementById('invitationContent');
    const openBtn = document.getElementById('openBtn');

    // Төмендегі ақпаратты көрсету
    content.classList.add('show');

    // Батырманы жасыру
    openBtn.style.display = 'none';

    // Ашылған ақпаратқа баяу төмен жылжу (скролл)
    content.scrollIntoView({ behavior: 'smooth' });
}

function sendRSVP(answer) {
    const responseText = document.getElementById('response');
    if (answer.includes('қатысамын')) {
        responseText.innerText = "Рақмет! Жауабыңыз қабылданды ❤️";
    } else {
        responseText.innerText = "Жауабыңызға рақмет!";
    }
}
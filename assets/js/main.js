let inputMonth = document.getElementById('input_month');
let imgHoroscope = document.getElementById('img_horoscope');
let titleHoroscope = document.getElementById('title_horoscope');
let textHoroscope = document.getElementById('text_horoscope');

function showHoroscope() {
    switch (inputMonth.value) {
        case 'jan':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="image horoscope">`;
            titleHoroscope.innerHTML = 'Your horoscope is AQUARIUS.';
            textHoroscope.innerHTML = 'Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…';
            break;
        case 'feb':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is PISCES.';
            textHoroscope.innerHTML = 'Communication is very important today—written, spoken, and even nonverbal body language will all…';
            break;
        case 'mar':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is ARIES.';
            textHoroscope.innerHTML = 'Today your patience might be tested when one or more of your projects gets put on hold by someone…';
            break;
        case 'apr':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is TAURUS.';
            textHoroscope.innerHTML = 'Your intense energy makes you a great candidate for a leadership position right now, so if you are…';
            break;
        case 'may':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is GEMINI.';
            textHoroscope.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
            break;
        case 'jun':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is CANCER.';
            textHoroscope.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…";
            break;
        case 'jul':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is LEO.';
            textHoroscope.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
            break;
        case 'aug':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is VIRGO.';
            textHoroscope.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
            break;
        case 'sep':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is LIBRA.';
            textHoroscope.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today.";
            break;
        case 'oct':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is SCORPIO.';
            textHoroscope.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
            break;
        case 'nov':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is SAGITTARIUS.';
            textHoroscope.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...";
            break;
        case 'dec':
            imgHoroscope.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png">`;
            titleHoroscope.innerHTML = 'Your horoscope is CAPRICORN.';
            textHoroscope.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity.";
            break;
        default: titleHoroscope.innerHTML = 'Please give the first three letters of your month of birth.'
    }
}
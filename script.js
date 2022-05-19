'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Doğru Numara';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; 
*/

// random gizli sayıyı tutan değişken.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Kod tekrarını önlemek için bazı fonsksiyonlar (DRY kod kuralı)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const contentNumber = function (numberContent) {
  document.querySelector('.number').textContent = numberContent;
};

const styleNumber = function (styleContent) {
  document.querySelector('.number').style.width = styleContent;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // sayı girilmediğinde çalışan kod
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ Sayı yok!';
    displayMessage('⛔ Sayı yok!');

    // tahmin doğru olduğunda çalışan kod
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Tahmin doğru!';
    displayMessage('🎉 Tahmin doğru!');

    // document.querySelector('.number').textContent = secretNumber;
    contentNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';
    styleNumber('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // tahmin yanlış olduğunda çalışan kod
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Çok yüksek!' : '📉 ÇoK düşük!';

      displayMessage(guess > secretNumber ? '📈 Çok yüksek!' : '📉 ÇoK düşük!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 Oyunu kaybettin!';
      displayMessage('💥 Oyunu kaybettin!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // tahmin yüksek olduğunda çalışan kod
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Çok yüksek!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Oyunu kaybettin!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // tahmin düşük olduğunda çalışmayan kod
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Çok düşük!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Oyunu kaybettin!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// oyunu tekrar başlatan buton

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  // document.querySelector('.number').textContent = '?';
  contentNumber('?');
  // document.querySelector('.number').style.width = '15rem';
  styleNumber('15rem');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Tahmin etmeye başla...';
  displayMessage('Tahmin etmeye başla...');
});

// yüksek skoru tutan kod

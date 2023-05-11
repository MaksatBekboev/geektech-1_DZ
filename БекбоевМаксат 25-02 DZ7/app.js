const text = document.querySelector('.text');
const wordLengthRadio = document.getElementById('wordLength');
const vowelsRadio = document.getElementById('vowels');
const tsyaRadio = document.getElementById('tsya');

function highlightText() {
  const words = text.innerHTML.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (wordLengthRadio.checked && word.length >= 8) {
      words[i] = `<span class="highlight">${word}</span>`;
    }

    if (vowelsRadio.checked && !/[аеёиоуыэюя]/i.test(word)) {
      words[i] = `<span class="highlight">${word}</span>`;
    }

    if (tsyaRadio.checked && /[а-я]+[т][ь][с][я]$/i.test(word)) {
      words[i] = `<span class="highlight">${word}</span>`;
    }
  }

  text.innerHTML = words.join(" ");
}

wordLengthRadio.addEventListener('change', highlightText);
vowelsRadio.addEventListener('change', highlightText);
tsyaRadio.addEventListener('change', highlightText);
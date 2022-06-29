const localFacts = [
  'The Mona Lisa has no eyebrows.', 'The sentence, "The quick brown fox jumps over the lazy dog" uses every letter in the English language.', 'The circulatory system is more than 60,000 miles long', 'Ant\'s take rest for around 8 Minutes in 12 hour period.', 'The strongest muscle in the body is the tongue.', '"I Am" is the shortest complete sentence in the English language.', '	Coca-Cola was originally green.', 'When the moon is directly overhead, you will weigh slightly less.', 'Camels have three eyelids to protect themselves from the blowing desert sand.', 'There are only two words in the English language that have all five vowels in order: "abstemious" and "facetious."', 'The name of all the continents end with the same letter that they start with.', 'There are two credit cards for every person in the United States.', 'TYPEWRITER is the longest word that can be made using the letters only on one row of the keyboard.', 'Minus 40 degrees Celsius is exactly the same as minus 40 degrees Fahrenheit.', 'Chocolate can kill dogs, as it contains theobromine, which affects their heart and nervous system.', 'Women blink nearly twice as much as men!', 'The Guinness Book of Records holds the record for being the book most often stolen from Public Libraries.', 'People say "Bless you" when you sneeze because when you sneeze, your heart stops for a millisecond.', '"Rhythm" is the longest English word without a vowel.', 'Butterflies taste with their feet.', '	Elephants are the only animals that can\'t jump.', 'The deepest place on Earth is the Mariana Trench in the Pacific Ocean. It is 36,201 feet (11,034m) deep. That is almost seven miles!', 'The longest river in the world is the River Nile, clocking 6,853km in length. Its water resources are shared by 11 different countries, too.', 'Lobsters are not "biologically immortal", but they do produce an enzyme that repairs their cells and helps their DNA to replicate indefinitely. That is where the myth comes from.', 'Pineapples take two years to grow.', 'Acacia trees in Africa communicate with each other. They emit gasses to alert other trees to produce the toxin tannin, which protects them from hungry animals.', 'Armadillos are bulletproof. (This is NOT an invitation to test the fact.)', 'Niagara Falls never freezes.', 'Each limestone/granite block that makes up the Great Pyramid of Giza weighs 2.5 tons. And there are 2.3 million of them. Yes, you read that correctly.', 'It would take you approximately 18 months to walk all the way along The Great Wall of China. (It\'s over 5,000 miles long).', 'The national flag with the most colors in it is Belize (1981), with 12.', 'The first hand-held mobile phone call was made on April 3rd, 1973, in NYC.', 'The Anglo-Zanzibar War (1896) was the shortest war ever – lasting just 38 minutes!', 'The printing press, which revolutionized the sharing of information, was invented by Gutenberg around the year 1440.', 'Egypt is classified as the oldest country in the world, dating back to 3100 BCE.', 'Tim Berners-Lee created the first ever web browser (World Wide Web), in 1990.', '“Salvator Mundi” by Leonardo da Vinci is the most expensive painting in the world, valued at $450.3M.', '92% of the world\'s currency is digital.', '“Avengers: Endgame” is the top-grossing film of all time, making over $2.7B!', 'The wealthiest company in the world in 2020 was Saudi Aramco', 'The Statue of Unity in Gujarat, India, is the tallest in the world, standing at a whopping 579 feet (182m). Note: The Statue of Liberty is 93m by comparison!', 'The Earth is 147.2 million kilometers away from the Sun, and it’s about 4.5 billion years old. That\'s some serious heritage.'
]
const factContainer = document.getElementById('fact-cantainer');
const factText = document.getElementById('fact');
const twitterBtn = document.getElementById('twitter');
const newFactBtn = document.getElementById('new-fact');
const loader = document.getElementById('loader');
// Loading Spinner Shown
function loading() {
  loader.hidden = false;
  factContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  factContainer.hidden = false;
  loader.hidden = true;
}
function newFact() {
  loading();
  const fact = localFacts[Math.floor(Math.random() * localFacts.length)]
  // Check Fact length to determine styling
  if (fact.length > 120) {
    factText.classList.add('long-fact');
  } else {
    factText.classList.remove('long-fact');
  }
  // Set Fact, Hide Loader
  factText.textContent = fact;
  complete();
}
// Tweet Fact
function tweetFact() {
  loading();
  const twitterUrl = `https://twitter.com/intent/tweet?text=${factText.innerText}`;
  window.open(twitterUrl, '_blank');
  complete();
}

// Event Listeners
newFactBtn.addEventListener('click', newFact);
twitterBtn.addEventListener('click', tweetFact);

// On Load
newFact();
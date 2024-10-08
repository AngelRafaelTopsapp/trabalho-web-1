function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculateAnagrams() {
  const word = document.getElementById("word").value.toUpperCase();
  const letterCount = {};

  // Contar as frequências das letras
  for (const letter of word) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  const totalLetters = word.length;
  let denominator = 1;

  // Calcular o fatorial das frequências
  for (const count of Object.values(letterCount)) {
    denominator *= factorial(count);
  }

  // Calcular o número de anagramas
  const anagrams = factorial(totalLetters) / denominator;

  // Mostrar o resultado
  document.getElementById("result").innerHTML = `
      Número total de anagramas: <strong>${anagrams}</strong><br>
      Cálculo: <strong>${totalLetters}! / (${Object.values(letterCount)
    .map((c) => c + "!")
    .join(" × ")})</strong> = ${anagrams}
    `;
}

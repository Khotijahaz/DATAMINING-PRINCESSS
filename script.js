// script.js

document.getElementById('predictionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let durasi = parseFloat(document.getElementById('durasi').value);
  let frekuensi = parseInt(document.getElementById('frekuensi').value);
  let scroll = parseInt(document.getElementById('scroll').value);

  // Normalize inputs and calculate an arbitrary risk score
  let score = 0;
  if(!isNaN(durasi) && !isNaN(frekuensi) && !isNaN(scroll)) {
    score = durasi * 3 + frekuensi * 2 + scroll * 0.01;
  }

  let risk = '';
  let riskColor = '';
  let solution = '';
  let challengeSuggestion = '';

  if (score >= 50) {
    risk = 'Sangat Tinggi';
    riskColor = '#d9534f'; // red
    solution = 'Segera lakukan detoks digital total, kurangi penggunaan TikTok secara signifikan dan fokus pada aktivitas fisik dan interaksi sosial nyata.';
    challengeSuggestion = 'Mulailah Brain Detox Challenge lengkap: Hari 1-3, Hari 4-6, dan Hari 7.';
  } else if (score >= 30) {
    risk = 'Tinggi';
    riskColor = '#f0ad4e'; // orange
    solution = 'Kurangi durasi dan frekuensi penggunaan TikTok, lakukan detoks digital dengan memperbanyak aktivitas membaca dan olahraga.';
    challengeSuggestion = 'Ikuti Brain Detox Challenge pada Hari 1-6 untuk hasil optimal.';
  } else if (score >= 15) {
    risk = 'Sedang';
    riskColor = '#5bc0de'; // light blue
    solution = 'Mulailah membatasi screen time, istirahatkan pikiran dengan membaca buku dan olahraga ringan.';
    challengeSuggestion = 'Coba Brain Detox Challenge Hari 1-3 untuk memulai perubahan positif.';
  } else {
    risk = 'Rendah';
    riskColor = '#5cb85c'; // green
    solution = 'Lanjutkan kebiasaan baik dengan menjaga keseimbangan antara digital dan aktivitas offline.';
    challengeSuggestion = 'Tetap ikuti tantangan kecil Brain Detox sebagai pencegahan.';
  }

  let hasilDiv = document.getElementById('hasilPrediksi');
  hasilDiv.style.color = riskColor;
  hasilDiv.innerHTML = 
    `<strong>Prediksi risiko Anda: ${risk}</strong>\n\n` +
    `<p><strong>Solusi yang disarankan:</strong> ${solution}</p>` +
    `<p><strong>Rekomendasi Brain Detox Challenge:</strong> ${challengeSuggestion}</p>`;
});

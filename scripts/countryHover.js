const yemenImage = document.querySelector('.yemen');
const pakistanImage = document.querySelector('.pakistan');
const afghanistanImage = document.querySelector('.afghanistan');
const somaliaImage = document.querySelector('.somalia');

yemenImage.addEventListener('mouseenter', () => {
  yemenImage.classList.add('active');
  yemenImage.src = 'assets/yemenAfter.svg';
});
yemenImage.addEventListener('mouseleave', () => {
  yemenImage.src = 'assets/yemen.svg';
});

pakistanImage.addEventListener('mouseenter', () => {
  pakistanImage.src = 'assets/pakistanAfter.svg';
});
pakistanImage.addEventListener('mouseleave', () => {
  pakistanImage.src = 'assets/pakistan.svg';
});

afghanistanImage.addEventListener('mouseenter', () => {
  afghanistanImage.src = 'assets/afghanistanAfter.svg';
});
afghanistanImage.addEventListener('mouseleave', () => {
  afghanistanImage.src = 'assets/afghanistan.svg';
});

somaliaImage.addEventListener('mouseenter', () => {
  somaliaImage.src = 'assets/somaliaAfter.svg';
});
somaliaImage.addEventListener('mouseleave', () => {
  somaliaImage.src = 'assets/somalia.svg';
});


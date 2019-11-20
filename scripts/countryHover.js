document.querySelector('.yemen').addEventListener('mouseenter', () => {
    document.querySelector('.yemen').classList.add('active')
    document.querySelector('.yemen').src = 'assets/yemenAfter.svg';
  });
  document.querySelector('.yemen').addEventListener('mouseleave', () => {
    document.querySelector('.yemen').src = 'assets/yemen.svg';
  });

  document.querySelector('.pakistan').addEventListener('mouseenter', () => {
    document.querySelector('.pakistan').src = 'assets/pakistanAfter.svg';
  });
  document.querySelector('.pakistan').addEventListener('mouseleave', () => {
    document.querySelector('.pakistan').src = 'assets/pakistan.svg';
  });


  document.querySelector('.afghanistan').addEventListener('mouseenter', () => {
    document.querySelector('.afghanistan').src = 'assets/afghanistanAfter.svg';
  });
  document.querySelector('.afghanistan').addEventListener('mouseleave', () => {
    document.querySelector('.afghanistan').src = 'assets/afghanistan.svg';
  });

  document.querySelector('.somalia').addEventListener('mouseenter', () => {
    document.querySelector('.somalia').src = 'assets/somaliaAfter.svg';
  });
  document.querySelector('.somalia').addEventListener('mouseleave', () => {
    document.querySelector('.somalia').src = 'assets/somalia.svg';
  });


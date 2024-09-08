import './MainEvent.scss';

const MainEvent = () => {
  return (
    <>
      <div id='main-event'>
        <div id='main-background'>
          <div id='main-background-img'>
          </div>
        </div>
        <div id='main-content'  className='content-center content-gutter--large content-center--large'>
          <div className='main-content-inner'>
            <div className='main-content-logo'>
              <img src="img/logos/Logo 3d com sombra sem listra.png" alt="Torneio FIFA 25 da LOOT" />
            </div>
            <h1 className='main-content-title'>
              <div>
                Dispute o campeonato por um PS5
              </div>
            </h1>
            <p>Inscrições abertas até 25 de Setembro de 2024</p>
            <p>As inscrições encerram em: <span id='countdown'></span></p>
            <p>Campeonato ocorre em 28 de Setembro de 2024</p>
            <a href="https://forms.gle/vuHy3xCtCaT15AKf6" target="_blank" rel="noopener" className="themed-icon-button themed-icon-button--link themed-icon-button--arcane hero-new__button">
              <span className="themed-icon-button__content">
                <div className="themed-icon-button__icon">
                  <span className="icon sixteen">
                    <span className="is-vhidden">Inscrição</span>
                      <svg viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z" fill="#F0F0F0"></path>
                    </svg>
                    </span>
                </div>Quero Participar!
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const updateCountdown = () => {
    const countdownSpan: HTMLSpanElement = document.getElementById('countdown') as HTMLSpanElement;

    if(!countdownSpan) return;

    // Set the due date (replace with your desired date)
    const dueDate: Date = new Date('2024-09-25T00:00:00'); // September 1st, 2024 at midnight 

    const now = new Date();
    
    // Calculate the difference between dueDate and now
    const diffTime = Math.abs(dueDate.getTime() - now.getTime());
    
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    // Format the output string
    const countdownText = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

    // Update the span text
    countdownSpan.textContent = countdownText;

    // Check if we've reached the due date
    if (now >= dueDate) {
        clearInterval(countdownInterval);
        countdownSpan.textContent = "Due date has passed!";
    }
}

// Start the countdown immediately
updateCountdown();

// Set up an interval to update every second
const countdownInterval = setInterval(updateCountdown, 1000);



export default MainEvent;
import './MainEvent.scss';

const MainEvent = () => {
  return (
    <div className="coming-soon-body">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <h1>Em Breve...</h1>
          <p>Estamos trabalhando em algo incrível. Fique ligado!</p>
          <form className="email-form">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="email-input"
            />
            <button type="submit" className="email-button">
              Notifique-me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
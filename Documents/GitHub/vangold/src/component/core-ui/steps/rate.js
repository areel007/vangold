import "./steps.css";

const Rate = (props) => {
  return (
    <div className="step rate-step">
      <p className="step-title">Rate/Hour</p>
      <form className="rate-form">
        <div className="vangold-input hourly-rate">
          <label>Hourly Rate</label>
          <input type="text" />
          <i className="rate-currency-symbol">$</i>
          <p className="rate-form-P">This is the amount the client will see</p>
        </div>
        <div className="vangold-input vangold-service-fee">
          <label>VanGold Service Fee</label>
          <input type="text" />
          <i className="rate-currency-symbol">$</i>
          <p className="rate-form-P">VanGold service fee is 10%</p>
        </div>
        <div className="vangold-input vangold-service-fee">
          <label>Amount You’ll Recieve</label>
          <input type="text" />
          <i className="rate-currency-symbol">$</i>
          <p className="rate-form-P">This is the amount that you will be paid to you</p>
        </div>
      </form>
    </div>
  );
};

export default Rate;

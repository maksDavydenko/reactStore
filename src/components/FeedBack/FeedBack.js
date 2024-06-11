import Facebook from "../../media/facebook.svg";
import Twitter from "../../media/twitter 1.svg";
import Pinterest from "../../media/pinterest 1.svg";
import Instagram from "../../media/instagram 1.svg";

import "./feedback.scss";

export const FeedBack = () => {
  return (
    <div className="feedback">
      <div className="content">
        <div className="feedback-content">
          <div className="feedback-item">
            <h4>Subcribe our Newsletter</h4>
            <p>
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div>
            <form className="input-wrap">
              <input type="email" placeholder="Your email address"></input>
              <button>Subscribe</button>
            </form>
          </div>

          <ul>
            <li>
              <a>
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a>
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a>
                <img src={Pinterest} alt="Pinterest" />
              </a>
            </li>
            <li>
              <a>
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

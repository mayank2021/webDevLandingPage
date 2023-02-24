import "./App.css";
import Nav from "./Components/Nav/Nav";
import Text from "./Components/Text/Text";
import ClubNameAnim from "./Components/ClubNameAnim/ClubNameAnim";
import Transform from "./Assets/connection.png";
import Learn from "./Assets/success.png";
import Build from "./Assets/build.png";
import Share from "./Assets/file-sharing.png";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="landing-page--container">
        <div className="transforming-main-container">
          <Text
            title="transforming"
            color="#E15341"
            size="lg"
            type="primary"
            animation="transformAnim 1.2s ease"
          />
          <img
            style={{
              animation: "tranformIcon 1s 3s",
              animationFillMode: "forwards",
            }}
            src={Transform}
            alt="transforming"
          />
        </div>
        <div className="text-container">
          <div>
            <div className="idea-text-container">
              <Text
                title="ideas"
                size="md"
                type="secondary"
                animation="transformAnim 1.2s 0.5s"
              />

              <div
                className="bulb-gif"
                style={{
                  animation: "bulbAnim 1s 3.5s",
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src="https://media.giphy.com/media/S7gV2xgCKcS6z0Nn08/giphy.gif"
                  alt="idea"
                />
              </div>
            </div>
            <Text
              title="into"
              size="md"
              type="secondary"
              animation="transformAnim 1.2s 1s"
            />
            <Text
              title="reality"
              size="md"
              type="secondary"
              animation="transformAnim 1.2s 1.5s"
            />
          </div>
          <ClubNameAnim anim="clubName 1.2s 4s" />
          <div>
            <div
              className="tagline-container-1"
              style={{
                animation: "learnAnim 1s 1.8s",
                animationFillMode: "forwards",
              }}
            >
              <img src={Learn} alt="learn" />
              <p>Learn</p>
            </div>
            <div
              className="tagline-container-1"
              style={{
                animation: "learnAnim 1s 2.2s",
                animationFillMode: "forwards",
              }}
            >
              <img src={Build} alt="learn" />
              <p>build</p>
            </div>
            <div
              className="tagline-container-1"
              style={{
                animation: "learnAnim 1s 2.6s",
                animationFillMode: "forwards",
              }}
            >
              <img src={Share} alt="learn" />
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

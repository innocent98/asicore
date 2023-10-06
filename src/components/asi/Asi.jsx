import "./asi.scss";
import { Slide, Zoom } from "react-awesome-reveal";
import { useState } from "react";

const Asi = () => {
  const [copy, setCopy] = useState(false);

  const handleCopyText = () => {
    const textToCopy = "0xef51585d985bad6818c8ad7ba6d70ccf6d216c89";

    // Create a hidden input element
    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = textToCopy;
    document.body.appendChild(input);

    // Select the input content
    input.select();
    input.setSelectionRange(0, 99999);

    // Execute the copy command
    document.execCommand("copy");

    // Cleanup: remove the input element
    document.body.removeChild(input);

    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="asi">
      <section className="first_section">
        <div className="net">
          <img src="/images/net.png" alt="" />
        </div>

        <div className="wrapper">
          <Slide direction="right" triggerOnce className="slide">
            <h2>$ASI STAKING</h2>

            <div className="box">
              <div className="flex">
                <img src="/images/star.png" alt="" />
                <h2>Flexible Staking</h2>
              </div>

              <p>ASI Tokens can be staked and withdraw flexibly</p>

              <div className="flex">
                <img src="/images/star.png" alt="" />
                <h2>Boosting Power</h2>
              </div>

              <p>
                When ASI is staked, stake can get boosting power to boost your
                favorite projects
              </p>
            </div>
          </Slide>
        </div>
      </section>

      <section className="second_section">
        <div className="net">
          <img src="/images/net.png" alt="" />
        </div>

        <div className="wrapper">
          <Slide direction="right" triggerOnce className="slide">
            <div className="main_box">
              <h2>ASI TOKENOMICS </h2>

              <div className="flex">
                <div className="box">
                  <div className="p_wrap">
                    <h2>CORE</h2>
                    <p>BLOCKCHAIN: CORE</p>
                    <p>TOTAL SUPPLY: 600,000,000,000</p>
                    <p>TAX: BUY 0%, SELL 8% tax applied to each transaction </p>
                    <p>SYMBOL: ASI</p>
                    <p>DECIMAL: 18</p>
                    <p>DEX: ICECREAMSWAP</p>
                  </div>

                  <div className="bottom">
                    <span>
                      <div className="circle"></div>
                      <p>$ASICORE ADDRESS</p>
                    </span>

                    <div>
                      <div className="token">
                        0xef51585d985bad6818c8ad7ba6d70ccf6d216c89
                      </div>
                      <span
                        class="material-symbols-outlined"
                        style={{
                          color: "white",
                          overflow: "hidden",
                          cursor: "pointer",
                        }}
                        onClick={handleCopyText}
                      >
                        {copy ? "done" : "content_copy"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <div className="p_wrap">
                    <h2>BINANCE</h2>
                    <p>BLOCKCHAIN: BINANCE</p>
                    <p>TOTAL SUPPLY: 1,000,000,000</p>
                    <p>TAX: BUY 0%, SELL 8% tax applied to each transaction </p>
                    <p>SYMBOL: ASI</p>
                    <p>DECIMAL: 18</p>
                    <p>DEX: PANCAKESWAP</p>
                  </div>

                  <div className="bottom">
                    <span>
                      <div className="circle"></div>
                      <p>$ASI BINANCE ADDRESS</p>
                    </span>
                    <div>
                      <div className="token">.</div>
                      <span
                        class="material-symbols-outlined"
                        style={{
                          color: "white",
                          overflow: "hidden",
                          cursor: "pointer",
                        }}
                      >
                        content_copy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>

      <section className="third_section">
        <div className="net">
          <img src="/images/net.png" alt="" />
        </div>

        <div className="tonenomics">
          <h2>ROADMAP</h2>
          <div className="roadmapCon">
            <img src="/images/road-map.png" alt="" />
          </div>
        </div>
      </section>

      <section className="fourth_section">
        <div className="net">
          <img src="/images/net.png" alt="" />
        </div>

        <div className="wrapper">
          <div className="box">
            <img src="/images/asi.png" alt="" />

            <p>
              ASI let you experience the power of{" "}
              <span>Artificial Super Intelligence </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <Zoom triggerOnce>
          <div className="inTouch">
            <div className="img">
              <a href="https://twitter.com/asi_core" target="_blanc">
                <img src="images/tw.png" alt="" />
              </a>

              <a href="https://t.me/asi_core" target="_blanc">
                <img src="images/tg.png" alt="" />
              </a>

              <a href="https://youtube.com/@asi_core?si=rVRUylvgnqZ3-XlU" target="_blanc">
                <img src="images/you.png" alt="" />
              </a>
            </div>
            <hr />
            <p>(c) 2023 ASI CORE. All Rights Reserved</p>
          </div>
        </Zoom>
      </section>
    </div>
  );
};

export default Asi;

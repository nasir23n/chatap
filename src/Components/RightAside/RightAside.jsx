import React from "react";

function RightAside() {
  return (
    <div className="right_aside">
      <div className="m_profile flex_center">
        <div className="img mb2">
          <img src="profile/user1.jpg" alt="" />
          <img src="profile/user2.jpg" alt="" />
        </div>
        <div className="name">
          <strong>User One</strong>
          <span>with</span>
          <strong>User Two</strong>
        </div>
        <div className="inf">
          <strong>Total message</strong>
          <span className="current_total">238923</span>
        </div>
        <div className="inf theme">
          <div className="thim_title">Color Theme</div>
          <ul className="theme_colors">
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_1)" }}
                data-tm="var(--theme_1)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_2)" }}
                data-tm="var(--theme_2)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_3)" }}
                data-tm="var(--theme_3)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_4)" }}
                data-tm="var(--theme_4)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_5)" }}
                data-tm="var(--theme_5)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_6)" }}
                data-tm="var(--theme_6)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--facebook)" }}
                data-tm="var(--facebook)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_9)" }}
                data-tm="var(--theme_9)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_10)" }}
                data-tm="var(--theme_10)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_11)" }}
                data-tm="var(--theme_11)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_12)" }}
                data-tm="var(--theme_12)"
              ></div>
            </li>
            <li>
              <div
                className="color"
                style={{ background: "var(--pre_theme_13)" }}
                data-tm="var(--theme_13)"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightAside;

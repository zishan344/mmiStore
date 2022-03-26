import React from "react";
import "./Qna.css";
const Qna = () => {
  return (
    <div className="all-qna">
      <div className="qna1">
        <h2 className="qna-title">How works React</h2>
        <p>
          React A seam to seam creates another dom similar to this browser dom
          which is called virtual dom. Now this dome looks exactly like the real
          dome, but this virtual dome is actually a JavaScript object. React
          builds it in such a way that any element can be modified easily and
          efficiently using JavaScript with this DOM. Now here too React does
          another work. When the user takes an action in the React app, React
          puts those changes in one of the two virtual domes, and the other is
          in the previous version. Now comparing the new one with the previous
          one, seeing the reaction, exactly which specific element has been
          changed. According to him, React does not re-render or re-paint the
          whole dome but only changes what has been changed. It is easy to work
          quickly and the browser does not have to do any extra, unnecessary
          work. And so, using this technique, React can render so fast.
        </p>
      </div>
      <div className="qna2">
        <h2 className="qna-title">How works useState</h2>
        <div className="stateQna">
          <div>
            <h4>props</h4>
            <p> Props are read-only.</p>
            <p>Props are immutable.</p>
            <p>
              Props allow you to pass data from one component to other
              components as an argument.
            </p>
            <p> Props can be accessed by the child component.</p>
            <p>Props are used to communicate between components.</p>
            <p> Stateless component can have Props.</p>
            <p>Props make components reusable.</p>
            <p>
              Props are external and controlled by whatever renders the
              component.
            </p>
          </div>
          <div>
            <h4>state</h4>
            <p>State changes can be asynchronous.</p>
            <p>State is mutable.</p>
            <p>State holds information about the components.</p>
            <p>State cannot be accessed by child components.</p>
            <p>
              States can be used for rendering dynamic changes with the
              component.
            </p>
            <p>Stateless components cannot have State.</p>
            <p>State cannot make components reusable.</p>
            <p>
              The State is internal and controlled by the React Component
              itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;

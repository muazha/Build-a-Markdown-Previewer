import "font-awesome/css/font-awesome.min.css";
import './App.css';
import React, { useState } from "react";
function App() {
  const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [text, setText] = useState(defaultText);
  const [editor, setEditor] = useState(false)
  const [previewer, setPreviewer] = useState(false)
  return (
    <div className="App">
      <div className={editor ? "editorWrap maximized" : "editorWrap" && previewer ? "editorWrap hide" : "editorWrap"}>
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          <>Editor</>
          <i className={editor ? "fa fa-compress" : "fa fa-arrows-alt"} onClick={(e) => setEditor(e.target.value = editor ? false : true )}></i>
        </div>
        <textarea id="editor" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="converter"></div>
      <div className={editor ? "previewWrap hide" : "previewWrap"}>
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          <>Previewer</>
          <i className={previewer ? "fa fa-compress" : "fa fa-arrows-alt"} onClick={(e) => setPreviewer(e.target.value = previewer ? false : true )}></i>
        </div>
        <div id="preview">
          <h1 id="welcome-to-my-react-markdown-previewer">Welcome to my React Markdown Previewer!</h1>
          <h2 id="this-is-a-sub-heading">This is a sub-heading...</h2>
          <h3 id="and-heres-some-other-cool-stuff">And here's some other cool stuff:</h3>
          <p>Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2 backticks.</p>
          <pre style={{ whiteSpace: 'pre' }}>
            <code>
              <span className="token comment">// this is multi-line code:</span>{"\n"}
              {"\n"}
              <span className="token keyword">function</span> <span className="token function">anotherExample</span><span className="token punctuation">(</span><span className="token.parameter">firstLine, lastLine</span><span className="token punctuation">)</span> <span className="token punctuation">{"{"}</span>{"\n"}
              {"  "}
              <span className="token keyword">if</span> <span className="token punctuation">(</span>firstLine <span className="token operator">==</span> <span className="token string">'```'</span> <span className="token operator">&&</span> lastLine <span className="token operator">==</span> <span className="token string">'```'</span><span className="token punctuation">)</span> <span className="token punctuation">{"{"}</span>{"\n"}
              {"    "}
              <span className="token keyword">return</span> multiLineCode<span className="token punctuation">;</span>{"\n"}
              {"  "}
              <span className="token punctuation">{"}"}</span>{"\n"}
              <span className="token punctuation">{"}"}</span>
            </code>
          </pre>
          <p>
            <>You can also make text </>
            <strong>bold</strong>
            <>... whoa!</>
            <br />
            <>Or </>
            <em>italic</em>
            <>.</>
            <br />
            <>Or... wait for it... </>
            <strong>
              <em>both!</em>
            </strong>
            <br />
            <>And feel free to go crazy </>
            <del>crossing stuff out</del>
            <>.</>
          </p>
          <p>
            <>There's also </>
            <a target="_blank" href="https://www.freecodecamp.org">links</a>
            <>, and</>
          </p>
          <blockquote>
            <p>Block Quotes!</p>
          </blockquote>
          <p>And if you want to get really crazy, even tables:</p>
          <table>
            <thead>
              <tr>
                <th>Wild Header</th>
                <th>Crazy Header</th>
                <th>Another Header?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your content can</td>
                <td>be here, and it</td>
                <td>can be here....</td>
              </tr>
              <tr>
                <td>And here.</td>
                <td>Okay.</td>
                <td>I think we get it.</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <>And of course there are lists.</>
              <ul>
                <li>
                  <>Some are bulleted.</>
                  <ul>
                    <li>
                      <>With different indentation levels.</>
                      <ul>
                        <li>That look like this.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ol>
            <li><>And there are numbered lists too.</></li>
            <li><>Use just 1s if you want!</></li>
            <li><>And last but not least, let's not forget embedded images:</></li>
          </ol>
          <p>
            <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" alt="freeCodeCamp Logo"></img>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

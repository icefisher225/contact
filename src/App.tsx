import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { HomePage } from './Home';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
    --font-fallback: monospace;
    --font-body: 'Hack', var(--font-fallback);
    --font-mono: 'Hack', var(--font-fallback);

    --user-font-scale: 1rem - 16px;
    --max-width: calc(100% - 2rem);
    font-size: 18px;

    --color-gray: #2d2e2f;
    --color-white: #fff;
    --color-text-white: #c8c8c8;
    --color-offwhite: #888;
    --color-almost-black: #121212;
    --color-black: #000;
    --color-pink: #ff43ac;
    --color-pink-alt: #ff81ba;
    --color-blue: #299bfd;
    --color-blue-alt: #59b8ff;
    --color-red: #ff5459;
    --color-yellow: #ffb85e;
    --color-yellow-alt: #ffcd8c;
    --color-green: #8dffde;

    --theme-round: 4px;

    background: transparent;
  }
  :root {
    font-size: 16px;
    --theme-bg: var(--color-almost-black);
    --theme-text-main: var(--color-white);
    --theme-text-post: var(--color-text-white);
    --theme-text-alt: var(--color-offwhite);
    --theme-link: var(--color-blue);
    --theme-code-border: 1px solid white;
    --theme-code-inline: var(--color-pink);
    --theme-person-link: var(--color-pink);
    --theme-person-bg: var(--color-almost-black);
    --theme-person-border: var(--color-white);
    --theme-person-highlight: rgba(255,255,255,0.1);
    --theme-line-color: #686868;

    --theme-bg-hover: var(--color-offwhite);
    --theme-bg-focus: var(--color-offwhite);

    --color-bg: var(--theme-bg);
    --color-main: var(--theme-text-main);
    --color-alt: var(--theme-text-alt);
  }
  @media print {
    html, body {
      --color-bg: white;
      --color-main: #2d2e2f;
      --color-alt: #c9c9c9;
    }
    :root {
      font-size: 14px;
    }
  }
`;

export const App = () => {
    useEffect(() => {
        if (
            location.protocol !== 'https:' &&
            !location.href.includes('localhost')
        ) {
            location.replace(
                `https:${location.href.slice(location.protocol.length)}`
            );
        }
    }, [0]);

    return (
        <Router>
            <GlobalStyle />
            <luc-wrapper>
                {/* <NavBar /> */}
                <div className="content w-full flex justify-center">
                    <HomePage />
                </div>
            </luc-wrapper>
            <link
                rel="stylesheet"
                href="https://header.luc.computer/style.css"
            />
            {/* <luc-footer /> */}
        </Router>
    );
};

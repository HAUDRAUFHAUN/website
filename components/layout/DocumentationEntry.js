import styled from "@emotion/styled";

import { MDXProvider } from "@mdx-js/react";

import Sidebar from "components/docs/Sidebar";
import CodeBlock from "components/CodeBlock";

function importAll(r) {
  return r.keys().map(r);
}
const docsItems = importAll(require.context("pages/docs", false, /.mdx$/));

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

const Style = ({ children }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
);

export default function Documentation({ children, prop }) {
  return (
    <Main>
      <Sidebar>{docsItems}</Sidebar>
      <MDXProvider components={components}>
        <Wrap>{children}</Wrap>
      </MDXProvider>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12vw;
  width: 100%;

  overflow: hidden;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin-left: 5vw;
  margin-right: 12vw;

  width: 50%;

  overflow: hidden;

  blockquote  {
    padding-left: 0.5rem;
    border-left: 2px solid #9ca3af;
  }

  code {
    padding: 3px;
    border-radius: 2px;

    background-color: #e5e7eb;
    color: red;
  }
`;

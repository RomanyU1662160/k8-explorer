import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

type MarkdownRendererProps = {
  content: string;
};

function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={
        'text-center markdown-body my-1 border border-muted rounded p-2'
      }
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        code({ node, className, children, ...props }) {
          return (
            <pre className={className}>
              <code {...props}>{children}</code>
            </pre>
          );
        },
      }}
    />
  );
}

export default MarkdownRenderer;

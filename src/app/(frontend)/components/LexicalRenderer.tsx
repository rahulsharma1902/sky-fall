"use client";

import React from "react";

const renderNode = (node: any, key?: React.Key): React.ReactNode => {
  if (!node) return null;

  const children = Array.isArray(node.children)
    ? node.children.map((child: any, index: number) => renderNode(child, index))
    : null;
  switch (node.type) {
    case "heading": {
      const Tag = node.tag || "h1";
      return (
        <Tag style={node.style} key={key}>
          {children}
        </Tag>
      );
    }

    case "paragraph":
      return (
        <p style={node.style} key={key}>
          {children}
        </p>
      );

    case "text": {
      let content = node.text || "";
      const format = node.format;

      let element: React.ReactNode = content;

      const hasFormat = (f: string) => {
        if (!format) return false;
        if (Array.isArray(format)) return format.includes(f);
        if (typeof format === "string")
          return format === f || format.includes(f);
        return false;
      };

      if (hasFormat("bold")) element = <strong>{element}</strong>;
      if (hasFormat("italic")) element = <em>{element}</em>;

      return <React.Fragment key={key}>{element}</React.Fragment>;
    }

    case "upload":
      return (
        <img
          key={key}
          src={node.value?.url}
          alt={node.value?.alt || ""}
          style={{ maxWidth: "100%", ...node.style }}
        />
      );

    case "link":
      return (
        <a
          href={node?.fields?.url}
          style={node.style}
          key={key}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );

    case "quote":
      return (
        <blockquote key={key} style={node.style}>
          {children}
        </blockquote>
      );

    case "list": {
      const isNumbered = node.listType === "number";
      const ListTag = isNumbered ? "ol" : "ul";

      return (
        <ListTag key={key} style={node.style} className="pl-5 list-disc">
          {Array.isArray(node.children) &&
            node.children.map((child: any, i: number) => (
              <li key={i}>{renderNode(child, i)}</li>
            ))}
        </ListTag>
      );
    }

    default:
      return (
        <div style={node.style} key={key}>
          {children}
        </div>
      );
  }
};

export const LexicalRenderer = ({ content }: { content: any }) => {
  const nodes = content?.root?.children || [];

  return (
    <div className="text-white space-y-4 content-blog-details">
      {nodes.map((node: any, i: number) => renderNode(node, i))}
    </div>
  );
};

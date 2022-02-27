import { CopyBlock, dracula } from "react-code-blocks";
import "./CoolCodeBlockComponent.css";

interface CodeBlockProps {
    code: string;
    language: string;
    showLineNumbers: boolean;
    startingLineNumber: number;
};

export const CoolCodeBlockComponent = ({ code, language, showLineNumbers, startingLineNumber }: CodeBlockProps) => {
    return (
        <CopyBlock
            className="CodeBlock"
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
            theme={dracula}
            codeBlock
            wrapLines
        />
    );
}
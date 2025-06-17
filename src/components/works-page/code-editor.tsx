'use client';

import { useEffect, useRef } from 'react';
import { CopyIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';

type CodeEditorProps = {
  code: string;
  language: 'javascript' | 'python';
  className?: string;
};

export function CodeEditor({ code, language, className }: CodeEditorProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard');
  };

  return (
    <div className={`relative bg-gray-900 rounded-md overflow-hidden ${className}`}>
      <pre className="p-4 overflow-auto m-0">
        <code 
          ref={codeRef} 
          className={`language-${language}`}
        >
          {code}
        </code>
      </pre>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 text-gray-400 hover:text-black"
        onClick={handleCopy}
      >
        <CopyIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}
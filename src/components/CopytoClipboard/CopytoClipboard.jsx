import { useState } from 'react';
import './style.css';

export default function TextCopy({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // Tooltip disappears after 2 seconds
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="copy-container">
      <button className="text-button" onClick={handleCopy}>
        {text}
        {copied && <span className="tooltip">Copied!</span>}
      </button>
    </div>
  );
}
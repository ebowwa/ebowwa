import { useState } from 'react';
import { BlockType } from '../types';

interface ToolbarProps {
  onInsertBlock: (blockType: BlockType) => void;
  onFormatChange: (format: string) => void;
}

export default function Toolbar({ onInsertBlock, onFormatChange }: ToolbarProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>('');

  const handleFormatChange = (format: string) => {
    setSelectedFormat(format);
    onFormatChange(format);
  };

  const handleInsertBlock = (blockType: BlockType) => {
    onInsertBlock(blockType);
  };

  return (
    <div>
      <div>
        <button
          style={{
            fontWeight: selectedFormat === 'bold' ? 'bold' : 'normal',
          }}
          onClick={() => handleFormatChange('bold')}
        >
          B
        </button>
        <button
          style={{
            fontStyle: selectedFormat === 'italic' ? 'italic' : 'normal',
          }}
          onClick={() => handleFormatChange('italic')}
        >
          I
        </button>
        <button
          style={{
            textDecoration: selectedFormat === 'underline' ? 'underline' : 'none',
          }}
          onClick={() => handleFormatChange('underline')}
        >
          U
        </button>
      </div>
      <div>
        <button onClick={() => handleInsertBlock('heading')}>H</button>
        <button onClick={() => handleInsertBlock('paragraph')}>P</button>
        <button onClick={() => handleInsertBlock('list')}>L</button>
        <button onClick={() => handleInsertBlock('image')}>I</button>
      </div>
    </div>
  );
}
import { Page } from '../types';

interface WorkspaceProps {
  currentPage: Page | null;
  onUpdatePageContent: (content: string) => void;
  onUndo: () => void;
  onRedo: () => void;
}

export default function Workspace({
  currentPage,
  onUpdatePageContent,
  onUndo,
  onRedo,
}: WorkspaceProps) {
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdatePageContent(event.target.value);
  };

  return (
    <div>
      {currentPage ? (
        <>
          <textarea
            value={currentPage.content}
            onChange={handleContentChange}
            placeholder="Start writing..."
          />
          <div>
            <button onClick={onUndo}>Undo</button>
            <button onClick={onRedo}>Redo</button>
          </div>
        </>
      ) : (
        <p>No page selected</p>
      )}
    </div>
  );
}
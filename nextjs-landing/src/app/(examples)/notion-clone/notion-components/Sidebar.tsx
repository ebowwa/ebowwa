import { Page } from '../types';

interface SidebarProps {
  pages: Page[];
  currentPage: Page | null;
  onCreateNewPage: () => void;
  onSwitchPage: (page: Page) => void;
}

export default function Sidebar({
  pages,
  currentPage,
  onCreateNewPage,
  onSwitchPage,
}: SidebarProps) {
  return (
    <div>
      <h2>Pages</h2>
      <ul>
        {pages.map((page) => (
          <li
            key={page.id}
            style={{
              fontWeight: currentPage?.id === page.id ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
            onClick={() => onSwitchPage(page)}
          >
            {page.name}
          </li>
        ))}
      </ul>
      <button onClick={onCreateNewPage}>+ New Page</button>
    </div>
  );
}
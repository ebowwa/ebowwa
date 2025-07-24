export type Page = {
    id: string;
    name: string;
    content: string;
  };
  
  export type PageContent = string;
  
  export type BlockType = 'heading' | 'paragraph' | 'list' | 'image';
export interface ProjectPage {
  id: number;
  uuid: string;
  is_startpage: boolean;
  published_at: string;
  slug: string;
  full_slug: string;
  content: ProjectContent;
}

export interface ProjectContent {
  title: string;
  image: {
    filename: string;
    alt: string;
  };
}

export interface ProjectPreview {
  full_slug: string;
  title: string;
  image: {
    filename: string;
    alt: string;
  };
}

export interface AlbumChapter {
  id: string;
  yearRange: string;
  startYear: number;
  title: string;
  subtitle: string;
  category: 'education' | 'politics' | 'engineering' | 'alash' | 'science' | 'repression';
  categoryLabel: string;
  location: string;
  summary: string;
  details: string[];
  historicalQuotes?: {
    text: string;
    source: string;
  }[];
  engineeringFeats?: string[];
  archivalDocuments?: string[];
  articlesPublished?: string[];
}

export interface InstitutionPhoto {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  imageUrl: string;
  verified: boolean;
}

export interface HistoricalArticle {
  title: string;
  source: string;
  year?: string;
  desc: string;
}

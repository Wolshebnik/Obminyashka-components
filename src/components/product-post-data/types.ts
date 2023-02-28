export type LangType = 'ua' | 'en';

export interface IProductPostData {
  age: string;
  size?: string;
  title: string;
  lang: LangType;
  gender: string;
  season: string;
  wishes?: string[];
  buttonText: string;
  readyForOffers: boolean;
  translatedTextAge: string;
  translatedTextSize: string;
  translatedTextGender: string;
  translatedTextSeason: string;
  translatedTextCheckInUl: string;
  translatedTextChangesTo: string;
  translatedTextDescription: string;
}

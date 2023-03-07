export interface IResetAllButton {
  setAnnouncementTitle: (value: string) => void;
  setExchangeList: (value: any[]) => void;
  setDescription: (value: string) => void;
  setLocationId: (value: string) => void;
  setImageFiles: (value: any[]) => void;
  setCategoryItems: (value: string) => void;
  setSubCategoryItems: (value: string) => void;
  setReadyOffer: (value: any[]) => void;
  setAge: (value: any[]) => void;
  setGender: (value: any[]) => void;
  setSeason: (value: any[]) => void;
  setSize: (value: string) => void;
  setLocationCurrent: (value: any | null) => void;
  setPreViewImage: (value: any[]) => void;
  setCurrentIndexImage: (value: any | null) => void;
  setShowLocation: React.Dispatch<
    React.SetStateAction<{
      city?: string;
      area?: string;
    }>
  >;
  clearAdv: (state?: {
    topic: string;
    category: string;
    subcategory: string;
    readyForOffers: any[];
    wishesToExchange: any[];
    ageStore: any[];
    genderStore: any[];
    seasonStore: any[];
    sizeStore: any[];
    descriptionStore: string;
    idLocation: string;
    fileImage: any[];
    currLocation: null | null;
    locationShow: null | null;
    viewImage: any[];
    indexImage: any | null;
  }) => void;
  getText: string;
}

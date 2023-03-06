export interface IResetAllButton {
  setAnnouncementTitle: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setExchangeList: React.Dispatch<React.SetStateAction<any[]>>;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLocationId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setImageFiles: React.Dispatch<React.SetStateAction<any[]>>;
  setCategoryItems: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSubCategoryItems: React.Dispatch<React.SetStateAction<string | undefined>>;
  setReadyOffer: React.Dispatch<React.SetStateAction<any[]>>;
  setAge: React.Dispatch<React.SetStateAction<any[]>>;
  setGender: React.Dispatch<React.SetStateAction<any[]>>;
  setSeason: React.Dispatch<React.SetStateAction<any[]>>;
  setSize: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLocationCurrent: React.Dispatch<React.SetStateAction<any | null>>;
  setPreViewImage: React.Dispatch<React.SetStateAction<any[]>>;
  setCurrentIndexImage: React.Dispatch<React.SetStateAction<any | null>>;
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

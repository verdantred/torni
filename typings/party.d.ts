interface Party {
  _id?: string;
  name: string;
  description?: string;
  location: string;
  invited?: Array<string>;
  owner?: string;
  public: boolean;
}

declare var Fake: {
  sentence(words: number): string;
}

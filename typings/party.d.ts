interface Party {
  _id?: string;
  name: string;
  description?: string;
  location: string;
  invited?: Array<string>;
  rsvps?: Array<RSVP>;
  owner?: string;
  public: boolean;
}

interface RSVP {
  userId: string;
  response: string;
}

declare var Fake: {
  sentence(words: number): string;
}

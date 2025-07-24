export interface SkillDetail {
    name: string;
    uri: string;
  }
  
export interface AvatarRelated {
    images: {
      url: string;
      width: number;
      height: number;
      size: number;
    }[];
    uid: string;
    uri: string;
  }
  
export interface UserDetail {
    website: string;
    subscriptionCount: number;
    followerCount: number;
    uid: string;
    modelsUrl: string;
    portfolioUrl: string;
    likeCount: number;
    facebookUsername: string;
    biography: string;
    dateJoined: string;
    city: string;
    account: string;
    displayName: string;
    profileUrl: string;
    followingsUrl: string;
    skills: SkillDetail[];
    tagline: string;
    uri: string;
    modelCount: number;
    username: string;
    linkedinUsername: string;
    likesUrl: string;
    followersUrl: string;
    collectionCount: number;
    country: string;
    followingCount: number;
    twitterUsername: string;
    collectionsUrl: string;
    avatar: AvatarRelated;
  }
  
export interface CollectionList {
    createdAt: string;
    description: string;
    hasRestrictedContent: boolean;
    models: string;
    isAgeRestricted: boolean;
    uri: string;
    modelCount: number;
    user: string;
    updatedAt: string;
    owner: UserDetail | null;
    embedUrl: string;
    uid: string;
    slug: string;
    thumbnails: Record<string, unknown>;
    name: string;
  }
  
export interface CollectionResponse {
    results: CollectionList[];
  }
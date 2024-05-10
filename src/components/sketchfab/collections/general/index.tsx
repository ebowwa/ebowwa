'use client';

import { useState, useEffect } from 'react';
import { CollectionResponse, CollectionList, UserDetail, AvatarRelated, SkillDetail} from "../../interfaces"


const CollectionComponent: React.FC = () => {
  const [collectionData, setCollectionData] = useState<CollectionResponse | null>(null);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await fetch('https://api.sketchfab.com/v3/collections');
        const data = await response.json();
        setCollectionData(data);
      } catch (error) {
        console.error('Error fetching collection data:', error);
      }
    };

    fetchCollectionData();
  }, []);

  if (!collectionData || collectionData.results.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {collectionData.results.map((collection, index) => (
        <div key={index}>
          <h3>{collection.name}</h3>
          <p>{collection.description}</p>
          <p>Owner: {collection.owner?.displayName || 'N/A'}</p>
          <p>Model Count: {collection.modelCount}</p>
          <p>Created At: {collection.createdAt}</p>
          <p>Updated At: {collection.updatedAt}</p>
          <p>Is Age Restricted: {collection.isAgeRestricted ? 'Yes' : 'No'}</p>
          <p>Has Restricted Content: {collection.hasRestrictedContent ? 'Yes' : 'No'}</p>
          <p>Models: {collection.models}</p>
          <p>Slug: {collection.slug}</p>
          <p>Embed URL: {collection.embedUrl}</p>
          <p>UID: {collection.uid}</p>
          <p>Thumbnails: {JSON.stringify(collection.thumbnails)}</p>
          {collection.owner && (
            <>
              <p>Owner Website: {collection.owner.website}</p>
              <p>Owner Subscription Count: {collection.owner.subscriptionCount}</p>
              <p>Owner Follower Count: {collection.owner.followerCount}</p>
              <p>Owner UID: {collection.owner.uid}</p>
              <p>Owner Models URL: {collection.owner.modelsUrl}</p>
              <p>Owner Portfolio URL: {collection.owner.portfolioUrl}</p>
              <p>Owner Like Count: {collection.owner.likeCount}</p>
              <p>Owner Facebook Username: {collection.owner.facebookUsername}</p>
              <p>Owner Biography: {collection.owner.biography}</p>
              <p>Owner Date Joined: {collection.owner.dateJoined}</p>
              <p>Owner City: {collection.owner.city}</p>
              <p>Owner Account: {collection.owner.account}</p>
              <p>Owner Profile URL: {collection.owner.profileUrl}</p>
              <p>Owner Followings URL: {collection.owner.followingsUrl}</p>
              <p>Owner Skills: {collection.owner.skills.map((skill) => skill.name).join(', ')}</p>
              <p>Owner Tagline: {collection.owner.tagline}</p>
              <p>Owner URI: {collection.owner.uri}</p>
              <p>Owner Model Count: {collection.owner.modelCount}</p>
              <p>Owner Username: {collection.owner.username}</p>
              <p>Owner LinkedIn Username: {collection.owner.linkedinUsername}</p>
              <p>Owner Likes URL: {collection.owner.likesUrl}</p>
              <p>Owner Followers URL: {collection.owner.followersUrl}</p>
              <p>Owner Collection Count: {collection.owner.collectionCount}</p>
              <p>Owner Country: {collection.owner.country}</p>
              <p>Owner Following Count: {collection.owner.followingCount}</p>
              <p>Owner Twitter Username: {collection.owner.twitterUsername}</p>
              <p>Owner Collections URL: {collection.owner.collectionsUrl}</p>
              <p>Owner Avatar UID: {collection.owner.avatar.uid}</p>
              <p>Owner Avatar URI: {collection.owner.avatar.uri}</p>
              <p>Owner Avatar Images: {collection.owner.avatar.images.map((image) => JSON.stringify(image)).join(', ')}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollectionComponent;
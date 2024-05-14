import { useState, useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { CollectionResponse, CollectionList, UserDetail, AvatarRelated, SkillDetail} from "../../interfaces"

const CollectionsPage: NextPage = () => {
  const [collections, setCollections] = useState<CollectionList[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('https://api.example.com/v3/me/collections', {
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary authentication headers here
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data: CollectionResponse = await response.json();
        setCollections(data.results);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div>
      <h1>My Collections</h1>
      {collections.map((collection) => (
        <div key={collection.uid}>
          <h2>{collection.name}</h2>
          <p>Created at: {collection.createdAt}</p>
          <p>Models: {collection.models}</p>
          <p>Owner: {collection.owner.displayName}</p>
          <p>Restricted content: {collection.hasRestrictedContent ? 'Yes' : 'No'}</p>
          <p>Age-restricted: {collection.isAgeRestricted ? 'Yes' : 'No'}</p>
          <a href={collection.embedUrl}>View Collection</a>
        </div>
      ))}
    </div>
  );
};

export default CollectionsPage;
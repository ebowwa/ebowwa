import marioCharacterData from './model.json';

type NodeMap = { [key: string]: string };
type MaterialMap = { [key: string]: string };

type MarioCharacterData = {
    nodes: NodeMap;
    materials: MaterialMap;
};

const marioCharacter: MarioCharacterData = marioCharacterData;
export default marioCharacter;
import { readFileSync } from 'fs';
import { decode } from 'utf8';

interface GLBData {
  magic: string;
  version: number;
  length: number;
  json: {
    asset: {
      version: string;
    };
    buffers: {
      byteLength: number;
      uri: string;
    }[];
    bufferViews: {
      buffer: number;
      byteOffset: number;
      byteLength: number;
    }[];
    accessors: {
      bufferView: number;
      componentType: number;
      count: number;
      type: string;
      min: number[];
      max: number[];
    }[];
    meshes: {
      primitives: {
        attributes: {
          [key: string]: number;
        };
        indices: number;
        mode: number;
        material: number;
      }[];
    }[];
  };
}

export async function getGLBData(filePath: string): Promise<GLBData> {
  const buffer = readFileSync(filePath);
  const dataView = new DataView(buffer.buffer);

  const magic = decode(buffer.slice(0, 4).toString());
  const version = dataView.getUint32(4, true);
  const length = dataView.getUint32(8, true);

  const jsonLength = dataView.getUint32(12, true);
  const jsonData = decode(buffer.slice(20, 20 + jsonLength).toString());

  return {
    magic,
    version,
    length,
    json: JSON.parse(jsonData),
  };
}

export async function getGLBDataAsJSON(filePath: string): Promise<string> {
  const data = await getGLBData(filePath);
  return JSON.stringify(data, null, 2);
}

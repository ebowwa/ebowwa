// src/helpers/math/shape-rotations/types.ts
export interface Point2D {
    x: number;
    y: number;
}

export interface Point3D {
    x: number;
    y: number;
    z: number;
}

export interface Angles3D {
    x: number;
    y: number;
    z: number;
}

export type Shape2D = Point2D[];
export type Shape3D = Point3D[];

export interface BoundingBox2D {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

export interface BoundingBox3D {
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;
}

// import { Point2D, Point3D, Angles3D, Shape2D, Shape3D, BoundingBox2D, BoundingBox3D } from './types';

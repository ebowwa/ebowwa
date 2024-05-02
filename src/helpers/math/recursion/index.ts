/**
 * Represents a node in a recursive tree structure.
 */
interface TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
}

/**
 * Traverses a tree recursively using depth-first search (DFS).
 * @param node The root node of the tree.
 * @param callback The callback function to be executed for each node.
 */
export function dfsTraversal<T>(node: TreeNode<T>, callback: (node: TreeNode<T>) => void): void {
    callback(node);
    for (const child of node.children) {
        dfsTraversal(child, callback);
    }
}

/**
 * Traverses a tree recursively using breadth-first search (BFS).
 * @param node The root node of the tree.
 * @param callback The callback function to be executed for each node.
 */
export function bfsTraversal<T>(node: TreeNode<T>, callback: (node: TreeNode<T>) => void): void {
    const queue: TreeNode<T>[] = [node];
    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        callback(currentNode);
        queue.push(...currentNode.children);
    }
}

/**
 * Represents a node in a recursive graph structure.
 */
interface GraphNode<T> {
    value: T;
    neighbors: GraphNode<T>[];
}

/**
 * Traverses a graph recursively using depth-first search (DFS).
 * @param node The starting node of the graph.
 * @param visited A set of visited nodes.
 * @param callback The callback function to be executed for each node.
 */
export function dfsGraphTraversal<T>(
    node: GraphNode<T>,
    visited: Set<GraphNode<T>>,
    callback: (node: GraphNode<T>) => void
): void {
    if (visited.has(node)) return;
    visited.add(node);
    callback(node);
    for (const neighbor of node.neighbors) {
        dfsGraphTraversal(neighbor, visited, callback);
    }
}

/**
 * Traverses a graph recursively using breadth-first search (BFS).
 * @param node The starting node of the graph.
 * @param callback The callback function to be executed for each node.
 */
export function bfsGraphTraversal<T>(node: GraphNode<T>, callback: (node: GraphNode<T>) => void): void {
    const queue: GraphNode<T>[] = [node];
    const visited = new Set<GraphNode<T>>();
    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        callback(currentNode);
        queue.push(...currentNode.neighbors);
    }
}

/**
 * Represents a recursive Fibonacci sequence.
 * @param n The index of the Fibonacci number to compute.
 * @returns The Fibonacci number at the specified index.
 */
export function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Represents a recursive factorial function.
 * @param n The number to compute the factorial of.
 * @returns The factorial of the specified number.
 */
export function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

/**
 * Represents a recursive fractal structure.
 * @param node The root node of the fractal.
 * @param depth The current depth of the fractal.
 * @param maxDepth The maximum depth of the fractal.
 * @param callback The callback function to be executed for each node.
 */
export function fractalTraversal<T>(
    node: TreeNode<T>,
    depth: number,
    maxDepth: number,
    callback: (node: TreeNode<T>, depth: number) => void
): void {
    callback(node, depth);
    if (depth < maxDepth) {
        for (const child of node.children) {
            fractalTraversal(child, depth + 1, maxDepth, callback);
        }
    }
}

/**
 * Represents a recursive Lindenmayer system (L-system).
 * @param axiom The initial string of the L-system.
 * @param rules The production rules of the L-system.
 * @param iterations The number of iterations to perform.
 * @returns The final string of the L-system.
 */
export function lSystem(axiom: string, rules: { [key: string]: string }, iterations: number): string {
    if (iterations === 0) {
        return axiom;
    }
    let result = '';
    for (const char of axiom) {
        if (rules[char]) {
            result += rules[char];
        } else {
            result += char;
        }
    }
    return lSystem(result, rules, iterations - 1);
}

/**
 * Represents a recursive Lindenmayer system (L-system) in 3D.
 * @param axiom The initial string of the L-system.
 * @param rules The production rules of the L-system.
 * @param iterations The number of iterations to perform.
 * @param scene The Three.js scene to add the L-system to.
 * @param position The starting position of the L-system.
 * @param direction The starting direction of the L-system.
 * @param length The length of each segment in the L-system.
 * @param radius The radius of each segment in the L-system.
 */
import * as THREE from 'three';

export function lSystem3D(
    axiom: string,
    rules: { [key: string]: string },
    iterations: number,
    scene: THREE.Scene,
    position: THREE.Vector3,
    direction: THREE.Vector3,
    length: number,
    radius: number
): void {
    if (iterations === 0) {
        return;
    }
    for (const char of axiom) {
        if (rules[char]) {
            const newDirection = new THREE.Vector3().copy(direction);
            switch (char) {
                case 'F':
                    const geometry = new THREE.CylinderGeometry(radius, radius, length, 8);
                    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                    const cylinder = new THREE.Mesh(geometry, material);
                    cylinder.position.copy(position);
                    cylinder.rotation.copy(new THREE.Euler().setFromVector3(direction));
                    scene.add(cylinder);
                    position.add(direction.clone().multiplyScalar(length));
                    break;
                case '+':
                    newDirection.applyAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 4);
                    direction.copy(newDirection);
                    break;
                case '-':
                    newDirection.applyAxisAngle(new THREE.Vector3(0, 0, 1), -Math.PI / 4);
                    direction.copy(newDirection);
                    break;
                case '[':
                    lSystem3D(rules[char], rules, iterations - 1, scene, position.clone(), direction.clone(), length, radius);
                    break;
                case ']':
                    lSystem3D(rules[char], rules, iterations - 1, scene, position.clone(), direction.clone(), length, radius);
                    break;
            }
        }
    }
}
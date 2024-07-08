"use client"
import p5 from 'p5';

export class Vector {
  private vector: p5.Vector;
  private p5: p5;

  constructor(x: number, y: number, p5: p5) {
    this.p5 = p5;
    this.vector = p5.createVector(x, y);
  }

  get x(): number {
    return this.vector.x;
  }

  set x(value: number) {
    this.vector.x = value;
  }

  get y(): number {
    return this.vector.y;
  }

  set y(value: number) {
    this.vector.y = value;
  }

  add(other: Vector): Vector {
    this.vector.add(other.vector);
    return this;
  }

  sub(other: Vector): Vector {
    this.vector.sub(other.vector);
    return this;
  }

  mult(scalar: number): Vector {
    this.vector.mult(scalar);
    return this;
  }

  div(scalar: number): Vector {
    this.vector.div(scalar);
    return this;
  }

  normalize(): Vector {
    this.vector.normalize();
    return this;
  }

  limit(max: number): Vector {
    this.vector.limit(max);
    return this;
  }

  heading(): number {
    return this.vector.heading();
  }

  dist(other: Vector): number {
    return this.vector.dist(other.vector);
  }

  copy(): Vector {
    return new Vector(this.x, this.y, this.p5);
  }

  mag(): number {
    return this.vector.mag();
  }
}

export class Flock {
  boids: Boid[];
  p5: p5;

  constructor(p5: p5) {
    this.boids = [];
    this.p5 = p5;
  }

  run(p5: p5) {
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].run(this.boids, p5);
    }
  }

  addBoid(b: Boid) {
    this.boids.push(b);
  }
}

export class Boid {
  acceleration: Vector;
  velocity: Vector;
  position: Vector;
  r: number;
  maxspeed: number;
  maxforce: number;
  boidCounter: number;
  p5: p5;

  constructor(x: number, y: number, p5: p5) {
    this.p5 = p5;
    this.acceleration = new Vector(0, 0, p5);
    this.velocity = new Vector(p5.random(-1, 1), p5.random(-1, 1), p5);
    this.position = new Vector(x, y, p5);
    this.r = 3.0;
    this.maxspeed = 3;
    this.maxforce = 0.05;
    this.boidCounter = 1;
  }

  run(boids: Boid[], p5: p5) {
    this.flock(boids, p5);
    this.update();
    this.borders(p5);
    this.render(p5);
  }

  applyForce(force: Vector) {
    this.acceleration.add(force);
  }

  flock(boids: Boid[], p5: p5) {
    let sep = this.separate(boids, p5);
    let ali = this.align(boids, p5);
    let coh = this.cohesion(boids, p5);
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  seek(target: Vector, p5: p5) {
    let desired = target.copy().sub(this.position);
    desired.normalize();
    desired.mult(this.maxspeed);
    let steer = desired.sub(this.velocity);
    steer.limit(this.maxforce);
    return steer;
  }

  render(p5: p5) {
    let theta = this.velocity.heading() + p5.radians(90);
    if (this.boidCounter === 1) {
      p5.fill("#63bb00");
      p5.stroke("#63bb00");
    } else {
      p5.fill(168, 96);
      p5.stroke(168, 96);
    }
    p5.push();
    p5.translate(this.position.x, this.position.y);
    p5.rotate(theta);
    p5.beginShape();
    p5.vertex(0, -this.r * 4.0);
    p5.vertex(-this.r, this.r * 1.5);
    p5.vertex(this.r, this.r * 1.5);
    p5.endShape(p5.CLOSE);
    p5.pop();
  }

  borders(p5: p5) {
    if (this.position.x < -this.r) this.position.x = p5.width + this.r;
    if (this.position.y < -this.r) this.position.y = p5.height + this.r;
    if (this.position.x > p5.width + this.r) this.position.x = -this.r;
    if (this.position.y > p5.height + this.r) this.position.y = -this.r;
  }

  separate(boids: Boid[], p5: p5) {
    let desiredseparation = 20.0;
    let steer = new Vector(0, 0, p5);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = this.position.dist(boids[i].position);
      if ((d > 0) && (d < desiredseparation)) {
        let diff = this.position.copy().sub(boids[i].position);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
      }
    }
    if (count > 0) {
      steer.div(count);
    }
    if (steer.mag() > 0) {
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }

  align(boids: Boid[], p5: p5) {
    let neighbordist = 40;
    let sum = new Vector(0, 0, p5);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = this.position.dist(boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = sum.sub(this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return new Vector(0, 0, p5);
    }
  }

  cohesion(boids: Boid[], p5: p5) {
    let neighbordist = 50;
    let sum = new Vector(0, 0, p5);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = this.position.dist(boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].position);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum, p5);
    } else {
      return new Vector(0, 0, p5);
    }
  }
}
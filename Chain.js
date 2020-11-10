class Chain {
    constructor(bodyA, bodyB) {
        var options =
        {
            bodyA: bird.body,
            bodyB: constrainedLog.body,
            stiffness: 0.4,
            length: 10
        }
        this.chain = Constraint.create(options);
        console.log(this.chain);
        World.add(world, this.chain);
    }
    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(4)
        line(posA.x, posA.y, posB.x, posB.y);
    }

}
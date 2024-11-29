class Particle {
    constructor(nDimensi, objFunction) {
        this.objFunction = objFunction;
        this.nDimensi = nDimensi;
        this.position = Array(nDimensi).fill(0);
        this.velocity = Array(nDimensi).fill(0);
        this.pbest = Array(nDimensi).fill(0);
        this.pbestFitness = 0;
        this.fitness = 0;
    }

    inisialisasiPosisi(min, max) {
        for (let i = 0; i < this.nDimensi; i++) {
            this.position[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            this.velocity[i] = 0; // Velocity juga dirandom
            this.pbest[i] = this.position[i];
        }
    }
    

    calculateFitness() {
        // Pastikan pemanggilan menggunakan 'prosesorIndex'
        this.fitness = this.objFunction(this.position[0], this.position[1], this.position[2], this.position[3]);
        console.log(`Posisi: ${this.position}, Fitness: ${this.fitness}`);
    }
    

    updatePbest() {
        if (this.fitness > this.pbestFitness) {
            this.pbestFitness = this.fitness;
            this.pbest = [...this.position];
        }
    }

    updatePosition() {
        for (let i = 0; i < this.nDimensi; i++) {
            this.position[i] += this.velocity[i];
            this.position[i] = Math.max(Math.round(this.position[i]), 0);
            this.position[i] = Math.min(this.position[i], 2); // Indeks 0, 1, atau 2
        }
    }
    
}

export { Particle };

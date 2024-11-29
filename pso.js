import { Particle } from "./particle.js";
import { performanceFunction } from './fitness.js'; // Ubah import dari `objectiveFunction` ke `performanceFunction`

class PSO {
    constructor(nParticles, nDimension) {
        this.nParticles = nParticles;
        this.particles = [];
        this.nDimension = nDimension;
        this.gbestFitness = 0;
        this.gbestPosition = Array(nDimension).fill(0);    
        this.init_particles();
    }

    init_particles() {
        for (let i = 0; i < this.nParticles; i++) {
            const particle = new Particle(this.nDimension, performanceFunction); // Gunakan performanceFunction sebagai objective function
            particle.inisialisasiPosisi(0, 2); // 0-2 untuk setiap pilihan kategori komponen
            this.particles.push(particle);
        }
    }

    evaluateFitness() {
        this.particles.forEach(particle => {
            particle.calculateFitness(); // Panggil method calculateFitness dari Particle
        });
    }

    updatePbest() {
        this.particles.forEach((particle) => {
            particle.updatePbest();
        });
    }

    updateGbest() {
        this.particles.forEach((particle) => {
            if (particle.pbestFitness > this.gbestFitness) {
                this.gbestFitness = particle.pbestFitness;
                this.gbestPosition = [...particle.pbest];
            }
        });
    }

    updateVelocity(c1 = 1, c2 = 1, w = 0.7) {
        this.particles.forEach((particle) => {
            for (let i = 0; i < this.nDimension; i++) {
                const r1 = Math.random();
                const r2 = Math.random();
                particle.velocity[i] = Math.round(
                    w * particle.velocity[i] +
                    c1 * r1 * (particle.pbest[i] - particle.position[i]) +
                    c2 * r2 * (this.gbestPosition[i] - particle.position[i])
                );
            }
        });
    }

    updatePosition() {
        this.particles.forEach((particle) => {
            for (let i = 0; i < this.nDimension; i++) {
                particle.position[i] += particle.velocity[i];
                particle.position[i] = Math.max(0, Math.min(2, Math.round(particle.position[i]))); // Batasan 0 - 2
            }
        });
    }
    

    mainPSO() {
        this.evaluateFitness();
        this.updatePbest();
        this.updateGbest();
        this.updateVelocity();
        this.updatePosition();
    }
}

export { PSO };

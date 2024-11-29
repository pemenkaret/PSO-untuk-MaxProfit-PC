function performanceFunction(prosesorIndex, gpuIndex, ramIndex, storageIndex) {
    const components = {
        processors: [
            { name: "Intel Core i7", price: 5000000, performance: 85 },
            { name: "Intel Core i5", price: 4000000, performance: 75 },
            { name: "AMD Ryzen 5", price: 3500000, performance: 70 }
        ],
        gpus: [
            { name: "NVIDIA RTX 3060", price: 6000000, performance: 90 },
            { name: "NVIDIA RTX 1660", price: 4500000, performance: 70 },
            { name: "AMD Radeon RX 570", price: 3500000, performance: 60 }
        ],
        ram: [
            { name: "32 GB", price: 2500000, performance: 80 },
            { name: "16 GB", price: 1500000, performance: 60 },
            { name: "8 GB", price: 1000000, performance: 40 }
        ],
        storage: [
            { name: "SSD 1TB", price: 3500000, performance: 90 },
            { name: "SSD 512 GB", price: 2000000, performance: 70 },
            { name: "HDD 1TB", price: 1000000, performance: 40 }
        ]
    };

    // Validasi indeks
    if (
        prosesorIndex < 0 || prosesorIndex >= components.processors.length ||
        gpuIndex < 0 || gpuIndex >= components.gpus.length ||
        ramIndex < 0 || ramIndex >= components.ram.length ||
        storageIndex < 0 || storageIndex >= components.storage.length
    ) {
        console.warn("Indeks tidak valid diberikan.");
        return 0; // Mengembalikan 0 jika indeks tidak valid
    }

    const proc = components.processors[prosesorIndex];
    const gpu = components.gpus[gpuIndex];
    const ram = components.ram[ramIndex];
    const storage = components.storage[storageIndex];

    const totalCost = proc.price + gpu.price + ram.price + storage.price;
    const totalPerformance = proc.performance + gpu.performance + ram.performance + storage.performance;

    if (totalCost > 15000000) {
        return 0; // Batasan anggaran
    }

    return totalPerformance;
}

export { performanceFunction };

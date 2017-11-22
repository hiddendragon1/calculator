import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1, name: 'Mr. Nice',provider: "VeryNice",email: "mrnice@gmail.com",phone:"6699113842" },
      { id: 2, name: 'Narco',provider: "Narco",email: "Narco@gmail.com",phone:"6699113842"  },
      { id: 3, name: 'Bombasto',provider: "Bombasto",email: "Bombasto@gmail.com",phone:"6699113842"  },
      { id: 4, name: 'Celeritas',provider: "Celeritas",email: "Celeritas@gmail.com",phone:"6699113842"  }
    ];
    return {contacts};
  }
}
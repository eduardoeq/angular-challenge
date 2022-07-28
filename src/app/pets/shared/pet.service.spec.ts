import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pet } from 'src/app/interfaces/pet';

import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
  HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list from api by status', waitForAsync(() => {
    const mockedApi: Pet[] = [];

    for (let obj of promisedData) {
      const data: any = obj;
      const pet: Pet = data;
      mockedApi.push(pet);
    }

    const status = 'pending';
    const mockedResult = mockedApi.filter( pet => pet.status === status);
    spyOn(service, 'getListByStatus').and.returnValue(Promise.resolve(mockedResult));

    service.getListByStatus(status).then((result) => {
      expect(service.getListByStatus).toHaveBeenCalledWith(status);
      expect(result).toEqual(mockedResult);
    });
  }));

  it('should create pet', waitForAsync(() => {
    const mockedApi: Pet[] = [];

    for (let obj of promisedData) {
      const data: any = obj;
      const pet: Pet = data;
      mockedApi.push(pet);
    }

    const mockedApiOldLength = mockedApi.length;

    const mockedPet: Pet = {
      id: mockedApi.length,
      name: "Max",
      photoUrls: ['url1'],
      status: "available",
    }

    function mockCreatePet(pet: Pet): Pet {
      mockedApi.push(pet)
      return pet;
    }
    
    spyOn(service, 'createPet').and.returnValue(Promise.resolve(mockCreatePet(mockedPet)));

    service.createPet(mockedPet).then(() => {
      expect(service.createPet).toHaveBeenCalled();
      expect(mockedApi.length).toBe(mockedApiOldLength + 1);
    });
  }));
  
  const promisedData = [
    {
        "id": 1,
        "category": {
            "id": 2,
            "name": "Cats"
        },
        "name": "Cat 1",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag1"
            },
            {
                "id": 2,
                "name": "tag2"
            }
        ],
        "status": "available"
    },
    {
        "id": 2,
        "category": {
            "id": 2,
            "name": "Cats"
        },
        "name": "Cat 2",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag2"
            },
            {
                "id": 2,
                "name": "tag3"
            }
        ],
        "status": "available"
    },
    {
        "id": 4,
        "category": {
            "id": 1,
            "name": "Dogs"
        },
        "name": "Dog 1",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag1"
            },
            {
                "id": 2,
                "name": "tag2"
            }
        ],
        "status": "available"
    },
    {
        "id": 7,
        "category": {
            "id": 4,
            "name": "Lions"
        },
        "name": "Lion 1",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag1"
            },
            {
                "id": 2,
                "name": "tag2"
            }
        ],
        "status": "available"
    },
    {
        "id": 8,
        "category": {
            "id": 4,
            "name": "Lions"
        },
        "name": "Lion 2",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag2"
            },
            {
                "id": 2,
                "name": "tag3"
            }
        ],
        "status": "available"
    },
    {
        "id": 9,
        "category": {
            "id": 4,
            "name": "Lions"
        },
        "name": "Lion 3",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag3"
            },
            {
                "id": 2,
                "name": "tag4"
            }
        ],
        "status": "available"
    },
    {
        "id": 10,
        "category": {
            "id": 3,
            "name": "Rabbits"
        },
        "name": "Rabbit 1",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag3"
            },
            {
                "id": 2,
                "name": "tag4"
            }
        ],
        "status": "available"
    },
    {
        "id": 11,
        "name": "Billy",
        "photoUrls": [
            "https://img.freepik.com/premium-photo/golden-retriever-dog-sitting-panting_191971-7865.jpg?w=2000"
        ],
        "tags": [],
        "status": "available"
    },
    {
        "id": 3,
        "category": {
            "id": 2,
            "name": "Cats"
        },
        "name": "Cat 3",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag3"
            },
            {
                "id": 2,
                "name": "tag4"
            }
        ],
        "status": "pending"
    },
    {
        "id": 6,
        "category": {
            "id": 1,
            "name": "Dogs"
        },
        "name": "Dog 3",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag3"
            },
            {
                "id": 2,
                "name": "tag4"
            }
        ],
        "status": "pending"
    },
    {
        "id": 5,
        "category": {
            "id": 1,
            "name": "Dogs"
        },
        "name": "Dog 2",
        "photoUrls": [
            "url1",
            "url2"
        ],
        "tags": [
            {
                "id": 1,
                "name": "tag2"
            },
            {
                "id": 2,
                "name": "tag3"
            }
        ],
        "status": "sold"
    }
  ];

});
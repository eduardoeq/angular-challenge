import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { PetService } from '../shared/pet.service';

import { CreatePetComponent } from './create-pet.component';

describe('CreatePetComponent', () => {
  let component: CreatePetComponent;
  let fixture: ComponentFixture<CreatePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePetComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [PetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active status', () => {
    for (let option in component.statusOptions) {
      component.setActiveStatus(option);
      expect(component.pet.status).toBe(option);
    }
  });

  it('should add photo urls to pet.photoUrls', () => {
    const currentNumberOfUrls: number = component.pet.photoUrls.length;
    const numberOfPhotoUrlsToBeAdded: number = Math.floor(Math.random() * 10);

    for (let i = 0; i < numberOfPhotoUrlsToBeAdded; i++) {
      component.addPhotoUrl();
    }

    expect(component.pet.photoUrls.length).toBe(currentNumberOfUrls + numberOfPhotoUrlsToBeAdded);
  });

  it('should delete the correct url from pet.photoUrls', () => {
    component.addPhotoUrl();
    component.addPhotoUrl();
    component.addPhotoUrl();
    component.addPhotoUrl();

    expect(component.pet.photoUrls.length).toBe(5);

    component.pet.photoUrls[0] = 'url0';
    component.pet.photoUrls[1] = 'url1';
    component.pet.photoUrls[2] = 'url1';
    component.pet.photoUrls[3] = 'url1';
    component.pet.photoUrls[4] = 'url2';

    component.deletePhotoUrl(2);
    expect(component.pet.photoUrls.length).toBe(4);
    expect(component.pet.photoUrls[0]).toBe('url0');
    expect(component.pet.photoUrls[1]).toBe('url1');
    expect(component.pet.photoUrls[2]).toBe('url1');
    expect(component.pet.photoUrls[3]).toBe('url2');

    component.deletePhotoUrl(2);
    expect(component.pet.photoUrls.length).toBe(3);
    expect(component.pet.photoUrls[0]).toBe('url0');
    expect(component.pet.photoUrls[1]).toBe('url1');
    expect(component.pet.photoUrls[2]).toBe('url2');
  });

  it('should click Add photo URL button', waitForAsync(() => {
    const addPhotoUrlButtonElement = fixture.debugElement.query(By.css('#add-photo-button'));

    addPhotoUrlButtonElement.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(component.pet.photoUrls.length).toBe(2);
    });
  }));

  it('should click the correct delete photo URL button', waitForAsync(() => {
    for(let i = 0; i < 3; i++) {
      component.addPhotoUrl();
    }
    fixture.detectChanges();

    component.pet.photoUrls[0] = 'url0';
    component.pet.photoUrls[1] = 'url1';
    component.pet.photoUrls[2] = 'url2';
    component.pet.photoUrls[3] = 'url3';

    expect(component.pet.photoUrls.length).toBe(4);
    expect(component.pet.photoUrls[0]).toBe('url0');
    expect(component.pet.photoUrls[1]).toBe('url1');
    expect(component.pet.photoUrls[2]).toBe('url2');
    expect(component.pet.photoUrls[3]).toBe('url3');

    let deleteButton = fixture.debugElement.query(By.css('#delete-photo-button-1'));
    deleteButton.triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      expect(component.pet.photoUrls.length).toBe(3);
      expect(component.pet.photoUrls[0]).toBe('url0');
      expect(component.pet.photoUrls[1]).toBe('url2');
      expect(component.pet.photoUrls[2]).toBe('url3');
    });
  }));

  it('should be able to click Create Pet button', waitForAsync(() => {
    spyOn(component, 'onSubmit');

    fixture.whenStable().then(() => {
      const usernameInput = fixture.debugElement.query(By.css('#username-input'));
      usernameInput.nativeElement.value = "Billy";
      usernameInput.nativeElement.dispatchEvent(new Event('input'));
      
      const fistPhotoUrlInput = fixture.debugElement.query(By.css('#photo-url-input-0'));
      fistPhotoUrlInput.nativeElement.value = "url1";
      fistPhotoUrlInput.nativeElement.dispatchEvent(new Event('input'));

      if(component.validateForm()) {
        const createPetButton = fixture.debugElement.query(By.css('#create-pet-button'));
        createPetButton.nativeElement.disabled = false;
        createPetButton.nativeElement.click();
      }
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));

  it('should NOT be able to click Create Pet button', waitForAsync(() => {
    spyOn(component, 'onSubmit');

    fixture.whenStable().then(() => {
      if(component.validateForm()) {
        const createPetButton = fixture.debugElement.query(By.css('#create-pet-button'));
        createPetButton.nativeElement.disabled = false;
        createPetButton.nativeElement.click();
      }
      expect(component.onSubmit).toHaveBeenCalledTimes(0);
    });
  }));
});

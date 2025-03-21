import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPrivacyPolicyComponent } from './english-privacy-policy.component';

describe('EnglishPrivacyPolicyComponent', () => {
  let component: EnglishPrivacyPolicyComponent;
  let fixture: ComponentFixture<EnglishPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishPrivacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanPrivacyPolicyComponent } from './german-privacy-policy.component';

describe('GermanPrivacyPolicyComponent', () => {
  let component: GermanPrivacyPolicyComponent;
  let fixture: ComponentFixture<GermanPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanPrivacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GermanPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

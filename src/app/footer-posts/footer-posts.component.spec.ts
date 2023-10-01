import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPostsComponent } from './footer-posts.component';

describe('FooterPostsComponent', () => {
  let component: FooterPostsComponent;
  let fixture: ComponentFixture<FooterPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPostsComponent]
    });
    fixture = TestBed.createComponent(FooterPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

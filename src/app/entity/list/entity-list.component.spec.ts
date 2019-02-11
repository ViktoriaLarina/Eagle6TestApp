import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListComponent } from './entity-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {EntityService} from '@common/services/entity.service';
import {MapKeysPipe} from '@common/pipes/map-keys.pipe';


describe('MainComponent', () => {
  let component: EntityListComponent;
  let fixture: ComponentFixture<EntityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityListComponent ],
      providers: [
        EntityService
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        FormsModule,
        RouterTestingModule,
        MapKeysPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

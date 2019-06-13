import { async, TestBed } from '@angular/core/testing';
import { DetailsOrdenComponent } from './details-orden.component';
describe('DetailsOrdenComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsOrdenComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsOrdenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=details-orden.component.spec.js.map
import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective  implements AfterViewInit, OnDestroy{

  @Output() inView: EventEmitter<boolean> = new EventEmitter();

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    // Erstellen des IntersectionObservers, der überwacht, ob das Element sichtbar wird.
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Sende true, wenn das Element sichtbar (intersecting) ist, sonst false
          this.inView.emit(entry.isIntersecting);
        });
      },
      { threshold: 1.0 } // 10% Sichtbarkeit als Auslösepunkt
    );
    // Startet das Beobachten des Elements
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // Wichtig: Stoppen Sie den Observer, wenn die Direktive zerstört wird, um Speicherlecks zu vermeiden.
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}

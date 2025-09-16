import type { RippleType } from './type';
import { writable, type Writable } from 'svelte/store';

export class RippleStore {
  #store: Writable<RippleType[]> = writable<RippleType[]>([]);

  get subscribe() {
    return this.#store.subscribe;
  }

  add(ripple: RippleType) {
    this.#store.update((r) => [...r, ripple]);

    const timeoutId = setTimeout(() => {
      this.#store.update((r) => r.filter((x) => x.key !== ripple.key));
    }, 2000);

    return () => clearTimeout(timeoutId)
  }

  onCreateRipples = (event: MouseEvent) => {
	const button = event.currentTarget as HTMLElement;
	const rect = button.getBoundingClientRect();
	const size = Math.max(rect.width, rect.height);
	const x = event.clientX - rect.left - size / 2;
	const y = event.clientY - rect.top - size / 2;

	const newRipple: RippleType = { x, y, size, key: Date.now() };

	return this.add(newRipple)
};
}

export const rippleStore = () => Object.freeze(new RippleStore())
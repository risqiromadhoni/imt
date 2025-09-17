<script lang="ts">
	import type { RippleType } from "./type";
  
  interface Props {
    ripples: RippleType[]
    /** @default "currentColor" */
    rippleColor?: string;
  }

  let { ripples, rippleColor = "currentColor" }: Props = $props()
</script>

<span class="pointer-events-none absolute inset-0">
    {#each ripples as ripple (ripple.key)}
        <span
        class="absolute animate-rippling rounded-full bg-background opacity-30"
        style="
            width: {ripple.size}px;
            height: {ripple.size}px;
            top: {ripple.y}px;
            left: {ripple.x}px;
            background-color: {rippleColor};
            transform : scale(0);
        "
        ></span>
    {/each}
</span>
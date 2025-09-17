<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    import ChevronDown from '@lucide/svelte/icons/chevron-down';

	let { children } = $props();
</script>

<main class="w-full min-h-screen flex flex-col">
    <header class="container mx-auto bg-white py-4">
        <div class="grid grid-cols-2 md:grid-cols-6 justify-center items-center gap-4">
            <div>
                Logo
            </div>
            <Button size="lg" variant="outline" class="md:hidden">
                Menu
            </Button>
            <nav class="flex-1 col-span-2 md:col-span-4">
                <ul class="flex flex-col md:flex-row flex-wrap justify-center items-center">
                    <li>
                        <Button href="/" variant="link" size="lg">Home</Button>
                    </li>
                    <li>
                        <Button variant="link" size="lg">About Us</Button>
                    </li>
                    <li>
                        <Button variant="link" size="lg" class="group">
                            Services
                            <ChevronDown class="size-4 group-hover:rotate-180 transition-all duration-300" />
                        </Button>
                    </li>
                    <li>
                        <Button variant="link" size="lg">Blogs</Button>
                    </li>
                    <li>
                        <Button variant="link" size="lg">Contact</Button>
                    </li>
                </ul>
            </nav>
            <Button size="lg" class="col-span-2 md:col-span-1">
                Get In Touch
            </Button>
        </div>
    </header>
    {@render children?.()}
</main>

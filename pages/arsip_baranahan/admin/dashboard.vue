<template>
    <header class="bg-gray-800 text-white ">
        <div class="container mx-auto px-3 py-3 flex justify-between ">
            <!-- Logo -->
            <div class=" flex items-center gap-3 text-2xl font-bold">
                <NuxtLink to="/">
                    <img src="~/assets/img/kemhan.png" alt="Discover Nuxt 3" height="50px" width="50px" />
                </NuxtLink>
                <span>ARSIP BARANAHAN</span>
            </div>

            <!-- Desktop Navigation Links -->
            <nav class="hidden md:flex space-x-6 font-bold justify-between ">
                <NuxtLink to="/arsip_baranahan/admin/dashboard" class="nav-link-menu">DASHBOARD</NuxtLink>
                <NuxtLink to="/about" class="nav-link-menu">About</NuxtLink>
                <NuxtLink to="/services" class="nav-link-menu">Services</NuxtLink>
                <OverlayBadge value="9">
                    <!-- <i class="pi pi-bell" style="font-size: 2rem" /> -->
                    <!-- <NuxtLink to="/contact" class="nav-link-menu">INBOX</NuxtLink> -->
                    <Icon name="uil:github" style="color: white" class="h-10 w-10" size="small" />
                    <span class="icon-[mdi--view-dashboard]"></span>

                </OverlayBadge>
            </nav>

            <!-- Mobile Burger Menu Button -->
            <button @click="toggleMenu" class="md:hidden focus:outline-none">
                <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation Links -->
        <div v-if="isMenuOpen" class="md:hidden bg-gray-700">
            <nav class="px-4 py-2 space-y-2">
                <NuxtLink to="/" class="block py-2 rounded nav-link-menu">Home</NuxtLink>
                <NuxtLink to="/about" class="block py-2 nav-link-menu rounded">About</NuxtLink>
                <NuxtLink to="/services" class="block py-2 nav-link-menu rounded">Services</NuxtLink>
                <NuxtLink to="/contact" class="block py-2 nav-link-menu rounded">Contact</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>
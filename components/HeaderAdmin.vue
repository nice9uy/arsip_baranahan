<template>
    <header class="bg-gray-800 text-white ">
        <div class="mx-auto px-2 py-2 flex justify-between ">
            <!-- Logo -->
            <div class=" flex items-center gap-3 text-2xl mx-3 font-semibold">
                <NuxtLink to="/">
                    <img src="~/assets/img/kemhan.png" alt="Discover Nuxt 3" height="50px" width="50px" />
                </NuxtLink>
                <span>ARSIP BARANAHAN</span>
            </div>

            <!-- Desktop Navigation Links -->
            <nav class="hidden md:flex space-x-4 mt-2 mx-3 font-bold  justify-between ">

                <OverlayBadge value="9">
                    <NuxtLink to="/arsip_baranahan/admin/dashboard/">
                        <button>
                            <Icon name="ic:baseline-dashboard" style="color: white" class="h-9 w-9"
                                v-tooltip.bottom="'Dashboard'" />
                        </button>
                    </NuxtLink>
                </OverlayBadge>

                <OverlayBadge value="9">
                    <NuxtLink to="/arsip_baranahan/admin/surat_masuk/">
                        <button>
                            <Icon name="solar:inbox-in-bold" style="color: white" class="h-9 w-9"
                                v-tooltip.bottom="'Surat Masuk'" />
                        </button>
                    </NuxtLink>
                </OverlayBadge>

                <OverlayBadge value="9">
                    <NuxtLink to="/arsip_baranahan/admin/dashboard/">
                        <button>
                            <Icon name="solar:inbox-out-bold" style="color: white" class="h-9 w-9"
                                v-tooltip.bottom="'Surat Keluar'" />
                        </button>
                    </NuxtLink>
                </OverlayBadge>

                        
                <OverlayBadge value="9">
                    <NuxtLink to="/arsip_baranahan/admin/dashboard/">
                        <button>
                            <Icon name="charm:notes-tick" style="color: white" class="h-9 w-9"
                                v-tooltip.bottom="'Disposisi'" />
                        </button>
                    </NuxtLink>
                </OverlayBadge>

                <button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
                    <Icon name="mage:user-circle-fill" style="color: white" class="h-10 w-10"
                        v-tooltip.bottom="'User'" />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" ></Menu>
                </button>

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

<script setup>

import 'primeicons/primeicons.css';
import { ref } from "vue";

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-asterisk'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);
  
const toggle = (event) => {
    menu.value.toggle(event);
};


</script>
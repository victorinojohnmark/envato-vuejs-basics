<template>
    <nav :class="[`navbar-${theme}`,`bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li >
                    
                </li>
                <navbar-link v-for="(page, index) in publishedPages" class="nav-item" 
                :page="page" 
                :index="index"
                :isActive="activePage == index" 
                @activated="$emit('activated')">
                </navbar-link>
            </ul>

            <div class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme">Toggle Night Mode</button>
            </div>
        </div>
    </nav>
</template>

<script>
    import NavbarLink from './NavbarLink.vue';

    export default {
        components: {
            NavbarLink
        },
        computed: {
            publishedPages() {
                return this.pages.filter(p => p.published);
            }
        },
        props: ['pages', 'activePage'],
        data() {
            return {
                theme: 'light',
            }
        },
        created() {
            this.getThemeSetting();
        },
        methods: {
            changeTheme() {
                // let theme = 'light';
                this.theme = this.theme == 'light' ? 'dark' : 'light';
                
                // this.theme = theme;
                this.storeThemeSetting();
            },
            storeThemeSetting() {
                localStorage.setItem('theme', this.theme);
            },
            getThemeSetting() {
                let theme = localStorage.getItem('theme')

                if(theme) {
                    this.theme = theme;
                }
            }
        }
    }
</script>
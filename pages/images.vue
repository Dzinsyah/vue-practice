<template>
    <v-layout>
    <v-container grid-list-sm fluid>
        <v-layout row wrap>
            <v-flex
            v-for="n in 12"
            :key="n"
            xs3
            d-flex
            >
            <v-card flat tile class="d-flex">
                <v-img
                :src="`https://picsum.photos/500/300?image=${n * 100 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 100 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
                >
                <template v-slot:placeholder>
                    <v-layout
                    fill-height
                    align-center
                    justify-center
                    ma-0
                    >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </template>
                </v-img>
            </v-card>
            </v-flex>
        </v-layout>
        </v-container>
    </v-layout>
</template>
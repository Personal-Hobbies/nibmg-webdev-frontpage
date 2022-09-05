<template>
    <div
        class="relative flex items-top justify-center min-h-screen bg-gray-200 sm:items-center pt-4"
    >
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
            <div class="flex items-center">
                <img
                    class="max-w-xs max-h-10"
                    src="@/assets/logo/nibmg_logo.png"
                    alt="National Institute of Biomedical Genomics, Logo"
                />
                <div class="ml-2 text-3xl font-bold text-blue-900">
                    Web Development
                </div>
            </div>
            <div
                class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"
                v-for="(content, index) in contents"
                :key="index"
            >
                <h2 class="text-2xl leading-7 font-semibold">
                    {{ content.name }}
                </h2>
                <p class="mt-3 text-gray-600">{{ content.summary }}<br /></p>
                <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
                    <a :href="content.url">
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            To get started
                            <svg
                                aria-hidden="true"
                                class="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        contents: [
            {
                name: "dbGENVOC",
                summary:
                    "dbGENVOC, a comprehensive, flexible database framework, developed with an aim to allow potential users to access, query, browse and download clinically relevant somatic and germline variation data from Indian oral cancer patients.",
                url: "https://research.nibmg.ac.in/dbcares",
            },
            {
                name: "INSACOG DataHub",
                summary:
                    "INSACOG DataHub developed & maintained at National Institute of Biomedical Genomics is an effort to store and analyze the whole genome sequence of SARS-CoV-2.",
                url: "https://research.nibmg.ac.in/insacog",
            },
        ],
    }),
};
</script>

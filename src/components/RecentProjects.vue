<template>
  <section
    id="recent-projects"
    class="hide-overflow"
  >
    <v-layout wrap>
      <v-flex
        xs12
        md6
        primary
        text-xs-center
        pa-5
        white--text
      >
        <base-heading>
          Recent Projects
        </base-heading>

        <base-text class="mb-5">
          I work at Siemens but I have other interests ..<br>
        </base-text>

        <v-card color="secondary">
          <v-container
            grid-list-md
            pa-2
          >
            <v-layout wrap>
              <v-flex
                v-for="project in projects"
                :key="project"
                xs12
                md6
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}.jpeg`)"
                    max-height="300"
                  />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex
        hidden-sm-and-down
        md6
      >
      // here comes a project descript respectively linkedin article
      // wrap the article as a component
        <!-- <v-img
          :src="require('@/assets/recentprojects.png')"
          height="100%"
        /> -->
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    projects: [
      'project1',
      'project2',
      'project3',
      'project4'
    ]
  })
}
</script>

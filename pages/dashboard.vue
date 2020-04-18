<template>
  <div class="wrapper">
    <SecondNav @openModal="toggleModal" />
    <div class="container mb-5">
      <ProjectModal @closeModal="toggleModal" @projectData="handleProjectData" v-show="showModal" />
      <ImageCard class="my-5" />
      <SearchBar class="my-5" />
      <h3>Projects</h3>
      <ProjectCard class="my-5" />
    </div>
  </div>
</template>

<script>
import SecondNav from '../components/navs/SecondNav'
import ImageCard from '../components/cards/ImageCard'
import SearchBar from '../components/SearchBar'
import ProjectCard from '../components/cards/ProjectCard'
import ProjectModal from '../components/modals/ProjectModal'
import { mapGetters, mapActions } from 'vuex'
const jwt = require('jsonwebtoken')

export default {
  components: {
    SecondNav,
    ImageCard,
    SearchBar,
    ProjectCard,
    ProjectModal
  },
  data() {
    return {
      showModal: false,
      JWT_SECRET: process.env.JWT_SECRET,
      userId: null
    }
  },

  computed: {
    ...mapGetters('auth', ['getToken'])
  },
  created() {
    const DECODE_JWT = jwt.verify(this.getToken, this.JWT_SECRET)
    const userId = DECODE_JWT.id
    this.userId = userId
    this.fetchUserProject(userId * 1)    
  },
  methods: {
    ...mapActions('projects', ['fetchUserProject']),
    toggleModal() {
      return (this.showModal = !this.showModal)
    },

    async handleProjectData(projectData) {
      let payload = { ...projectData, id: this.userId }

      let responseData = await this.$store.dispatch('projects/createProject', payload)

      let { status, message } = responseData

      if (status === 'success') {
        this.toggleModal()

        this.flashMessage.show({
          title: status,
          status,
          message,
          icon:
            'https://res.cloudinary.com/olacode/image/upload/v1586618462/project%20manager/success-icon_b7m2vu.webp',
          clickable: true,
          blockClass: 'flash-message-class',
          positon: 'right top',
          x: 100,
          y: 50
        })
      } else {
        this.flashMessage.show({
          title: status,
          status,
          message,
          icon:
            'https://res.cloudinary.com/olacode/image/upload/v1586073406/project%20manager/error_qcaxmt.png',
          clickable: true,
          blockClass: 'flash-message-class',
          positon: 'right top',
          x: 100,
          y: 50
        })
      }
    }
  },
  // middleware: 'authenticated'
}
</script>

<style>
.wrapper {
  background-color: #eee;
}
.imageCard {
  margin: 50px 0;
}
.flash-message-class {
  width: 350px;
  /* height: 50px; */
}
</style>

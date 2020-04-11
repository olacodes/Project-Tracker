<template>
  <div class="wrapper">
    <SecondNav @openModal="toggleModal"/>
    <div class="container mb-5">
      <ProjectModal @closeModal="toggleModal" @projectData="handleProjectData" v-show="showModal"/>
      <ImageCard class="my-5"/>
      <SearchBar class="my-5"/>
      <ProjectCard class="my-5"/>
    </div>
  </div>
</template>

<script>

import SecondNav from '../components/navs/SecondNav'
import ImageCard from '../components/cards/ImageCard'
import SearchBar from '../components/SearchBar'
import ProjectCard from '../components/cards/ProjectCard'
import ProjectModal from '../components/modals/ProjectModal'

export default {
  components: {
    SecondNav,
    ImageCard,
    SearchBar,
    ProjectCard,
    ProjectModal,
  },
  data(){
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      return this.showModal = !this.showModal
    },
    async handleProjectData(projectData){
      const {projectName} = projectData
      if (!projectName){
         this.flashMessage.show({
          title: 'Error',
          status: 'error',
          message: 'Project name cannot be empty',
          icon:'https://res.cloudinary.com/olacode/image/upload/v1586073406/project%20manager/error_qcaxmt.png',
          clickable: true,
          blockClass: 'flash-message-class',
          positon: 'right top',
          x: 100,
          y: 50
          
        })
      }
      else{

        
      }

      console.log(projectData);
      
    }
  }
}
</script>

<style>
  .wrapper{
    background-color: #eee;
  }
  .imageCard{
    margin: 50px 0;
  }
  .flash-message-class{
    width: 350px;
    /* height: 50px; */
  }
</style>
<template>
 <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Create a new project</p>
      <button class="delete is-danger button" @click="$emit('closeModal')" aria-label="close">close</button>
    </header>

    <section class="modal-card-body">

        <div class="field">
            <label class="label">Project Name</label>
            <div class="control">
                <input class="input" type="text" v-model="projectName">
            </div>
        </div>

        <div class="field">
            <label class="label">Project Description</label>
            <div class="control">
                <textarea class="textarea" v-model="projectDescription" placeholder="Briefly describe this project"></textarea>
            </div>
        </div>
    </section>

    <footer class="modal-card-foot">
      <button class="button is-primary"  @click.prevent="onCreateProject">Create Project</button>
    </footer>
      <FlashMessage position="right top"/>

  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projectName: '',
            projectDescription: ''
        }
    }, 

    methods: {
        onCreateProject(){
            const {projectName, projectDescription} = this
            const projectData = {projectName, projectDescription}            
            return this.$emit("projectData", projectData)
        }
    }

}
</script>

<style>
 .modal-content{
     /* max-width: 640px; */
 }
</style>
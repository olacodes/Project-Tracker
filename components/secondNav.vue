<template>
<div class="second-nav-container shadow-sm">
    <nav class="navbar second-nav container d-flex justify-content-between py-3">
        <div class="left-side d-flex">
            <div class="project mr-3">
            <a class="navbar-item ">
                Projects
            </a>
            </div>

            <div>
                <a class="navbar-item ">
                    Workspaces
                </a>
            </div>
            
        </div>
        
        <div>
            <button class="navbar-item button is-primary">
            create project
            </button>
        </div>
    </nav>
</div>

</template>

<script>
export default {
   
}
</script>

<style scoped>
.second-nav-container{
    background-color: white;
}
    /* .second-nav{
        margin-left: auto;
        margin-right: auto;
        max-width: 900px;
    } */
    .project {
        border-bottom: 3px solid #72f3ec;
        vertical-align: baseline;
        margin-right: 10px;
    }

</style>>

</style>
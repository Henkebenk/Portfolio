<script setup>
    import { GraduationCap } from 'lucide-vue-next';
</script>

<template>
    <div class="projects">
        <h1 class="text-3xl font-bold">Projects</h1>
        <div class="projects-container">
            <div class="project">
                <img src="../public/projects/gearguard_large.png" class="project-image-large">
                <div class="project-data">
                    <div>
                        <img src="../public/projects/gearguard.svg" class="project-image-small">
                    </div>
                    <div class="project-name">
                        <label>Gearguard</label>
                        <div title="Educational" style="height: 24px;"><GraduationCap stroke-width="1.5"/></div>
                    </div>
                </div>
            </div>
            <!-- <div class="project">
                <img src="../public/images/9.jpg" class="project-image-large">
                <div class="project-data">
                    <div>
                        <img src="../public/projects/chatapp.png" class="project-image-small">
                    </div>
                    <label>ChatApp</label>
                </div>
            </div> -->
            <div class="project">
                <img src="../public/projects/flowtrails_large.png" class="project-image-large">
                <div class="project-data">
                    <div>
                        <img src="../public/projects/flowtrails.svg" class="project-image-small">
                    </div>
                    <label>FlowTrails</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css">
    .project-name{
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: space-between;
        gap: 8px;
    }
    .chips {
        display:flex;
        flex-direction: row;
        gap:4px;
    }
    .chip {
        color: rgb(92 135 246);
        background-color: rgb(213, 213, 213);
        background-color: #7DA4FF39;
        padding:2px 6px 2px 6px;
        border-radius: 4px;
        font-size: 12px;
    }
    .projects {
        width: 100%;
        display:flex;
        flex-direction: column;
        gap:8px;
    }
    .projects-container {
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
    .project-data {
        padding:10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        z-index: 2;
        flex-grow: 1;
        gap:4px;
    }
    .project-image-large{
        height:100%;
        width:100%;
        /* filter: blur(2px); */
        -webkit-filter: blur(2px) brightness(0.8);
    -moz-filter: blur(2px) brightness(0.8);
    -ms-filter: blur(2px) brightness(0.8);
    -o-filter: blur(2px) brightness(0.8);
    filter: blur(2px) brightness(0.8);
        object-fit:cover;
        position:absolute;
        transform: scale(1.1);  
        /* opacity: 0.75; */
        /* top:0; */
    }
    .project-image-small {
        width:32px;
        height:32px;
    }
    .project {
        /* background-color: rgb(0, 0, 0); */
        height: 100px;
        overflow:hidden;
        /* padding:10px; */
        border-radius: 8px;
        display:flex;
        color:white;
        position:relative;
    }
    .project:hover {
        cursor:pointer;
    }
</style>
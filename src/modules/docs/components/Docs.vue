<template>
    <div class="columns">
        <div class="column" v-bind:class="getColumnsClass(files.length)" v-for="file in files" :key="file.id">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    {{isFile(file['.tag']) ? 'File' : 'Folder'}}
                    </p>
                    <span class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </span>
                    </span>
                </header>
                <div class="card-content">
                    <div class="content">
                        <i class="title" v-bind:class="isFile(file['.tag']) ? 'fa fa-file icons' : 'fa fa-folder icons'" aria-hidden="true"></i>
                        <p class="subtitle">{{file.name}}</p>
                    </div>
                </div>
                <footer class="card-footer">
                    <span class="card-footer-item pointer" @click="onFolderClick(file.path_lower, file['.tag'])"> View </span> 
                    <span class="card-footer-item pointer" @click="onFileDownloadLink(file.path_lower, file['.tag'])"> Download </span> 
                </footer>
            </div>
        </div>
    </div>
</template>

<script src = './Docs.js'></script>
<style lang="scss" src = './Docs.scss' scoped></style>

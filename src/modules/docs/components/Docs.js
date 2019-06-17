import {Component, Vue} from 'vue-property-decorator';
import DocService from '../services/DocService';
import router from '../../../router';

@Component
export default class Docs extends Vue {
    files = [];
    /**
     * Mount hook.
     */
    mounted() {
        window.onpopstate = this.backButton;
        this.fetchFiles(this.$route.params.filePath || null);
    }

    /**
     * Destroy the event on component destroy.
     */
    beforeDestroy() {
        window.onpopstate = undefined;
    }

    /**
     * API call to get the data. 
     * Defaults to the one without folder ID.
     */
    fetchFiles(filePath) {
        return DocService.getFiles(filePath).then(response => {
            this.files = response;
        });
    }

    /**
     * On Click of a folder.
     * @param {*} filePath 
     * @param {*} tag 
     */
    onFolderClick(filePath, tag) {
        router.push({name: 'files', params: {filePath}});
        this.fetchFiles(filePath).then(() => {
            this.$forceUpdate();
        })
    }

    /**
     * On browser back.
     */
    backButton() {
        this.fetchFiles(this.$route.params.filePath || null).then(() => {
            this.$forceUpdate();
        })
    }

    getColumnsClass(filesLength) {
        return 'is-' + (filesLength % 3 + 4); 
    }

    /**
     * On file download.
     * @param {} filePath 
     */
    onFileDownloadLink(filePath, fileTag) {
        if (fileTag === 'folder') {
            console.log('Cannot download folder');
            return;
        }
        DocService.getDownloadLink(filePath).then(response => {
            window.open(response.link, '_blank').location;
        })
    }

    /**
     * Returns if it's a file or not.
     * @param {*} tag 
     */
    isFile(tag) {
        return tag === 'file';
    }
}
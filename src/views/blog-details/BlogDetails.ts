import { Blog } from '@/store'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogDetails extends Vue {
    blogDetails: Blog | null = null
    mounted() {
        const { id } = this.$route.params
        this.blogDetails = this.$store.getters['blogDetail'](id)
    }
    goBack() {
        this.$router.go(-1)
    }
}
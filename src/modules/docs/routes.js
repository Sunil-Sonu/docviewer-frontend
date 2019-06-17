export const router = [
    {
        path: '/files/:filePath?',
        name: 'files',
        component: () => import('./components/Docs.vue'),
        props: (route) => ({ id: route.params.fullPath || '' })
    }
]
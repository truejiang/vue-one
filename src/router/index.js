import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/cover/cover'
import One from '@/components/one/one'
import OneIndex from '@/components/one/OneIndex/OneIndex'
import OneDetail from '@/components/one/oneDetail/oneDetail'
import Read from '@/components/read/read'
import ReadIndex from '@/components/read/readIndex/readIndex'
import ReadDetail from '@/components/read/readDetail/readDetail'
import Music from '@/components/music/music'
import MusicIndex from '@/components/music/musicIndex/musicIndex'
import MusicDetail from '@/components/music/musicDetail/musicDetail'
import Movie from '@/components/movie/movie'
import MovieIndex from '@/components/movie/movieIndex/movieIndex'
import MovieDetail from '@/components/movie/movieDetail/movieDetail'
import About from '@/components/about/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/one',
      component: One,
      children: [
        {
          path: '',
          name: 'OneIndex',
          component: OneIndex
        },
        {
          path: ':id',
          name: 'OneDetail',
          component: OneDetail
        }
      ]
    },
    {
      path: '/read',
      component: Read,
      children: [
        {
          path: '',
          name: 'ReadIndex',
          component: ReadIndex
        },
        {
          path: ':id',
          name: 'ReadDetail',
          component: ReadDetail
        }
      ]
    },
    {
      path: '/music',
      component: Music,
      children: [
        {
          path: '',
          name: 'MusicIndex',
          component: MusicIndex
        },
        {
          path: ':id',
          name: 'MusicDetail',
          component: MusicDetail
        }
      ]
    },
    {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: '',
          name: 'MovieIndex',
          component: MovieIndex
        },
        {
          path: ':id',
          name: 'MovieDetail',
          component: MovieDetail
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

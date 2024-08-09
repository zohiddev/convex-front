import {
  About,
  CategoryPage,
  Home,
  NewPage,
  NewsPage,
  ProductPage,
  CartPage,
} from '../pages'
import Contacts from '../pages/contacts'

export const router = [
  {
    id: 1,
    path: '/',
    component: <Home />,
  },
  {
    id: 2,
    path: '/about',
    component: <About />,
  },
  {
    id: 3,
    path: '/cart',
    component: <CartPage />,
  },
  {
    id: 4,
    path: '/category',
    component: <CategoryPage />,
  },
  {
    id: 5,
    path: '/contacts',
    component: <Contacts />,
  },
  {
    id: 6,
    path: '/news',
    component: <NewsPage />,
  },
  {
    id: 7,
    path: '/news/:id',
    component: <NewPage />,
  },
  {
    id: 8,
    path: '/product',
    component: <ProductPage />,
  },
]

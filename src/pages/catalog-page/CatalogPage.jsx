import styles from './CatalogPage.module.scss'
import { CatalogItem } from '@modules/catalog/components/catalog-item/CatalogItem'
import { CatalogItemList } from '@modules/catalog/components/catalog-items-list/CatalogItemList'
import { Modal } from '../../components/modal/Modal'
import { useState } from 'react'
import {Button} from '@components/elements/button/Button'
import { OrderModal } from '../../modules/order/order-form/OrderForm'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url => axios.get(url).then(res => res.data))

const data = [
    {
      id: "1",
      name: "lorem",
      image_url:
        "https://volgograd.karnavaltk.ru/wa-data/public/shop/products/04/webp/56/33/23356/images/36340/36340.970x0.webp",
      price: {
        value: 1100,
      },
    },
  
    {
      id: "2",
      name: "lorem2",
      image_url:
        "https://volgograd.karnavaltk.ru/wa-data/public/shop/products/04/webp/56/33/23356/images/36340/36340.970x0.webp",
      price: {
        value: 1100,
      },
    },
    {
      id: "3",
      name: "lorem3",
      image_url:
        "https://volgograd.karnavaltk.ru/wa-data/public/shop/products/04/webp/56/33/23356/images/36340/36340.970x0.webp",
      price: {
        value: 1100,
      },
    },
  ];
export function CatalogPage(props) {
    const { data, error, isLoading } = useSWR("http://188.233.11.6:50000/products/", fetcher);
    const [isOpen,setIsOpen] = useState(false);
    const onCloseModal = () => {
        setIsOpen(false);
      };
    
      const onShowModal = () => {
        setIsOpen(true);
      };
    return <div className={styles.catalogPage}>
        <h3>
            Каталог
        </h3>
         <CatalogItemList data = {data} extraForItem={<Button onClick = {onShowModal}> Заказать </Button>} isLoading = {isLoading}/>
         <OrderModal isOpen={isOpen} onClose={onCloseModal} onSuccess = {onCloseModal}/>
    </div>
   
  }
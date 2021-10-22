import Breadcrumbs from 'components/Breadcrumbs'
import Cart from 'parts/CartPage/Cart'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import React from 'react'

export default function CartPage() {
    return (
        <>
            <Header />
            <Breadcrumbs list={
                [
                    {"url":"/", "name":"Home"},
                    {"url":"/", "name":"Shopping Cart"}
                ]
            } />
            <Cart />
            <Footer />
        </>
    )
}

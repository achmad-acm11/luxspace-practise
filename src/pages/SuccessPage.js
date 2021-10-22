import Breadcrumbs from 'components/Breadcrumbs'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import Success from 'parts/SuccessPage/Success'
import React from 'react'

export default function SuccessPage() {
    return (
        <>
            <Header />
            <Breadcrumbs list={
                [
                    {"url":"/","name":"Home"},
                    {"url":"/","name":"Shopping Cart"}
                ]
            } />
            <Success />
            <Footer />
        </>
    )
}

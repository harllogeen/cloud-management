import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul className='py-1'>Marketing</ul>
                    <ul className='py-1'>Analytics</ul>
                    <ul className='py-1'>Commerce</ul>
                    <ul className='py-1'>Data</ul>
                    <ul className='py-1'>Cloud</ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul className='py-1'>Pricing</ul>
                    <ul className='py-1'>Documentation</ul>
                    <ul className='py-1'>Guides</ul>
                    <ul className='py-1'>Api Status</ul>

                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Company</h6>
                    <ul className='py-1'>About</ul>
                    <ul className='py-1'>Blog</ul>
                    <ul className='py-1'>Jobs</ul>
                    <ul className='py-1'>Press</ul>
                    <ul className='py-1'>Partner</ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul className='py-1'>Claims</ul>
                    <ul className='py-1'>Privacy</ul>
                    <ul className='py-1'>Terms</ul>
                    <ul className='py-1'>Policies</ul>
                    <ul className='py-1'>Conditions</ul>
                </div>
                <div className='cols-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className=' p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter Email...' />
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col max-w-[1240px] mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p>2022 Workflow, LLC, All right reserved</p>
                <div className='flex justify-between  sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitch />
                    <FaTwitch />
                    <FaGithub />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}

export default Footer
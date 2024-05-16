"use client"

import * as React from 'react';
import profile from '../../../../public/images/profile.jpg'
import Image from 'next/image'

export default function HomePage() {

    return (
        <section className="home_content" id="home_content">
            <Image loading='lazy' src={profile} alt='profile' className="circle" />
            <h1>User friendly, user first websites.</h1>
            <h2>Hello! My name is
                <span> Sergiu-George Pop</span>
                and welcome to my website!</h2>
            <p>I am a web developer based in Bihor County, Romania. My passion lies in building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer, please feel free to get in touch with me via the Contact section or by clicking on my personal e-mail address at the bottom.</p>
            <p>
                <span>Prior to my career in web development, I spent 10 years working as a mechanical engineer. During this time, I gained extensive experience in both 2D and 3D design, was delegated for months at a time abroad, and managed a 3-month-long project coordinating up to 10 people. However, I have always been passionate about programming and software development, which has led me to pursue a career in web development.</span>
            </p>
        </section>
    )
}
"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { db } from "../../../../configurations/firebase_config";

import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';


const BlogDetails = () => {
    const { id } = useParams()
    const [AuthorImg, setAuthorImg] = useState();
    const [Img, setImg] = useState();
    const [Content, setContent] = useState("Loadding...");
    const [AuthorName, setAuthorName] = useState("Loadding...");
    const [AboutAuthor, setAboutAuthor] = useState("Loadding...");
    const [Description, setDescription] = useState("Loadding...");
    const [Title, setTitle] = useState("Loadding...");

    const [Quote, setQuote] = useState("Loadding...");

    useEffect(() => {
        getBlog()
    }, [id]);

    const getBlog = async () => {
        if (id) {
            const docRef = doc(db, "blogs", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setTitle(docSnap.data().title)
                setAuthorImg(docSnap.data().authorImg)
                setImg(docSnap.data().img)
                setAuthorName(docSnap.data().author);
                setAboutAuthor(docSnap.data().aboutAuthor);
                setQuote(docSnap.data().quote);
                setDescription(docSnap.data().description);
                // setOtherImage(docSnap.data().otherImage)
                setContent(docSnap.data().content)

            } else {
                alert("No such document!");
            }
        }
    }

    return (
        <>
            <Navbar />
            <main class="pt-[7rem] pb-16 lg:pt-32 lg:pb-24 bg-white ">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                                    <img class="mr-4 w-16 h-16 rounded-full" src={AuthorImg} alt="Jese Leos" />
                                    <div>
                                        <a href="" rel="author" class="text-xl font-bold text-gray-900 ">{AuthorName}</a>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-400">{AboutAuthor}</p>
                                        {/* <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p> */}
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{Title}</h1>
                        </header>
                        <p class="lead">{Description}</p>

                        <figure><img src={Img} alt="" />
                            {/* <figcaption>Digital art by Anonymous</figcaption> */}
                        </figure>
                        <div dangerouslySetInnerHTML={{ __html: Content }}></div>
                        <blockquote>
                            <p>{Quote}</p>
                        </blockquote>

                    </article>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default BlogDetails;
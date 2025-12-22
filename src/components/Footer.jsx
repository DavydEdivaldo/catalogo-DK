import React from "react"
export default function Footer() {
    return (
        <>
            <footer>
                <center>
                    <hr className="my-3 border-[#F2F2F2] opacity-15 sm:mx-auto lg:my-6 text-center " />
                    <span className="block text-sm pb-4 text-[#F2F2F2] text-center dark:text-gray-400">
                        © 2025{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            ABC™
                        </a>
                        . All Rights Reserved.
                    </span>
                </center>
            </footer>
        </>
    )
}
import react from "react"

export default function Footer() {
    return (
        <footer className="bg-blue-400 text-center lg:text-left border-t border-blue-400 ">
            <div className="container p-6 text-gray-800">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="mb-6 md:mb-0">
                        <h5 className="font-medium mb-2 uppercase"> Lorem ipsum</h5>

                        <p className="mb-4">
                            Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h5 className="font-medium mb-2 uppercase"> Lorem ipsum </h5>

                        <p className="mb-4">
                            Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-700 p-4 bg-blue-500">
                © 2021 Copyright:
                <a className="text-gray-800">Telzir</a>
            </div>
        </footer>
    )
}
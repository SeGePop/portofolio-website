import logo from "../../public/images/logo.png";
import Image from "next/image";

export default function NotFound(){
    return (
        <div
        style={{
            "height": "100vh",
            "width": "auto"
        }}
        >
            <Image src={logo} alt="logo"
            style={{
                "display":"block",
                "margin": "auto",
                "width":"20%",
                "height": "auto",
                "padding-top": "5%"
            }}
            ></Image>
            <h2 style={{
                "text-align":"center"
            }}>Page not found</h2>
            <p style={{
                "text-align":"center"
            }}>Could not find requested resource</p>
        </div>
    )
}
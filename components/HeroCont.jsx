import React from "react";
import HeroForm from "@/components/HeroForm";
const HeroCont = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                backgroundImage: "url(/images/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div style={{ zIndex: "1", position: "absolute", width: "100%" }}>
                <div className="flex flex-col flex-grow  w-12/12 ">
                    <div className="praznina"></div>
                    <div className="pb-30 h-1/2">
                        <div>
                            <p
                                className="text"
                                style={{
                                    color: "white",
                                    fontSize: "35px",
                                    textAlign: "center",
                                }}
                            >
                                Pronadji motor po tvom ukusu
                            </p>
                        </div>
                    </div>
                </div>

                <HeroForm />
            </div>
            <div
                style={{
                    zIndex: "0",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
            ></div>
        </div>
    );
};

export default HeroCont;

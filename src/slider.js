import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BentoIcon from "@mui/icons-material/Bento";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Import the JSON data
import tasks from "./task.json";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div
            style={{
                width: "90%",
                margin: "0 auto",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            <Slider {...settings}>
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflowX: "hidden",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "80%",
                                maxWidth: "450px",
                                height: "auto",
                                borderRadius: "25px",
                                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.8)",
                                padding: "20px",
                                margin: "10px",
                                border: "2px solid #318580",
                                backgroundColor: "#fff",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <h4
                                    style={{
                                        margin: 0,
                                        fontSize: "20px",
                                        color: "#318580",
                                        fontFamily: "Arial, sans-serif",
                                    }}
                                >
                                    {task.title}
                                </h4>
                                <PlaylistAddIcon
                                    sx={{
                                        fontSize: "30px",
                                        color: "#318580",
                                    }}
                                />
                            </div>

                            <div style={{ alignSelf: "flex-start", width: "100%" }}>
                                <p style={{ color: "GrayText", margin: "0 0" }}>
                                    Team Management -{" "}
                                    <a style={{ color: "#318580" }}>0%</a> - Billable
                                </p>
                                <p style={{ color: "green", margin: "5px 0" }}>
                                    Start: 2024-08-12{" "}
                                    <a style={{ color: "black", marginLeft: "10px" }}>
                                        End: 2024-12-31
                                    </a>{" "}
                                    <a style={{ color: "black", marginLeft: "10px" }}>
                                        Ready to start
                                    </a>
                                </p>
                            </div>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="flex-start"
                                sx={{ width: "100%", marginTop: "10px" }}
                            >
                                <BentoIcon sx={{ marginRight: "10px", color: "#318580" }} />
                                <div
                                    style={{
                                        width: "45%",
                                        height: "10px",
                                        backgroundColor: "#f0f0f0",
                                        borderRadius: "10px",
                                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
                                    }}
                                ></div>
                                <p
                                    style={{
                                        marginLeft: "10px",
                                        fontSize: "12px",
                                        color: "gray",
                                    }}
                                >
                                    0 of 0 subtask completed
                                </p>
                            </Stack>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <AccountCircleIcon
                                    sx={{ fontSize: "60px", color: "#318580" }}
                                />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "10px",
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "10px",
                                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
                                    overflow: "hidden",
                                    position: "relative",
                                    marginTop: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#ddd",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        height: "100%",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: `${(task.actual / task.assigned) * 100}%`,
                                        backgroundColor: "green",
                                        height: "100%",
                                        zIndex: 1,
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: `${(task.inProgress / task.assigned) * 100}%`,
                                        backgroundColor: "blue",
                                        height: "100%",
                                        zIndex: 2,
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: `${(task.remain / task.assigned) * 100}%`,
                                        backgroundColor: "#c28d11",
                                        height: "100%",
                                        zIndex: 3,
                                    }}
                                ></div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "20px",
                                    width: "100%",
                                    marginTop: "5px",
                                }}
                            >
                                <p style={{ color: "green", fontSize: "12px" }}>
                                    <strong>Actual:</strong> {task.actual}
                                </p>
                                <p style={{ color: "blue", fontSize: "12px" }}>
                                    <strong>InProgress:</strong> {task.inProgress}
                                </p>
                                <p style={{ color: "orange", fontSize: "12px" }}>
                                    <strong>Assigned:</strong> {task.assigned}
                                </p>
                                <p style={{ color: "#c28d11", fontSize: "12px" }}>
                                    <strong>Remain:</strong> {task.remain}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MultipleItems;


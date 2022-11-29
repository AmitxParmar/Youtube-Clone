import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";

const SideBar = () => (
    <Stack
        direction="row"
        sx={{
            overFlow: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                style={{
                    background: category.name === selectedCategory && "#fc1503",
                    color: "white",
                }}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? "white" : "red",
                    }}
                >
                    {category.icon}
                </span>

                <span
                    style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
);

export default SideBar;

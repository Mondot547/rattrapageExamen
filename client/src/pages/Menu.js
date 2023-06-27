import React, { useState } from "react";
import Menu from "../components/cardMenu";
import Categories from "../components/CategoriesMenu";
import items from "../data/data";
import '../scss/scssPages/Menu.scss';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("all");

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(items);
        } else {
            const newItems = items.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    };

    return (
        <>
            <header>
                <Nav />
            </header>
            <main className="main-menu">
                <section className="menu-section">
                    <div className="title">
                        <h2>Menu List</h2>
                    </div>
                    <Categories
                        categories={allCategories}
                        activeCategory={activeCategory}
                        filterItems={filterItems}
                    />
                    <Menu className="item-menu" items={menuItems} />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default MenuPage;
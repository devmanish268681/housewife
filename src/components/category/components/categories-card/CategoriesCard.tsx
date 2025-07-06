"use client";
import React from "react";

//components
import ProductCard from "../product-card/ProductCard";

const CategoriesCard = () => {
  const products = [
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Jalapeno Potato Chips",
      subtitle: "Lay's Kettle Cooked",
      price: "$15.00 - $25.00",
      quantityText: "1 pack (200g)",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
  ];
  return (
    <div className="w-full lg:pt-[4rem] lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            quantityText={product.quantityText}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;

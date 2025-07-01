import React from "react";

//components
import Carousel from "../carousel/Carousel";

const Recommended = () => {
  const recommended = [
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
  ];

  const frequentlyBought = [
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
  ];

  const popularItems = [
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
    {
      title: "Fresh Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
    },
  ];

  return (
    <div className="py-6 space-y-10">
      <Carousel title="Recommended for you" items={recommended} />
      <Carousel title="Frequently Bought" items={frequentlyBought} />
      <Carousel title="Popular Items" items={popularItems} />
    </div>
  );
};

export default Recommended;

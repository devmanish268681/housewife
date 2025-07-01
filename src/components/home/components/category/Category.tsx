import React from "react";

const categories = [
  {
    name: "Fresh Vegetables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
  },
  {
    name: "Fruits",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANjo6N48WbLAYyZiva_TUvv65V9dML01gFd-jAJKI6U7v0evG2_gh2L1pOmPlG0KQBH9Y16Fj5CtuR67i5vJG1Xc8c9_bJAzyqdjI5twBdMWH4tdSIgTJOlr-seYe0fTK4UDC8dHCGXTLJsFKkuZa4ymc_7jtSVvl2BmAEilzQ7cO8736r2hWOzXsBFYLbOqLXSLZRBI8TN3gZpTNNBbha-oEIMOEHU1oIeQSO3GKlAG5UZFTS4nXfs4Y2IIB8YuN8jt5CVV82-9ni",
  },
  {
    name: "Dairy & Eggs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Z8YazK0W_SXYRhP6LsD0qT-DIrd374b2VvD_6b18m3LP1SvpbChZN4LkrJhH26ynbCOwBsZ4mJ1JnJX1YBIJZsgTcd-RsYJqKamp8kyTPza5nWWpnesT4CeJu_1l7VkyZmi4Li2mpYMGgOY8YKiV_fPDSgLK5VofmX96hDQT69ZDnV--Z3u96fQTdfhDYUiuMXn_u_r7JexBPfbVb7UIgguH8nIiZgdj2kZ_zNKPa6i9jbY6ad5RIub1b7Se1tL-wjsoc_Ml4rk",
  },
  {
    name: "Fresh Vegetables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
  },
  {
    name: "Fruits",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANjo6N48WbLAYyZiva_TUvv65V9dML01gFd-jAJKI6U7v0evG2_gh2L1pOmPlG0KQBH9Y16Fj5CtuR67i5vJG1Xc8c9_bJAzyqdjI5twBdMWH4tdSIgTJOlr-seYe0fTK4UDC8dHCGXTLJsFKkuZa4ymc_7jtSVvl2BmAEilzQ7cO8736r2hWOzXsBFYLbOqLXSLZRBI8TN3gZpTNNBbha-oEIMOEHU1oIeQSO3GKlAG5UZFTS4nXfs4Y2IIB8YuN8jt5CVV82-9ni",
  },
  {
    name: "Dairy & Eggs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Z8YazK0W_SXYRhP6LsD0qT-DIrd374b2VvD_6b18m3LP1SvpbChZN4LkrJhH26ynbCOwBsZ4mJ1JnJX1YBIJZsgTcd-RsYJqKamp8kyTPza5nWWpnesT4CeJu_1l7VkyZmi4Li2mpYMGgOY8YKiV_fPDSgLK5VofmX96hDQT69ZDnV--Z3u96fQTdfhDYUiuMXn_u_r7JexBPfbVb7UIgguH8nIiZgdj2kZ_zNKPa6i9jbY6ad5RIub1b7Se1tL-wjsoc_Ml4rk",
  },
  {
    name: "Fresh Vegetables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
  },
  {
    name: "Fruits",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANjo6N48WbLAYyZiva_TUvv65V9dML01gFd-jAJKI6U7v0evG2_gh2L1pOmPlG0KQBH9Y16Fj5CtuR67i5vJG1Xc8c9_bJAzyqdjI5twBdMWH4tdSIgTJOlr-seYe0fTK4UDC8dHCGXTLJsFKkuZa4ymc_7jtSVvl2BmAEilzQ7cO8736r2hWOzXsBFYLbOqLXSLZRBI8TN3gZpTNNBbha-oEIMOEHU1oIeQSO3GKlAG5UZFTS4nXfs4Y2IIB8YuN8jt5CVV82-9ni",
  },
  {
    name: "Dairy & Eggs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Z8YazK0W_SXYRhP6LsD0qT-DIrd374b2VvD_6b18m3LP1SvpbChZN4LkrJhH26ynbCOwBsZ4mJ1JnJX1YBIJZsgTcd-RsYJqKamp8kyTPza5nWWpnesT4CeJu_1l7VkyZmi4Li2mpYMGgOY8YKiV_fPDSgLK5VofmX96hDQT69ZDnV--Z3u96fQTdfhDYUiuMXn_u_r7JexBPfbVb7UIgguH8nIiZgdj2kZ_zNKPa6i9jbY6ad5RIub1b7Se1tL-wjsoc_Ml4rk",
  },
  {
    name: "Fresh Vegetables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
  },
  {
    name: "Fruits",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANjo6N48WbLAYyZiva_TUvv65V9dML01gFd-jAJKI6U7v0evG2_gh2L1pOmPlG0KQBH9Y16Fj5CtuR67i5vJG1Xc8c9_bJAzyqdjI5twBdMWH4tdSIgTJOlr-seYe0fTK4UDC8dHCGXTLJsFKkuZa4ymc_7jtSVvl2BmAEilzQ7cO8736r2hWOzXsBFYLbOqLXSLZRBI8TN3gZpTNNBbha-oEIMOEHU1oIeQSO3GKlAG5UZFTS4nXfs4Y2IIB8YuN8jt5CVV82-9ni",
  },
  {
    name: "Dairy & Eggs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Z8YazK0W_SXYRhP6LsD0qT-DIrd374b2VvD_6b18m3LP1SvpbChZN4LkrJhH26ynbCOwBsZ4mJ1JnJX1YBIJZsgTcd-RsYJqKamp8kyTPza5nWWpnesT4CeJu_1l7VkyZmi4Li2mpYMGgOY8YKiV_fPDSgLK5VofmX96hDQT69ZDnV--Z3u96fQTdfhDYUiuMXn_u_r7JexBPfbVb7UIgguH8nIiZgdj2kZ_zNKPa6i9jbY6ad5RIub1b7Se1tL-wjsoc_Ml4rk",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-1 py-5">
      <div className="layout-content-container flex flex-col flex-1">
        <h2 className="text-[#181111] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Shop by Category
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <p className="text-[#181111] text-base font-medium leading-normal">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;

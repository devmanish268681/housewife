import React from "react";

const DailyDeals = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 py-5">
          <div className="layout-content-container flex flex-col flex-1">
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Daily Deals
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjVJSTyHjD5YjIt7txdR8qxa4gKATePAY-7gnp4qhCVPE1grWVuDyrNQZXfc1wugBAaQuhCU1hF-2SVJBIlqWzgagra1uDkb7yNw7vWljfSjVnJfTvGnbdRuZtXGIE9lrnhy6dko5Qb-9iZsrpaaBfNORaEJGNZ8UEXwoGtzZq1jij2L7mkYvBD7O1ZF_DteB3x1Bl4VrAvF-_AYwKv8YKVdUd9vCiEJEsTi9v_lMUBh3ELpkuL8N0cMcItXfAlg6ZqjSGTL07pN3W")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">
                      Fresh Produce Sale
                    </p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">
                      Save on seasonal fruits and vegetables
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">
                      Dairy Discounts
                    </p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">
                      Deals on milk, cheese, and yogurt
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">
                      Dairy Discounts
                    </p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">
                      Deals on milk, cheese, and yogurt
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">
                      Dairy Discounts
                    </p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">
                      Deals on milk, cheese, and yogurt
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">
                      Dairy Discounts
                    </p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">
                      Deals on milk, cheese, and yogurt
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">
                      Dairy Discounts
                    </p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">
                      Deals on milk, cheese, and yogurt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Timer Section */}
            <div className="flex gap-4 py-6 px-4">
              <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <div className="flex h-14 grow items-center justify-center rounded-xl px-3 bg-[#f4f0f0]">
                  <p className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em]">
                    23
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#181111] text-sm font-normal leading-normal">
                    Hours
                  </p>
                </div>
              </div>
              <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <div className="flex h-14 grow items-center justify-center rounded-xl px-3 bg-[#f4f0f0]">
                  <p className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em]">
                    59
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#181111] text-sm font-normal leading-normal">
                    Minutes
                  </p>
                </div>
              </div>
              <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <div className="flex h-14 grow items-center justify-center rounded-xl px-3 bg-[#f4f0f0]">
                  <p className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em]">
                    59
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#181111] text-sm font-normal leading-normal">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            {/* Grid Section */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Cards go here: update class → className and style properly as above */}
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                  }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    Dairy Discounts
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    $2
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                  }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    Dairy Discounts
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    $2
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                  }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    Dairy Discounts
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    $2
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                  }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    Dairy Discounts
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    $2
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                  }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    Dairy Discounts
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    $2
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCct9ZYZEQk46o89KHGGVfaK_pO3czQu1k8TV9MvxSAgfTa0VmlYJ2SaKqV73jpP21kjy6Zn3mUc7dv0lHL8xuFEFWY_dnn605f-GzOTOAhF-19mg7rrxmRm4vYE0bM1JBRrqfg8pRIJY2jj0NUIxOkqWBvTmWxHlFi7E7vLN3Kh9zKJqrLNY8TcsXc0zdQ91n1etCK_KMY2gMsF-6tYoHz1SON_0VAtn88IuaSWoJzRekzC7zMpwoVBJ4IelDUmqXFvhC6wG7Fr3bZ")',
                  }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    Dairy Discounts
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    $2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
